new Vue({
  el: '#app',
  data(){
    return {
      items: [],
      name: '',
      description: ''
    }
  },
  methods: {
    add(){
      let item = {
        name: this.name,
        description: this.description
      }

      this.items.push(item)

      this.name = ''
      this.description = ''

      console.log(this.items)
    }
  }
})