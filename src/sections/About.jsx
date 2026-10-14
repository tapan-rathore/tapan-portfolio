const About = () => {
    return (
        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                    A little about me
                </p>

                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                    Curious by nature.
                    <span>
                        {" "}Driven to build.
                    </span>
                </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-5 text-base leading-8 text-mute">
                    <p>
                        I'm Tapan, a junior frontend developer who enjoys turning ideas
                        into clean, responsive web interfaces.
                    </p>

                    <p>
                        My focus is on JavaScript, React, and modern CSS workflows.
                        Through personal projects, I'm learning how to structure
                        components, manage application state, and build practical user
                        experiences.
                    </p>

                    <p>
                        I'm looking for an opportunity to contribute, learn from
                        experienced developers, and grow through real-world projects.
                    </p>
                </div>

                <div className="grid content-start gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/70 bg-white/40 p-5 backdrop-blur-sm shadow-xl shadow-purple-300">
                        <p className="text-2xl font-semibold">React</p>
                        <p className="mt-2 text-sm text-mute">
                            Component-based interfaces
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/70 bg-white/40 p-5 backdrop-blur-sm shadow-xl shadow-purple-300">
                        <p className="text-2xl font-semibold">JavaScript</p>
                        <p className="mt-2 text-sm text-mute">
                            Core language and ES6+
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/70 bg-white/40 p-5 backdrop-blur-sm shadow-xl shadow-purple-300">
                        <p className="text-2xl font-semibold">Responsive UI</p>
                        <p className="mt-2 text-sm text-mute">
                            Layouts for different screens
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/70 bg-white/40 p-5 backdrop-blur-sm shadow-xl shadow-purple-300">
                        <p className="text-2xl font-semibold">Problem solving</p>
                        <p className="mt-2 text-sm text-mute">
                            Learning through practice
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About