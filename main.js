import pintarProductos from './assets/js/components/productos.js'
import { pintarArticulos, agregarArticulo, removerArticulo, removerTodo, vaciarCarrito, comprar, articulos } from './assets/js/components/carrito.js'

const productosContenedor = document.getElementById('productosContenedor')
const articulosContenedor = document.getElementById('articulosContenedor')

const btnsAcciones = document.getElementById('btnsAcciones')

document.addEventListener('DOMContentLoaded', () => {
  /* Pintar los productos */
  pintarProductos()

  /* Pintar los articulos */
  pintarArticulos()

  productosContenedor.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('agregar')) {
      const id = target.dataset.id
      agregarArticulo(+id, 1)
    }

    pintarArticulos()
  })

  articulosContenedor.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('agregar')) {
      const id = target.dataset.id
      agregarArticulo(+id, 1)
    }

    if (target.classList.contains('remover')) {
      const id = target.dataset.id
      removerArticulo(+id, 1)
    }

    if (target.classList.contains('removerTodo')) {
      const id = target.dataset.id
      removerTodo(+id)
    }

    pintarArticulos()
  })

  btnsAcciones.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('limpiar')) {
      vaciarCarrito()
    }

    if (target.classList.contains('comprar')) {
      if (articulos.length > 0) {
        comprar()
        pintarProductos()
      } else {
        window.alert('No hay artículos en el carrito, agregue unos cuantos')
      }
    }

    pintarArticulos()
  })
})
