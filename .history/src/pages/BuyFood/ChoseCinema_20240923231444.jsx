import React, { useState } from "react";

const choseCinema = () => {
    const [selectedCinema, setSelectedCinema] = useState('');
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