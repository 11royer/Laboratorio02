function crearUsuario(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const usuario = crearUsuario('Royer Martinez', '12345678', 'Royer@gmail.com');
console.log(usuario);