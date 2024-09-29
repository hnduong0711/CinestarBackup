import React from "react";
import { choseLocationNears, CompoFoods } from "../../constants/BuyFoot";

const CheckOutFood = () =>{

    return(
        
            <div className=" flex flex-col min-h-screen"> {/* Thêm min-h-screen để đảm bảo chiều cao tối thiểu của trang */}
                    
                <div className=" bg-green-500 w-full h-[100px] p-4 mt-auto"> {/* mt-auto để đẩy div xuống cuối */}
                    <div className="container mx-auto px-4">
                       <span>
                        <span>
                                <div>
                                    Cinema
                                </div>
                            </span>
                            <span>
                                <div>Thanh toán</div>
                            </span>
                       </span>
                    </div>
                    
                </div>
            </div>
    )
}

export default CheckOutFood;
