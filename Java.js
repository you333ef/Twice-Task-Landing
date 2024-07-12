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

// تحديد نقطة الظهور (بالبكسل)
const showAt = 100; // يظهر بعد 100 بكسل من الهبوط

// إنشاء كائن من الكلاس ScrollButton
const scrollButton = new ScrollButton('scrollButton', showAt);