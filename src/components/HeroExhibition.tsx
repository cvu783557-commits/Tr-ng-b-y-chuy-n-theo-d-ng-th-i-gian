import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { HERO_MEDIA } from '../data/exhibitionData';
import { SafeExhibitImage } from './ArchivalPlate';

interface HeroExhibitionProps {
  onExploreTimeline: () => void;
}

export const HeroExhibition: React.FC<HeroExhibitionProps> = ({ onExploreTimeline }) => {
  return (
    <section id="tong-quan" className="border-b border-[#DFD8CA] bg-[#FAF8F4]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left column: Exhibition Title & Curatorial Introduction */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono tracking-[0.16em] uppercase text-[#57534E]">
                Chuyên đề lưu trữ · Thu 2026
              </p>

              <h1
                className="mt-4 font-serif font-semibold text-[#171614] tracking-tight leading-[1.12] [text-wrap:balance]"
                style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.5rem)' }}
              >
                Dòng Chảy Di Sản: Kiến Trúc &amp; Mỹ Thuật Việt Nam
              </h1>

              <p className="mt-4 text-sm font-mono tracking-wider text-[#1E3A8A] tabular-nums">
                1802 — 2026 · 5 Thời Kỳ Lịch Sử
              </p>

              <p className="mt-6 text-base text-[#44403C] leading-relaxed max-w-prose">
                Cuộc trưng bày theo trục niên đại lần theo hành trình chuyển hóa của vật liệu và không gian Việt: từ cấu kiện gỗ lim chạm rồng cung đình thế kỷ XIX, tranh sơn mài Đông Dương đến kiến trúc bê tông nhiệt đới và vòm tre đương đại.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DFD8CA] flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onExploreTimeline}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#171614] text-[#FAF8F4] rounded-md hover:bg-[#292524] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E3A8A] cursor-pointer"
              >
                <span>Khám phá dòng thời gian</span>
                <ArrowDownRight className="w-4 h-4" strokeWidth={1.75} />
              </button>

              <a
                href="#tieu-luan"
                className="text-sm font-medium text-[#1E3A8A] hover:underline underline-offset-4 whitespace-nowrap shrink-0 py-2"
              >
                Đọc tiểu luận giám tuyển
              </a>
            </div>
          </div>

          {/* Right column: Full-height museum photography */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[280px] lg:min-h-[420px] bg-[#EFECE4] border border-[#DFD8CA] overflow-hidden">
              <SafeExhibitImage
                src={HERO_MEDIA.imageUrl}
                alt={HERO_MEDIA.alt}
                title="Không gian trưng bày trung tâm"
                imgClassName="lg:h-full object-cover"
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-[#57534E]">
              {HERO_MEDIA.caption}
            </p>
          </div>
        </div>

        {/* Operational Utility Ribbon — full-width 4-column museum strip below hero split */}
        <dl className="mt-12 pt-8 border-t border-[#DFD8CA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="pr-4">
            <dt className="text-xs uppercase tracking-widest text-[#78716C]">Giờ mở cửa hôm nay</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#171614] tabular-nums">
              09:00 – 17:30 · Thứ Ba đến Chủ Nhật
            </dd>
          </div>
          <div className="pr-4">
            <dt className="text-xs uppercase tracking-widest text-[#78716C]">Phí tham quan</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#171614]">
              Miễn phí vào cửa · Đặt trước theo khung giờ
            </dd>
          </div>
          <div className="pr-4">
            <dt className="text-xs uppercase tracking-widest text-[#78716C]">Không gian trưng bày</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#171614]">
              Nhà Trưng Bày Trung Tâm · 5 Phòng chuyên đề
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-[#78716C]">Danh mục hiện vật</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#171614] tabular-nums">
              10 Tác phẩm &amp; Tư liệu gốc (1802–2026)
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
