import React from 'react';
import Link from "next/link";

const LinkMenu = ({ href, text }) => {
    return (
        <Link className="block py-2 px-3 md:p-0 text-base leading-6 text-[#255650] font-medium group" href={href}>
            <span className="link link-underline link-underline-black text-black">{text}</span>
        </Link>
    );
};

export default LinkMenu;