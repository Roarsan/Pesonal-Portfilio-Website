$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('..scroll').addClass("show")
        }else{
            $('.scroll').removeClass("show")
        }
    });

//slide up script
    $('.scroll').click(function(){
    $('html').animate({scrollTop: 0});
    });

//toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

//typing animation script
var typed = new Typed(".typing",{
    strings: ["A Computing Graduate From Bucks New University"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


//owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formStatus = document.getElementById('formStatus');
    const submitButton = this.querySelector('button[type="submit"]');
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            projectType: formData.get('projectType'),
            message: formData.get('message')
        };

        const response = await fetch('http://localhost:3000/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
            formStatus.className = 'form-status success';
            this.reset();
        } else {
            throw new Error(result.message || 'Failed to send message');
        }
    } catch (error) {
        formStatus.textContent = error.message || 'Failed to send message. Please try again.';
        formStatus.className = 'form-status error';
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

   
 