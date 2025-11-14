import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Comparison = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto max-w-7xl px-6">
                <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                    ¿Qué nos hace diferentes?
                </h2>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                                Criterio
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-secondary">
                                APRENDIA Emotion AI
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                                Soluciones Genéricas (ej. Affectiva)
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                                Soluciones Terapéuticas (ej. EmoPLAY)
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Enfoque Principal</td>
                            <td className="px-6 py-4 text-gray-800"><FaCheckCircle className="mr-2 inline text-secondary" />Alfabetización y Educación Inclusiva</td>
                            <td className="px-6 py-4 text-gray-600"><FaTimesCircle className="mr-2 inline text-gray-400" />Investigación de Mercados, Automotriz</td>
                            <td className="px-6 py-4 text-gray-600"><FaTimesCircle className="mr-2 inline text-gray-400" />Entrenamiento Terapéutico (Autismo)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Público Objetivo</td>
                            <td className="px-6 py-4 text-gray-800"><FaCheckCircle className="mr-2 inline text-secondary" />Personas Sordas en etapa de aprendizaje</td>
                            <td className="px-6 py-4 text-gray-600"><FaTimesCircle className="mr-2 inline text-gray-400" />Empresas (B2B), Marcas Globales</td>
                            <td className="px-6 py-4 text-gray-600"><FaTimesCircle className="mr-2 inline text-gray-400" />Niños y jóvenes con TEA</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Análisis de Voz</td>
                            <td className="px-6 py-4 text-gray-800"><FaCheckCircle className="mr-2 inline text-secondary" />No (Enfoque 100% no oral)</td>
                            <td className="px-6 py-4 text-gray-600"><FaTimesCircle className="mr-2 inline text-gray-400" />Sí (Análisis facial y vocal multimodal)</td>
                            <td className="px-6 py-4 text-gray-600"><FaCheckCircle className="mr-2 inline text-secondary" />No</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Modelo de Negocio</td>
                            <td className="px-6 py-4 text-gray-800"><FaCheckCircle className="mr-2 inline text-secondary" />Académico / Servicio Público (API)</td>
                            <td className="px-6 py-4 text-gray-600"><FaTimesCircle className="mr-2 inline text-gray-400" />Licenciamiento Empresarial (SaaS / B2B)</td>
                            <td className="px-6 py-4 text-gray-600"><FaTimesCircle className="mr-2 inline text-gray-400" />Gratuito (Financiado por Fundación)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Comparison;