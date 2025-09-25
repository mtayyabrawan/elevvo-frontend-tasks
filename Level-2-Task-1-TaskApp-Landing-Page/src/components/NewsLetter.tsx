function NewsLetter() {
    return (
        <form noValidate autoComplete="off" className="flex h-fit w-1/2 gap-3">
            <input
                type="email"
                placeholder="adam@mail.com"
                autoComplete="off"
                className="after:content w-full rounded-2xl bg-stone-600 p-1.5 indent-3 text-sm placeholder:text-stone-400 focus-visible:outline-hidden"
            />
            <button
                type="submit"
                className="cursor-pointer rounded-2xl bg-neutral-950 px-2 text-xs font-medium hover:bg-neutral-950/50 focus-visible:outline-hidden"
            >
                Subscribe
            </button>
        </form>
    );
}

export default NewsLetter;
