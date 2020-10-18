function c() {
   let b = document.getElementById('b')
   b.innerText = "Aperte Para Aumenta A Senha"

   //   let local = document.getElementById("")





   for (ns = 0; ns <= 8; ns++) {
      var res = document.getElementById('res')
      let minusculas = "qwertyuiopasdfghjklzxcvbnqwertyuiopasdfghjklzxcm1234567890@#'$_&-+()/*:;!?*/<$¡wownbdoen1929293i92929293292929292929299292923464930284¢±_£¥₱€¢@%©®™℅[]£zmsmmsmsmsmsmsdmsmsm{¢=¥}€}¢{`=`÷|÷|×`¶`}|}ddsmsmsmms€{{€]€€]∆×|"
      //variavel com as letras maiusculas
      let maiusculas = minusculas.toUpperCase()
      let escolhendo = maiusculas + minusculas
      function sorteio(n) {
         return Math.random(sorteio) * n
      }
      let senha = sorteio(escolhendo.length)
      let senhafinal = Math.round(senha)
      let fim = escolhendo[senhafinal]

      res.innerHTML += fim

   }

}