import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section class="introduccion">
      <div>
        <h1 class="titulo">¿Necesitás un celular nuevo?</h1>
        <h2 class="subtitulo" data-aos="fade-down">Entonces, te damos la bienvenida a nuestra tienda de teléfonos</h2>
        <p class="intro" data-aos="fade-down">Aquí vendemos online una gran cantidad de celulares de última tecnología como iPhone, Samsung u otras marcas. Si estás interesado en comprar algún producto te invitamos a visitar la pestaña de tienda donde recibirás información para adquirir tu próximo móvil.</p>
      </div>
    </section>
  </React.StrictMode>,
)
