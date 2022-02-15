const imgs = [
  "https://hiperideal.vteximg.com.br/arquivos/ids/171306-1000-1000/12696.jpg?v=636626179776100000",
  "https://superprix.vteximg.com.br/arquivos/ids/175207-600-600/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000",
  "https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/uva-brs-isis-sem-semente1-4117fb3e4898b50a5a16102264065112-1024-1024.jpg"
]

let fruta = document.querySelectorAll(".fruta")

fruta.forEach(fruta => {
  fruta.addEventListener('click', () => {
    if(fruta.classList.contains("banana")){
        fruta.setAttribute("src", `${imgs[0]}`)
  }else if(fruta.classList.contains("maca")){
    fruta.setAttribute("src", `${imgs[1]}`)
  }
  else{
    fruta.setAttribute("src", `${imgs[2]}`)
  }

  fruta.classList.toggle("active")

  if(!fruta.classList.contains("active")){
          fruta.setAttribute("src", "https://a-static.mlcdn.com.br/574x431/jogo-da-memoria-do-a-ao-z-minha-casa-toyster/magazineluiza/203858200/4360267e0a5c0a4a8184519f1488e97e.jpg")
     }
})

}
)

const banana = document.querySelectorAll(".banana")
const maca = document.querySelectorAll(".maca")
const uva = document.querySelectorAll(".uva")


function checaJogo(frutaFirstRound, frutaLastRound) {
  for (let i = 0, len = 3; i < len; i++) {
    if(frutaFirstRound == frutaLastRound){
    frutaFirstRound[0].addEventListener('click', function () {
      frutaLastRound[1].addEventListener('click', function () {
      setTimeout( () => {
          alert('Você acertou')
          location.reload(), 2000
        }
      )

    })
  })

  frutaFirstRound[1].addEventListener('click', function () {
    frutaLastRound[0].addEventListener('click', function () {
      setTimeout( () => {
        alert('Você acertou')
        location.reload(), 2000
      }
    )
  })
})

    }else{
      frutaFirstRound[0].addEventListener('click', function () {
        frutaLastRound[1].addEventListener('click', function () {

          setTimeout( () => {
            alert('Você errou')
            location.reload(), 2000
          }
        )})})
    }
  }

  console.log(frutaFirstRound[1])
}

checaJogo(banana,banana)
checaJogo(maca,maca)
checaJogo(uva,uva)

checaJogo(banana,maca)
checaJogo(maca,banana)

checaJogo(banana,uva)
checaJogo(uva,banana)

checaJogo(maca,uva)
checaJogo(uva,maca)

