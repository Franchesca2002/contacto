const frmEmail = document.getElementById('formEmail')
frmEmail.addEventListener('submit', sendEmail)
  
const serviceId ="service_ct50igp"
const templateId = "template_f45a46n"
const apiKey = "tiJHKKLdZT-D25F5G"



function sendEmail(event) {
   event.preventDefault()
   emailjs.int(serviceId)

   emailjs.sendForm(serviceId,templateId,frmEmail,apiKey)
   .then(result => swal.fire("Su mensaje se ha enviado con exito.")  )
   .catch(error => {
    Swal.fire({
        icon:'error',
        title:'Oops...',
        text:'No ha sido posible enviar el mensaje!',
    
       });
      });
    }