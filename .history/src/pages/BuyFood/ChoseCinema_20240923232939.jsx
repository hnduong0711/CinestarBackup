import React, { useState } from "react";
import ChoseLocationNears from "../../constants/BuyFoot";
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
         
         <select id="cinestar" value={SelectedCinestar} onChange={handleCinestarChange} className="border border-gray-300 rounded p-2 bg-white w-full">
            {ChoseLocationNears.map((ChoseLocationNear) => (
                <option key={ChoseLocationNear.id} value={ChoseLocationNear.value}>{ChoseLocationNear.title}</option>
            ))}
         </select>
        
        </div>
    </div>
    )
}

export default choseCinema;