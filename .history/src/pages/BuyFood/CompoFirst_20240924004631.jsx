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
                                         <div className="bg-white">
                                             <div className="relative group">
                                                <img 
                                                    src={food.img} 
                                                    alt={food.title} 
                                                    className="w-[100px] h-auto mr-4 transition-transform duration-300 group-hover:rotate-[-10deg]" 
                                                />
                                            </div>
                                         </div>
                                            <div className="flex-grow text-left"> {/* Thêm class flex-grow và text-right */}
                                                <h4 className="font-medium">{food.title}</h4>
                                                <p>{food.content}</p>
                                                <p className="text-cinestar-custom-white">{food.price}</p>
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

