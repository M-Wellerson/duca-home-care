import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";

const HeroSection = () => {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    let rotateX = useTransform(y, [0, 400], [15, -15]);
    let rotateY = useTransform(x, [0, 400], [-15, 15]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    const [isHover, setIsHover] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
        x.set(200);
        y.set(200);
    };

    return (
        <section className="w-full sm:h-[720px] h-[420px] bg-[url('../../public/banner.jpg')] bg-cover bg-right-top sm:bg-top bg-no-repeat flex flex-col justify-center items-center rounded-md shadow">
            <div className="mt-[150px] flex flex-col justify-center items-center">
                <h1 className="text-6xl tracking-tighter font-medium text-[#255650] mb-7">
                    Cuidando da sua <br />saúde em casa
                </h1>

                <motion.div
                    style={{
                        width: 250,
                        height: 50,
                        display: "flex",
                        placeItems: "center",
                        placeContent: "center",
                        borderRadius: 30,
                        perspective: 300,
                        position: "relative",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}
                    onMouseMove={handleMouse}
                >
                    <motion.div
                        style={{
                            width: 250,
                            height: 50,
                            borderRadius: 18,
                            backgroundColor: "#255650",
                            rotateX,
                            rotateY,
                            marginTop: isHover ? 25 : 0,
                            transitionTimingFunction: "ease-in-out",
                            transitionDuration: "0.2s",
                        }}
                    >
                    </motion.div>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-[250px] h-[50px] absolute text-[#F2DAD0] font-medium text-sm text-center flex items-center justify-center cursor-pointer noise rounded-[18px] transition duration-100 ease-in-out"
                    >
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                        </svg>
                        Saiba mais
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default HeroSection;