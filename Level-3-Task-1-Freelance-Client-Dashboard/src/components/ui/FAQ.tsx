function FAQ() {
    return (
        <div className="w-full space-y-4 px-4 py-6">
            <h2 className="text-center text-lg font-medium">FAQ's</h2>
            <div className="mx-auto w-full max-w-3xl space-y-3 rounded-md bg-slate-400/40 p-2 shadow-[0px_0px_4px_-1px_black] sm:p-4">
                <details className="group w-full">
                    <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-md bg-slate-400 p-3 text-base font-medium hover:bg-slate-400/80 focus-visible:outline-none">
                        <span>Where to report error?</span>
                        <svg
                            className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                        >
                            <path
                                d="M6 9l6 6 6-6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </summary>
                    <p className="p-3 text-sm leading-loose">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Architecto vitae, voluptas repudiandae reiciendis
                        at fuga. Quos, itaque incidunt facilis voluptatibus
                        consequatur rem facere exercitationem et blanditiis quo
                        tenetur vero quidem eius consequuntur molestias
                        consectetur, nam ad aperiam suscipit architecto, magni
                        sapiente sunt. Iure temporibus adipisci mollitia fugit
                        itaque qui ab?
                    </p>
                </details>

                <details className="group w-full">
                    <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-md bg-slate-400 p-3 text-base font-medium hover:bg-slate-400/80 focus-visible:outline-none">
                        <span>Do you support international call?</span>
                        <svg
                            className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                        >
                            <path
                                d="M6 9l6 6 6-6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </summary>
                    <p className="p-3 text-sm leading-loose">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto vitae, voluptas repudiandae reiciendis at
                        fuga. Quos, itaque incidunt facilis voluptatibus
                        consequatur rem facere exercitationem et blanditiis quo
                        tenetur vero quidem eius consequuntur molestias
                        consectetur, nam ad aperiam suscipit architecto, magni
                        sapiente sunt. Iure temporibus adipisci mollitia fugit
                        itaque qui ab?
                    </p>
                </details>

                <details className="group w-full">
                    <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-md bg-slate-400 p-3 text-base font-medium hover:bg-slate-400/80 focus-visible:outline-none">
                        <span>How much time you take to reply?</span>
                        <svg
                            className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                        >
                            <path
                                d="M6 9l6 6 6-6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </summary>
                    <p className="p-3 text-sm leading-loose">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Architecto vitae, voluptas repudiandae reiciendis
                        at fuga. Quos, itaque incidunt facilis voluptatibus
                        consequatur rem facere exercitationem et blanditiis quo
                        tenetur vero quidem eius consequuntur molestias
                        consectetur, nam ad aperiam suscipit architecto, magni
                        sapiente sunt. Iure temporibus adipisci mollitia fugit
                        itaque qui ab?
                    </p>
                </details>
            </div>
        </div>
    );
}

export default FAQ;
