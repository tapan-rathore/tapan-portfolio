const JourneyMap = ({ journey }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {journey.map((item) => (
                <article
                    key={item.id}
                    className="rounded-2xl border border-white/70 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-950/5 sm:p-8"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <span className="font-mono text-sm text-accent">
                            {item.id}
                        </span>
                        <span className="text-xs text-mute">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight">
                        {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-mute">
                        {item.description}
                    </p>

                </article>
            ))}
        </div>
    )
}

export default JourneyMap
