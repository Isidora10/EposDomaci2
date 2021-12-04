$(document).ready(function() {
    $("#forma").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules: {
            name: {
                required: true,
                minLength: 3,
            },
            age: {
                required: true,
                number: true,
                min: 18
            },
            email: {
                required: true,
                email: true
            }

        },

        messages: {
            name: {
                required: "Unesite ime!",
                minLength: "Ime mora da ima bar 3 karaktera!",
            },
            age: {
                required: "Unesite broj godina!",
                number: "Unesite godine kao broj!",
                min: "Morate imati bar 18 godina za registraciju!"
            },
            email: {
                required: "Unesite EMAIL!",
                email: "Email mora biti u formatu: ime@domen.com"
            },
        }
    });
})