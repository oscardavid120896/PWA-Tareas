const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ',resultado);
    })
})

const verNotificacion = document.querySelector("#vernotificacion");

verNotificacion.addEventListener('click', () =>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Descargar el template',{
            icon: '../../assets/image/icon-144.png',
            body: 'Da click para enviar a la página de tareas'
        });

        notificacion.onclick = function(){
            window.open('tareas.html');
        }
    }
})