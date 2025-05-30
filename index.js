document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll('.parallax').forEach((element) => {
        const speed = element.getAttribute('data-speed');
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    })
})

// SIGNIN' PAGE OPEN AND CLOSE ANIMATION


document.addEventListener('DOMContentLoaded', () => {

    const signinButton = document.getElementById('signinButton');
    const signinPage = document.getElementById('signinPage');
    const closeIcon = document.getElementById('closeIcon');
  
    // Open sign-in page
    signinButton.addEventListener('click', function() {
        signinPage.classList.add('openSignin');
    });
  
    // Close sign-in page
    closeIcon.addEventListener('click', function() {
        // Add the closing class and remove the open class immediately
        signinPage.classList.add('closeSignin');
        signinPage.classList.remove('openSignin');
  
        // After the closing animation finishes, gotta remove the close class and reset it to hidden
        setTimeout(() => {
            signinPage.classList.remove('closeSignin');
        }, 500); // here, got a timeout matches the duration of the transition
    });

  
});
  
  