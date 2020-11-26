import validador from 'validator';

class FormValidator {

    constructor(validacoes){
        this.validacoes = validacoes;
    }



    valida(formulario) {

        let validacao = this.valido();

        this.validacoes.forEach(regra => {

            const campoValor = formulario[regra.campo.toString()];
            const args = regra.args || [];

            const metodoValidacao = typeof regra.metodo === 'string' ? validador[regra.metodo] : regra.metodo;
     
            if(metodoValidacao(campoValor, ...args, formulario) !== regra.validadoQuando){
                
                validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }

                validacao.isValid = false;                
            }
            
        });

        return validacao;

    }



    valido(){
        const validacao = {};

        this.validacoes.map(regra => (
            validacao[regra.campo] = {isInvalid: false, message: ''}
        ))

        return {isValid: true, ...validacao}
    }
}

export default FormValidator;