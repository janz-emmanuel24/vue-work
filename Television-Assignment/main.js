Vue.createApp({
    data() {
        return {
            tv_on: true,
            slides: [
                'https://giphy.com/embed/UKm1AF0UrCkb6',
                'https://giphy.com/embed/xT5LMqjIUKwKuCqoGA',
                'https://giphy.com/embed/26ufi2F7ip0hKaX0A'
            ],
            visible: 0
        }
    },
    methods: {
        toggleOnOff() {
            this.tv_on = !this.tv_on
        },
        next() {
            if(this.visible >= this.slides.length - 1) {
                this.visible = 0;
            } else {
                this.visible++;
            }
        },
        prev() {
            if(this.visible <= 0) {
                this.visible = this.slides.length -1 ;
            } else {
                this.visible--;
            }
        }
    }
}).mount('#application')