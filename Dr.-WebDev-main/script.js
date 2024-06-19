document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.nav-btn.get-in-touch').addEventListener('click', function(e) {
        e.preventDefault();

        document.getElementById('last-footer').scrollIntoView({ behavior: 'smooth' });

        // Add the jiggle class to the Mail Me button
        const mailMeButton = document.querySelector('.mail-me');
        mailMeButton.classList.add('jiggle');

        // Remove the jiggle class after the animation duration
        setTimeout(function() {
            mailMeButton.classList.remove('jiggle');
        }, 300); // Duration should match the animation duration
    });
});
