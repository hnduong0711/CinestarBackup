import React from 'react';
import ChoseCinema from './ChoseCinema';
import ListCombo from './ComboFirst';
const BuyCorn = () => {
    return (
        <div className="container mx-auto px-4">
        <div className='pt-[15rem] pb-[25rem] text-center'>
              <ChoseCinema/>
              <ListCombo/>
       </div>
        </div>
    )
} 

export default BuyCorn;