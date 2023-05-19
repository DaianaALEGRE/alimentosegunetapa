function obtenerDatosArchivoJson(params) {
    const URLJSON = '/alimentos.json';
    fetch(URLJSON)
        .then((respuesta) => respuesta.json())
        .then((datos) => console.log(datos))
}

obtenerDatosArchivoJson();