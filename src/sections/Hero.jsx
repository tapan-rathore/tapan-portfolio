import { ArrowDownRight, ArrowUpRight } from "lucide-react"

const Hero = () => {
    return (
        <section
            id="home"
            className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 pt-30 pb-16 md:grid-cols-[1.2fr_0.8fr]"
        >
            <div>
                <p className="mb-6 flex items-center gap-2 text-sm font-medium text-mute">
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Junior Frontend Developer
                </p>

                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                    I build things for the{" "}
                    <span className="font-serif font-normal italic text-accent">
                        web.
                    </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-mute sm:text-lg">
                    I'm Tapan, a React developer focused on building clean, responsive, and
                    user-friendly web experiences with JavaScript and modern frontend
                    tools.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1"
                    >
                        Explore my work
                        <ArrowDownRight size={17} />
                    </a>

                    <a
                        href="https://github.com/tapan-rathore"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@16.35.0/icons/github.svg"
                            alt="github"
                            className="h-5 w-5"
                        />
                        GitHub
                        <ArrowUpRight size={15} />
                    </a>
                </div>

                <p className="mt-8 text-xs text-mute">
                    Based in India · Open to entry-level opportunities
                </p>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-5 rounded-4xl bg-purple-300/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/50 p-6 shadow-xl shadow-purple-950/30 backdrop-blur-xl">
                    <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-3">
                        <div className="flex gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-accent-soft" />
                            <span className="h-2.5 w-2.5 rounded-full bg-accent-soft" />
                            <span className="h-2.5 w-2.5 rounded-full bg-accent-soft" />
                        </div>
                        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-accent">
                            Portfolio
                        </span>
                    </div>


                    <div className="overflow-x-auto font-mono text-xs leading-6 sm:text-sm">
                        <div>
                            <span className="text-accent">const</span>{" "}
                            <span className="text-mute">developer</span>{" "}
                            <span className="text-mute">= {"{"}</span>
                        </div>
                        <div className="pl-4">
                            <span>role:{" "}</span>
                            <span className="text-emerald-700">"Junior Frontend"</span>
                            <span>,</span>
                        </div>
                        <div className="pl-4">
                            <span>stack</span>:{" [" }
                            <span className="text-emerald-700">"React 19"</span>,
                        </div>
                        <div className="pl-16">
                            <span className="text-emerald-700">"Tailwind v4"</span>,
                        </div>
                        <div className="pl-16">
                            <span className="text-emerald-700">"Redux Toolkit"</span>
                            <span className="text-white"></span>],
                        </div>
                        <p className="pl-5">
                            learning: <span className="text-emerald-700">"Every day"</span>,
                        </p>
                        <p className="pl-5">
                            openToWork: <span className="text-purple-700">true</span>,
                        </p>
                        <p className="text-mute">
                            {"};"}
                            <span className="ml-0.5 inline-block h-[1.1em] w-1.5 translate-y-0.5 animate-[cursor-blink_1s_steps(2,start)_infinite] bg-accent-soft" />
                        </p>
                    </div>

                    <div className="mt-8 border-t border-black/10 pt-5">
                        <p className="text-sm font-medium">Learning by building.</p>
                        <p className="mt-1 text-xs text-mute">
                            Turning concepts into practical projects.
                        </p>
                    </div>
                </div>

                <div className="absolute -right-3 bottom-25 flex items-center gap-2 rotate-[-10deg] rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-xl">
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-xs text-mute">
                        Build. Learn. Grow.
                    </span>
                </div>

            </div>
        </section>
    )
}

export default Hero