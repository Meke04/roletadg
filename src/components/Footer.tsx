export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full border-t border-gray-200 bg-white p-4 shadow-sm md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-gray-800 sm:text-center">🎮 Dados de jogos: <a href="#" className="hover:underline">RAWG</a></span>
            <span className="text-sm text-gray-800 sm:text-center">🎬 Dados de filmes: <a href="#" className="hover:underline">TMDB</a></span>
            <span className="text-sm text-gray-800 sm:text-center">📚 Dados de livros: <a href="#" className="hover:underline">Open Library</a></span>
        </footer>
    );
}