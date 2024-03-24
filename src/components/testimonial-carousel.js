import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialCarousel({ testimonials }) {
    let sliderRef = React.useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
    };
    return (
        <div className="slider-container">
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="body-info-slider max-w-screen-xl px-4 py-8 mx-auto">
                        <blockquote>
                            <p className="text-2xl font-medium text-[#255650]">"{testimonial.text}"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="font-medium text-[#378279]">{testimonial.name}</div>
                            </div>
                        </figcaption>
                    </div>
                ))}
            </Slider>
            <div className="max-w-screen-xl mx-auto text-center">
                <button className="button" onClick={previous}>
                    <svg className="w-5 text-[#378279] hover:text-[#255650]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                </button>
                <button className="button" onClick={next}>
                    <svg className="w-5 text-[#378279] hover:text-[#255650]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    );
}