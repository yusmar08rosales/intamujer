import React from 'react'
import './App.css'
import { useState } from 'react';
import { Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function App() {
  //estado
  const [btnstate, setBtnState] = useState(false);

  const handleClickBtn = () => {
    console.log('click btn');

    setBtnState(true);
  }

  //ejecucion del boton
  if (btnstate) {
    setTimeout(() => {
      window.location.replace('/user/registry')
    }, 1000)
  }

  return (
    <>
      <div className="logo-container">
        <img src='logo.png' alt="logo" />
      </div>

      <div className="app-container">
        <div className="left-panel">
          <div className="history-container">
            <div className='history'>
              <h3>
                Somos encargados de promover y ejecutar planes y programas que impulsen la protección  y atención de la mujer,
                mediante el diseño de políticas de desarrollo así como la creación de mecanismos para garantizar
                su protección integral en el ejercicio y disfrute de los derechos y garantías establecidas en
                la Constitución de la República Bolivariana de Venezuela, la Constitución del Estado Táchira,
                las Leyes y los Tratados Internacionales suscritos por la República aplicables en la materia.
              </h3>
            </div>
          </div>

          <div className="mission-vision-container">
            <div className="mission">
              <h2>Misión</h2>
              <p>Promoción  y ejecución de planes y programas que impulsen la protección y atención
                a la mujer, niños, niñas y adolescente  y a la familia, mediante el diseño de
                políticas de desarrollo; así como la creación de mecanismos para garantizar su
                protección integral en el ejercicio  y disfrute de los derechos y garantías establecidas
                en la Constitución de la República Bolivariana de Venezuela, la Constitución del Estado
                Táchira, las leyes y Tratados Internacionales aplicables en la materia.
              </p>
            </div>

            <div className='image1'>
              <img src='sororidad.jpg' alt='imagen1' />
            </div>
          </div>

          <div className="vision-mission-container">
            <div className='image2'>
              <img src='90cf82_e9ae103765a145d2beff654568f4a6cd~mv2.jpg' alt='imagen2' />
            </div>
            <div className="vision">
              <h2>Visión</h2>
              <p>Garantizar la igualdad jurídica, social y económica de la mujer y su familia, mediante
                el diseño de políticas de desarrollo y mecanismos que hagan efectiva su atención y
                protección integral,  promoviendo dentro de cada comunidad del Estado la ejecución de
                planes,  programas, acciones nacionales y regionales que permitan la reivindicación de
                la mujer. Participar en la atención  integral de niños, niñas y adolescentes utilizando
                una estrategia de apoyo en procura de mejorar su entorno familiar, en el marco del fomento
                de valores para la Cultura de la Paz. Así mismo, lograr la creación de los institutos municipales
                y parroquiales de la mujer en el Estado Táchira.
              </p>
            </div>
          </div>
        </div>


        <div className="right-panel">
          <header className='App-header'>
            <h3>
              El siguiente sistema es una herramienta diseñada para brindar apoyo
              y orientación <br />
              psicologica y/o legal. El mismo utiliza el conocimiento y la experiencia de expertos <br />
              en psicología y derecho para ofrecer asesoramiento y recomendaciones.<br />
              De igual manera, puede ayudar a comprender y resolver conflictos. Por otro lado, <br />
              este sistema puede realizar evaluaciones basadas en respuestas proporcionadas por el usuario y ofrecer consejos.
            </h3>

            <Button
              onClick={handleClickBtn}
              variant='contained'
              color='primary'
              size='large'
            >
              <span id='text-btn'>
                {
                  btnstate == false
                    ? 'CONTINUAR'
                    : <Box sx={{ display: 'flex' }}>
                      <CircularProgress color="inherit" />
                    </Box>
                }
              </span>
            </Button>
          </header>
        </div>
      </div>
    </>
  )
}

export default App