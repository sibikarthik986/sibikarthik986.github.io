document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let subject = "HR Contact from Portfolio - " + name;
    let body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = 
        `mailto:sibikarthik986@gmail.com?subject=${subject}&body=${body}`;
});
