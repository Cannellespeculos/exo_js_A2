const quantite = document.querySelectorAll("[name='q1'], [name='q2'], [name='q3']");
const ddcs = document.querySelectorAll("[name='pu1'], [name='pu2'], [name='pu3']");
const acz = document.querySelectorAll("[name='p1'], [name='p2'], [name='p3']");
const btns = document.querySelector("input[type='button']")
const names = document.getElementsByName("total")
const input = document.getElementsByTagName("input")


let result = 0



for (let j = 0; j < input.length; j++) {
    const element = input[j];
    element.addEventListener("input", () => {
        
    for (let i = 0; i < quantite.length; i++) {
        let d = 0
            if ((quantite[i].value && ddcs[i].value)) {
                d = parseFloat(quantite[i].value) + parseFloat(ddcs[i].value)
                acz[i].value = d + ""
                acz[i].value === "NaN" ? acz[i].value = "" :  result += d
              
            }


        
        
    }
    
    
    
    })
    
}


btns.addEventListener("click", () => {
    names[0].value = result + ""
    console.log(names[0].value)
})


