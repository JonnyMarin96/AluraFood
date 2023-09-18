export const validarEmail = (email) => {
    if (email.length > 8 && email.includes("@")){
        return true
    } else {
        return false
    }
}

export function validarPassword(password){
    if (password.length > 1 && password.length < 10){
        return true
    } else {
        return false
    }
}