import React, { Component } from 'react';
import FormValidator from '../../Utils/FormValidator';
import Popup from '../../Utils/Popup';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validadoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validadoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{min: 0, max: 99999}],
                validadoQuando: true,
                mensagem: 'Entre com um numero inteiro'
            },
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido()
        }

        this.state = this.stateInicial;
    }

    escutadorInput = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);

        if(validacao.isValid){
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }else{

            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco]

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            })

            camposInvalidos.forEach(campo => {
                Popup.exibeMensagem('error', campo.message);
            })

            
        }
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>

                <div className="row">

                    <div className="input-field col s4">
                            <label htmlFor="nome" className="input-field">Nome</label>
                            <input
                                className="validade"
                                id="nome"
                                type="text"
                                name="nome"
                                value={nome}
                                onChange={this.escutadorInput}
                            />
                    </div>



                    <div className="input-field col s4">
                        <label htmlFor="livro" className="input-field">Livro</label>
                        <input
                            className="validade"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorInput}
                        />
                    </div>


                    <div className="input-field col s4">
                        <label htmlFor="preco" className="input-field">Preço</label>
                        <input
                            className="validade"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorInput}
                            
                        />
                    </div>

                    <button 
                        className="waves-effect waves-light btn indigo lighten-2"
                        type="button" 
                        onClick={this.submitFormulario} 
                        > Salvar </button>
             
                </div>
            </form >
        );
    }

}

export default Formulario;