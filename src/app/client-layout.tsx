"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) {
        return <PreLoader />;
    }

    return (
        <SessionProvider>
            <ThemeProvider
                attribute="class"
                enableSystem={false}
                defaultTheme="light"
            >
                <ToasterContext />
                {children}
                {/* <ChatBot /> */}
            </ThemeProvider>
        </SessionProvider>
    );
} 