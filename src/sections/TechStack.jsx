import PyramidTech from "../components/PyramidTech";
import techStack from "../data/techStack"


const TechStack = () => {
    const createRows = (rowSizes) => {
        const rows = [];
        let startIndex = 0;

        rowSizes.forEach((size) => {
            rows.push(techStack.slice(startIndex, startIndex + size));
            startIndex += size;
        });

        return rows
    }

    const desktopRows = createRows([7, 5, 3]);
    const mobileRows = createRows([4, 4, 4, 3]);

    return (
        <section id="stack" className="mx-auto max-w-6xl px-6 py-24" >
            <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2rem] text-accent">
                    Tools of the trade
                </p>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                    My tech <span className="font-serif font-normal italic text-accent">stack.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-mute sm:text-base">
                    The technologies I use to build projects and continue growing as a frontend developer.
                </p>
            </div>

            <div className="mt-2 sm:hidden">
                {PyramidTech(mobileRows, true)}
            </div>

            <div className="mt-2 hidden sm:block">
                {PyramidTech(desktopRows)}
            </div>

        </section>
    )
}

export default TechStack
