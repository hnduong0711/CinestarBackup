import React, {useState} from "react";
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

    const [quantities, setQuantities] = useState({});

    const handleIncrease = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
    };
    
    const handleDecrease = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max((prev[id] || 1) - 1, 1), // Đảm bảo không giảm xuống dưới 1
        }));
    };
    
    const handleQuantityChange = (id, value) => {
        const newValue = Math.max(Number(value), 1); // Đảm bảo giá trị tối thiểu là 1
        setQuantities((prev) => ({ ...prev, [id]: newValue }));
    };


    return(
        <div className="pt-[5rem]">
            {/* <div className="text-center mt-[50px] mb-[5px]">
                <h2 className="text-cinestar-custom-white text-[40px] font-medium pb-[4rem] font-title">COMBO</h2>
            </div> */}

            <div className="pt-[5rem]">
                {Object.keys(groupcomboFoods).map((category) => {
                    return (
                        <div key={category} className="mb-8">
                            <h2 className="text-cinestar-custom-white text-[40px] font-medium pb-[4rem] font-title">{category}</h2>
                            <div className="flex flex-wrap">
                                {groupcomboFoods[category].map((food) => {
                                    return (
                                        <div key={food.id} className="flex items-stretch mb-4 w-1/3 group"> {/* Thêm class group tại đây */}
                                            <div className="bg-[#ecf0f1] w-[184px] flex items-center justify-center relative overflow-hidden h-full">
                                                <div className="relative">
                                                    <img 
                                                        src={food.img} 
                                                        alt={food.title} 
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:rotate-[5deg] group-hover:-translate-x-1" 
                                                    />
                                                </div>
                                            </div>
                                                <div>
                                                    <div className="flex-grow text-left ml-4 flex flex-col"> {/* Căn giữa nội dung */}
                                                        <h4 className="font-medium text-[16px] font-content text-white text-[18px] transition-colors duration-300 group-hover:text-yellow-500">{food.title.toUpperCase()}</h4>
                                                        <p className="text-white text-[16px] transition-colors duration-300 font-content">{food.content}</p>
                                                        <p className="text-cinestar-custom-white text-[16px] font-content">{food.price}</p>
                                                    </div>
                                                    <div className="flex mt-12 pl-[15px]">
                                                        <button className="bg-gray-300 text-black p-1 rounded-l" onClick={() => handleDecrease(food.id)}>-</button>
                                                        <input 
                                                            type="number" 
                                                            min="1" 
                                                            value={quantities[food.id] || 1} 
                                                            onChange={(e) => handleQuantityChange(food.id, e.target.value)} 
                                                            className="text-center w-[50px] border border-gray-300" 
                                                        />
                                                        <button className="bg-gray-300 text-black p-1 rounded-r" onClick={() => handleIncrease(food.id)}>+</button>
                                                    </div>
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

