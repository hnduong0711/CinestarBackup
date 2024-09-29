import React from 'react';
import ChoseCinema from './ChoseCinema';
import ListCombo from './CompoFirst';
import CheckOutFood from './CheckOutFood';
const BuyCorn = () => {
    return (
        <div className="container mx-auto px-4">
        <div className='pt-[15rem] text-center'>
              <ChoseCinema/>
              <ListCombo/>
              <CheckOutFood/>
       </div>
        </div>
    )
} 

export default BuyCorn;