<template>
  <div class="font-mono drop-shadow-2xl selection:bg-yellow-300">
    <div class="rounded-t-lg bg-gradient-to-r from-yellow-500 to-purple-500 container p-8 mx-auto">
      <h1 class="text-6xl p-4">Todo List</h1>
      <form @submit.prevent="addTodo">
        <input class="p-2" type="text" placeholder="Text" v-model="text">
        <button class="p-2 ml-2 bg-white rounded-lg hover:bg-violet-200">Add todo</button>
      </form>
    </div>

    <ul class="py-4">
      <li class="py-2 tracking-wide" v-for="todo in todos" v-bind:key="todo.id">
        <Todo :text="todo.text" @remove="removeTodo(todo.id)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from './todo';

export default {
  components: {
    Todo
  },
  data() {
    return {
      text: '',
      todos: [
        {text: 'Aprender node', id: 0},
        {text: 'Aprender vue', id: 1}
      ],
      nextId: 2
    }
  },
  methods: {
    addTodo() {
      if (!this.text) {
        return;
      }

      this.todos.push({
        text: this.text,
        id: this.nextId++
      });
    },

    removeTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    }
  }
}
</script>

<style scoped>
</style>
