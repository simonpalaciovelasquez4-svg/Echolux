// INICIALIZAR EMAILJS
emailjs.init("JKFa9ak8BFwjkNdbb");

const form = document.getElementById("cotizadorForm");
const mensaje = document.getElementById("mensaje");

const imagenesInput = document.getElementById("imagenes");
const imagePreview = document.getElementById("imagePreview");

// PREVISUALIZAR IMÁGENES

imagenesInput.addEventListener("change", function(){

  imagePreview.innerHTML = "";

  const files = Array.from(imagenesInput.files);

  files.forEach(file => {

    const reader = new FileReader();

    reader.onload = function(e){

      const img = document.createElement("img");

      img.src = e.target.result;

      img.style.width = "120px";
      img.style.height = "120px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "10px";
      img.style.margin = "10px";

      imagePreview.appendChild(img);

    };

    reader.readAsDataURL(file);

  });

});

// ENVIAR FORMULARIO

form.addEventListener("submit", function(e){

  e.preventDefault();

  mensaje.innerHTML = "Enviando cotización...";

  emailjs.sendForm(
    "service_cmvyp7f",
    "template_41xbeko",
    form
  )

  .then(function(){

    mensaje.innerHTML =
    "✅ Cotización enviada correctamente";

    form.reset();

    imagePreview.innerHTML = "";

  })

  .catch(function(error){

    mensaje.innerHTML =
    "❌ Error al enviar";

    console.log(error);

  });

});