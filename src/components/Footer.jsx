import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center text-gray-500">
            <div className="container mx-auto max-w-7xl px-6">
                <p className="text-sm">
                    © 2025 Universidad Politécnica de Chiapas. Todos los derechos reservados.
                </p>
                <div className="mt-2 space-x-4">
                    <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-primary">
                        Términos y Condiciones
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;