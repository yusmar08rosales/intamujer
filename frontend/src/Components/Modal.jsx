import React, { useState } from 'react'
import './style.scss'
import { TextField, Button } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

const Modal = () => {

    //estados
    const [values, setValues] = useState({
        Nombre: '',
        Apellido: '',
        Usuario: '',
        Contrasena: '',
        Telefono: ''
    })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    //registro en la base de datos
    const handleSubmit = (event) => {
        event.preventDefault();

        if (values.Nombre === '' || values.Apellido === '' || values.Usuario === '' || values.Contrasena === '' || values.Telefono === '') {
            alert('Por favor, complete todos los campos del formulario');
            return;
        }
        console.log('datos: ');
        console.log(values);
        axios.post('http://localhost:8081/registro', values)
            .then(res => {
                console.log(res);
                setIsFormSubmitted(true);
            })
            .catch(err => console.log(err));
    };

    //redirección
    if (isFormSubmitted) {
        return <Navigate to={'/user'} />
    }

    return (
        <>
            <div className="modalContainer" >
                <div className="modal" >
                    <header className="modal_header">
                        <h2 className="modal_header-title">
                            REGISTRAR
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
                                label='Nombre'
                                placeholder='Nombre'
                                value={values.Nombre}
                                onChange={e => setValues({ ...values, Nombre: e.target.value })}
                            />
                            <TextField
                                fullWidth
                                autoFocus
                                type='text'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Apellido'
                                placeholder='Apellido'
                                value={values.Apellido}
                                onChange={e => setValues({ ...values, Apellido: e.target.value })}
                            />
                            <TextField
                                fullWidth
                                autoFocus
                                type='text'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Numero de Telefono o Correo'
                                placeholder='Numero de Telefono o Correo'
                                value={values.Telefono}
                                onChange={e => setValues({ ...values, Telefono: e.target.value })}
                            />
                            <TextField
                                fullWidth
                                autoFocus
                                type='text'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Usuario'
                                placeholder='Usuario'
                                value={values.Usuario}
                                onChange={e => setValues({ ...values, Usuario: e.target.value })}
                            />
                            <TextField
                                fullWidth
                                type='password'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Contrasena'
                                placeholder='Contrasena'
                                value={values.Contrasena}
                                onChange={e => setValues({ ...values, Contrasena: e.target.value })}
                            />
                            <Link to={'/user'}>
                                Ingresar
                            </Link>
                        </form>
                    </main>

                    <footer className="modal_footer">
                        <Link to={'/'}>
                            <Button color='primary'
                                variant='contained'
                                size='large'>
                                CANCELAR
                            </Button>
                        </Link>
                        <Link to={isFormSubmitted}>
                            <Button color='primary'
                                className='boton-esp'
                                variant='contained'
                                size='large'
                                onClick={handleSubmit}>
                                ACEPTAR
                            </Button>
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default Modal