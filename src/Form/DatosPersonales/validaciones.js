export const validarNombre = (nombre) => {
    const length = nombre.length
    return (length > 1 && length < 30) ? true : false
}

export const validarApellido = (apellido) => {
    const length = apellido.length
    return (length > 1 && length < 51) ? true : false
}

export const validarTelefono = (telefono) => {
    const length = telefono.length
    return (length > 7 && length < 15) ? true : false
}