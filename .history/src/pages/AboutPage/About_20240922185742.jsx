import React from 'react';
import aboutImage from '../../assets/Locations/About/about.jpg'; // Nhập hình ảnh

const About = () => {
  return (
    <div>
      <div className='text-center pt-[10rem] pb-[10rem]'>
        <div className='text-[#f8fafc] text-[40px] font-medium pb-[4rem]' style={{fontFamily: 'Anton, sans-serif'}}>
          TRỤ SỞ CỦA CHÚNG TÔI
        </div>
        <div>
          <p className='text-[#f8fafc] text-[16px] max-w-[42rem] mx-auto leading-[2]'>
            Các phòng chiếu được trang bị các thiết bị tiên tiến như hệ thống âm thanh vòm, màn hình rộng và độ phân giải cao, tạo nên hình ảnh sắc nét và âm thanh sống động.
          </p>
        </div>
      </div>

      <div>
        <div className=''>
          <ul>
            <li>TRỤ SỞ | HEADQUARTER</li>
            <li><a>135 Hai Bà Trưng, Phường Bến Nghé, Quận 1</a></li>
          </ul>
        </div>
        <div className=''>
          <img src={aboutImage} alt="About Us" /> {/* Sử dụng biến chứa hình ảnh */}
        </div>
      </div>
    </div>
  );
};

export default About;
