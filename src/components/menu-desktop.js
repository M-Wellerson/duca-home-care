import React from 'react';
import LinkMenu from "@/components/link-menu";

const MenuDesktop = () => {
    return (
        <div className="hidden md:block w-full md:w-auto">
            <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <LinkMenu href="/" text="Home" />
                <LinkMenu href="/" text="Serviços" />
                <LinkMenu href="/" text="Contatos" />
                <LinkMenu href="/" text="Sobre nós" />
            </div>
        </div>
    )
}

export default MenuDesktop;