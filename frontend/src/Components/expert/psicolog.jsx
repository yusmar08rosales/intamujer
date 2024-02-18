import React, { useState, useEffect } from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authen/authContext';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export default function psicolog() {

    //estado
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    //boton de cierre de sesion
    const handleLogout = () => {
        console.log("cierre de sesión");
        localStorage.removeItem('token');
        setUser({});
        navigate('/user');
    };

    //mostrar resultados obtenidos psicologico
    useEffect(() => {
        fetch('http://localhost:8081/resultadosPsicolo')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUserData(data))
            .catch(error => console.error("Error al obtener datos:", error));
    }, []);

    //eliminar usuario psicologico
    const deleteUser = (id) => {
        fetch(`http://localhost:8081/deletePsicologico/${id}`, {
            method: 'DELETE', 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar el usuario');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data); 
        })
        .catch(error => console.error("Error al eliminar el usuario:", error));
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#9a8cf9' }}>
                <Toolbar>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="logout"
                        onClick={handleLogout}
                    >
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Telefono o Correo</TableCell>
                            <TableCell>Resultado del Test</TableCell>
                            <TableCell>Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((user) => (
                            <TableRow
                                key={user.ID} // Asegúrate de que 'id' es una propiedad del objeto
                            >
                                <TableCell component="th" scope="row">
                                    {user.ID}
                                </TableCell>
                                <TableCell>{user.Usuario} </TableCell>
                                <TableCell>{user.Telefono} </TableCell>
                                <TableCell>{user.resultado} </TableCell>
                                <TableCell>
                                    <Button onClick={() => deleteUser(user.ID)} style={{ cursor: 'pointer' }}>
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}