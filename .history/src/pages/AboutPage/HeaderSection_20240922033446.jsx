import React from 'react';

const HeaderSection = () => {
  return (
    <div className="relative pt-14 pb-20 pr-10 pl-10">
      <div className="absolute inset-0 rounded-lg"></div>
      <img
        src="https://api-website.cinestar.com.vn/media/wysiwyg/CMSPage/Abouts/ht-qc-br.jpg"
        alt="Image description"
        className="w-full h-[350px] md:h-[450px] object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg top-[43px] bottom-[80px] right-[40px] left-[40px]"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center p-6 bg-black bg-opacity-0 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 font-black text-[#f8fafc]">HỆ THỐNG CỤM RẠP TRÊN TOÀN QUỐC</h1>
          <p className="text-base pr-[12rem] pl-[12rem]">
            Cinestar là một trong những hệ thống rạp chiếu phim được yêu thích nhất tại Việt Nam...
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
