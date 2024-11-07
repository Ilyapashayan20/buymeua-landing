import {useEffect, useState} from "react";
import {MouseParallax} from "react-just-parallax";

export const BackgroundCircles = ({parallaxRef}:any) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className="hidden sm:block absolute left-0 lg:left-1/2 z-10 w-full lg:w-[78rem] aspect-square -translate-x-1/2 overflow-hidden">
            <MouseParallax strength={0.2} parallaxContainerRef={parallaxRef}>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                    <div
                        className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#ab0000] to-[#da1212] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                    <div
                        className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#e00000] to-[#ab0000] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                    <div
                        className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#e00000] to-[#ab0000] rounded-full xl:block transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                    <div
                        className={`w-2 h-2 -ml-1.5 mt-52 bg-gradient-to-b from-[#ab0000] to-[#ab0000] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 -right-2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                    <div
                        className={`w-3 h-3 -ml-3 -mt-3 bg-gradient-to-b from-[#ab0000] to-[#ab0000] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                    <div
                        className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#ab0000] to-[#ab0000] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
            </MouseParallax>
        </div>
    );
};
