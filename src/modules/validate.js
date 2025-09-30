// Validator module
// exported functions for validating various data-types

export function validateString(name, value, minLength = 1) {
    if (typeof value !== "string" || value.length < minLength) {
        console.warn(
            `<string> "${name} (${value}) is invalid. Ensure at least ${minLength} characters`
        );
        return false;
    }
    return true;
}

export function validateNumber(name, value, min = 1, max = 3) {
    if (typeof value !== "number" || value < min || value > max) {
        console.warn(`<number> "${name} (${value}) is invalid. Must be in range ${min}-${max}`);
        return false;
    }
    return true;
}

export function validateBoolean(name, value) {
    if (typeof value !== "boolean") {
        console.warn(`<boolean> ${name} (${value}) is invalid. Must be true or false`);
        return false;
    }
    return true;
}
