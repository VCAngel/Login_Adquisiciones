(function () {
    'use strict';

    let inputs = document.querySelectorAll('input');
    let inputsReq = [];
    let submitBtn = document.getElementById('btnSubmit');

    inputs.forEach(input => {
        if (input.hasAttribute('required')) {
            inputsReq.push(input);
        }
    });

    submitBtn.addEventListener('click', submitInfo);

    function submitInfo() { // *Verifica que los input esten llenos de un texto, caso contrario marca error
        inputsReq.forEach(inputReq => {
            if (inputReq.value === "") {
                inputReq.classList.add("is-invalid");
            } else {
                //TODO Realizar Front de que la información sea válida
            }
        });
    }

})();