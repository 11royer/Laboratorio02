const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
  ];

  // Función para filtrar correos electrónicos válidos
function filtrarEmailsValidos(emails) {
    return emails.filter(email => 
      email.includes('@') && email.endsWith('.com')
    );
  }
  
  // Filtrar la lista de correos electrónicos
  const emailsValidos = filtrarEmailsValidos(emailList);
  
  // Mostrar el resultado en la consola
  console.log(emailsValidos);