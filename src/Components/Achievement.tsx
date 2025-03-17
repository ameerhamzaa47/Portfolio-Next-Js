"use client"
import AchievementList from "../../Data/AchievementData"
import dynamic from "next/dynamic"

const AnimatedNumber = dynamic(
    ()=>{
        return import("react-animated-numbers");
    },
    {ssr:false}
);

const Achievement = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between">
      {AchievementList.map((Achievement,index)=>{
        return(
            <div key={index} className="flex flex-col items-center justify-center mx-4">
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {Achievement.prefix}
                  <AnimatedNumber
                  key={index}
                  includeComma
                  animateToNumber={parseInt(Achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  />
                  {Achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{Achievement.matric}</p>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Achievement
