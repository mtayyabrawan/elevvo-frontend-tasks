function Testimonial({
    name,
    review,
    image,
}: {
    name: string;
    review: string;
    image: string;
}) {
    return (
        <div className="mx-4 flex max-w-56 flex-col items-center justify-center gap-2 bg-conic-210 sm:mx-8 sm:gap-4 md:mx-14">
            <img
                src={image}
                alt="user_image"
                className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
            />
            <h4 className="text-sm font-medium sm:text-base">{name}</h4>
            <p className="w-full text-center text-xs sm:text-sm">{review}</p>
        </div>
    );
}

export default Testimonial;
