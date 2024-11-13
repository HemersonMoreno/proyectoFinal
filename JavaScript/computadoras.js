let computadoras = [
  {
    id: 1,
    nombre: "Combo Básico",
    procesador: "Intel Core i3",
    ram: "8GB",
    almacenamiento: "500GB HDD",
    tarjetaGrafica: "Integrada",
    tarjetaMadre: "ASUS Prime A320M-K",
    fuentePoder: "450W",
    disipador: "Disipador estándar",
    precio: 400,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/collections/PC_GAMER.png?v=1728047785",
  },
  {
    id: 2,
    nombre: "Combo Intermedio",
    procesador: "AMD Ryzen 3",
    ram: "16GB",
    almacenamiento: "256GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1050",
    tarjetaMadre: "MSI B450M PRO-VDH",
    fuentePoder: "550W",
    disipador: "Cooler Master Hyper 212",
    precio: 600,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOoS8N0D9uvtJy2gcOVZDc8zIryktaJ6qEA&s",
  },
  {
    id: 3,
    nombre: "Combo Avanzado",
    procesador: "Intel Core i7",
    ram: "32GB",
    almacenamiento: "1TB SSD",
    tarjetaGrafica: "NVIDIA GTX 1660",
    tarjetaMadre: "Gigabyte Z490 Gaming X",
    fuentePoder: "650W",
    disipador: "Noctua NH-U12S",
    precio: 1000,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/files/ComboGamer240Hz_6481cdf1-3b31-45f2-9fb8-162565f84b77.jpg?v=1721321506",
  },
  {
    id: 4,
    nombre: "Combo Personalizado 4",
    procesador: "AMD Ryzen 5",
    ram: "40GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "AMD Radeon RX 580",
    tarjetaMadre: "ASUS TUF Gaming B550-PLUS",
    fuentePoder: "450W",
    disipador: "Disipador estándar",
    precio: 775,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer1.png?v=1705614037&width=533",
  },
  {
    id: 5,
    nombre: "Combo Personalizado 5",
    procesador: "Intel Core i5",
    ram: "8GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1660",
    tarjetaMadre: "MSI MPG Z490 GAMING EDGE",
    fuentePoder: "550W",
    disipador: "Cooler Master Hyper 212",
    precio: 850,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/files/ComboGamer240Hz_6481cdf1-3b31-45f2-9fb8-162565f84b77.jpg?v=1721321506",
  },
  {
    id: 6,
    nombre: "Combo Personalizado 6",
    procesador: "Intel Core i9",
    ram: "16GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "NVIDIA RTX 3060",
    tarjetaMadre: "Gigabyte AORUS B450 Elite",
    fuentePoder: "650W",
    disipador: "Noctua NH-D15",
    precio: 925,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer1.png?v=1705614037&width=533",
  },
  {
    id: 7,
    nombre: "Combo Personalizado 7",
    procesador: "AMD Ryzen 7",
    ram: "24GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "AMD Radeon RX 6700 XT",
    tarjetaMadre: "ASRock B560 Pro4",
    fuentePoder: "750W",
    disipador: "Disipador estándar",
    precio: 1000,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOoS8N0D9uvtJy2gcOVZDc8zIryktaJ6qEA&s",
  },
  {
    id: 8,
    nombre: "Combo Personalizado 8",
    procesador: "AMD Ryzen 5",
    ram: "32GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "NVIDIA RTX 4090",
    tarjetaMadre: "ASUS TUF Gaming B550-PLUS",
    fuentePoder: "450W",
    disipador: "Cooler Master Hyper 212",
    precio: 1075,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/collections/PC_GAMER.png?v=1728047785",
  },
  {
    id: 9,
    nombre: "Combo Personalizado 9",
    procesador: "Intel Core i5",
    ram: "40GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "AMD Radeon RX 580",
    tarjetaMadre: "MSI MPG Z490 GAMING EDGE",
    fuentePoder: "550W",
    disipador: "Noctua NH-U12S",
    precio: 1150,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer1.png?v=1705614037&width=533",
  },
  {
    id: 10,
    nombre: "Combo Personalizado 10",
    procesador: "Intel Core i9",
    ram: "8GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1660",
    tarjetaMadre: "Gigabyte AORUS B450 Elite",
    fuentePoder: "650W",
    disipador: "Noctua NH-D15",
    precio: 1225,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer2.png?v=1705617722&width=533",
  },
  {
    id: 11,
    nombre: "Combo Personalizado 11",
    procesador: "AMD Ryzen 7",
    ram: "16GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "NVIDIA RTX 3060",
    tarjetaMadre: "ASRock B560 Pro4",
    fuentePoder: "750W",
    disipador: "Disipador estándar",
    precio: 1300,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer4.png?v=1705620029&width=533",
  },
  {
    id: 12,
    nombre: "Combo Personalizado 12",
    procesador: "AMD Ryzen 5",
    ram: "24GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "AMD Radeon RX 570",
    tarjetaMadre: "ASUS TUF Gaming B450M-PLUS",
    fuentePoder: "500W",
    disipador: "Cooler Master Hyper 212",
    precio: 950,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer3.png?v=1705618446&width=533",
  },
  {
    id: 13,
    nombre: "Combo Personalizado 13",
    procesador: "Intel Core i5",
    ram: "32GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1650",
    tarjetaMadre: "MSI B560M PRO-VDH",
    fuentePoder: "650W",
    disipador: "Noctua NH-U12S",
    precio: 1025,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/collections/PC_GAMER.png?v=1728047785",
  },
  {
    id: 14,
    nombre: "Combo Personalizado 14",
    procesador: "Intel Core i9",
    ram: "40GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1660 Super",
    tarjetaMadre: "Gigabyte Z490 AORUS Ultra",
    fuentePoder: "750W",
    disipador: "Noctua NH-D15",
    precio: 1350,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer1.png?v=1705614037&width=533",
  },
  {
    id: 15,
    nombre: "Combo Personalizado 15",
    procesador: "AMD Ryzen 7",
    ram: "8GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "AMD Radeon RX 5500 XT",
    tarjetaMadre: "ASRock B450 Steel Legend",
    fuentePoder: "550W",
    disipador: "Disipador estándar",
    precio: 890,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer2.png?v=1705617722&width=533",
  },
  {
    id: 16,
    nombre: "Combo Personalizado 16",
    procesador: "AMD Ryzen 5",
    ram: "16GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1050 Ti",
    tarjetaMadre: "ASUS Prime B450M-A",
    fuentePoder: "500W",
    disipador: "Cooler Master Hyper 212",
    precio: 975,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer4.png?v=1705620029&width=533",
  },
  {
    id: 17,
    nombre: "Combo Personalizado 17",
    procesador: "Intel Core i5",
    ram: "24GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1650",
    tarjetaMadre: "MSI MAG B550M Mortar",
    fuentePoder: "600W",
    disipador: "Noctua NH-U12S",
    precio: 1050,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer2.png?v=1705617722&width=533",
  },
  {
    id: 18,
    nombre: "Combo Personalizado 18",
    procesador: "Intel Core i9",
    ram: "32GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "AMD Radeon RX 5700",
    tarjetaMadre: "Gigabyte B450 AORUS M",
    fuentePoder: "700W",
    disipador: "Noctua NH-D15",
    precio: 1200,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/collections/PC_GAMER.png?v=1728047785",
  },
  {
    id: 19,
    nombre: "Combo Personalizado 19",
    procesador: "AMD Ryzen 7",
    ram: "40GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1660",
    tarjetaMadre: "ASRock B560 Pro4",
    fuentePoder: "650W",
    disipador: "Disipador estándar",
    precio: 1100,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer3.png?v=1705618446&width=533",
  },
  {
    id: 20,
    nombre: "Combo Personalizado 20",
    procesador: "AMD Ryzen 5",
    ram: "8GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1050",
    tarjetaMadre: "ASUS Prime A320M-K",
    fuentePoder: "450W",
    disipador: "Cooler Master Hyper 212",
    precio: 875,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer4.png?v=1705620029&width=533",
  },
  {
    id: 21,
    nombre: "Combo Personalizado 21",
    procesador: "Intel Core i5",
    ram: "16GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1650",
    tarjetaMadre: "MSI B460M PRO-VDH",
    fuentePoder: "550W",
    disipador: "Cooler Master Hyper 212",
    precio: 970,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer2.png?v=1705617722&width=533",
  },
  {
    id: 22,
    nombre: "Combo Personalizado 22",
    procesador: "Intel Core i9",
    ram: "24GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "AMD Radeon RX 580",
    tarjetaMadre: "ASUS TUF Gaming Z490-PLUS",
    fuentePoder: "750W",
    disipador: "Noctua NH-D15",
    precio: 1250,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer1.png?v=1705614037&width=533",
  },
  {
    id: 23,
    nombre: "Combo Personalizado 23",
    procesador: "AMD Ryzen 7",
    ram: "32GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1660 Super",
    tarjetaMadre: "Gigabyte B550M DS3H",
    fuentePoder: "600W",
    disipador: "Noctua NH-U12S",
    precio: 1150,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer3.png?v=1705618446&width=533",
  },
  {
    id: 24,
    nombre: "Combo Personalizado 24",
    procesador: "AMD Ryzen 5",
    ram: "40GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "AMD Radeon RX 5700 XT",
    tarjetaMadre: "ASRock B450M Steel Legend",
    fuentePoder: "650W",
    disipador: "Cooler Master Hyper 212",
    precio: 1020,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/collections/PC_GAMER.png?v=1728047785",
  },
  {
    id: 25,
    nombre: "Combo Personalizado 25",
    procesador: "Intel Core i5",
    ram: "8GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1050 Ti",
    tarjetaMadre: "MSI MAG B550 TOMAHAWK",
    fuentePoder: "500W",
    disipador: "Disipador estándar",
    precio: 800,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer4.png?v=1705620029&width=533",
  },
  {
    id: 26,
    nombre: "Combo Personalizado 26",
    procesador: "Intel Core i9",
    ram: "16GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "AMD Radeon RX 6700 XT",
    tarjetaMadre: "ASUS Prime Z490-A",
    fuentePoder: "750W",
    disipador: "Noctua NH-D15",
    precio: 1350,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer2.png?v=1705617722&width=533",
  },
  {
    id: 27,
    nombre: "Combo Personalizado 27",
    procesador: "AMD Ryzen 7",
    ram: "24GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1660",
    tarjetaMadre: "Gigabyte B450 AORUS Elite",
    fuentePoder: "600W",
    disipador: "Cooler Master Hyper 212",
    precio: 1050,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer3.png?v=1705618446&width=533",
  },
  {
    id: 28,
    nombre: "Combo Personalizado 28",
    procesador: "AMD Ryzen 5",
    ram: "32GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1050 Ti",
    tarjetaMadre: "ASUS TUF B450-PLUS Gaming",
    fuentePoder: "500W",
    disipador: "Disipador estándar",
    precio: 940,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer2.png?v=1705617722&width=533",
  },
  {
    id: 29,
    nombre: "Combo Personalizado 29",
    procesador: "Intel Core i5",
    ram: "40GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "AMD Radeon RX 5500 XT",
    tarjetaMadre: "MSI B550M PRO-VDH WiFi",
    fuentePoder: "650W",
    disipador: "Cooler Master Hyper 212",
    precio: 1100,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/collections/PC_GAMER.png?v=1728047785",
  },
  {
    id: 30,
    nombre: "Combo Personalizado 30",
    procesador: "Intel Core i9",
    ram: "8GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1050",
    tarjetaMadre: "ASRock Z490 Phantom Gaming",
    fuentePoder: "550W",
    disipador: "Noctua NH-U12S",
    precio: 980,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer3.png?v=1705618446&width=533",
  },
  {
    id: 31,
    nombre: "Combo Personalizado 31",
    procesador: "AMD Ryzen 7",
    ram: "16GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1650 Super",
    tarjetaMadre: "MSI B450 TOMAHAWK MAX",
    fuentePoder: "600W",
    disipador: "Cooler Master Hyper 212",
    precio: 1100,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer4.png?v=1705620029&width=533",
  },
  {
    id: 32,
    nombre: "Combo Personalizado 32",
    procesador: "AMD Ryzen 5",
    ram: "24GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "AMD Radeon RX 5600 XT",
    tarjetaMadre: "ASUS ROG Strix B450-F",
    fuentePoder: "650W",
    disipador: "Noctua NH-U12S",
    precio: 1050,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer1.png?v=1705614037&width=533",
  },
  {
    id: 33,
    nombre: "Combo Personalizado 33",
    procesador: "Intel Core i5",
    ram: "32GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1660 Ti",
    tarjetaMadre: "Gigabyte B460M DS3H",
    fuentePoder: "600W",
    disipador: "Cooler Master Hyper 212",
    precio: 1200,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/collections/PC_GAMER.png?v=1728047785",
  },
  {
    id: 34,
    nombre: "Combo Personalizado 34",
    procesador: "Intel Core i9",
    ram: "40GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "AMD Radeon RX 5700 XT",
    tarjetaMadre: "ASRock B550 Phantom Gaming",
    fuentePoder: "750W",
    disipador: "Noctua NH-D15",
    precio: 1350,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer4.png?v=1705620029&width=533",
  },
  {
    id: 35,
    nombre: "Combo Personalizado 35",
    procesador: "AMD Ryzen 7",
    ram: "8GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1050",
    tarjetaMadre: "MSI B450-A PRO",
    fuentePoder: "500W",
    disipador: "Disipador estándar",
    precio: 900,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer3.png?v=1705618446&width=533",
  },
  {
    id: 36,
    nombre: "Combo Personalizado 36",
    procesador: "AMD Ryzen 5",
    ram: "16GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "AMD Radeon RX 580",
    tarjetaMadre: "Gigabyte A520M S2H",
    fuentePoder: "550W",
    disipador: "Cooler Master Hyper 212",
    precio: 1000,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer2.png?v=1705617722&width=533",
  },
  {
    id: 37,
    nombre: "Combo Personalizado 37",
    procesador: "Intel Core i5",
    ram: "24GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "NVIDIA GTX 1660",
    tarjetaMadre: "ASRock B560 Pro4",
    fuentePoder: "650W",
    disipador: "Cooler Master Hyper 212",
    precio: 1150,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer4.png?v=1705620029&width=533",
  },
  {
    id: 38,
    nombre: "Combo Personalizado 38",
    procesador: "Intel Core i9",
    ram: "32GB",
    almacenamiento: "2TB HDD",
    tarjetaGrafica: "AMD Radeon RX 6700",
    tarjetaMadre: "ASUS TUF Gaming B560M-PLUS",
    fuentePoder: "750W",
    disipador: "Noctua NH-D15",
    precio: 1400,
    imagen:"https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer3.png?v=1705618446&width=533",
  },
  {
    id: 39,
    nombre: "Combo Personalizado 39",
    procesador: "AMD Ryzen 7",
    ram: "40GB",
    almacenamiento: "1TB HDD",
    tarjetaGrafica: "NVIDIA GTX 1660 Super",
    tarjetaMadre: "MSI MAG B550M Mortar",
    fuentePoder: "600W",
    disipador: "Cooler Master Hyper 212",
    precio: 1300,
    imagen: "https://www.neogamingmarket.com.py/cdn/shop/files/pcgamer1.png?v=1705614037&width=533",
  },
  {
    id: 40,
    nombre: "Combo Personalizado 40",
    procesador: "AMD Ryzen 5",
    ram: "8GB",
    almacenamiento: "512GB SSD",
    tarjetaGrafica: "AMD Radeon RX 550",
    tarjetaMadre: "ASUS Prime A320M-K",
    fuentePoder: "500W",
    disipador: "Disipador estándar",
    precio: 850,
    imagen: "https://www.mipcparquecentral.com/cdn/shop/collections/PC_GAMER.png?v=1728047785",
  },
];
const productContainer = document.querySelector(".product-list");
const productImage = document.querySelector(".product-details .product-image img");
const productDescription = document.querySelector(".product-details .product-description");
const addCartButton = document.querySelector(".add-cart");
const completePurchaseButton = document.querySelector(".complete-purchase");
const filterRam = document.getElementById("filter1");
const filterGrafica = document.getElementById("filter2");
const filterButton = document.querySelector(".filter-button");
const cancelPurchaseButton = document.querySelector(".cancel-purchase");

