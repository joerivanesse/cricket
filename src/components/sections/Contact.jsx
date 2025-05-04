import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'


export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })




    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Oops! Something went wrong"));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-800 to-yellow-400 bg-clip-text text-transparent text-center">
                        Contacto
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit} >
                        <div className="relative">
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500/40 focus:bg-yellow-500/5" 
                            placeholder="Nombre"
                            onChange={(e) => setFormData ({...formData, name: e.target.value})}
                            >
                            </input>
                        </div>

                        <div className="relative">
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500/40 focus:bg-yellow-500/5" 
                            placeholder="john@doe.es"
                            onChange={(e) => setFormData ({...formData, email: e.target.value})}
                            >
                            </input>
                        </div>

                        <div className="relative">
                            <textarea 
                            id="message" 
                            name="message" 
                            required 
                            value={formData.message}
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500/40 focus:bg-yellow-500/5" 
                            placeholder="Opmerkingos"
                            onChange={(e) => setFormData ({...formData, message: e.target.value})}
                            >
                            </textarea>
                        </div>

                        <button type="submit" className="w-full bg-red-500 text-black py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};