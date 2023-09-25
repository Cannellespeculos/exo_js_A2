import './style.css'

// for (const property in document) {
//   console.log(`${property}: ${document[property]}`);
// }


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