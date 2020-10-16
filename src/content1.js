import React, { Component, Fragment, useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListIcon from '@material-ui/icons/List';
import StarIcon from '@material-ui/icons/Star';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, TextField, Card, CardActions, CardContent } from '@material-ui/core'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [nombre, setNombre] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [fotografia, setFotografia] = React.useState('');
  const [menu, setMenu] = React.useState(1);


  const handleChange = (event) => {
    setFotografia(event.target.value);
    const json = getMoviesFromApi()
    console.log('Test', json)
  };
  const option = (valor) => {
    setMenu(valor)
  }
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(1, 'Juan Diaz Leon', '5512341234', 'test1@test.com', 'http://foto.jpg'),
    createData(2, 'Alina Santiago Ambrosio', '5512341235', 'test2@test.com', 'http://foto.jpg'),
    createData(3, 'Mario Rivera Renteria', '5512341236', 'test3@test.com', 'http://foto.jpg'),
    createData(4, 'Manuel Zapata Dominguez', '5512341237', 'test4@test.com', 'http://foto.jpg'),
    createData(5, 'Berenice Miranda Islas', '5512341238', 'test5@test.com', 'http://foto.jpg'),
  ];

  async function getMoviesFromApi() {
    try {
      let response = await fetch('http://localhost:8001/');
      let responseJson = await response.json();
      return responseJson.movies;
     } catch(error) {
      console.error(error);
    }
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
            <ListItem button onClick={e => option(1)} >
                <ListItemIcon><StarIcon /></ListItemIcon>
                <ListItemText primary={'Inicio'} />
            </ListItem>
            <ListItem button onClick={e => option(2)} >
                <ListItemIcon><ListIcon /></ListItemIcon>
                <ListItemText primary={'Listar'} />
            </ListItem>
            <ListItem button onClick={e => option(3)} >
                <ListItemIcon><AddCircleIcon /></ListItemIcon>
                <ListItemText primary={'Agregar'} />
            </ListItem>
            <ListItem button onClick={e => option(4)} >
                <ListItemIcon><EditIcon /></ListItemIcon>
                <ListItemText primary={'Editar'} />
            </ListItem>
            <ListItem button onClick={e => option(5)} >
                <ListItemIcon><DeleteForeverIcon /></ListItemIcon>
                <ListItemText primary={'Borrar'} />
            </ListItem>          
      </List>
      <Divider />
      <List>
             <ListItem button >
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary={'Salir'} />
            </ListItem>    
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Proyecto Crud (Adolfo Dorantes Nazario)
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Fragment>
        {menu===1 && <>
            <Grid container spacing={3} xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}style={{marginTop:'10%', fontSize:'30px'}}>
                    Bienvenido al sistema para dar de alta usuarios, en el menu de su izquierda encontrara las opciones
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>}
        {menu===2 && <>
            <Grid container spacing={3} xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}style={{marginTop:'10%'}}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Id Registro</TableCell>
                                <TableCell align="left">Nombre</TableCell>
                                <TableCell align="left">Telefono</TableCell>
                                <TableCell align="left">Correo</TableCell>
                                <TableCell align="left">Fotografia</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                                <TableCell align="left">{row.fat}</TableCell>
                                <TableCell align="left">{row.carbs}</TableCell>
                                <TableCell align="left">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>}
        {menu===3 && <>
            <Grid container spacing={3} xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}style={{marginTop:'10%'}}>
                    <TextField
                    id="standard-multiline-flexible"
                    label="Nombre"
                    nmae="nombre"
                    multiline
                    style={{marginLeft:'10px', width:'100%'}}
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    />
                    <TextField
                    id="standard-multiline-flexible"
                    label="Telefono"
                    nmae="telefono"
                    multiline
                    style={{marginLeft:'10px' , width:'100%'}}
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    />
                    <TextField
                    id="standard-multiline-flexible"
                    label="Correo"
                    nmae="Correo"
                    multiline
                    style={{marginLeft:'10px', width:'100%'}}
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                    />
                    <TextField
                    id="standard-multiline-flexible"
                    label="Fotografia"
                    nmae="fotografia"
                    multiline
                    style={{marginLeft:'10px', width:'100%', marginBottom:'20px'}} 
                    value={fotografia}
                    onChange={handleChange}
                    />
                    <Button variant="contained" color="primary">
                        Agregar
                    </Button>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>}
        {menu===4 && <>
            <Grid container spacing={3} xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}style={{marginTop:'10%'}}>
                    <TextField
                    id="standard-multiline-flexible"
                    label="Nombre"
                    nmae="nombre"
                    multiline
                    style={{marginLeft:'10px', width:'100%'}}
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    />
                    <TextField
                    id="standard-multiline-flexible"
                    label="Telefono"
                    nmae="telefono"
                    multiline
                    style={{marginLeft:'10px' , width:'100%'}}
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    />
                    <TextField
                    id="standard-multiline-flexible"
                    label="Correo"
                    nmae="Correo"
                    multiline
                    style={{marginLeft:'10px', width:'100%'}}
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                    />
                    <TextField
                    id="standard-multiline-flexible"
                    label="Fotografia"
                    nmae="fotografia"
                    multiline
                    style={{marginLeft:'10px', width:'100%', marginBottom:'20px'}} 
                    value={fotografia}
                    onChange={handleChange}
                    />
                    <Button variant="contained">Editar</Button>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>}
            {menu===5 && <>
                <Grid container spacing={3} xs={12}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}style={{marginTop:'10%'}}>
                        <TextField
                        id="standard-multiline-flexible"
                        label="Nombre"
                        nmae="nombre"
                        multiline
                        style={{marginLeft:'10px', width:'100%'}}
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        />
                        <TextField
                        id="standard-multiline-flexible"
                        label="Telefono"
                        nmae="telefono"
                        multiline
                        style={{marginLeft:'10px' , width:'100%'}}
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                        />
                        <TextField
                        id="standard-multiline-flexible"
                        label="Correo"
                        nmae="Correo"
                        multiline
                        style={{marginLeft:'10px', width:'100%'}}
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                        />
                        <TextField
                        id="standard-multiline-flexible"
                        label="Fotografia"
                        nmae="fotografia"
                        multiline
                        style={{marginLeft:'10px', width:'100%', marginBottom:'20px'}} 
                        value={fotografia}
                        onChange={handleChange}
                        />
                        <Button variant="contained" color="secondary">
                            Borrar
                        </Button>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </>}
        </Fragment>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;