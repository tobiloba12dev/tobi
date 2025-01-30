document.getElementById("ContactForm")
.addEventListener("submit",function(event){
    event.preventDefault();
    alert("Thank you for your message! i'll get back to you soon");
    document.getElementById("ContactForm").reset()})
