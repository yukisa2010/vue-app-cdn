Vue.component('todo-items', {
  template: `
  <li>
    <input 
      type="checkbox" 
      v-bind:checked="state"
      v-on:change="checked"
    >
    {{ todo }}
  </li>`,
  props: 
    {
        id: Number,
        todo: String,
        state: Boolean
    },
  methods: {
    checked: function() {
      
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
      items: [
        { id:1, todo: 'aaa', state: false },
        { id:2, todo: 'bbb', state: false },
        { id:3, todo: 'ccc', state: false },
      ]
  },

  // data: {
  //     newItem: ''  
  // },
  // watch: {
  //   items: function(oldValue, newValue) {
  //     console.log('old:', JSON.stringify(oldValue))
  //     console.log('new:', JSON.stringify(newValue))
  //   },
  //   deep: true,
  //   immediate: true
  // },
  // methods: {
  //   addItem: function() {
  //     if(this.newItem === '') {
  //       return
  //     }
  //     //maxIdを取得
  //     let maxId;
  //     this.items.forEach(function(e) {
  //       if(maxId < e.id) {
  //         maxId = e.id
  //       }
  //     })
  //     //maxId + 1でobj作成
  //     var newObj = {
  //       id: maxId, todo: this.newItem, state: false
  //     }
  //     //itemsにセット
  //     this.items.push(newObj)
  //     this.newItem = ''
  //   }
  // }
})