import React, { useState } from "react";
import ChoseCinema from './ChoseCinema';
import ListCombo from './CompoFirst';
import CheckOutFood from './CheckOutFood';
import { CinemaProvider } from "./Context";
const BuyCorn = () => {
    const [selectedCinema, setSelectedCinema] = useState('');
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className='pt-[8rem] text-center'>
                <ChoseCinema setSelectedCinema={setSelectedCinema} />

                    <ListCombo/>
                    
                </div>
            </div>
            <CinemaProvider>
            <CheckOutFood setSelectedCinema={setSelectedCinema}/>
            </CinemaProvider>
            
        </div>
    )
} 

export default BuyCorn;