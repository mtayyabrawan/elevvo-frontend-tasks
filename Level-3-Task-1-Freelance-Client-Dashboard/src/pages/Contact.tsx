import ContactForm from "../components/ui/ContactForm";
import ContactInfo from "../components/ui/ContactInfo";
import FAQ from "../components/ui/FAQ";

function Contact() {
    return (
        <div className="w-full space-y-6 p-2 pb-6">
            <div className="flex h-64 w-full items-center rounded-sm bg-[url(/wallpaper-2.jpg)] bg-cover bg-center shadow-[0px_0px_2px_1px_black]">
                <div className="mx-auto flex w-[90%] max-w-5xl flex-col items-start justify-center gap-4 rounded-md bg-slate-100/20 p-6 shadow-[0px_0px_5px_1px_black] backdrop-blur-xs sm:p-8">
                    <h1 className="text-xl font-medium">Contact Us</h1>
                    <p className="w-full max-w-2xl text-justify indent-1 text-sm leading-loose text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse, ut harum. Maiores totam temporibus perferendis
                        ipsum! Exercitationem ut at deserunt?
                    </p>
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2">
                <ContactInfo />
                <ContactForm />
            </div>

            <FAQ />
        </div>
    );
}

export default Contact;
