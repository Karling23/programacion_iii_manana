try {
    console.log(pacienteNoRegistrado);
} catch (error){
    console.log("Error en consulta del paciente:", error.message);
}

try {
    console.log("Intentando cargar historia clínica...");
    throw new Error("Historia clínica no encontrada");
} catch (error){
    console.log("Mensaje de error:", error.message);
} finally {
    console.log("Finalizando proceso de carga de historia clínica");
}
