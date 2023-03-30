//Declaracion de constantes para el ejercicio
let carrito = []
let suEnvio = 0


let nuevoStock = 0



//Funcion anonima para sumar IVA al precio
const calcularIva = () => {
  suIva = subtotal * 0.21
}

//Funciones

const bajaStock = (stockActual, qCompra) => {
  nuevoStock = (stockActual - qCompra)
  return nuevoStock
}

const calcularEnvio = () => {
  if (suSubtotal < 1000) {
    suEnvio = 30
    return suEnvio
  } else if (suSubtotal >= 1000 && suSubtotal <= 2500) {
    suEnvio = 20
    return suEnvio
  } else {
    suEnvio = 0
    return suEnvio
  }
}

const mostrarProductos = () => {
  const listadoProductos = stock.map(producto => {
    return `ID: ${producto.id}\nNOMBRE: ${producto.nombre}\nTIPO: ${producto.tipo}\nPRECIO: ${producto.precio}\nSTOCK DISPONIBLE: ${producto.stock}`
  })

  let confirmar = true

  while (confirmar) {
    let productoComprado = parseInt(prompt(`Estos son nuestros productos disponibles. Indica el ID del producto que quieres ingresar a tu carrito:\n${listadoProductos.join('\n\n')}`))

    let cantidadProducto = parseInt(prompt(`Cuantas unidades desea comprar?`))

    
    const producto = stock.find(producto => producto.id === productoComprado)

    if (producto) {
      agregarCarrito(producto, producto.id, cantidadProducto)
      bajaStock(producto.stock, cantidadProducto)
      console.log(`El stock de ${producto.nombre} ahora es: ${nuevoStock}`)
      producto.stock = nuevoStock
    } else {
      alert('Ese producto no esta disponible!')
    }
    
    let continuarComprando = confirm('Desea continuar comprando?')
    if (continuarComprando === true){
      confirmar = true
    } else {
      confirmar = false
    }
  }
}

const agregarCarrito = (producto, productoId, productoCantidad) => {
  const repetido = carrito.find(producto => producto.id == productoId)
  if (repetido){
    repetido.cantidad += productoCantidad
  } else{
    producto.cantidad += productoCantidad
    carrito.push(producto)
  }
}
alert('Hola! Bienvenido a mi tienda de hardware. Para continuar, presiona ENTER.')

let suSubtotal = 0
let suIva = 0

mostrarProductos()

const mostrarCarrito = () => {
  const suCarrito = carrito.map(producto => {
    return `NOMBRE: ${producto.nombre}\nCANTIDAD: ${producto.cantidad}\nPRECIO UNITARIO: ${producto.precio}\n\n`
  })
  return suCarrito
}

alert(`Tu carrito es:\n${mostrarCarrito()}`)
let irAPagar = parseInt(prompt('Presione 1 para ir a pagar\nPresione 2 para salir.'))

if (irAPagar === 1){
  const subtotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)

  suIva = subtotal * 0.21
  calcularEnvio()
 
  let total = suEnvio + suIva + subtotal
  
  alert(`DETALLE:\n\nSUBTOTAL: $${subtotal}\nIVA: $${suIva.toFixed(2)}\nENVIO $${suEnvio}\n\nTOTAL FINAL: $${total.toFixed(2)}`)
} else if (irAPagar === 2){
  alert('Su compra ha sido cancelada.\nGracias por visitarnos!')
} else{
  alert('ERROR! Recargue la pagina.')
}


//AGREGAR ERROR CUANDO NO SE INSERTA NADA


