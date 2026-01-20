const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_r7bwe9c';
    const templateID = 'template_gsk2rs5';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Message  sent successfully ');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });