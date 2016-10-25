var [a, , b] = [1,2,3];
var index = 1
var c = `${index}`
const state = (index) => {
  console.log(index)
}
const test = {
  index: state => state.index,
  total: state => state.total
}
const mutations = {
  addTodo (state, { text }) {
    state.todos.push({
      text,
      done: false
    })
  },

  deleteTodo (state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  toggleTodo (state, { todo }) {
    todo.done = !todo.done
  },

  editTodo (state, { todo, value }) {
    todo.text = value
  },

  toggleAll (state, { done }) {
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },

  clearCompleted (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}
module.exports = {
  state,
  mutations
}
