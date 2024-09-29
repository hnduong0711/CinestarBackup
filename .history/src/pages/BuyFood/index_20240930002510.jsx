import React, { useState } from "react";
import ChoseCinema from './ChoseCinema';
import ListCombo from './CompoFirst';
import CheckOutFood from './CheckOutFood';

const BuyCorn = () => {
    const [selectedCinema, setSelectedCinema] = useState('');
    const [selectedCombos, setSelectedCombos] = useState([]);

    // Xử lý việc chọn combo (có thể được thực hiện trong ListCombo)
    const handleComboSelection = (combo) => {
        setSelectedCombos((prevCombos) => [...prevCombos, combo]);
    };


    return (
        <div>
            <div className="container mx-auto px-4">
                <div className='pt-[8rem] text-center'>
                <ChoseCinema setSelectedCinema={setSelectedCinema} /> {/* Truyền hàm setSelectedCinema */}
                    <ListCombo/>
                </div>
            </div>
            <CheckOutFood selectedCinema={selectedCinema} selectedCombos={selectedCombos} /> {/* Truyền selectedCinema */}
        </div>
    );
};

export default BuyCorn;
