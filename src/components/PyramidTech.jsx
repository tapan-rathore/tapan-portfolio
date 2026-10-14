import React from 'react'

const PyramidTech = (rows, isMobile = false) => {
    return (
        <div className="flex flex-col items-center gap-2">
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="flex justify-center gap-1.5 sm:gap-2"
                >
                    {row.map((tech) => (
                        <article
                            key={tech.name}
                            className={`group flex shrink-0 flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/20 p-1 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-950/5 ${isMobile
                                ? "h-16 w-14 sm:h-20 sm:w-20"
                                : "h-16 w-16 sm:h-20 sm:w-20"
                                }`}
                        >
                            <div>
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    loading="lazy"
                                    className="h-5 w-5 object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:h-8 sm:w-8"

                                />
                            </div>

                            <h3 className="mt-1 text-[8px] sm:text-xs font-semibold">{tech.name}</h3>
                        </article>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default PyramidTech
