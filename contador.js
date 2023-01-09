(function() {
    const second = 1000, 
        minute = second * 60, 
        hour = minute * 60, 
        day = hour * 24;

    //navidarks, countdown , x -> se declaran en let   
    let cumple = "July 6, 2023 00:00:00",
        countdown = new Date(cumple).getTime(),
        //el método getTime() devuelve los milisigeundos desde *fecha unix*
        x = setInterval(function () {
            let now = new Date().getTime(), distance = countdown - now;
            // console.log(now);
            (document.getElementById("days").innerText = Math.floor(distance / day)),
            (document.getElementById("hours").innerText = Math.floor((distance % day)/hour)),
            (document.getElementById("minutes").innerText = Math.floor((distance % hour)/minute)),
            (document.getElementById("seconds").innerText = Math.floor((distance % minute)/second));

            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                //muestra headline y oculta el contador si el contador - feha actual es 0
                headline.innerText = "Feliz Cumple!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);

            }
        }, 0);
})();