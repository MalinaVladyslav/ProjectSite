import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const Page = () => {
    return (
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[url('/assets/projects2/mechi.png')]">

            <div className="flex flex-col gap-3">

                <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
                    - Zło to zło, Stregoborze - rzekł poważnie wiedźmin wstając. - Mniejsze, większe, średnie, wszystko jedno, proporcje są umowne a granice zatarte. Nie jestem świątobliwym pustelnikiem, nie samo dobro czyniłem w życiu. Ale jeżeli mam wybierać pomiędzy jednym złem a drugim, to wolę nie wybierać wcale.
                </p>
            </div>
            <ProjectSlider />
        </div>

    );

};

export default Page;