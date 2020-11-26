import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
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
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>

                <div className="row">

                    <div className="input-field col s4">
                            <label htmlFor="nome">Nome</label>
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
                        <label htmlFor="livro">Livro</label>
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
                        <label htmlFor="preco">Preço</label>
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