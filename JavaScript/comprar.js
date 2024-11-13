
function validarYGuardarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const presupuesto = parseFloat(document.getElementById('presupuesto').value);
    const cantidadMax = parseInt(document.getElementById('cantidadMax').value);
    const direccion = document.getElementById('direccion').value.trim();
    const entrega = document.querySelector('input[name="entrega"]:checked')?.value;

    if (!nombre || isNaN(presupuesto) || isNaN(cantidadMax) || !direccion || !entrega) {
        alert("Por favor, completa todos los campos correctamente.");
        return false;
    }

    if (presupuesto <= 0 || cantidadMax <= 0 || cantidadMax > 20) {
        alert("El presupuesto debe ser mayor a cero y la cantidad máxima de productos debe ser entre 1 y 20.");
        return false;
    }    
    const detallesCompra = {
        nombre,
        presupuesto,
        cantidadMax,
        direccion,
        entrega
    };
    localStorage.setItem("detallesCompra", JSON.stringify(detallesCompra));
    alert("Detalles guardados correctamente. Procediendo a ver productos.");
    window.location.href = 'listProductos.html'; 
    return true;
}
function vaciarCampos() {
    document.getElementById('nombre').value = "";
    document.getElementById('nombreCompra').value = "";
    document.getElementById('presupuesto').value = "";
    document.getElementById('cantidadMax').value = "";
    document.getElementById('direccion').value = "";
    const entregaRadios = document.querySelectorAll('input[name="entrega"]');
    entregaRadios.forEach(radio => radio.checked = false);
}

document.querySelector('.button button').addEventListener('click', function(event) {
    event.preventDefault();
    validarYGuardarFormulario();
});
document.querySelector('.button button[type="button"]').addEventListener('click', function(event) {
    event.preventDefault();
    vaciarCampos();
});

completePurchaseButton.addEventListener("click", completarCompra);
