import ContactForm from "../components/ui/ContactForm";
import ContactInfo from "../components/ui/ContactInfo";
import FAQ from "../components/ui/FAQ";

function Contact() {
    return (
        <div className="w-full space-y-6 p-2 pb-6">
            <div className="flex h-96 w-full items-center rounded-sm bg-[url(/wallpaper-2.jpg)] bg-cover bg-center shadow-[0px_0px_2px_1px_black]">
                <div className="ml-56 flex w-fit flex-col items-start justify-center gap-4 rounded-md bg-slate-100/20 p-8 shadow-[0px_0px_5px_1px_black] backdrop-blur-xs">
                    <h1 className="text-xl font-medium">Contact Us</h1>
                    <p className="w-[30rem] text-justify indent-1 text-sm leading-loose text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse, ut harum. Maiores totam temporibus perferendis
                        ipsum! Exercitationem ut at deserunt?
                    </p>
                </div>
            </div>
            <div className="grid h-fit w-full grid-cols-2 grid-rows-1 place-items-center">
                <ContactInfo />
                <ContactForm />
            </div>
            <FAQ />
        </div>
    );
}

export default Contact;
