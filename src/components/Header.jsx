import { Menu, X } from "lucide-react";
import { useState } from "react"

const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
            <nav className="rounded-2xl border border-white/60 bg-white/10 px-5 py-3 shadow-lg shadow-purple-950/5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                    <a
                        href="#top"
                        className="text-lg font-bold tracking-tight"
                        onClick={() => setIsOpen(false)}
                    >
                        T<span className="text-accent">.</span>
                    </a>

                    <a
                        href="mailto:tapanrathore07@gmail.com"
                        className="text-xs sm:text-sm md:text-md text-mute transition-colors hover:text-accent"
                    >tapanrathore07@gmail.com</a>

                    <div className="hidden items-center gap-7 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-mute transition-colors hover:text-accent"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="rounded-lg p-2 transition-colors hover:bg-purple-100 md:hidden"
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((open) => !open)}
                    >
                        {isOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="flex flex-col gap-1 pt-3 md:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-purple-100 hover:text-accent"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

        </header>
    )
}

export default Header
