import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom'
import './style.scss';
import axios from "axios";
import { useAuth } from "./authen/authContext";

const Layout = () => {

  //estados
  const { setUser } = useAuth();
  const navigate = useNavigate();

  //cierre de sesion
  const handleLogout = () => {
    console.log("cierre de sesión");
    localStorage.removeItem('token');
    setUser({});
    navigate('/user');
  };

  const preguntas = [

    /*------------------------------------------
                   CICLO JURIDICO
    ------------------------------------------*/

    {
      pregunta: "¿En algún momento te han jaloneado de forma brusca o sin razón aparente?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Alguna vez has estado en una situación en la que tu pareja te ha extorsionado, amenazando con revelar secretos o contenido íntimo tuyo sin tu consentimiento?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te has encontrado en una situación en la que tu pareja te ha forzado a beber alcohol u consumir drogas?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿En alguna ocasión te has encontrado en una situación en la que tu pareja te ha causado daño físico?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "Te has encontrado en una situación en la que tu pareja ha intentado asfixiarte durante una discusión o confrontación?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿En algún momento has vivido una situación en la que tu pareja te ha amenazado con un objeto u armas, generando miedo e inseguridad en tu relación?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Alguna vez has estado en una situación en la que tu pareja te ha amenazado de muerte, generando miedo e inseguridad?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te has encontrado en una situación en la que tu pareja te ha forzado a tener relaciones sexuales sin tu consentimiento?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Alguna vez te has encontrado en una situación en la que tu pareja te ha mutilado o desfigurado?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has estado en una situación en la que tu pareja te ha presionado o manipulado emocionalmente hasta el punto de que has considerado o incluso intentado el suicidio?",
      tipo: "Fisica",
      respuestas: ["Sí", "No"],
    },





    {
      pregunta: "¿Tu pareja te ha prohibido salir con tus amigos o familiares?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Tu pareja te ha impedido trabajar o estudiar?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿En alguna ocasión has sentido que tu pareja quiere controlar lo que haces y te dice como hacer las cosas?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Tu pareja te ha obligado a pedir dinero a tus familiares o amigos?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Alguna vez te han destruido algún artículo, ya sea por accidente o intencionalmente?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Tu pareja te ha amenazado con quitarte a tus hijos?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Alguna vez te has encontrado en una situación en la que tu pareja te ha controlado en areas como comida, dinero, otros?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Tu pareja te ha controlado el acceso a tu dinero, tus tarjetas de crédito o tus cuentas bancarias?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Sientes que estás atrapado/a en una situación económica dependiente y no puedes tomar decisiones financieras por ti mismo/a?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te han obligado a entregar todo tu salario o parte de tus ingresos a otra persona?",
      tipo: "Economica",
      respuestas: ["Sí", "No"],
    },



    {
      pregunta: "¿Alguna vez te has sentido menospreciada o devaluada por tu pareja o alguien cercano?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has experimentado comentarios despectivos sobre tu apariencia o capacidades por parte de tu pareja?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te han hecho sentir que tus opiniones o pensamientos no son importantes o válidos?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Se han burlado de ti o han minimizado tus logros en un contexto íntimo?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has sentido que tus necesidades emocionales son ignoradas o no atendidas regularmente?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿En alguna ocasión te has sentido que han descalificado o menospreciado tus logros o habilidades?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Alguna vez has sentido que tu pareja te ha ridiculizado o se ha burlado de ti?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Alguna vez te has sentido humillada en público, haciéndote sentir avergonzado o menospreciado?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te has sentido intimidada o te ha hecho sentir incómoda con su actitud o comportamiento?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te han hecho sentir culpable por situaciones o problemas que no son de tu responsabilidad?",
      tipo: "Verbal",
      respuestas: ["Sí", "No"],
    },


    /*------------------------------------------
                CICLO PSICOLOGICO
    ------------------------------------------*/
    {
      pregunta: "¿Has sido amenazada con violencia física por tu pareja si no cumples con sus expectativas o demandas?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Ha utilizado tu pareja a tus hijos, familiares u otras personas cercanas como medio de control o amenaza?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te han obligado a tener relaciones sexuales o a realizar actos sexuales contra tu voluntad?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Ha habido intentos de tu pareja de destruir tu reputación personal o profesional como forma de control?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has vivido situaciones donde te has sentido en peligro físico por la conducta de tu pareja?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Ha habido amenazas de daño físico hacia personas que te importan como forma de controlarte?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te han restringido de manera severa el acceso a recursos básicos como comida, ropa o atención médica?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has sido vigilada, perseguida o acosada por tu pareja, incluso en espacios públicos?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has sido forzada a cometer actos ilegales o moralmente cuestionables bajo amenaza o coacción?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has experimentado amenazas de muerte o daño físico grave por parte de tu pareja?",
      tipo: "peligro",
      respuestas: ["Sí", "No"],
    },


    {
      pregunta: "¿Has sido amenazada con ser abandonada o que te dejen sin apoyo si no cumples con ciertas demandas?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Tu pareja ha insinuado que nadie más te querría o estaría contigo además de él/ella?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has experimentado manipulación emocional para hacerte sentir en deuda o agradecida por cosas mínimas?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has sido aislada de tus amigos, familia o redes de apoyo social?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Tu pareja ha amenazado con lastimarse a sí mismo/a o a ti si decides dejar la relación?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Se han utilizado tus vulnerabilidades o inseguridades personales en tu contra?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has sido forzada a realizar acciones o comportamientos que van en contra de tus valores o deseos?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Tu pareja ha controlado aspectos financieros o recursos económicos como forma de poder sobre ti?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Te han obligado a justificar tus acciones o comportamientos de manera constante y excesiva?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    },
    {
      pregunta: "¿Has experimentado chantaje emocional, como amenazas de revelar secretos personales o íntimos?",
      tipo: "riesgo",
      respuestas: ["Sí", "No"],
    }
  ];
  /*------------------------------------------
          ENVIO DE RESULTADOS JURIDICOS
  ------------------------------------------*/

  //guarda el tipo de violencia juridica
  const enviarResultados = async (tipoMaltrato) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No se ha iniciado sesión o falta el token');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/guardarJ', {
        resultado: tipoMaltrato

      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log("Respuesta del servidor:", response.data.message);
    } catch (error) {
      console.error('Error al enviar resultados:', error);
    }
  };

  //verifica si tiene resultados en el test juridico
  const verificarTestCompletado = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No se ha iniciado sesión o falta el token');
      return;
    }

    try {
      const response = await axios.get('http://localhost:8081/verificarTestJuri', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Aquí debes actualizar el estado basado en la respuesta
      if (response.data.testCompletado) {
        setTestYaCompletado(true);
      }
    } catch (error) {
      console.error('Error al verificar el test:', error);
    }
  };

  /*------------------------------------------
        ENVIO DE RESULTADOS PSICOLOGICOS
  ------------------------------------------*/

  //guarda el tipo de violencia psicologica
  const enviarResultadosPsico = async (tipoMaltrato) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No se ha iniciado sesión o falta el token');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/guardar', {
        resultado: tipoMaltrato

      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log("Respuesta del servidor:", response.data.message);
    } catch (error) {
      console.error('Error al enviar resultados:', error);
    }
  };

    //verifica si tiene resultados en el test psicologico
  const verificarTestCompletadoPsico = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No se ha iniciado sesión o falta el token');
      return;
    }

    try {
      const response = await axios.get('http://localhost:8081/verificarTest', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Aquí debes actualizar el estado basado en la respuesta
      if (response.data.testCompletado) {
        setTestYaCompletado(true);
      }
    } catch (error) {
      console.error('Error al verificar el test:', error);
    }
  };

  //estado.
  const [respuestaTemporal, setRespuestaTemporal] = useState(null);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [contador, setContador] = useState(0);
  const [contadorSi, setContadorSi] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [grupoActual, setGrupoActual] = useState("Fisica");

  const [finalizado, setFinalizado] = useState(false); // Estado para saber si el cuestionario ha terminado
  const [mensajeFinal, setMensajeFinal] = useState(""); // Estado para el mensaje final
  const [testYaCompletado, setTestYaCompletado] = useState(false);

  //verificadion de los test
  useEffect(() => {
    verificarTestCompletado();
    verificarTestCompletadoPsico();
  }, []);

  //caja por si tiene historial de respuesta
  const renderFinal = () => {
    if (testYaCompletado) {
      return (
        <div className="modalContainer">
          <div className="modal">
            <main className="modal_content">
              <p>Test Finalizado</p>
            </main>
            <footer className="modal_footer">
              <Button
                onClick={handleLogout}
                color='primary'
                variant='contained'
                size='large'>
                Cerrar
              </Button>
            </footer>
          </div>
        </div>
      );
    } else if (finalizado) {
      return renderModalRespuestas();
    } else {
      return renderPregunta();
    }
  };

  // Almacena la respuesta temporalmente
  const handleCheckboxChange = (respuesta) => {
    setRespuestaTemporal(respuesta); 
  };

  //define las reglas dependiendo de la respuesta a las preguntas
  const handleSiguienteClick = () => {
    if (respuestaTemporal !== null) {
      setRespuestas([...respuestas, respuestaTemporal]);

      if (respuestaTemporal === "Sí") {
        setContadorSi(contadorSi + 1);
      }
      if (preguntaActual === 0 && respuestaTemporal === "No") {
        // Si es la primera pregunta y la respuesta es "No", cambia de grupo directamente
        determinarProximoGrupo();
      } else {
        // Si la primera pregunta es "Sí" pero tiene 4 respuestas de "no"
        if (respuestaTemporal === "No") {
          manejarRespuestaNo();
        } else {
          avanzarAPreguntaSiguiente();
        }
      }
      setRespuestaTemporal(null);
    } else {
      alert('Por favor seleccione alguna de las opciones');
    }
  };

  //ruta si la respuesta es si
  const avanzarAPreguntaSiguiente = () => {
    const preguntasDelGrupo = preguntas.filter(p => p.tipo === grupoActual);
    if (preguntaActual < preguntasDelGrupo.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      // Finaliza el cuestionario cuando se responde la última pregunta del grupo actual
      setFinalizado(true);
      establecerMensajeFinal();
      finalizarTest();
    }
  };

  //ruta si responde no 4 veces 
  const manejarRespuestaNo = () => {
    const nuevoContador = contador + 1;
    setContador(nuevoContador);

    if (nuevoContador >= 4 || preguntaActual === preguntas.filter(p => p.tipo === grupoActual).length - 1) {
      determinarProximoGrupo();
    } else {
      setPreguntaActual(preguntaActual + 1); 
    }
  };

  // Esta función determina el próximo grupo de preguntas
  const determinarProximoGrupo = () => {
    setContador(0);

    const nuevoGrupo = grupoActual === "Fisica" ? "Economica" : grupoActual === "Economica" ? "Verbal" : grupoActual === "Verbal" ? "riesgo" : grupoActual === "riesgo" ? "peligro" : null;
    if (nuevoGrupo) {
      setGrupoActual(nuevoGrupo);
      setPreguntaActual(0);
    } else {
      // Si no hay más grupos, finaliza el cuestionario
      setFinalizado(true);
      establecerMensajeFinal();
      finalizarTest();
    }
  };

  //resultados finales
  const establecerMensajeFinal = () => {
    const algunaRespuestaSi = respuestas.some(respuesta => respuesta === "Sí");

    if (!algunaRespuestaSi) {
      setMensajeFinal("Nos pondremos en contacto contigo, ¡NO ESTAS SOLA! ");
    } else {
      if (grupoActual === "Fisica") {
        setMensajeFinal("¡NO ESTAS SOLA! Estas corriendo peligro ten cuidado estas sufriendo violencia fisica. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda. Además,puedes acudir a las siguientes instituciones para presentar una denuncia: Cuerpos policiales, CICPC (Cuerpo de Investigaciones Científicas, Penales y Criminalísticas), Prefectura y Ministerio publico.");
      } else if (grupoActual === "Economica") {
        setMensajeFinal("¡NO ESTAS SOLA! Estas sufriendo de violencia patrimonial ten cuidado porque esto se puede agravar. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda. Además,puedes acudir a las siguientes instituciones para presentar una denuncia: Ministerio Publico.");
      } else if (grupoActual === "Verbal") {
        setMensajeFinal("¡NO ESTAS SOLA! Estas sufriendo de maltrato verbal ten cuidado porque esto puede ir a peor. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda. Además,puedes acudir a las siguientes instituciones para presentar una denuncia: Ministerio publico, Cuerpos policiales y Prefectura");
      } else if (grupoActual === "peligro") {
        setMensajeFinal("¡NO ESTAS SOLA! es importante que reconozcas que estas experimentando violencia psicológica. A menudo, este tipo de violencia comienza de manera sutil y puede ser difícil de identificar. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda. Además,puedes acudir a las siguientes instituciones para presentar una denuncia: Ministerio publico y Cuerpos policiales.");
      } else if (grupoActual === "riesgo") {
        setMensajeFinal("¡NO ESTAS SOLA! Estas sufriendo situaciones de violencia psicológica ten cuidado, No tienes que manejar esto por tu cuenta. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda. Además,puedes acudir a las siguientes instituciones para presentar una denuncia: Ministerio publico y Cuerpos policiales.");
      } else {
        setMensajeFinal("Nos pondremos en contacto contigo, ¡NO ESTAS SOLA!");
      }
    }
  };

  //en caso de responde no a todos los ciclos
  const finalizarTest = () => {
    const algunaRespuestaSi = respuestas.some(respuesta => respuesta === "Sí");
    let tipoMaltrato;
    if (!algunaRespuestaSi) {
      tipoMaltrato = "ir al instituto";
      enviarResultados(tipoMaltrato);
      enviarResultadosPsico(tipoMaltrato);
    } else {
      tipoMaltrato = grupoActual;


      if (grupoActual === "Fisica" || grupoActual === "Economica" || grupoActual === "Verbal") {
        // Enviar a la tabla jurídico
        enviarResultados(tipoMaltrato);
      }

      if (grupoActual === "riesgo" || grupoActual === "peligro" || grupoActual === "Verbal") {
        // Enviar a la tabla psicológico
        enviarResultadosPsico(tipoMaltrato);
      }
    }

    establecerMensajeFinal();
  };

  // muestra la pregunta actual.
  const renderPregunta = () => {
    const preguntasGrupoActual = preguntas.filter(p => p.tipo === grupoActual);

    return (
      <div className="fondo">
        <div className="preg">
          <h1 className="pregunt">{preguntasGrupoActual[preguntaActual].pregunta}</h1>
          <div className="resp">
            {preguntasGrupoActual[preguntaActual].respuestas.map((respuesta, index) => (
              <label key={index}>
                <input
                  type="radio"
                  className="boton"
                  checked={respuestaTemporal === respuesta}
                  onChange={() => handleCheckboxChange(respuesta)}
                />
                {respuesta}
              </label>
            ))}
          </div>

          <div>
            {finalizado && mensajeFinal ? (renderModalRespuestas()) : (
              <>
                <Button
                  onClick={handleSiguienteClick}
                  variant='contained'
                  color='primary'
                  size='large'
                >
                  Siguiente
                </Button>
              </>
            )}
          </div>

        </div>
      </div>
    );
  };

  //muestra respuesta
  const renderModalRespuestas = () => {
    return (
      <div className="modalContainer">
        <div className="modal">
          <header className="modal_header">
            <h2 className="modal_header-title">Respuesta</h2>
          </header>
          <main className="modal_content">
            <p>{mensajeFinal}</p>
          </main>
          <footer className="modal_footer">
            <Button
              onClick={handleLogout}
              color='primary'
              variant='contained'
              size='large'>
              Cerrar
            </Button>
          </footer>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderFinal()}
    </div>
  );

};
export default Layout;