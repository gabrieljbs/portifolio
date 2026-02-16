
import Link from "next/link";
import { getProfileData } from "@/actions/info";

export default async function Header() {
    const data = await getProfileData();

    return (
        <header className="sticky top-0 z-50 w-full glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-xl font-bold text-gradient">
                        {data?.title || 'Gabriel Dev'}
                    </h1>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#tecnologias" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Tecnologias</Link>
                        <Link href="#projetos" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Projetos</Link>
                        <Link href="#sobre" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Sobre</Link>
                    </nav>
                    <div className="md:hidden">
                        {/* Mobile menu could go here if needed */}
                    </div>
                </div>
            </div>
        </header>
    );
}

