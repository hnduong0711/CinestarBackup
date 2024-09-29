import React from "react";

const CheckOutFood = ({ selectedCinema, selectedCombos }) => {
    console.log("Selected Cinema:", selectedCinema); // Kiểm tra giá trị selectedCinema
    console.log("Selected Combos:", selectedCombos); // Kiểm tra giá trị selectedCombos
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-green-500 w-full h-[100px] p-4 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="flex">
                        <div className="w-7/10">
                            <div>
                            <p className="text-white">{selectedCinema}</p>
                            </div>
                            <div>
                            {/* Hiển thị thông tin content của các combo đã chọn */}
                                <span>
                                {selectedCombos.map((combo, index) => (
                                    <p key={index} className="text-white">{combo.content} - {combo.price}</p>
                                ))}
                                </span>

                            </div>
                        </div>
                        <div className="w-3/10">
                            Thanh toán
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutFood;