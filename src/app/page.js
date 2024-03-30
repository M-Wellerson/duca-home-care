'use client';

import MenuMobile from "@/components/menu-mobile";
import MenuDesktop from "@/components/menu-desktop";
import Testimonials from "@/components/testimonials";
import HeroSection from "@/components/hero-section";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="container mx-auto sm:px-0 px-2 header-bg">
            <header className="mx-auto">
                <nav className="py-4">
                    <div className="max-w-full mx-auto flex justify-between items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/rectangular_logo.png"
                                alt="logo"
                                width="0"
                                height="0"
                                sizes="100%"
                                className="w-[250px] h-auto" />
                        </Link>
                        <MenuMobile />
                        <MenuDesktop />
                    </div>
                </nav>
            </header>

            <main className="mx-auto">
                <HeroSection />

                <section className="w-full flex grid sm:grid-cols-2 grid-cols-1 relative justify justify-items-center sm:mt-[55px] mt-[35px]">
                    <img src="/bolinha.svg" alt="banner" className="w-[700px] h-[700px] absolute sm:bottom-[-100px] bottom-20 right-40 -z-10" />
                    <img src="/homecare.jpg" alt="banner" className="w-full h-[400px] object-cover object-center rounded-md z-10 sm:order-first order-last sm:mt-0 mt-5" />
                    <div className="w-full md:w-3/4 flex flex-col justify-center items-center mt-5 z-10">
                        <h2 className="text-4xl font-bold text-[#255650]">
                            Serviços
                        </h2>
                        <p className="text-center text-lg mt-5 text-[#255650]">
                            A Homecare é uma empresa que atua no segmento de saúde domiciliar, oferecendo serviços de alta qualidade e tecnologia para pacientes que necessitam de cuidados especiais.
                        </p>
                    </div>
                </section>

                <section className="w-full grid sm:grid-cols-2 grid-cols-1 relative justify justify-items-center sm:mt-[55px] mt-[35px]">
                    <div className="w-full md:w-3/4 flex flex-col justify-center items-center mt-5 z-10">
                        <h2 className="text-4xl font-bold text-[#255650]">
                            Serviços
                        </h2>
                        <p className="text-center text-lg mt-5 text-[#255650]">
                            A Homecare oferece serviços de alta qualidade e tecnologia para pacientes que necessitam de cuidados especiais.
                        </p>
                    </div>
                    <img src="/bolinha.svg" alt="banner" className="w-[700px] h-[700px] absolute sm:bottom-[-100px] bottom-20 left-40 -z-10" />
                    <img src="/homecare.jpg" alt="banner" className="w-full h-[400px] object-cover object-center rounded-md z-10 sm:mt-0 mt-5" />
                </section>

                <section className="w-full p-10 sm:h-[400px] h-full mt-[55px] bg-[#255650] rounded-md">
                    <h2 className="text-4xl font-bold text-[#F2DAD0]">Serviços</h2>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                        <div className="w-full flex flex-col justify-center mt-5">
                            <h3 className="text-2xl font-bold text-[#F2DAD0]">Lorem Ipsum Dolor sit amet</h3>
                            <p className="text-lg mt-5 text-[#F2DAD0]">
                                A Homecare oferece serviços de alta qualidade e tecnologia para pacientes que necessitam de cuidados especiais.
                            </p>
                        </div>
                        <div className="w-full flex flex-col justify-center mt-5">
                            <h3 className="text-2xl font-bold text-[#F2DAD0]">Lorem Ipsum Dolor sit amet</h3>
                            <p className="text-lg mt-5 text-[#F2DAD0]">
                                A Homecare oferece serviços de alta qualidade e tecnologia para pacientes que necessitam de cuidados especiais.
                            </p>
                        </div>
                        <div className="w-full flex flex-col justify-center mt-5">
                            <h3 className="text-2xl font-bold text-[#F2DAD0]">Lorem Ipsum Dolor sit amet</h3>
                            <p className="text-lg mt-5 text-[#F2DAD0]">
                                A Homecare oferece serviços de alta qualidade e tecnologia para pacientes que necessitam de cuidados especiais.
                            </p>
                        </div>
                    </div>
                </section>

                <Testimonials />
            </main>
        </div>
    );
}
