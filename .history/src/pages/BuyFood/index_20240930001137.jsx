import React, { useState } from "react";
import ChoseCinema from './ChoseCinema';
import ListCombo from './CompoFirst';
import CheckOutFood from './CheckOutFood';

const BuyCorn = () => {
    const [selectedCinema, setSelectedCinema] = useState('');
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className='pt-[8rem] text-center'>
                <ChoseCinema setSelectedCinema={setSelectedCinema} /> {/* Truyền hàm setSelectedCinema */}
                    <ListCombo/>
                </div>
            </div>
            <CheckOutFood selectedCinema={selectedCinema} />
        </div>
    );
};

export default BuyCorn;
