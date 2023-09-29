const img = document.getElementById('img')

let i = 1
setInterval(() => {
    img.src = `img${i}.png`
    i++
    if (i === 4) {
        i = 1
    }
}, 100) 

   