let loadedProducts = 0;
const loadAmount = 15;
let ultimaComputadora;
let productosFiltrados = [...computadoras];  

function cargarProductos() {
    const remainingProducts = productosFiltrados.slice(loadedProducts, loadedProducts + loadAmount);

    remainingProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.onclick = () => displayProductDetails(product);

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

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productDetails);
        productContainer.appendChild(productDiv);
    });

    loadedProducts += remainingProducts.length;

    if (loadedProducts >= productosFiltrados.length) {
        const message = document.createElement("p");
        message.textContent = "No hay más productos para ver.";
        productContainer.appendChild(message);
        observador.disconnect();
    } else {
        const productosEnPantalla = document.querySelectorAll(".product-list .product");
        ultimaComputadora = productosEnPantalla[productosEnPantalla.length - 1];
        observador.observe(ultimaComputadora);
    }
}

let observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            cargarProductos();
        }
    });
}, {
    rootMargin: "0px 0px 200px 0px",
    threshold: 1.0
});

function displayProductDetails(product) {
    productImage.src = product.imagen;
    productImage.alt = product.nombre;
    productDescription.innerHTML = `
        <h4>${product.nombre}</h4>
        <p>Procesador: ${product.procesador}</p>
        <p>RAM: ${product.ram}</p>
        <p>Almacenamiento: ${product.almacenamiento}</p>
        <p>Tarjeta Gráfica: ${product.tarjetaGrafica}</p>
        <p>Tarjeta Madre: ${product.tarjetaMadre}</p>
        <p>Fuente de Poder: ${product.fuentePoder}</p>
        <p>Disipador: ${product.disipador}</p>
        <p>Precio: $${product.precio}</p>
    `;
    addCartButton.onclick = () => agregarAlCarrito(product);
}

