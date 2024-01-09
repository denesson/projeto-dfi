function validacaoLogin(value) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(value.name === ""){
        error.name = "O nome não deve estar vazio"
    }else {
        error.name = ""
    }

    if(value.email === ""){
        error.email = "O email não deve estar vazio"
    }else if (!email_pattern.test(value.email)){
        error.email = "email não corresponde"
    }else {
        error.email = ""
    }

    if(value.password === ""){
        error.password = "O password não deve estar vazio"
    }else if (!password_pattern.test(value.password)){
        error.password = "Password não corresponde"
    }else {
        error.password = ""
    }
    return error;
}

export default validacaoLogin;