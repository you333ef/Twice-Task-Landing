document.addEventListener("DOMContentLoaded", function() {
    const options = {
        duration: 10 // الثواني
    };

    const projectsCounter = new CountUp('projects-counter', 0, 400, 0, options.duration);
    const clientsCounter = new CountUp('clients-counter', 0, 600, 0, options.duration);
    const stylesCounter = new CountUp('styles-counter', 0, 100, 0, options.duration);

    if (!projectsCounter.error) {
        projectsCounter.start();
    } else {
        console.error(projectsCounter.error);
    }

    if (!clientsCounter.error) {
        clientsCounter.start();
    } else {
        console.error(clientsCounter.error);
    }

    if (!stylesCounter.error) {
        stylesCounter.start();
    } else {
        console.error(stylesCounter.error);
    }
});


class ScrollButton {
    constructor(buttonId, showAt) {
        this.button = document.getElementById(buttonId);
        this.showAt = showAt;
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.scrollToBottom());
        window.addEventListener('scroll', () => this.toggleButtonVisibility());
    }

    scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    toggleButtonVisibility() {
        const currentScroll = window.scrollY;
        if (currentScroll > this.showAt) {
            this.button.style.display = 'block';
        } else {
            this.button.style.display = 'none';
        }
    }
}


const showAt = 100; // يظهر بعد 100 بكسل من الهبوط

// إنشاء كائن من الكلاس ScrollButton
const scrollButton = new ScrollButton('scrollButton', showAt);