import React, { useState } from "react";
import { choseLocationNears, CompoFoods } from "../../constants/BuyFoot";

const CheckOutFood = () =>{
    const [selectedCinema, setSelectedCinema] = useState("");

    const handleCinestarChange = (event) => {
        setSelectedCinema(event.target.value);
        console.log('Rạp đã chọn:', event.target.value);
    };

    return(
        
            <div className=" flex flex-col min-h-screen"> {/* Thêm min-h-screen để đảm bảo chiều cao tối thiểu của trang */}
                    
                <div className=" bg-green-500 w-full h-[100px] p-4 mt-auto"> {/* mt-auto để đẩy div xuống cuối */}
                    <div className="container mx-auto px-4">
                        <div className="flex">
                            <div className="w-7/10"> 
                                <input
                                type="text"
                                
                                />
                            </div>
                            <div className="w-3/10 ">
                                Thanh toán
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default CheckOutFood;
