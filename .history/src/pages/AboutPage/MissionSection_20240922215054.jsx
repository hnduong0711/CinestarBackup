import React from 'react';

const MissionSection = ({ listmission }) => {
  return (
    <div className="pb-[6rem]">
      <div className="text-center mt-[50px] mb-[5px]">
        <h2 className="text-cinester-custom-white text-[40px] font-medium pb-[4rem] font-title">SỨ MỆNH</h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 custom-10px">
          {listmission.map((mission) => (
            <div key={mission.id} className="text-center p-4 rounded-lg" style={{background: '#365fbf'}}>
              <h2 className="text-[36px] font-antons text-white font-extrabold" style={{color: '#f3ea28'}}>{mission.title}</h2>
              <p className="text-white mt-4">{mission.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
