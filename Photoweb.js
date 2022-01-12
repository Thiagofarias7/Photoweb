var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video: true})
.then(stream => {
    video.srcObject = stream;
    video.play();

})
.catch(error =>{
    alert (error);
    console.log(error);
})

document.querySelector('button').addEventListener('click', () => {
   var canvas = document.querySelector('canvas');
   canvas.height = video.videoHeight;
   canvas.width = video.videoWidth;
   var context = canvas.getContext('2d');
   context.drawImage(video, 0, 0);
   var link = document.createElement('a');
   link.download = 'foto.jpeg';
   link.href = canvas.toDataURL();
   link.textContent = 'Baixe a Imagem';
   document.body.appendChild(link);
});
//location.reload();
var a;
var quest = prompt("quer participar de um questionário rápido?");
alert("Se quiser, ok. Se não quiser, vai fazer assim mesmo")
a = "Obrigado por utilizar nossos serviços";
var b = prompt('seu nome!');
alert(a + " " + b);
var idade = parseInt(prompt("digite sua idade"));
alert("a raiz quadrada da sua idade subtraída por PI é:  "+ Math.sqrt(idade)/3,1415926536);
