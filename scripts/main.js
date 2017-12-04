function setUserName() 
{
    var nombre = prompt('Escriba el nuevo username...');
    localStorage.setItem('nombre',nombre);
    var myHeading = document.querySelector('h1');
    myHeading.textContent = "Hola, " + nombre + " !";
}
document.querySelector('button').onclick = function (){setUserName()}