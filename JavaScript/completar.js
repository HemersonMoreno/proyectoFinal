document.addEventListener("DOMContentLoaded", () => {

    const productContainer = document.getElementById("product-list");
    const totalCompraDiv = document.getElementById("total-compra");
    const completePurchaseButton = document.querySelector(".complete-purchase");
    const recargoContainer = document.getElementById("recargo-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const detallesCompra = JSON.parse(localStorage.getItem("detallesCompra")) || {};
    const recargoDomicilio = 150;

    function mostrarTotalCompra() {
        let total = cart.reduce((sum, product) => sum + (product.precio || 0), 0);

        if (detallesCompra.entrega === "domicilio") {
            total += recargoDomicilio; 
            recargoContainer.textContent = `Recargo por domicilio: $${recargoDomicilio}`;
        } else {
            recargoContainer.textContent = ""; 
        }

        totalCompraDiv.textContent = `Total: $${total}`;
    }

    function cargarProductosCarrito() {
        productContainer.innerHTML = ""; 

        cart.forEach((product, index) => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";

            const productImage = document.createElement("img");
            productImage.src = product.imagen;
            productImage.alt = product.nombre;
            productImage.style.width = "150px";

            const productName = document.createElement("h4");
            productName.textContent = product.nombre;

            const productDetails = document.createElement("p");
            productDetails.innerHTML = `
                <strong>Procesador:</strong> ${product.procesador}<br>
                <strong>RAM:</strong> ${product.ram}<br>
                <strong>Gráfica:</strong> ${product.tarjetaGrafica}<br>
                <strong>Precio:</strong> $${product.precio}
            `;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", () => eliminarProducto(index));

            productDiv.appendChild(productImage);
            productDiv.appendChild(productName);
            productDiv.appendChild(productDetails);
            productDiv.appendChild(deleteButton);
            productContainer.appendChild(productDiv);
        });

        if (cart.length === 0) {
            const message = document.createElement("p");
            message.textContent = "No hay productos en el carrito.";
            productContainer.appendChild(message);
        }
    }

    function eliminarProducto(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        cargarProductosCarrito(); 
        mostrarTotalCompra(); 
    }

    function validarFormularioPago() {
        const numeroTarjeta = document.getElementById("numero-tarjeta").value;
        const nombreTarjeta = document.getElementById("nombre-tarjeta").value;
        const fechaExpiracion = document.getElementById("fecha-expiracion").value;
        const codigoSeguridad = document.getElementById("codigo-seguridad").value;

        const numeroTarjetaRegex = /^[0-9]{16}$/;
        if (!numeroTarjeta.match(numeroTarjetaRegex)) {
            alert("Número de tarjeta inválido. Debe tener 16 dígitos.");
            return false;
        }

        if (nombreTarjeta.trim() === "") {
            alert("El nombre en la tarjeta es obligatorio.");
            return false;
        }


        const fechaExpiracionRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!fechaExpiracion.match(fechaExpiracionRegex)) {
            alert("Fecha de expiración inválida. Debe ser en formato MM/AA.");
            return false;
        }

        const codigoSeguridadRegex = /^[0-9]{3}$/;
        if (!codigoSeguridad.match(codigoSeguridadRegex)) {
            alert("Código de seguridad (CVV) inválido. Debe tener 3 dígitos.");
            return false;
        }

        return true;
    }

    // Función para completar la compra
    function completarCompra(event) {
        event.preventDefault(); 
        
        if (!validarFormularioPago()) {
            return;
        }
        alert("Compra completada exitosamente.");
        window.location.href = "detalleCompra.html";
        localStorage.clear(); 
    }


    completePurchaseButton.addEventListener("click", completarCompra);


    cargarProductosCarrito();
    mostrarTotalCompra();
});
