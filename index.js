new Vue({
  el: '#app',
  data(){
    return {
      items: [],
      name: '',
      description: ''
    }
  },
  mounted() {
    let data = localStorage.getItem('inkos_data')
    if (data) this.items = JSON.parse(data)
  },
  methods: {
    add(){
      let item = {
        name: this.name,
        description: this.description
      }

      this.items.push(item)
      this.save()

      this.name = ''
      this.description = ''
    },
    remove(index){
      this.items.splice(index, 1)
      this.save()
    },
    save(){
      localStorage.setItem('inkos_data', JSON.stringify(this.items))
    }
  }
})