import JourneyMap from "../components/JourneyMap";

const journey = [
    {
        id: "01",
        period: "The Foundation",
        title: "Learning Web Development",
        description:
            "Built a foundation in HTML, CSS, JavaScript, responsive layouts, and Git.",
    },
    {
        id: "02",
        period: "Building with React",
        title: "Modern Frontend Development",
        description:
            "Learned React components, hooks, React Router, and reusable UI patterns.",
    },
    {
        id: "03",
        period: "State & Applications",
        title: "Building Personal Projects",
        description:
            "Practiced Redux Toolkit, LocalStorage, and application workflows through personal projects.",
    },
    {
        id: "04",
        period: "What's Next",
        title: "Growing as a Developer",
        description:
            "Continuing to improve problem-solving skills, frontend architecture, and interview preparation.",
    },
];

const Journey = () => {
    return (
        <section id="journey" className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                    The process
                </p>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                    My learning{" "}
                    <span className="font-serif font-normal italic text-accent">
                        journey.
                    </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-mute sm:text-base">
                    Every project is an opportunity to learn something new, solve a
                    problem, and become a better developer.
                </p>
            </div>

            <JourneyMap journey={journey} />
        </section>
    )
}

export default Journey
