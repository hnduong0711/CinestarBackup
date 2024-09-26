import React, { useState } from "react";
import choseLocationNears from "../../constants/BuyFoot";
const ChoseCinema = () => {
    const [selectedCinema, setSelectedCinema] = useState('');



    // Xử lý sự kiện khi chọn rạp chiếu phim
    const handleCinestarChange = (event) =>{
        setSelectedCinema(event.target.value);
        console.log('Rạp đã chọn:', event.target.value);
    };




    return (
    <div>
        <div className="text-center mt-[50px] mb-[5px]">
            <h2 className="text-cinestar-custom-white text-[40px] font-medium pb-[4rem] font-title uppercase">Chọn rạp gần bạn</h2>
        </div>
        <div>
         
         <select id="cinestar" value={selectedCinema} onChange={handleCinestarChange} className="border border-gray-300 rounded p-2 bg-white w-[1000px] h-[62px]">
            {choseLocationNears.map((choseLocationNear) => (
                <option key={choseLocationNear.id} value={choseLocationNear.value}>{choseLocationNear.title.toUpperCase()}</option>
            ))}
         </select>
        
        </div>
    </div>
    )
}

export default ChoseCinema;