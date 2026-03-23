import Link from "next/link";
import { getProfileData } from "@/actions/info";
import Navbar from "./Navbar";

export default async function Header() {
    const data = await getProfileData();

    return (
        <header className="sticky top-0 z-50 w-full glass border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/">
                        <h1 className="text-xl font-bold text-gradient">
                            {data?.title || 'Gabriel Dev'}
                        </h1>
                    </Link>
                    
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

