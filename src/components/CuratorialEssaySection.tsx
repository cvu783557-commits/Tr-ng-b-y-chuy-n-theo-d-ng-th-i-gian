import React from 'react';
import { CURATORIAL_ESSAY } from '../data/exhibitionData';

export const CuratorialEssaySection: React.FC = () => {
  return (
    <section id="tieu-luan" className="bg-[#FAF8F4] border-b border-[#DFD8CA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 lg:py-20">
        {/* Editorial Header */}
        <div className="max-w-3xl pb-8 border-b border-[#DFD8CA]">
          <p className="text-xs font-mono tracking-[0.16em] uppercase text-[#78716C]">
            {CURATORIAL_ESSAY.kicker}
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-[#171614] leading-tight [text-wrap:balance]">
            {CURATORIAL_ESSAY.title}
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed">
            {CURATORIAL_ESSAY.subtitle}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#78716C]">
            <span className="font-medium text-[#292524]">{CURATORIAL_ESSAY.author}</span>
            <span aria-hidden="true">·</span>
            <span>{CURATORIAL_ESSAY.publishedDate}</span>
          </div>
        </div>

        {/* Asymmetric 70 / 30 Reading Canvas with Margin Notes */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Essay Column */}
          <div className="lg:col-span-8">
            <div className="space-y-6 text-base md:text-[17px] text-[#292524] leading-[1.8] max-w-2xl">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:leading-none first-letter:text-[#171614]">
                {CURATORIAL_ESSAY.paragraphs[0]}
                <sup className="font-mono text-[11px] text-[#1E3A8A] ml-0.5">[1]</sup>
              </p>

              <p>
                {CURATORIAL_ESSAY.paragraphs[1]}
                <sup className="font-mono text-[11px] text-[#1E3A8A] ml-0.5">[2]</sup>
              </p>

              {/* Editorial Pull Quote with Top/Bottom Hairline Dividers */}
              <blockquote className="my-10 py-8 border-t border-b border-[#D6CEBE] font-serif italic text-xl md:text-2xl text-[#171614] leading-relaxed">
                {CURATORIAL_ESSAY.pullQuote}
              </blockquote>

              <p>
                {CURATORIAL_ESSAY.paragraphs[2]}
                <sup className="font-mono text-[11px] text-[#1E3A8A] ml-0.5">[3]</sup>
              </p>
            </div>

            {/* Institutional Footnotes */}
            <div className="mt-12 pt-6 border-t border-[#DFD8CA] max-w-2xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                Chú thích &amp; Nguồn tư liệu
              </h3>
              <ol className="mt-3 space-y-2 text-xs text-[#57534E] leading-relaxed">
                {CURATORIAL_ESSAY.footnotes.map((fn) => (
                  <li key={fn.id} className="flex items-start gap-2.5">
                    <span className="font-mono text-[#1E3A8A] tabular-nums">[{fn.id}]</span>
                    <span>{fn.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Margin Notes Rail */}
          <aside className="lg:col-span-4 space-y-8 lg:pt-2">
            {CURATORIAL_ESSAY.marginCallouts.map((note) => (
              <div
                key={note.anchor}
                className="pt-4 border-t border-[#D6CEBE]"
              >
                <p className="text-xs font-mono uppercase tracking-wider text-[#1E3A8A]">
                  {note.anchor}
                </p>
                <h4 className="mt-1.5 font-serif text-lg font-semibold text-[#171614]">
                  {note.title}
                </h4>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};
