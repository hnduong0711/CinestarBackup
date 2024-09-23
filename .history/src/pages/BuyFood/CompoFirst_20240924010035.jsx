import React from "react";
import { choseLocationNears, CompoFoods } from "../../constants/BuyFoot";
const ListCombo = () => {

    const groupcomboFoods = CompoFoods.reduce((acc, food) =>{
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
                {Object.keys(groupcomboFoods).map((category) => {
                    return (
                        <div key={category} className="mb-8">
                            <h2 className="text-cinestar-custom-white text-[40px] font-medium pb-[4rem] font-title">{category}</h2>
                            <div className="flex flex-wrap">
                                {groupcomboFoods[category].map((food) => {
                                    return (
                                        <div key={food.id} className="flex items-center mb-4 w-1/3">
                                       <div className="bg-[#ecf0f1] w-[184px] h-[231px] flex items-center justify-center relative overflow-hidden">
                                            <div className="relative group">
                                                <img 
                                                    src={food.img} 
                                                    alt={food.title} 
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:rotate-[5deg]" 
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-grow text-left ml-4"> {/* Thêm khoảng cách ở đây */}
                                            <h4 className="font-medium text-white text-[18px] transition-colors duration-300 hover:text-yellow-500">{food.title}</h4>
                                            <p className="text-white text-[16px] transition-colors duration-300 hover:text-yellow-500">{food.content}</p>
                                            <p className="text-cinestar-custom-white text-[16px]">{food.price}</p>
                                        </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>



        </div>
    )
}

export default ListCombo;

