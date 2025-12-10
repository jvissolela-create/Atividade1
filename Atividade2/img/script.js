function carregar() { 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('Imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12)
    img.src = 'Manha.jpg'
else if (hora >= 12 && hora < 18)
    img.src = 'Tarde.jpg'
else 
    img.src = 'Noite.jpg'
}
