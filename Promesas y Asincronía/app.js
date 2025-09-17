// funcion para obtener usuarios de la API
const obtenerUsuarios = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => mostrarUsuarios(data))
    .catch(error => console.log('Error:', error));
};

// funcion para mostrar los usuarios en el html
const mostrarUsuarios = (users) => {
    const userUl = document.getElementById('users');
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userUl.appendChild(li);
    });
};
// llamamos a la funcion para obtener y mostrar los usuarios
obtenerUsuarios();