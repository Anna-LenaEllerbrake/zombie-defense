export function minLength(variable, length) {
    return typeof variable == 'string' && variable.length >= length
}
