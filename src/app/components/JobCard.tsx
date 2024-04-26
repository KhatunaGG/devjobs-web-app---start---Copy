'use client'
import React from "react";

function JobCard() {
  return (
    <div className="shadow-lg bg-white rounded-[6px] relative ">
      
        <img className="w-[50px] h-[50px]  absolute top-[-25px] left-[32px]" src="/assets/Group3.png" alt="" />
   
      {/* <div className="pl-8 bg-transparent w-full">
        <img className="w-[50px] h-[50px]  absolute top-0 left-0" src="/assets/Group3.png" alt="" />
      </div> */}

      <div className="pl-8 pt-[49px] pr-[9px] pb-8 md:pr-[44px] lg:pr-[75px] lg:pb-[36px] flex flex-col gap-[44px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-roe items-center gap-4">
            <span className="text-base font-normal text-[#6E8098]">2d ago</span>
            <div className="dot w-[4px] h-[4px] bg-[#6E8098] rounded-full"></div>
            <span className="text-base font-normal text-[#6E8098]">Full Time</span>
          </div>
          <h2 className="text-[#19202D] font-bold text-[20px] whitespace-nowrap">Senior Application Engineer</h2>
          <p className="text-base font-normal text-[#6E8098]">Office Lite</p>
        </div>

        <p className="text-[#5964E0] font-bold text-[14px]">Japan</p>
      </div>
    </div>
  );
}

export default JobCard;
