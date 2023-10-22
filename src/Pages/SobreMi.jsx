import './SobreMi.css'
import fondo from '../assets/img/pexels.jpg'



const SobreMi = () => {
    return (
        <>
            {<div className="contenedor-con-fondo">
                <img className='imagenfondo' src={fondo} />
            </div>}
          <div className='padre'>
                <div className='contenedor-skills'>
                    <div className='card'>
                        <div className='separador-sobremi'>
                            <h2 className='full'>Full Stack Developer</h2>
                            <h1 className='nom'>Antonio Oyuela Sánchez</h1>
                            <p className='hab'>Soy una "especie" de navaja multiusos, me explico:
                                Soy Técnico en Sistemas Microinformáticos y Redes, soy un Preimpresor Digital
                                y soy un Desorrallor Junior Full-Stack, más orientado al área del Font-Web,
                                teniendo diversas habilidades y experiencias.
                            </p>
                            <p className='hab'>En mi rol como Técnico en Sistemas Microinformáticos y Redes, tengo experiencia en la configuración, 
                                mantenimiento y solución de problemas relacionados con sistemas informáticos y redes. Desde la instalación de software y hardware hasta la resolución de fallas de red, 
                                puedo abordar una amplia gama de desafíos tecnológicos.
                            </p>
                            <p className='hab'>Como Desarrollador Web Junior Full-Stack, tengo conocimientos sólidos en diseño de interfaces y experiencia de usuario, 
                                así como habilidades técnicas en desarrollo web. Puedo crear experiencias de usuario atractivas y funcionales, utilizando diferentes tecnologías y lenguajes de programación.
                            </p>
                            <p className='hab'>Además, como Preimpresor Digital, tengo experiencia en la preparación y ajuste de archivos digitales para la impresión. 
                                Puedo trabajar con programas de diseño gráfico y asegurarme de que los archivos estén listos para la producción, garantizando la calidad y precisión en cada proyecto.
                            </p>
                            <p className='hab'>En resumen, mi conjunto de habilidades como Técnico en Sistemas Microinformáticos y Redes, Desarrollador Web Junior Full-Stack y Preimpresor Digital 
                                me permite enfrentar una variedad de desafíos y desempeñarme en diferentes roles dentro del ámbito tecnológico. Estoy preparado para adaptarme a diversas situaciones y entregar resultados de calidad 
                                en cada tarea que emprendo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SobreMi