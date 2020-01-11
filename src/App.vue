<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <img class="logo img-responsive" src="@/assets/agenda.png" />
      <br />
      <span class="badge" v-bind:data-badge="todos.length">Total de registros</span>
      <form>
        <div class="input-group">
          <input v-model="todo.description" type="text" class="form-input" placeholder="Novo todo" />
          <button
            @click.prevent.stop="addTodo(todo)"
            class="btn btn-primary input-group-btn"
          >Adicionar</button>
        </div>
      </form>
      <div class="todo-list">
        <todo
          v-for="t in todos"
          v-bind:key="t.id"
          @toggle="toggleTodo"
          @remove="removeTodo"
          v-bind:todo="t"
        ></todo>
      </div>
    </div>
  </div>
</template>

<script>
import todo from "./components/todo";

export default {
  name: "app",
  components: { todo },
  data() {
    return {
      todos: [],
      todo: {
        id: "",
        description: "",
        checked: false
      }
    };
  },
  methods: {
    addTodo(todo) {
      if (this.todo.description !== "") {
        todo.id = Date.now();
        this.todos.push(todo);

        this.todo = {
          id: "",
          description: "",
          checked: false
        };
      } else {
        alert("Digite alguma descrição!");
      }
    },

    toggleTodo(todo) {
      const index = this.todos.findIndex(item => item.id === todo.id);

      const temp = {
        id: this.todos[index].id,
        description: this.todos[index].description,
        checked: !this.todos[index].checked
      };

      if (index > -1) {
        const checked = !this.todos[index].checked;
        this.$set(this.todos, index, temp);
      }
    },

    removeTodo(todo) {
      const index = this.todos.findIndex(item => item.id === todo.id);

      if (index > -1) {
        this.$delete(this.todos, index);
      }
    }
  }
};
</script>

<style scoped>
.logo {
  max-width: 200px;
  margin: auto;
}

.todo-list {
  padding-top: 1rem;
}
</style>
