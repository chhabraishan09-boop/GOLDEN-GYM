function joinPlan(plan) {
    alert(
        "Thank you for choosing the " +
        plan +
        " membership at Bar Club Gym!"
    );
}


document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been submitted."
        );

        this.reset();
    });