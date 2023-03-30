const generadorId = () => { 
  return Math.floor(Math.random() * Date.now())
}

const randomizadorCantidad = () => {
  return Math.ceil(Math.random() * 10)
}

const stock = [
  {
    id: 1,
    nombre: 'Logitech G Pro Wireless',
    tipo: 'Mouse Gamer',
    descripcion: 'El mouse elegido por los mejores jugadores del mundo',
    img: './',
    precio: 100,
    stock: 32,
    cantidad: 0,
  },

  {
    id: 2,
    nombre: 'HyperX Alloy FPS Pro',
    tipo: 'Teclado Mecanico',
    descripcion: 'El teclado mecanico elegido por los mejores jugadores del mundo',
    img: './',
    precio: 90,
    stock: 55,
    cantidad: 0,
  },

  {
    id: 3,
    nombre: 'LogitechMX Keys',
    tipo: 'Teclado Membrana',
    descripcion: 'Teclado de membrana de uso profesional.',
    img: './',
    precio: 150,
    stock: 12,
    cantidad: 0,
  },

  {
    id: 4,
    nombre: 'Logitech MX Master S3',
    tipo: 'Mouse Ergonomico',
    descripcion: 'El mouse elegido por los mejores programadores del mundo',
    img: './',
    precio: 200,
    stock: 26,
    cantidad: 0,
  },
]
