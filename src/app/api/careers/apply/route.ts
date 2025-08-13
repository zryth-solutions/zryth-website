import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import nodemailer from "nodemailer";
import { JobApplication } from "@/types/job";
import path from "path";
import fs from "fs";

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change this to your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email notifications
async function sendEmailNotifications(application: JobApplication) {
  try {
    // Email to applicant
    const applicantEmail = {
      from: process.env.EMAIL_USER,
      to: application.email,
      subject: `Application Received - ${application.jobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4A6CF7;">Application Received</h2>
          <p>Dear ${application.firstName} ${application.lastName},</p>
          <p>Thank you for your interest in the <strong>${application.jobTitle}</strong> position at Zryth.</p>
          <p>We have received your application and will review it carefully. You will hear from us within the next few days.</p>
          <p><strong>Application Details:</strong></p>
          <ul>
            <li>Position: ${application.jobTitle}</li>
            <li>Application ID: ${application.id}</li>
            <li>Applied Date: ${new Date(application.appliedDate).toLocaleDateString()}</li>
          </ul>
          <p>Best regards,<br>The Zryth Team</p>
        </div>
      `,
    };

    // Email to HR/Admin (you can customize this)
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Job Application - ${application.jobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4A6CF7;">New Job Application</h2>
          <p>A new application has been received for the <strong>${application.jobTitle}</strong> position.</p>
          <p><strong>Applicant Details:</strong></p>
          <ul>
            <li>Name: ${application.firstName} ${application.lastName}</li>
            <li>Email: ${application.email}</li>
            <li>Phone: ${application.phone}</li>
            <li>Experience: ${application.experience}</li>
            <li>Application ID: ${application.id}</li>
          </ul>
          <p>Cover Letter:</p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${application.coverLetter || "No cover letter provided"}
          </p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(applicantEmail);
    await transporter.sendMail(adminEmail);
  } catch (error) {
    console.error("Error sending email notifications:", error);
    // Don't throw error here as we don't want to fail the application submission
  }
}

// Function to send application to Google Sheets
async function sendToGoogleSheets(application: JobApplication) {
  try {
    const { appendToSheet } = await import("@/utils/googleSheets");

    // Convert application data to array format for Google Sheets
    const rowData = [
      application.id,
      application.jobTitle,
      application.firstName,
      application.lastName,
      application.email,
      application.phone,
      application.experience,
      application.coverLetter,
      application.appliedDate,
      application.resume || "",
    ];

    await appendToSheet(rowData);
  } catch (error) {
    console.error("Error sending data to Google Sheets:", error);
    throw new Error("Failed to send application to Google Sheets.");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "experience",
      "jobId",
      "jobTitle",
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        console.error(`Validation Error: Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create application object
    const application: JobApplication = {
      id: Date.now().toString(),
      jobId: body.jobId,
      jobTitle: body.jobTitle,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      experience: body.experience,
      resume: null, // File handling would need to be done separately with FormData
      coverLetter: body.coverLetter || "",
      appliedDate: new Date().toISOString(),
      status: "Pending",
    };

    // Send email notifications
    try {
      await sendEmailNotifications(application);
    } catch (error) {
      console.error("Error in sendEmailNotifications:", error);
      // Continue even if email fails
    }

    // Send to SheetDB
    try {
      await sendToGoogleSheets(application);
    } catch (error) {
      console.error("Error in sendToSheetDB:", error);
      throw new Error("Failed to send application to SheetDB.");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        applicationId: application.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing job application:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const excelFilePath = path.join(
      process.cwd(),
      "data",
      "job-applications.xlsx"
    );

    if (!fs.existsSync(excelFilePath)) {
      return NextResponse.json({ applications: [] });
    }

    const workbook = XLSX.readFile(excelFilePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const applications = XLSX.utils.sheet_to_json(worksheet);

    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Error reading applications:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
