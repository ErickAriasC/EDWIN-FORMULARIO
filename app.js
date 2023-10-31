const frmEmail=document.getElementById('form')

frmEmail.addEventListener('submit',senEmail)

const serviceId='service_46tju43';
const templeateId='template_jay6q3q';
const apikey='mh7eF8DAZR5SKZjLE'


function senEmail(event) {
    event.preventDefault()
    emailjs.init(serviceId)
    emailjs.sendForm(serviceId,templeateId,frmEmail,apikey)
    .then(result=>Swal.fire('Su mensaje se ha enviado con exito'))
    .catch(error=>{
        Swal.fire({
            icon:'error',
            title: '0ops...',
            text: 'No ha sido posible enviar el mensaje!',
        });
    });

}