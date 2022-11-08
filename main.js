Vue.createApp({
    data() {
        return {
            bolValue: true
        }
    },
    methods: {
        change_bol_value() {
            this.bolValue = !this.bolValue;
        }
    }
}).mount('#app')