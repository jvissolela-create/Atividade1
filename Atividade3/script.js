function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade < 2) {
                img.setAttribute('src', 'img/bebemenino1.jpg')
                // Bebê
                genero = 'Bebe'
            } else if (idade < 10) {
                // Menino
                genero = 'Menino'
                img.setAttribute('src', 'img/menino.jpg')
            } else if (idade < 18) {
                // Adolescente
                genero = 'Adolescente'
                img.setAttribute('src', 'img/teenagerboy.jpg')
            } else if (idade < 30) {
                // Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'img/homemjovem.jpg')
            } else if (idade < 50) {
                // Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'img/Homemadulto.jpg')
            } else {
                // Idoso
                genero = 'Idosa'
                img.setAttribute('src', 'img/Idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade < 2) {
                img.setAttribute('src', 'img/bebemenina.jpg')
            } else if (idade < 10) {
                img.setAttribute('src', 'img/menina.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'img/teenage.jpg')
            } else if (idade < 30) {
                img.setAttribute('src', 'img/MulherJovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/MulherAdulta.jpg')
            } else {
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
