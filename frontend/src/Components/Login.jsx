import React, { useState, useEffect } from 'react'
import './style.scss'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './authen/authContext';
import axios from 'axios';

const Login = () => {

    //estados
    const [values, setValues] = useState({
        Usuario: '',
        Contrasena: ''
    })
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    //validacion de la informacion de ingrsada en el formulario de registro
    const handleSubmit = (event) => {
        event.preventDefault();

        if (values.Usuario === '' || values.Contrasena === '') {
            alert('Por favor, complete todos los campos del formulario');
            return;
        }

        axios.post('http://localhost:8081/ingreso', values)
            .then(res => {
                console.log("Respuesta del servidor:", res);
                if (res.data.Message === "Inicio de sesión exitoso") {
                    handleLoginSuccess(res.data);

                    // Guardar el nombre de usuario en el almacenamiento local
                    localStorage.setItem('usuario', values.Usuario);

                    // Opcional: Guardar el token JWT si lo vas a usar más adelante
                    localStorage.setItem('token', res.data.token);
                } else {
                    alert('Credenciales inválidas');
                }
            })
            .catch(err => console.log(err));
    };


    //gestion segura del token para el inicio de sesion y acceso segun el rol
    const handleLoginSuccess = (userData) => {
        const base64Payload = userData.token.split('.')[1];
        const payload = atob(base64Payload);
        const userPayload = JSON.parse(payload);

        const userRole = userPayload.rol || 'usuario';
        console.log("userRole:", userRole);
        setUser({ token: userData.token, rol: userRole });
    }

    //valida los datos para el inicio de sesion
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    //redireccion dependiendo de los roles
    useEffect(() => {
        if (user && user.token) {
            let redirectPath = '/user/home'; 
        if (user.rol === 'abogado') {
            redirectPath = '/user/juridico';
        } else if (user.rol === 'psicolo') {
            redirectPath = '/user/psicologico';
        }
            navigate(redirectPath);
        }
    }, [user, navigate]);



    return (
        <>
            <div className="modalContainer" >
                <div className="modal" >
                    <header className="modal_header">
                        <h2 className="modal_header-title">
                            Ingresar
                        </h2>
                    </header>

                    <main className="modal_content">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                autoFocus
                                type='text'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Usuario'
                                placeholder='Usuario'
                                name='Usuario'
                                value={values.Usuario}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                type='password'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Contraseña'
                                placeholder='Contraseña'
                                name='Contrasena'
                                value={values.Contrasena}
                                onChange={handleChange}
                            />
                        </form>
                    </main>

                    <footer className="modal_footer">
                        <Button color='primary'
                            className='boton-esp'
                            variant='contained'
                            size='large'
                            onClick={handleSubmit}>
                            ACEPTAR
                        </Button>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default Login