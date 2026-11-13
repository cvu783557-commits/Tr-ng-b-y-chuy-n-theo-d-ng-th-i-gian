import React from 'react';

interface HeaderProps {
  onOpenVisitModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVisitModal }) => {
  return (
    <header className="w-full border-b border-[#DFD8CA] bg-[#FAF8F4]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand wordmark */}
        <a
          href="#tong-quan"
          className="font-serif text-xl font-semibold tracking-tight text-[#171614] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] rounded-sm"
        >
          Bảo Tàng Di Sản
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          <a
            href="#tong-quan"
            className="hover:text-[#171614] hover:underline underline-offset-4 decoration-[#1E3A8A] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Tổng quan
          </a>
          <a
            href="#dong-thoi-gian"
            className="hover:text-[#171614] hover:underline underline-offset-4 decoration-[#1E3A8A] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Dòng thời gian
          </a>
          <a
            href="#hien-vat"
            className="hover:text-[#171614] hover:underline underline-offset-4 decoration-[#1E3A8A] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Hiện vật
          </a>
          <a
            href="#tieu-luan"
            className="hover:text-[#171614] hover:underline underline-offset-4 decoration-[#1E3A8A] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Tiểu luận
          </a>
          <a
            href="#thong-tin"
            className="hover:text-[#171614] hover:underline underline-offset-4 decoration-[#1E3A8A] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Thông tin
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenVisitModal}
            className="px-5 py-2.5 text-sm font-medium bg-[#1E3A8A] text-white rounded-md hover:bg-[#172D6B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E3A8A] cursor-pointer"
          >
            Đặt lịch tham quan
          </button>
        </div>
      </div>
    </header>
  );
};
