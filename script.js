console.log('VUE OK', Vue);

const app = Vue.createApp({

data() {
	return {
    currentIndex: 0,
    data,
  }
},


computed: {

},

methods: {
  goToPrev() {
    if (this.currentIndex === 0) this.currentIndex = this.data.length -1
    else this.currentIndex--;
  },

  goToNext () {
    if (this.currentIndex === this.data.length - 1) this.currentIndex = 0
    else this.currentIndex++;
  },

  goTo (index) {
    this.currentIndex = index;
  }
}


});

app.mount('#carousel');