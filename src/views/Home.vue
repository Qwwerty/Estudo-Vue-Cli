<template>
  <div class="container grid-xs py-2">
    <img class="logo img-responsive" src="@/assets/agenda.png" />
    <br />
    <span class="badge" v-bind:data-badge="todos.length"
      >Total de registros</span
    >
    <form>
      <div class="input-group">
        <input
          v-model="todo.description"
          type="text"
          class="form-input"
          placeholder="Novo todo"
        />
        <button v-bind:class="{loading}" @click.prevent.stop="addTodo(todo)" class="btn btn-primary input-group-btn">
          Adicionar
        </button>
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
</template>

<script>
import todo from "@/components/todo";
import { mapActions, mapState } from 'vuex'

export default {
  name: "app",
  components: { todo },
  data() {
    return {
      todo: {
        id: "",
        description: "",
        checked: false
      },
    };
  },
  computed: {
    ...mapState(['todos', 'loading'])
  },
  methods: {
    ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),


    async addTodo(todo) {
        if (this.todo.description !== "") {
          await this.$store.dispatch("addTodo", todo);

          this.todo = {
            id: "",
            description: "",
            checked: false
          };
        } else {
          alert("Digite alguma descrição!");
        }
    },

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

.tile{
  margin-top: 1rem;
  padding: 5px;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}
</style>
