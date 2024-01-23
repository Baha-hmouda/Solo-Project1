function don () {
    var fir = document.forms.fun.namee.value
    var las = document.forms.fun.last.value
    var ema = document.forms.fun.email.value
    var amou = document.forms.fun.amount.value
    var car = document.forms.fun.card.value
    var c = document.forms.fun.ccc.value
    
    if(fir==="" ||  fir.includes("0") || fir.includes("1") || fir.includes("2") || fir.includes("3") || fir.includes("4") || fir.includes("5") || fir.includes("6") || fir.includes("7") || fir.includes("8") || fir.includes("9")) {
    window.alert("put a valid first name")
    document.getElementById("la").focus() 
    return false
    }
    if(las==="" || las.includes("0") || las.includes("1") || las.includes("2") || las.includes("3") || las.includes("4") || las.includes("5") || las.includes("6") || las.includes("7") || las.includes("8") || las.includes("9")) {
    window.alert("put a valid last name")
    document.getElementById("la").focus()
    return false
    }
    if(ema==="" || !checkemail(ema)) {
    window.alert("put a valid email address")
    document.getElementById("em").focus() 
    return false 
    }
    if (amou === "" || amou===isNaN || amou < 1) {
        window.alert("put an amount greater than 1 dollar")
        document.getElementById("amo").focus()
        return false
    }
    if (c === "" || !checkccv(c)) {
        window.alert("put a valid ccv (3numbers)")
        document.getElementById("ccc").focus()
        return false
    }
    if (car === "" || !checkcd(car)) {
        window.alert("put a valid credit card number")
        document.getElementById("ca").focus()
        return false
    }

    return true
}

function checkemail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

function checkcd(cardNumber) {
    if (cardNumber.length===16) {
        return true
    } else {
        return false
    }
}
function checkccv(ccv) {
    if (ccv.length===3) {
        return true
    } else {
        return false
    }
}