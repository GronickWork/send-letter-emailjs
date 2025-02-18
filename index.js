/**
   * Странно.... но!...С Submit не работает (Не отправляет письмо), а работает только с click. 
   */
document.getElementById('btn').addEventListener('click', (e)=>{ 
  e.preventDefault();
  (function(){
    emailjs.init({
      //privateKey: "p4KEd1Wle5A0F1P--jFoi",
      publicKey: "m9RVUzkB47FrceFE7",
      
    });
 })();
  const form = document.forms.form;
  emailjs.sendForm('service_c8m3cj4', 'template_7ev8v6q', form).then(
    (response) => {
      console.log('SUCCESS!', response.text);
      alert('Заявка на обратный звонок успешно отправлена!');
      form.reset();
    },
    (error) => {
      console.log('FAILED...', error);
    },
  )
});
