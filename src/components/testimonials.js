import React from 'react';
import TestimonialCarousel from '@/components/testimonial-carousel';

const Testimonials = () => {
    const testimonials = [
        { text: 'Estou muito satisfeito com os serviços da Homecare. Eles oferecem cuidados de saúde excepcionais em casa.', name: 'João' },
        { text: 'Recomendo fortemente a Homecare. Eles têm uma equipe profissional e atenciosa.', name: 'Maria' },
        { text: 'Estou impressionado com a qualidade dos serviços da Homecare. Eles realmente se importam com o bem-estar dos pacientes.', name: 'Pedro' }
    ];
    return (
        <section className="w-full flex grid grid-cols-1 relative justify justify-items-center mt-[55px]">
            <img src="/bolinha.svg" alt="banner" className="w-[500px] h-[500px] absolute sm:bottom-0 bottom-20 -z-10" />
            <div className="grid grid-cols-1 justify justify-items-center z-10 pt-5">
                <h2 className="text-4xl font-bold text-[#255650]">
                    Depoimentos
                </h2>
                <p className="text-center text-lg mt-5 text-[#255650]">
                    Veja o que nossos clientes estão dizendo sobre nós.
                </p>
                <div className="container mx-auto">
                    <TestimonialCarousel testimonials={testimonials} />
                </div>
            </div>
        </section>
    )
}

export default Testimonials;