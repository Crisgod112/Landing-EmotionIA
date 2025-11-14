const SocialProof = () => {
    return (
        <section className="bg-primary py-24 text-white">
            <div className="container mx-auto max-w-7xl px-6">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                    Validado por la Comunidad
                </h2>
                <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2">
                    <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
                        <div className="text-6xl font-bold text-secondary">88%</div>
                        <p className="mt-4 text-xl text-gray-200">
                            De los familiares y profesionales encuestados están <strong className="font-semibold text-white">dispuestos a probar o recomendar</strong> el servicio.
                        </p>
                    </div>

                    <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
                        <div className="text-6xl font-bold text-secondary">90%+</div>
                        <p className="mt-4 text-xl text-gray-200">
                            Calificó la utilidad del sistema con <strong className="font-semibold text-white">4 o 5 (sobre 5)</strong>, mostrando una alta percepción de valor.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-2xl italic text-gray-200">
                        "Existe un notable consenso entre familiares y profesionales sobre las señales de confusión (ej. <strong className="font-semibold text-white">'Frunce el ceño'</strong>), lo que valida la base de nuestro sistema de IA."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;