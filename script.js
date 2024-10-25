function createElement(ticketID, btntext) {
    const div = document.createElement("div")
    div.className = "seat-txt"
    div.id = ticketID + 1

    const span_1 = document.createElement("span")
    span_1.className = "txt-tik"
    span_1.textContent = btntext

    const span_2 = document.createElement("span")
    span_2.className = "txt-tik"
    span_2.textContent = "Economy"

    const span_3 = document.createElement("span")
    span_3.className = "txt-tik"
    span_3.textContent = "550"

    div.appendChild(span_1)
    div.appendChild(span_2)
    div.appendChild(span_3)

    const before = document.getElementById("before")
    const lastChild = before.lastElementChild
    before.insertBefore(div, lastChild)


}

function removeElement(bntid) {

    var elemnt = document.getElementById(bntid + 1)
    if (elemnt) {
        elemnt.remove()
    }
}


var ticketCounter = 0
var availableSeats = 40

function busSeleactor(button) {
    var availseats = document.getElementById("availableseats")
    var selectedSeats = document.getElementById("selectedSeats")
    var buttonid = button.id
    var btntxt = button.innerText
    var seat = button.classList
    if (ticketCounter < 4) {
        if (seat.contains("seat")) {
            seat.add("seat-onclick")
            seat.remove("seat")
            seat.remove("hover:seat")
            ticketCounter++
            availableSeats--

            createElement(buttonid, btntxt)
        }
        else {
            seat.remove("seat-onclick")
            seat.add("seat")
            seat.add("hover:seat")
            ticketCounter--
            availableSeats++
            removeElement(buttonid)
        }
    }
    else {
        if (seat.contains("seat-onclick")) {
            seat.remove("seat-onclick")
            seat.add("seat")
            seat.add("hover:seat")
            ticketCounter--
            availableSeats++
            removeElement(buttonid)
        }


    }
    availseats.innerText = availableSeats
    selectedSeats.innerText = ticketCounter
    console.log(ticketCounter)
    totalPrice(ticketCounter)

}

function totalPrice(a) {
    const y = a
    var price = a * 550
    document.getElementById("tprice").innerText = price

    gtotal(price)
}

function gtotal(a) {
    var grandtotal = document.getElementById("gtotal");
    var cupin4 = document.getElementById("cupponin").value.trim().toLowerCase();

    let grtotal;

    if (cupin4 === "free") {
        grtotal = 0;
        grandtotal.innerHTML = grtotal.toFixed(2)
    } 
    else if (cupin4 === "new15") {
        grtotal = a *10
        grandtotal.innerHTML = grtotal.toFixed(2)
    } 
    else if (cupin4 === "couple20") {
        grtotal = a * 0.80
        grandtotal.innerHTML = grtotal.toFixed(2)
    } 
    else {
        grtotal = a;
        grandtotal.innerHTML = grtotal.toFixed(2)
    }
    console.log(`a = ${a}`)
    console.log(`grtotal = ${grtotal}`)

    grandtotal.innerHTML = grtotal.toFixed(2);  // Display result in the DOM element
}



function cupon() {
    var cupin = document.getElementById("cupponin").value
    var cupbtn = document.getElementById("appbtn").classList
    if (cupin.trim() != "") {
        cupbtn.remove("applycBtn")
        cupbtn.add("applycBtndefult")
    }
    else {
        cupbtn.add("applycBtn")
        cupbtn.remove("applycBtndefult")
    }

}


