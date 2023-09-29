import './style.css'

// for (const property in document) {
//   console.log(`${property}: ${document[property]}`);
// }

const container = document.getElementById("container");
const timer = document.getElementById("timer")
const start = document.getElementById("start")
const erase = document.getElementById("erase")
const stop = document.getElementById("stop")
const memorise = document.getElementById("memorise")
const rappel = document.getElementById("rappel")

function pai() {
    let result = "";
    for (let i = 0; i <= 20; i++) {
        if (i != 20 && i%2 === 0) {
            result += i + "-"
        }else if (i === 20) {
            result += i 
        } 
        
    }

    return result
}

console.log(pai())


function pluriel(num , object) {
    if (num > 1) {
        if (object.endsWith("al")) {
            object = object.replace("al", "aux")
        }else if (object.endsWith("s") || object.endsWith("x")) {
            object = object
        }else {
            object += "s"
        }
       
    }

    console.log(num + " " + object)
}

pluriel(2 , "colis")


function tablmulti() {
    let tabl = [{drink : "coca" , unity : "3", price : "0.90"},
                {drink : "bière" , unity : "3", price : "5"},
                {drink : "wisky" , unity : "2", price : "15"}]

    let all = ""
    let result = 0;

    for (let i = 0; i < tabl.length; i++) {
        const element = tabl[i];
        all += element.drink +" : " + element.unity + "*" + element.price + "     "
        result += element.unity * element.price
       
    }

    console.log(all)
    console.log(result)
}

tablmulti()


for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8 ;i++) {
        if ((i + j)%2 === 0) {
        container.innerHTML += `
        <div class="black"></div>
        `
        }else {
            container.innerHTML += `
            <div class="white"></div>
            `
        }
        
    }
}



function calculatrice(FirstNum, SecNum, Opera) {
    let result = eval(FirstNum + Opera + SecNum)
    return result
}

console.log(calculatrice(2,3,"+"))

function interet(placement, annee,  taux ,currentYear = 0 ) {
    if (currentYear !== annee) {
        return interet(placement + (placement * (taux / 100)), annee, taux, currentYear+1)
    }
    else {
        return Math.floor(placement) 
    }
}

console.log(interet(10000,20,4 ))

let f = "9840"
if (f.match(/^(-?(?!0)[0-9]{1,3}|0)$/)) {
    console.log("yeahhhhh")
}else {
    console.log("nooooo")
}

let aujourd = new Date()


console.log(aujourd.getDate() + "/" + (aujourd.getMonth() + 1) + "/" + aujourd.getFullYear())


function virgule(num) {
    num = prompt("choisi un nombre")

    num = num.replace(".", ",")

    alert(num)
}

// virgule()


function split(site) {
    site = prompt("écrivez une url")
    if (!site.includes("/")) {
        site = site.split(".")
        let b = site[site.length - 1]
        alert("." + b)
    }else {
        site = site.split("/")
        console.log(site)
        if (site.includes("")) {
            let b = site[site.indexOf("") + 1]
            b = b.split(".")
            alert("." + b[b.length - 1])
        }else {
            let b = site[0]
        b = b.split(".")
        alert("." + b[b.length - 1])
        }
        
    }
  
    

   
}

// split()


function date(day) {
    let d = day.split("/")
    alert("date : " + day + "\njour : " + d[0] + "\nmois : " + d[1] + "\nannee : " + d[2])
}

// date("22/08/2023")


function days(n) {
    let today = new Date()
    let dat = new Date()
    dat.setDate(dat.getDate() + n)
    alert("Aujourd'hui nous sommes le " +  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + " et dans " + n + "jours nous serons le " +dat.getDate() + "/" + (dat.getMonth() + 1) + "/" + dat.getFullYear())
}

// console.log(days(56))


let millisec = 0
let sec = 0
let back = 0
let backsec = 0
let time
start.addEventListener("click" , () => {
    time = setInterval(() => {
        if (millisec < 60) {
            millisec++
            timer.innerHTML = `
            <p>${sec} : ${millisec}</p>
        `
        }else {
            sec++
            millisec = 0
            timer.innerHTML = `
            <p>${sec} : ${millisec}</p>
        `
        }
        
    }, 1)

    stop.addEventListener("click" , () => {
        clearInterval(time)
    })

})

erase.addEventListener("click", () => {
    millisec = 0
    sec = 0
    timer.innerHTML = `
            <p>${sec} : ${millisec}</p>
        `
})


memorise.addEventListener("click", () => {
    back = millisec
    backsec = sec

   
})

rappel.addEventListener("click", () => {
    timer.innerHTML = `
    <p>${backsec} : ${back}</p>
`
   millisec= back
   sec = backsec
})


window.open("http://localhost:5173/")
console.log(screen)

function scookie(name,value,days){
    var expire=new Date();
    expire.setDate(expire.getDate()+days);
    document.cookie=name+'='+escape(value)+';expires='+expire.toGMTString();
}

scookie("Gros cookie", 12, 30)