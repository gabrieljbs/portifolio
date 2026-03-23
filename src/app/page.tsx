
import Header from "@/components/Header";
import HeaderSkeleton from "@/components/HeaderSkeleton";
import Footer from "@/components/Footer";
import Hero from "@/components/info/Hero";
import Technologies from "@/components/info/Technologies";
import Projects from "@/components/projects/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Suspense } from "react";

function Loading() {
    return (
        <div className="w-full h-[400px] bg-dark-surface/50 border border-slate-800/50 rounded-2xl animate-pulse flex flex-col items-center justify-center p-8 space-y-4 my-8">
            <div className="w-1/3 h-8 bg-slate-700/30 rounded"></div>
            <div className="w-2/3 h-4 bg-slate-700/30 rounded"></div>
            <div className="w-1/2 h-4 bg-slate-700/30 rounded"></div>
        </div>
    );
}

export default function Home() {
    return (
        <main className="relative min-h-screen bg-dark-surface text-slate-100 selection:bg-primary/30 selection:text-primary">
            {/* Background elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-secondary/10 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="relative z-10">
                <Suspense fallback={<HeaderSkeleton />}>
                    <Header />
                </Suspense>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
                    <Suspense fallback={<Loading />}>
                        <Hero />
                    </Suspense>

                    <Suspense fallback={<Loading />}>
                        <Technologies />
                    </Suspense>

                    <Suspense fallback={<Loading />}>
                        <Projects />
                    </Suspense>

                    <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                </div>

                <Suspense fallback={<Loading />}>
                    <Footer />
                </Suspense>
            </div>
        </main>
    );
}
