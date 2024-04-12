


export const formValidator = (type, input) => {

    if (type === "email") {
        if (input.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return true;
        }
    }
    if(type === "fullName") {
        const nameRegex = /^[a-zA-Z\s]{3,20}$/;
        return nameRegex.test(input);
    }
    if (type === "password") {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,20}$/;
        return passwordRegex.test(input);
    }
    if (type === "text") {
        const textRegex = /^[a-zA-Z0-9._-]{3,20}$/;
        return textRegex.test(input);
    }
    return false;
}
