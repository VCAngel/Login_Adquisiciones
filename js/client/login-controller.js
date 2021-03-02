(function () {
    'use strict';

    // Llama a todos los Forms que necesiten validacion
    var forms = document.querySelectorAll('.needs-validation');
    // Llama a todos los inputs para el control de los material-icons
    var inputs = document.querySelectorAll('input.validate-input');
    var mat_Icons = document.getElementsByName('icon');

    // Los loopea y evita el Submit
    Array.prototype.slice.call(forms)
        .forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    
                    event.preventDefault();
                    event.stopPropagation();
                    // TODO Checar los datos en la DB
                } else {
                }

                form.classList.add('was-validated');
            }, false);
        });

    Array.prototype.slice.call(inputs).forEach((input, index) => {

        input.addEventListener('keydown', () => {
            validateInputs(input, index);
        });

        input.addEventListener('keyup', () => {
            validateInputs(input, index);
        });

        input.addEventListener('focusin', () => {
            validateInputs(input, index);
        });

        input.addEventListener('focusout', () => {
            validateInputs(input, index);
        });
    });

    function validateInputs(input, index) {
        if (input.value == "") {
            mat_Icons[index].classList.add("--danger");
        } else {
            mat_Icons[index].classList.remove("--danger");
            mat_Icons[index].classList.add("--gold");
        }
    }

})();