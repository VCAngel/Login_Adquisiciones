//* Script para controlar el navbar del header
(function () {
    let navArray = document.querySelectorAll(".nav-link");
    let navbarTitle = document.getElementById("navbarTitle");
    let wdwWidth = window.innerWidth; // *Ancho de la ventana interna

    setInterval(function () {
        //console.log(wdwWidth);
        if (wdwWidth < 992) { // ? Para controlar el tamaño del menú colapsable
            navArray.forEach(link => {
                link.style.fontSize = "80%";
                link.style.fontWeight = "400";
            });
            navbarTitle.innerHTML = "Menú";
            updateWdwWidth();
        } else {
            navArray.forEach(link => {
                link.style.fontSize = "100%";
                link.style.fontWeight = "700";
            });
            navbarTitle.innerHTML = "";
            updateWdwWidth();
        }
    }, 100);

    function updateWdwWidth() { // *Actualizar el valor del ancho
        wdwWidth = window.innerWidth;
    }

})();

