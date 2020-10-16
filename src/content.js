import React, { Component, Fragment, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Card, CardActions, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [nombre, setNombre] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [fotografia, setFotografia] = React.useState('');


  const handleChange = (event) => {
    setFotografia(event.target.value);
    console.log('Test', nombre)
  };

  return (
    <Fragment>
        <Grid container spacing={3} xs={12}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}style={{marginTop:'10%'}}>
                <TextField
                id="standard-multiline-flexible"
                label="Nombre"
                nmae="nombre"
                multiline
                style={{marginLeft:'10px'}}
                rowsMax={4}
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
                <TextField
                id="standard-multiline-flexible"
                label="Telefono"
                nmae="telefono"
                multiline
                style={{marginLeft:'10px'}}
                rowsMax={4}
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
                />
                <TextField
                id="standard-multiline-flexible"
                label="Correo"
                nmae="Correo"
                multiline
                style={{marginLeft:'10px'}}
                rowsMax={4}
                value={correo}
                onChange={e => setCorreo(e.target.value)}
                />
                <TextField
                id="standard-multiline-flexible"
                label="Fotografia"
                nmae="fotografia"
                multiline
                style={{marginLeft:'10px'}} 
                rowsMax={4}
                value={fotografia}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={3}></Grid>
        
        </Grid>
    </Fragment>
  );
}
