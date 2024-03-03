import React from 'react'
import Image from "next/image";
import ServiceSlider from "@/components/ServiceSlider";

const Page = ( ) =>{
    return (
    <div className="flex items-center bg-[url('/assets/projects2/Orange1.jpg')] h-screen overflow-hidden ">
        <div className=' p-60  flex-col gap-3 pb-30'>

            <p className="  max-w-[350px] text-[16px] text-gray-900 md:text-gray-900 ">
                Szkoła Wilka – jedna z wiedźmińskich organizacji. Rezydywała w zamku Kaer Morhen w królestwie Kaedwen. Wilki kładły nacisk na walkę i profesjonalizm w swoim fachu. Jej symbolem jest medalion w kształcie wilczej paszczy z wyszczerzonymi kłami. Szkoła została zaatakowana i zniszczona przez tłumy fanatyków wspieranych przez czarodziejów. Zachowały się tylko ruiny, w których zimują wiedźmini, a na stałe mieszkał tam tylko nauczyciel szermierki – Vesemir.
            </p>
        </div>
        <div className='absolute -left-40 bottm-5 rotate-12 animate-pulse duration-75'>
        <Image
            src="/assets/bulb.png"
            alt="bulb"
            width={260}
            height={260}
            className="w-full h-full"
        />


            </div>
        <ServiceSlider/>
    </div>
        )
    }

export default Page