import productos from '../database/index.js'

/* Buscar el elemento en el DOM */
const productosContenedor = document.getElementById('productosContenedor')

/* Pintamos los productos en el DOM */
function pintarProductos () {
  /* Creamos una variable para almacenar después los productos */
  let html = ''
  /* Recorremos el array de productos */
  for (const { id, nombre, imagen, precio, cantidad } of productos) {
    html += `
    <div>
      <img src="${imagen}" alt="${nombre}">
      <div>
        <h2>${nombre} - $ ${precio}</h2>
        <p>Cantidad: ${cantidad}</p>
        <div>
          <button type="button" class="agregar" data-id="${id}">Agregar</button>
        </div>
      </div>
    </div>    
    `
  }
  productosContenedor.innerHTML = html
}

export default pintarProductos
