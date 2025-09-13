import React, { useState } from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 9.27456 3.12093 6.81193 4.88806 5.11194M12 2C11.1333 2 9.00001 3.20001 9.00001 7.00001C9.00001 10.8 11.1333 12 12 12M12 2C12.8667 2 15 3.20001 15 7.00001C15 10.8 12.8667 12 12 12" stroke="#D6B9FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="2" fill="#D6B9FC"/>
        </svg>
        <span className="text-xl font-bold text-white">cortexa</span>
    </div>
);


const NavLinks: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-xs font-medium tracking-wider">HOME</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-xs font-medium tracking-wider">ABOUT</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-xs font-medium tracking-wider">PRICING</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-xs font-medium tracking-wider">LOGIN</a>
    </div>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative">
            <div className="flex items-center justify-between">
                <Logo />
                <nav className="hidden lg:flex items-center gap-8">
                    <NavLinks className="flex items-center gap-8"/>
                    <button className="bg-brand-lavender text-brand-dark-bg text-xs font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                        BOOK DEMO
                    </button>
                </nav>
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden mt-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6">
                    <NavLinks className="flex flex-col items-center gap-6" />
                     <button className="w-full mt-6 bg-brand-lavender text-brand-dark-bg text-sm font-bold py-3 px-4 rounded-md hover:opacity-90 transition-opacity">
                        BOOK DEMO
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;