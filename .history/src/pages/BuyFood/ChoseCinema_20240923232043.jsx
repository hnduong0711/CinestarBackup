import React, { useState } from "react";
import ChoseLocationNear from "../../constants/BuyFoot";
const choseCinema = () => {
    const [selectedCinema, setSelectedCinema] = useState('');
    // Xử lý sự kiện khi chọn rạp chiếu phim
    const handleCinestarChange = (event) =>{
        SelectedCinestar(event.target.value);
        console.log('Rạp đã chọn:', event.target.value);
    };

    
    return (
    <div>
        <div className="text-center mt-[50px] mb-[5px]">
            <h2 className="text-cinestar-custom-white text-[40px] font-medium pb-[4rem] font-title uppercase">Chọn rạp gần bạn</h2>
        </div>
        <div>
         
        
        </div>
    </div>
    )
}

export default choseCinema;