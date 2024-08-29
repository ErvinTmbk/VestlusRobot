
// Function to create a simple component to act as the heading for the chatbot
export default function PageHeading () {
    return(
        <div className="bg-neutral-700">
            <div className="text-center py-10 text-zinc-200">
                <h2 className="text-xl">Welcome to..</h2>
                <h1 className="text-3xl font-bold text-zinc-100">The simple AI chatbot!</h1>
                <h3 className="text-xl py-2">To chat use the text box below!</h3>
            </div>
        </div>
    )
}