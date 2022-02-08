
function getFormValues() {

    let email = document.querySelector("#email-address").value;

    let model = document.querySelector(".phone-type:checked").value;

    let services = []
    let test = document.querySelectorAll(".services");
    for (let s of test) {

        if (s.checked) {
            services.push(s.value)
        }
    }
    let pickup = document.querySelector("#pick-up").value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