function agregarAlCarrito(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito.");
}

function completarCompra() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const detallesCompra = JSON.parse(localStorage.getItem("detallesCompra"));

  if (!detallesCompra) {
      alert("No se han guardado los detalles de la compra.");
      return;
  }

  const totalCost = cart.reduce((sum, item) => sum + item.precio, 0);
  const totalCantidad = cart.length;

  if (totalCost > detallesCompra.presupuesto || totalCantidad > detallesCompra.cantidadMax) {
      if (totalCost > detallesCompra.presupuesto) {
          localStorage.clear();
          window.location.href = "detalleCompra.html";
          alert("El total de la compra excede tu presupuesto.");
      } else {
          localStorage.clear();
          window.location.href = "detalleCompra.html";
          alert("La cantidad de productos excede la cantidad máxima permitida.");
      }
      return;
  }

  window.location.href = "comprar.html";
}

function aplicarFiltros() { 
  const ramSeleccionada = filterRam.value;
  const graficaSeleccionada = filterGrafica.value;

  productosFiltrados = computadoras.filter(product => {
      const cumpleRam = ramSeleccionada === "Default" || product.ram === ramSeleccionada + "GB";
      const cumpleGrafica = graficaSeleccionada === "Default" || product.tarjetaGrafica.includes(graficaSeleccionada);
      return cumpleRam && cumpleGrafica;
  });

  loadedProducts = 0;
  productContainer.innerHTML = "";
  observador.disconnect(); 

  productContainer.scrollTop = 0;

  cargarProductos(); 
}

cancelPurchaseButton.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "detalleCompra.html";
});

filterButton.addEventListener("click", aplicarFiltros);
completePurchaseButton.addEventListener("click", completarCompra);
cargarProductos();
