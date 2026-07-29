// Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Contact Form Validation

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input=>{

        if(input.value.trim()===""){

            valid=false;

        }

    });

    if(valid){

        alert("Message sent successfully!");

        form.reset();

    }

    else{

        alert("Please fill all the fields.");

    }

});