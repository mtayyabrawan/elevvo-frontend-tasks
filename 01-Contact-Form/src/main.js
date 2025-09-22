import { isEmpty } from "./utils";

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", handleSubmit);

async function handleSubmit(evt) {
    evt.preventDefault();
    const formData = {};
    new FormData(evt.currentTarget).forEach((val, key) => {
        formData[key] = val.trim();
    });
    validateForm(formData);
    return;
}

function validateForm(formdata) {
    for (const key in formdata) {
        if (isEmpty(formdata, key)) continue;
    }
}
