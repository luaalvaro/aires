const checkInputs = (email, pass, pass2) => {
    // Validação dos inputs
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        return "email invalido"
    }

    if (pass.length < 6) {
        return "As senhas precisam ter pelo menos 06 caracteres"
    }

    if (pass2 && pass !== pass2) {
        return "As senhas não coincidem"
    }
}

export { checkInputs }