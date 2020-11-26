import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

const useEstilos = makeStyles({
    titulo: {
        textAlign: 'center',
        color: '#7986cb'
    }
})


const Sobre = () => {

    const classes = useEstilos();

    return (
        <Fragment >
            <Header />
            <Container maxWidth="sm">
                <Typography variant="h1" component="h2" className={classes.titulo}> Sobre </Typography>
                <Typography variant="body1" component="p">  A Casa do codigo é uma editora que produz e edita livros em diversos formatos </Typography>
            </Container>

        </Fragment>

    );
}

export default Sobre;