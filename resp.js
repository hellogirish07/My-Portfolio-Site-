burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

// Get the button element
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");

themeButton.addEventListener("click", function () {
    // Toggle the class "white" on the button
    themeButton.classList.toggle("white");

    // Toggle the class "black" on the body
    document.body.classList.toggle("black");

    // Toggle moon and sun icons based on body class
    if (document.body.classList.contains("black")) {
        // If body is black, show sun icon
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        // If body is not black, show moon icon
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});

// Google sheet 
// for contact form 
const scriptURL = 'https://script.google.com/macros/s/AKfycby6JXV4Kw84FNDgZKVncAsC7IWps-hk4bb7fJ-oLQcMlyl4p1ol3Cr1xm_Crkytv9ZQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
