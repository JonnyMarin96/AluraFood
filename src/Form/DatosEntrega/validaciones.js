

export const validarDireccion = (Direccion) => {
    return (Direccion.length > 1 && Direccion.length < 20) ? true : false
}

export const validarCiudad = (Ciudad) => {
    return (Ciudad.length > 1 && Ciudad.length < 20) ? true : false
}

export const validarEstado = (Estado) => {
    return (Estado.length > 1 && Estado.length < 20) ? true : false
}
