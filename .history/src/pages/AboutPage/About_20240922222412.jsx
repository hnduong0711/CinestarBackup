import React from 'react';
import aboutImage from '../../assets/Locations/About/about.jpg'; // Nhập hình ảnh
import iconMap from '../../assets/Locations/About/placeholder.png'; // Nhập icon

const About = () => {
  return (
    <div className='text-center pt-[10rem] pb-[10rem]'>
      
      {/* Tiêu đề */}
      <div className='text-[#f8fafc] text-[40px] font-medium font-title mb-[2rem]'>
        TRỤ SỞ CỦA CHÚNG TÔI
      </div>

      {/* Mô tả */}
      <p className='text-[#f8fafc] text-[16px] max-w-[42rem] mx-auto leading-[2] mb-[4rem]'>
        Các phòng chiếu được trang bị các thiết bị tiên tiến như hệ thống âm thanh vòm, màn hình rộng và độ phân giải cao, tạo nên hình ảnh sắc nét và âm thanh sống động.
      </p>

      {/* Container chứa hình ảnh và nội dung overlay */}
      <div className="relative">

        {/* Hình ảnh */}
        <img src={aboutImage} alt="About Us" className="w-full h-auto" />

        {/* Gradient overlay với màu tùy chỉnh */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(51, 102, 204, 1), transparent)'
          }}
        />

        {/* Chữ và icon nằm trên hình */}
        <div className="absolute inset-0 flex flex-col justify-center text-white pl-[5rem]">
          <ul className="text-left">
            {/* Tiêu đề của địa chỉ */}
            <li className="font-medium text-cinestar-custom-yellow text-[40px] font-title mb-4">
              TRỤ SỞ | HEADQUARTER
            </li>

            {/* Địa chỉ có icon */}
            <li className="flex items-center mb-2">
              <img src="https://cinestar-api.monamedia.net/pub/template/assets/images/ts-1.svg" alt="" className='w-[2rem] mr-2' />
              <a href='https://maps.app.goo.gl/d7S3pWtnwCc7P2Dy5' target='_blank'><span>135 Hai Bà Trưng, Phường Bến Nghé, Quận 1</span></a>
            </li>

            {/* Email */}
            <li className="flex items-center mb-2">
              <img src="https://cinestar-api.monamedia.net/pub/template/assets/images/ts-2.svg" alt="" className='w-[2rem] mr-2' />
              <a href="mailto:marketing.cinestar@gmail.com">marketing.cinestar@gmail.com</a>
            </li>

            <li className="flex items-center mb-2">
              <img src="https://cinestar-api.monamedia.net/pub/template/assets/images/ts-2.svg" alt="" className='w-[2rem] mr-2' />
              <a href="tel:028 7300 7279">028 7300 7279</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default About;
