import React, { useState } from "react";
import ChoseCinema from './ChoseCinema';
import ListCombo from './CompoFirst';
import CheckOutFood from './CheckOutFood';
const BuyCorn = () => {
    const [selectedCinema, setSelectedCinema] = useState('');



    // Xử lý sự kiện khi chọn rạp chiếu phim
    const handleCinestarChange = (event) =>{
        setSelectedCinema(event.target.value);
        console.log('Rạp đã chọn:', event.target.value);
    };


    return (
        <div>
            <div className="container mx-auto px-4">
                <div className='pt-[8rem] text-center'>
                    <ChoseCinema/>
                    <ListCombo/>
                    
                </div>
            </div>
            <CheckOutFood/>
        </div>
    )
} 

export default BuyCorn;