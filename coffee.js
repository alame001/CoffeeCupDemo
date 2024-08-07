document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.Hero-Section');
    let currentSection = 0;

    document.getElementById('left-arrow').addEventListener('click', () => {
        if (currentSection > 0) {
            sections[currentSection].style.display = 'none';
            currentSection--;
            sections[currentSection].style.display = 'flex';
        }
    });

    document.getElementById('right-arrow').addEventListener('click', () => {
        if (currentSection < sections.length - 1) {
            sections[currentSection].style.display = 'none';
            currentSection++;
            sections[currentSection].style.display = 'flex';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const projectSection = document.querySelector(".coffee-products");
    const projectCards = document.querySelectorAll(".project-card");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        if (isInViewport(projectSection)) {
            projectSection.classList.add("show");
        } else {
            projectSection.classList.remove("show");
        }

        projectCards.forEach((card, index) => {
            if (isInViewport(card)) {
                if (index % 2 === 0) {
                    card.classList.add("show-left");
                } else {
                    card.classList.add("show-right");
                }
            } else {
                card.classList.remove("show-left", "show-right");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
});
