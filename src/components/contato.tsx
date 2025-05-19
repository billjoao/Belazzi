import { Chrome, Instagram, Mail, MessageCircleMore } from "lucide-react";

export default function Contatos() {
    return (
        <>
            <section className="px-4 py-8 bg-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <a
                        href="https://wa.me/5511984478742?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20seu%20servi%C3%A7o%20e%20gostaria%20de%20saber%20mais."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-green-100 rounded-xl shadow text-center flex flex-col items-center gap-2 transition transform hover:scale-103 duration-200"
                    >
                        <MessageCircleMore className="text-green-700 w-6 h-6" />
                        <p className="text-green-700 font-bold">WhatsApp</p>
                    </a>

                    <a
                        href="mailto:comercial01@dbellazzividros.com.br"
                        className="p-4 bg-blue-200 rounded-xl shadow text-center flex flex-col items-center gap-2 transition transform hover:scale-103 duration-200"
                    >
                        <Mail className="text-blue-700 w-6 h-6" />
                        <p className="text-blue-700 font-bold">Email</p>
                    </a>

                    <a
                        href="https://instagram.com/DbellazziVidros"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-pink-100 rounded-xl shadow text-center flex flex-col items-center gap-2 transition transform hover:scale-103 duration-200"
                    >
                        <Instagram className="text-pink-700 w-6 h-6" />
                        <p className="text-pink-700 font-bold">Instagram</p>
                    </a>

                    <a
                        href="https://www.dbellazzividros.com.br/"
                        target="_blan   k"
                        rel="noopener noreferrer"
                        className="p-4 bg-gray-200 rounded-xl shadow text-center flex flex-col items-center gap-2 transition transform hover:scale-103 duration-200"
                    >
                        <Chrome className="text-gray-700 w-6 h-6" />
                        <p className="text-gray-700 font-bold">Website</p>
                    </a>
                </div>
            </section>
        </>
    )
}
