import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

const Skills = ["🍏 Manzana", "🥛 Leche", "🚰 Agua", "🍞 Pan"]

const Family = ["👨🏼 Hombre", "👩🏽 Mujer", "👦🏾 Nino", "👧🏻 Nina"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-800 to-yellow-400 bg-clip-text text-transparent text-center">
                        Puedo hablar Espanol!
                    </h2>
                    
                    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Estoy aprendiendo espanol de forma accesible. Creo que seria divertido ir de vacanciones a Espana pronto.
                            Ademas de eso, solo quiero aprender cosas nuevas! Vamos!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Attributos</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Skills.map((tech, key) => (
                                        <span key={key} className="bg-red-500/20 text-white py-1 px-3 rounded-full text-sm hover:bg-red-500/80 hover:text-black transition">
                                            {tech}
                                        </span>

                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Familia</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Family.map((tech, key) => (
                                        <span key={key} className="bg-yellow-500/20 text-white py-1 px-3 rounded-full text-sm hover:bg-yellow-500/80 hover:text-white transition">
                                            {tech}
                                        </span>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Educacion
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Number 1</strong>
                                </li>
                                <li>
                                    Number 2
                                </li>
                                <li>
                                    Number 3
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div className="">
                                    <h4 className="font-semibold">
                                        Product Owner @ Emico (2023 - present)
                                    </h4>
                                    <p>
                                        Schakel tussen klant en developer
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="font-semibold text-red-200">
                                        E-commerce consultant @ Solvisoft (2019 - 2023)
                                    </h4>
                                    <p>
                                        Bezig met Front-end en NextJS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </RevealOnScroll>
        </section>
    );
};