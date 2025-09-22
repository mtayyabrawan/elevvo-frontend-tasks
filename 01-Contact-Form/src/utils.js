export function capitalize(str) {
    return str
        .split(" ")
        .map((word) => {
            return word
                .slice(0, 1)
                .toUpperCase()
                .concat(word.slice(1).toLowerCase());
        })
        .join(" ");
}

export function setError(formField, errorMsg = "Empty") {
    const fieldError = document.querySelector(
        `input[name="${formField}"] ~ .error,textarea[name="${formField}"] ~ .error`
    );
    if (!fieldError) return;
    fieldError.innerText = errorMsg;
    fieldError.classList.remove("hidden");
    fieldError.classList.add("invalid");
}

export function resetError(formField = "all") {
    if (formField === "all") {
        const allErrors = document.querySelectorAll(".error.invalid");
        allErrors.forEach((err) => {
            err.innerText = "";
            err.classList.remove("invalid");
            err.classList.add("hidden");
        });
    } else {
        const fieldError = document.querySelector(
            `input[name="${formField}"] ~ .error,textarea[name="${formField}"] ~ .error.invalid`
        );
        if (!fieldError) return;
        fieldError.innerText = "";
        fieldError.classList.remove("invalid");
        fieldError.classList.add("hidden");
    }
}

export function isEmpty(formdata, key) {
    if (!formdata[key]) {
        setError(key, `${capitalize(key)} is required`);
        return true;
    }
    return false;
}

