import React from "react";
import {choseLocationNears, CompoFoods} from "../../constants/BuyFoot";
const ListCombo = () => {

    const groupcomboFoods = ComboFoods.reduce((acc, food) =>{
        // Tạo một danh sách nếu chưa có

        if(!acc[food.category]){
            acc[food.category] = [];
        }

        // thêm các phần tử vào danh sách

        acc[food.category].push(food);
        return acc;
    }, {});


    return(
        <div className="pt-[5rem]">
            <div className="text-center mt-[50px] mb-[5px]">
                <h2 className="text-cinestar-custom-white text-[40px] font-medium pb-[4rem] font-title">COMBO</h2>
            </div>

            <div className="pt-[5rem]">

                <div className="flex justify-between">
                {/* Phần 1 */}
                    <div className="flex-1">
                        <div>img</div>
                    </div>

                {/* Phần 2 */}
                    <div className="flex-1">
                        <div>Element 2</div>
                        <div>Element 3</div>
                        <div>Element 4</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListCombo;


{/* <div>
                            <p>Title</p>
                            <p>Content</p>
                            <p>Price</p>
                        </div>
                        <div>
                            <p>Tăng giảm số lượng</p>
                        </div> */}