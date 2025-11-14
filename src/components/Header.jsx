import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { title: "Beneficios", href: "#beneficios" },
    { title: "Características", href: "#caracteristicas" },
    { title: "Tecnología", href: "#tecnologia" },
    { title: "Datos", href: "#datos" },
    { title: "Contacto", href: "#cta" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm">
            <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
                <div className="text-xl font-light text-gray-900 md:text-2xl">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <strong className="font-bold text-primary">APRENDIA</strong> Emotion AI
                    </a>
                </div>

                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a key={link.title} href={link.href} className="text-gray-600 font-medium hover:text-primary transition-colors">
                            {link.title}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col items-center space-y-4 p-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-gray-600 font-medium hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                            >
                                {link.title}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;