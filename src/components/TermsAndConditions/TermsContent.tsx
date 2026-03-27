"use client";

import { useMemo, useState } from "react";

type TocItem = {
  number: string;
  title: string;
};

type TermsSection = {
  number: string;
  title: string;
  body: string;
};

function parseSectionHeading(line: string): TocItem | null {
  const match = line.match(/^(\d+)\.\s+(.+)$/);
  if (!match) {
    return null;
  }

  return {
    number: match[1],
    title: match[2],
  };
}

function getSectionId(number: string) {
  return `terms-section-${number}`;
}

export default function TermsContent({ content }: { content: string }) {
  const blocks = useMemo(
    () => content.split("\n\n").map((block) => block.trim()).filter(Boolean),
    [content]
  );

  const sectionStartIndices = useMemo(() => {
    return blocks
      .map((block, index) => (/^\d+\.\s/.test(block) ? index : -1))
      .filter((index) => index !== -1);
  }, [blocks]);

  const firstSectionIndex = sectionStartIndices.length > 0 ? sectionStartIndices[0] : -1;

  const sections = useMemo<TermsSection[]>(() => {
    const parsedSections: TermsSection[] = [];

    sectionStartIndices.forEach((startIndex, idx) => {
      const nextStartIndex = sectionStartIndices[idx + 1] ?? blocks.length;
      const currentBlockLines = blocks[startIndex]
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      const heading = parseSectionHeading(currentBlockLines[0] ?? "");

      if (!heading) {
        return;
      }

      const inlineBody = currentBlockLines.slice(1).join("\n").trim();

      const followingBody = blocks
        .slice(startIndex + 1, nextStartIndex)
        .map((block) => block.trim())
        .filter(Boolean)
        .join("\n\n");

      const body = [inlineBody, followingBody].filter(Boolean).join("\n\n");

      parsedSections.push({
        number: heading.number,
        title: heading.title,
        body,
      });
    });

    return parsedSections;
  }, [blocks, sectionStartIndices]);

  const tocItems = useMemo<TocItem[]>(() => {
    const tocBlock = blocks.find((block) => block.startsWith("TABLE OF CONTENTS"));
    if (!tocBlock) {
      return sections.map(({ number, title }) => ({ number, title }));
    }

    const itemsFromToc = tocBlock
      .split("\n")
      .slice(1)
      .map((line) => line.trim())
      .map(parseSectionHeading)
      .filter((item): item is TocItem => Boolean(item));

    if (itemsFromToc.length === 0) {
      return sections.map(({ number, title }) => ({ number, title }));
    }

    return itemsFromToc;
  }, [blocks, sections]);

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const titleBlock = blocks.find((block) => block.startsWith("TERMS AND CONDITIONS"));
  const tocIndex = blocks.findIndex((block) => block.startsWith("TABLE OF CONTENTS"));

  const introParagraphs = useMemo(() => {
    const titleIndex = blocks.findIndex((block) => block.startsWith("TERMS AND CONDITIONS"));
    const introStart = titleIndex === -1 ? 0 : titleIndex + 1;
    const introEndCandidates = [tocIndex, firstSectionIndex].filter((index) => index >= introStart);
    const introEnd = introEndCandidates.length > 0 ? Math.min(...introEndCandidates) : blocks.length;

    return blocks
      .slice(introStart, introEnd)
      .map((block) => block.trim())
      .filter(Boolean);
  }, [blocks, tocIndex, firstSectionIndex]);

  const handleTocClick = (number: string) => {
    const id = getSectionId(number);

    setExpandedSections((prev) => ({
      ...prev,
      [id]: true,
    }));

    requestAnimationFrame(() => {
      const sectionElement = document.getElementById(id);
      if (!sectionElement) {
        return;
      }

      const headerElement = document.querySelector("header.ud-header") as HTMLElement | null;
      const headerHeight = headerElement?.offsetHeight ?? 0;
      const extraGap = 8;

      const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
      const scrollTarget = Math.max(sectionTop - headerHeight - extraGap, 0);

      window.scrollTo({
        top: scrollTarget,
        behavior: "smooth",
      });
    });
  };

  const toggleSection = (number: string) => {
    const id = getSectionId(number);
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="prose prose-lg max-w-none">
      {titleBlock && (
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TERMS AND CONDITIONS</h1>
          {titleBlock
            .split("\n")
            .slice(1)
            .map((line, index) => (
              line.trim() ? (
                <p key={index} className="text-gray-600 text-sm mb-1">
                  {line}
                </p>
              ) : null
            ))}
        </div>
      )}

      {introParagraphs.length > 0 && (
        <section className="mb-10">
          {introParagraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap [text-align:justify]">
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {tocItems.length > 0 && (
        <section className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-4 pr-14 sm:p-5 sm:pr-5">
          <h2 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl">TABLE OF CONTENTS</h2>
          <ol className="space-y-2 sm:space-y-3">
            {tocItems.map((item) => (
              <li key={item.number} className="flex items-start gap-2 text-base leading-snug sm:text-lg">
                <span className="mt-0.5 w-6 shrink-0 text-right font-medium text-gray-800">
                  {item.number}.
                </span>
                <button
                  type="button"
                  onClick={() => handleTocClick(item.number)}
                  className="flex-1 text-left text-sky-700 hover:text-sky-900 hover:underline break-words"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="space-y-4">
        {sections.map((section) => {
          const sectionId = getSectionId(section.number);
          const isExpanded = Boolean(expandedSections[sectionId]);

          return (
            <article key={section.number} id={sectionId} className="rounded-xl border border-gray-200 bg-white">
              <button
                type="button"
                onClick={() => toggleSection(section.number)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
              >
                <h3 className="m-0 text-lg font-bold text-gray-900">
                  {section.number}. {section.title}
                </h3>
                <span className="text-gray-500 text-xl leading-none" aria-hidden>
                  {isExpanded ? "-" : "+"}
                </span>
              </button>

              {isExpanded && section.body && (
                <div className="px-5 pb-5 pt-1 border-t border-gray-100">
                  <p className="m-0 text-gray-700 leading-relaxed whitespace-pre-wrap [text-align:justify]">{section.body}</p>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}
