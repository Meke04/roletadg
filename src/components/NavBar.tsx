"use client";

import { FormEvent, useState } from "react";

export default function NavBar() {
    const [pesquisa, setPesquisa] = useState('');

    async function pesquisar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const resposta = await fetch(`/api/jogos?pesquisa=${pesquisa}`);
        const jogos = await resposta.json();

        console.log(jogos);
    }

    return (
        <nav className="fixed top-0 z-20 w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between p-4">

                {/* Logo */}
                <a href="#" className="flex items-center space-x-3">
                    <span className="self-center whitespace-nowrap text-xl font-semibold">Roleta</span>
                </a>

                {/* Busca + Menu */}
                <div className="flex items-center md:order-2">

                    {/* Botão de pesquisa no mobile */}
                    <button type="button" className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 md:hidden" aria-label="Pesquisar">
                        <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>

                    {/* Busca desktop */}
                    <div className="relative hidden md:block">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <form onSubmit={pesquisar}>
                            <input type="text" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} 
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Pesquisar" 
                            />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}