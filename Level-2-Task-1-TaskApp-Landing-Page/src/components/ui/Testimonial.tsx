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
        <div className="mx-14 flex max-w-56 flex-col items-center justify-center gap-4 bg-conic-210">
            <img
                src={image}
                alt="user_image"
                className="h-10 w-10 rounded-full"
            />
            <h4 className="text-base font-medium">{name}</h4>
            <p className="w-full text-center text-sm">{review}</p>
        </div>
    );
}

export default Testimonial;
