import React from 'react';
import aboutImage from '../../assets/Locations/About/about.jpg'; // Nhập hình ảnh

const About = () => {
  return (
    <div className='text-center pt-[10rem] pb-[10rem]'>
      <div>
        <div className='text-[#f8fafc] text-[40px] font-medium' style={{fontFamily: 'Anton, sans-serif'}}>
          TRỤ SỞ CỦA CHÚNG TÔI
        </div>
        <div>
          <p className='text-[#f8fafc] text-[16px] max-w-[42rem] mx-auto leading-[2]'>
            Các phòng chiếu được trang bị các thiết bị tiên tiến như hệ thống âm thanh vòm, màn hình rộng và độ phân giải cao, tạo nên hình ảnh sắc nét và âm thanh sống động.
          </p>
        </div>
      </div>

      <div>
      <div className="relative">
          {/* Hình ảnh */}
          <img src={aboutImage} alt="About Us" className="w-full h-auto" /> {/* Đảm bảo hình ảnh chiếm đủ không gian */}
          
          {/* Chữ nằm trên hình */}
          <div className="absolute inset-0 flex flex-col items-right justify-center text-white bg-black bg-opacity-50">
            <ul className="text-white text-left pl-[5rem]">
              <li className="font-bold">TRỤ SỞ | HEADQUARTER</li>
              <li><a>135 Hai Bà Trưng, Phường Bến Nghé, Quận 1</a></li>
              <li><a>marketing.cinestar@gmail.com</a></li>
              <li><a>marketing.cinestar@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default About;
