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
      <li class="py-2 tracking-wide" v-for="todo in todos" v-bind:key="todo._id">
        <Todo :text="todo.text" @remove="removeTodo(todo._id)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Todo from './todo';

export default {
  components: {
    Todo
  },
  data() {
    return {
      text: '',
      todos: []
    }
  },
  methods: {
    async addTodo() {
      if (!this.text) {
        return;
      }
      await axios.post('http://localhost:3000/todos', {
        text: this.text
      })
      this.todos = await getTodos();
    },

    async removeTodo(id) {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      this.todos = await getTodos();
    }
  },
  async beforeCreate() {
    this.todos = await getTodos();
  }
}

async function getTodos() {
  const response = await axios.get('http://localhost:3000/todos');
  return response.data
}

</script>

<style scoped>
</style>
