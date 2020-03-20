document.getElementById("scroll-to-projects").addEventListener("click", scroll);

function scroll() {
    document.querySelector('.project-section').scrollIntoView({ 
        behavior: 'smooth' 
      });
};