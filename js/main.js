(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        
    birthday = "04/06/2024"

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("days").innerText = Math.floor(
                distance / day
            )),
                (document.getElementById("hours").innerText = Math.floor(
                    (distance % day) / hour
                )),
                (document.getElementById("minutes").innerText = Math.floor(
                    (distance % hour) / minute
                )),
                (document.getElementById("seconds").innerText = Math.floor(
                    (distance % minute) / second
                ));

            //do something later when date is reached
            if (distance < 0) {
                (document.getElementById("days").innerText = "0"),
                    (document.getElementById("hours").innerText = "0"),
                    (document.getElementById("minutes").innerText = "0"),
                    (document.getElementById("seconds").innerText = "0");
                clearInterval(x);
            }
            //seconds
        }, 0);
})();



$(document).ready(function () {
    $(".js-headerButton").on("click", function () {
        $(this).attr("aria-expanded", function (i, attr) {
            return attr == "true" ? "false" : "true";
        });

        const visibility = $(".js-headerNav").attr("data-visible");
        $(".js-headerNav").attr("data-visible", function (i, attr) {
            return attr == "true" ? "false" : "true";
        });

        console.log({ visibility });
    });
    

    
});

// Función para abrir el lightbox
function openLightbox(src) {
    document.getElementById("lightboxImg").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

// Función para cerrar el lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Agrega eventos de clic a las imágenes
document.addEventListener("DOMContentLoaded", function () {
    const lightboxTriggers = document.querySelectorAll(".js-lightbox-trigger");

    lightboxTriggers.forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            openLightbox(trigger.src);
        });
    });
});