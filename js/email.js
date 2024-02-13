function sendMail() {

    var params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        content: document.getElementById("content").value,
    };

    if (params.name !== "" && params.phone !="" && params.subject !="" && params.email !=""  && params.content !="") {
        const submitButton = document.querySelector('#btn-submit')
        const submitButtonText = document.querySelector('#btn-submit .btn--text')
        submitButton.classList.add('loading');
        const serviceID = "service_m7j74c4";
        const templateID = "template_z0i8xl2";

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("name").value = "";                
                document.getElementById("phone").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("email").value = "";
                document.getElementById("content").value = "";
                submitButton.classList.remove('loading');
                submitButton.classList.add('success');
                
            })
            .catch((err) => console.log(err))        
        }

        else{            
            document.getElementById("errormessage").classList.remove("hidden");  
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });            
        }       


}

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input, textarea');  
            
    inputs.forEach(function(input) {
        input.addEventListener('click', function() {
            document.getElementById("errormessage").classList.add("hidden");        
        });
    });
    
});