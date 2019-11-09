
Vue.component('todo-item',{
  template: '<li v-bind:class="{ done: done }" v-if="display"><input type="checkbox" v-model="done">{{ todo }}</li>',
  props: ['todo', 'done', 'display']
})



var app = new Vue({
  el: '#app',
  data: function(){
    return {
      items: [
        { id:1, todo: 'aaa', state: false },
        { id:2, todo: 'bbb', state: false },
        { id:3, todo: 'ccc', state: false },
      ],
      newItem: ''  
    }
  },
  methods: {
    addItem: function() {
      if(this.newItem === '') {
        return
      }
      //maxIdを取得
      let maxId;
      this.items.forEach(function(e) {
        if(maxId < e.id) {
          maxId = e.id
        }
      })
      //maxId + 1でobj作成
      var newObj = {
        id: maxId, todo: this.newItem, state: false
      }
      //itemsにセット
      this.items.push(newObj)
      this.newItem = ''
    },
    restoreItem: function(index) {
      const tmpTodo = this.items[index];
      tmpTodo.state = !tmpTodo.state
      this.$set(this.items, index, tmpTodo)
    }
  }
})