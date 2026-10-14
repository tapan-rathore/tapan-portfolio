const Background = () => {
    return (
        <div 
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <div className="bg-grid" />
            <div className="bg-grain" />
        </div>
    )
}

export default Background
