const square = document.getElementsByClassName("square")
const contenue = document.getElementById("contenue")
const btnForm = document.getElementById("btnForm")
const monText = document.getElementById("monText")
const form = document.getElementById("form")


for (let i = 0; i < square.length; i++) {
    let element = square[i]
    element.addEventListener("click" , () => {
        element.classList.add("active")
        contenue.innerHTML = `
        <p>contenue ${i + 1}</p>
        `
        for (let j = 0; j < square.length; j++) {
            let b = square[j]
            if (square[j] !== element) {
                b.classList.remove("active")
            }
            
        }
        
    })
}

console.log(form)



    



let a = []

btnForm.addEventListener("click", () => {
    const field = document.querySelector('input[name="radio"]:checked')

    for (let i = 0; i < form.length; i++) {
        if (i < 3 || i > 9) {
            a.push(form[i])
        }
        
    }

    a.push(field)

    console.log(a)
    console.log(field)
    console.log(a[3])

    

    alert(`mon text : ${a[0].value} \n mon password :  ${a[1].value} \n case à coché : ${a[2].checked ? a[2].value : "unchecked"}\n choisir un bouton :  ${a[6].value} \n choisir une valeur : ${a[3].value}\n le commentaire : ${a[4].value}`)
    console.log(a)
})

