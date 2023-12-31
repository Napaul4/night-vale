$(document).ready(function() {
    $('#telefone').mask('(00) 0 0000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',

            email: 'Por favor insira um e-mail válido.',

            mensagem: 'O campo da mensagem é obrigatório'
        },
        submitHandler: function(form) {
            console.log(form);
        }
    })
})