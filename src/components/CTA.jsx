const CTA = () => {
    return (
        <section className="bg-white py-24" id="cta">
            <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">

                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Intégralo a tu plataforma educativa
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Nuestro servicio se conecta vía API REST a cualquier aplicación. Contacta con nosotros para una demo o para explorar una colaboración.
                    </p>
                </div>

                <form className="w-full rounded-lg border border-gray-200 bg-white p-8 shadow-xl">
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">Nombre Completo</label>
                            <input type="text" id="name" name="name" required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="institution" className="mb-2 block text-sm font-medium text-gray-700">Institución / Empresa</label>
                            <input type="text" id="institution" name="institution" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-primary px-6 py-3 text-lg font-medium text-white shadow-lg transition duration-300 hover:bg-primary/80 focus:outline-none focus:ring-4 focus:ring-primary/50"
                    >
                        Solicitar más información
                    </button>
                    <p className="mt-4 text-center text-xs text-gray-500">
                        Respetamos tu privacidad. No compartiremos tus datos.
                    </p>
                </form>

            </div>
        </section>
    );
};

export default CTA;