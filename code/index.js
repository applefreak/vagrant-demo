const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<body style="background-color: #121212; text-align: center; font-family: \'Comic Sans MS\', sans-serif;"><h1 style="background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;background-clip: text; margin: 100px 100px 50px 100px;">Sup Peepz!<br>Welcome to my cool site!</h1><iframe src="https://giphy.com/embed/nXxOjZrbnbRxS" width="356" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/win-nXxOjZrbnbRxS"></a></p></body>')
})

app.listen(3000, function () {
  console.log('My Cool Project is listening on port 3000!')
})
