
  document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
        document.getElementById('alert').style.display = 'none';
        document.getElementById('exclamation').style.display = 'none';
    } else {
        document.getElementById('alert').style.display = 'inline';
        document.getElementById('exclamation').style.display = 'flex';
    }
});