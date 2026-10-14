import { ArrowUpRight } from "lucide-react"

const ProjectCard = ({ id, title, description, tech, image, imageAlt, liveUrl, githubUrl }) => {
    return (
        <article className="group flex h-full flex-col rounded-3xl border border-white/70 bg-white/50 p-6 backdrop-blur-sm   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/5 sm:p-8">
            <div className="mb-7 aspect-video overflow-hidden rounded-2xl border border-black/5 bg-white/60">
                {image
                    ? (
                        <img
                            src={image}
                            alt={imageAlt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                    ) : (
                        <div className="flex h-full items-center justify-center text-sm text-mute">
                            Project preview
                        </div>
                    )}
            </div>
            <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-sm text-mute">{id}</span>
                <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-mute">
                    Personal Project
                </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
            </h3>

            <p className="mt-4 flex-1 text-sm leading-7 text-mute sm:text-base">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((item) => (
                    <span
                        key={item}
                        className="rounded-full bg-purple-100/70 px-3 py-1.5 text-xs font-medium text-mute">
                        {item}
                    </span>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-black/10 pt-5">
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-white transition-colors hover:bg-accent"
                    >
                        Live Demo
                        <ArrowUpRight size={16} />
                    </a>
                )}

                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@16.35.0/icons/github.svg"
                            alt="github"
                            className="h-5 w-5"
                        />                        Source Code
                        <ArrowUpRight size={15} />
                    </a>
                )}

                {!liveUrl && !githubUrl && (
                    <span className="text-sm text-mute">
                        Project details coming soon
                    </span>
                )}
            </div>
        </article>
    )
}

export default ProjectCard
