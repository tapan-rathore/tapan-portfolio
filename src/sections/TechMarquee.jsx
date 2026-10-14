const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript ES6+",
    "React 19",
    "Redux Toolkit",
    "React Router",
    "Tailwind CSS v4",
    "Vite",
    "Git & GitHub",

];

const TechMarquee = () => {
    return (
        <section
            aria-label="Technologies I work with"
            className="overflow-hidden border-y border-black/10 bg-white/30 py-5">
            <div className="marquee-track flex w-max items-center gap-10">
                {[...technologies, ...technologies].map((technology, index) => (
                    <span
                        key={`${technology}-${index}`}
                        className="whitespace-nowrap text-sm font-medium text-mute sm:text-base"
                    >
                        <span className="mr-3 text-accent">✳</span>
                        {technology}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default TechMarquee
