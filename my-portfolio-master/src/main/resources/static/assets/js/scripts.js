document.addEventListener("DOMContentLoaded", function () {
    // ----------- Video Background: fade in when ready -----------
    const video = document.getElementById("bgg-video");
    if (video) {
        const markLoaded = () => video.classList.add("loaded");
        if (video.readyState >= 3) {
            markLoaded();
        } else {
            video.addEventListener("canplay", markLoaded, { once: true });
        }
        video.load();
    }

    // ----------- About Section Pull-Up Animation -----------
    const aboutSection = document.querySelector("#about-section");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-pull-up");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    if (aboutSection) {
        observer.observe(aboutSection);
    }

    // ----------- Typing Text Loop Animation -----------
    const typedElement = document.getElementById("typed-text");
    const texts = ["DATA ANALYST", "FULL STACK DEVELOPER", "SOFTWARE ENGINEER"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        typedElement.textContent = currentText.substring(0, charIndex);

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                charIndex++;
                setTimeout(type, 100);
            } else {
                isDeleting = true;
                setTimeout(type, 1500);
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                setTimeout(type, 50);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }
    }

    if (typedElement) {
        type();
    }
});
