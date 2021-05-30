

export default function Header({ children }) {
    return (
        <section className="shadow-sm sm:w-3/4 md:w-3/5 lg:w-4/5 mx-auto max-h-full">
            <nav className="w-full py-2 visible sm:invisible md:invisible lg:invisible items-center sm:py-0 md:py-0 lg:py-0 border-b mb-6">
                <div className="flex justify-start mb-4 items-center mx-6">
                    <svg
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="text-violet-600"
                    >
                        <path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z" />
                    </svg>
                    <h2 className="title ml-6 visible sm:invisible md:invisible lg:invisible">Reservas</h2>
                </div>
            </nav>
            <div className="h-full overflow-y-hidden relative min-w-50">
                {
                    children
                }
            </div>
        </section>
    )
}


//  shadow-sm sm:w-3/4 md:w-3/5 lg:w-2/5 mx-auto