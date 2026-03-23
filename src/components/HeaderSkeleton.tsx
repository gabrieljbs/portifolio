export default function HeaderSkeleton() {
    return (
        <header className="sticky top-0 z-50 w-full glass border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Skeleton */}
                    <div className="w-32 h-8 bg-slate-700/30 rounded animate-pulse"></div>
                    
                    {/* Navbar Skeleton */}
                    <div className="flex items-center space-x-6 hidden md:flex">
                        <div className="w-16 h-5 bg-slate-700/30 rounded animate-pulse"></div>
                        <div className="w-20 h-5 bg-slate-700/30 rounded animate-pulse"></div>
                        <div className="w-16 h-5 bg-slate-700/30 rounded animate-pulse"></div>
                        <div className="w-24 h-5 bg-slate-700/30 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Mobile Menu Button Skeleton */}
                    <div className="md:hidden w-8 h-8 bg-slate-700/30 rounded animate-pulse"></div>
                </div>
            </div>
        </header>
    );
}
