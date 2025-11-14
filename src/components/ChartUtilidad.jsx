const chartData = [
    { label: "Muy Útil (5/5)", width: "w-11/12", value: "65%" },
    { label: "Útil (4/5)", width: "w-8/12", value: "25%" },
    { label: "Neutral (3/5)", width: "w-4/12", value: "8%" },
    { label: "Poco Útil (2/5)", width: "w-2/12", value: "2%" },
];

const ChartUtilidad = () => {
    return (
        <section id="datos" className="bg-white py-24">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="w-full rounded-lg border border-gray-200 bg-white p-8 shadow-xl">
                        <h3 className="mb-6 text-xl font-semibold text-gray-900">Opinión sobre la Utilidad del Sistema</h3>
                        <div className="space-y-5">
                            {chartData.map((item) => (
                                <div key={item.label} className="group">
                                    <div className="mb-1 flex justify-between">
                                        <span className="text-sm font-medium text-gray-600">{item.label}</span>
                                        <span className="text-sm font-bold text-primary">{item.value}</span>
                                    </div>
                                    <div className="h-4 w-full rounded-full bg-gray-200">
                                        <div
                                            className={`h-4 rounded-full bg-primary transition-all duration-700 ease-out ${item.width}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <span className="font-semibold uppercase tracking-wider text-primary">
                            Alta Percepción de Valor
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            Validado por Educadores y Familiares
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Los datos de nuestra encuesta a más de 40 participantes revelan un entusiasmo claro. Más del <strong>90% de los encuestados</strong> (familiares y profesionales) calificaron la herramienta como "Útil" o "Muy Útil", confirmando su potencial.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChartUtilidad;