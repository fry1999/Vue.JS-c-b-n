<template>
  <div class="container">
    
    <h1>Todo List </h1>

    <div>
      <input v-model="newTask" placeholder="Nhập task mới ">
      <button @click="addNewTask">Add</button>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <ListItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" @remove="removeTask(index)"
          @changeStatus="changeStatus">
        </ListItem>

      </tbody>
    </table>

  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {


  name: 'TodoApp',
  props: {
    msg: String
  },

  components: {
    ListItem
  },

  data() {
    return {
      newTask: "",
      todos: [
        { id: 1, text: 'Task 1', status: "to-do" },
        { id: 2, text: 'Task 2', status: "doing" },
        { id: 3, text: 'Task 3', status: "review" }
      ]
    }
  },

  methods: {
    addNewTask() {
      if (this.newTask.trim() !== '') {
        this.todos.push({ id: this.todos.length + 1, text: this.newTask, status: "to-do" });
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.todos.splice(index, 1);
    },
    changeStatus(updatedTodo) {

      switch (updatedTodo.status) {
        case 'to-do':
          updatedTodo.status = 'doing'
          break;
        case 'doing':
          updatedTodo.status = 'review'
          break;
        case 'review':
          updatedTodo.status = 'done'
          break;
        default:
          updatedTodo.status = 'to-do'
          break;
      }
    },

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
