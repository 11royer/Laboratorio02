function crearUsuario(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var usuario = crearUsuario('Royer Martinez', '12345678', 'juan.perez@example.com');
console.log(usuario);
