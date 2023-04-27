 // gettin json file with jquery
 
$(document).ready(function () {
    $.getJSON('data.json', function (data) {
        var object = data.objects
        let sum = 0
        for (var i = 0; i < object.length; i++) {
            sum += object[i].amount
        }
        
        for (var i = 0; i < object.length; i++) {
            let height = (object[i].amount / sum) * 500
            $('.barcontainer').append(`<div class="bar"><span class="barspn"></span><h3 class="amount">${object[i].amount}$</h3><h2>${object[i].day}</h2></div>`)
            $('.barspn:last').css("height", `${height}px`)
            $('.amount:last').css("bottom", `${height + 50}px`)
        } 
        const day = Array.from(document.querySelectorAll('.bar h2'))
        day.forEach(day =>{
            if (day.innerText === Date().charAt(0).toLowerCase() + Date().slice(1,3)){
               const bar = day.parentElement
                bar.querySelector('.barspn').classList.add('background')
                bar.querySelector('h3').style.display = "block"
            }
        })
    })
})
