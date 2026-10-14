import { ArrowUpRight, Mail } from "lucide-react";

const contactLinks = [
    {
        label: "GitHub",
        description: "Explore my projects and code",
        href: "https://github.com/tapan-rathore",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@16.35.0/icons/github.svg",
    },
    {
        label: "LinkedIn",
        description: "Connect with me professionally",
        href: "https://www.linkedin.com/in/tapan-kumar-32134b211",
        icon: "https://www.svgrepo.com/show/157006/linkedin.svg",
    },
];

const Contact = () => {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/50 p-7 backdrop-blur-xl sm:p-12 lg:p-16">
                <div
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-300/30 blur-3xl"
                />

                <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                            Get in touch
                        </p>

                        <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-6xl">
                            Let's build something{" "}
                            <span className="font-serif font-normal italic text-accent">
                                meaningful.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-7 text-mute sm:text-base">
                            I'm open to entry-level frontend opportunities and opportunities
                            to learn, collaborate, and build useful web experiences.
                        </p>

                        <a
                            href="mailto:tapanrathore07@gmail.com"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1"

                        >
                            <Mail size={17} />
                            Email me
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className="flex flex-col gap-3">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 rounded-2xl border border-white/70 bg-white/60 p-5 transition-all hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-950/5"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-accent">
                                    <img src={link.icon} alt={link.label} />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block font-semibold">{link.label}</span>
                                    <span className="mt-1 block text-xs text-mute sm:text-sm">
                                        {link.description}
                                    </span>
                                </span>

                                <ArrowUpRight
                                    size={17}
                                    className="shrink-0 text-mute transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </a>
                        ))}

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Contact
