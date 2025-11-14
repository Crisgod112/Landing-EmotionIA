const chartData = [
    { label: "Frunce el ceño o pone cara de duda", width: "w-11/12", value: "27 Menciones" },
    { label: "Ladea la cabeza", width: "w-9/12", value: "21 Menciones" },
    { label: "Se queda quieto y no avanza", width: "w-7/12", value: "16 Menciones" },
    { label: "Vuelve a ver la instrucción", width: "w-6/12", value: "14 Menciones" },
];

const ChartProblema = () => {
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                    <div className="text-center md:text-left">
                        <span className="font-semibold uppercase tracking-wider text-secondary">
                            Validación del Problema
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            ¿Por qué un Analizador de Expresiones?
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Preguntamos a educadores y familiares cuáles son las señales más claras de que una persona sorda está confundida. Sus respuestas fueron consistentes, validando que gestos como <strong>"fruncir el ceño"</strong> son un indicador clave y fiable para la intervención de la IA.
                        </p>
                    </div>

                    <div className="w-full rounded-lg border border-gray-200 bg-white p-8 shadow-xl">
                        <h3 className="mb-6 text-xl font-semibold text-gray-900">Señales de Confusión más Comunes</h3>
                        <div className="space-y-5">
                            {chartData.map((item) => (
                                <div key={item.label} className="group">
                                    <div className="mb-1 flex justify-between">
                                        <span className="text-sm font-medium text-gray-600">{item.label}</span>
                                        <span className="text-sm font-bold text-secondary">{item.value}</span>
                                    </div>
                                    <div className="h-4 w-full rounded-full bg-gray-200">
                                        <div
                                            className={`h-4 rounded-full bg-secondary transition-all duration-700 ease-out ${item.width}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChartProblema;