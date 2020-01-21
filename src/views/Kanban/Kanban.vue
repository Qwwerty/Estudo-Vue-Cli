<template>
  <div class="container-board">
    <div class="columns">
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Todo</div>
          </div>
          <div class="panel-body">
            <todo
              v-bind:key="todo.id"
              v-bind:todo="todo"
              v-for="todo in uncheckeds"
              @toggle="toggleTodo"
              @remove="removeTodo"
            ></todo>
          </div>
          <div class="panel-footer">
            <button class="btn btn-link float-right" v-if="uncheckeds.length > 0" @click.prevent.stop="checkAll">Concluir tudo</button>
          </div>
        </div>
      </div>
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Done</div>
          </div>
          <div class="panel-body">
            <todo
              v-bind:key="todo.id"
              v-bind:todo="todo"
              v-for="todo in checkeds"
              @toggle="toggleTodo"
              @remove="removeTodo"
            ></todo>
          </div>
          <div class="panel-footer">
            <button @click.prevent.stop="removeAllCheckeds" v-if="checkeds.length > 0  " class="btn btn-link float-right text-error">Remover tudo</button>
            <button @click.prevent.stop="uncheckAll" v-if="checkeds.length > 0  " class="btn btn-link float-right">Desmarcar todos</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/todo";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { Todo },
  computed: {
    ...mapGetters(["uncheckeds", "checkeds"])
  },
  methods: {
    ...mapActions(["toggleTodo", "removeTodo", "checkAll", "uncheckAll", "removeAllCheckeds"])
  }
};
</script>

<style scoped>
.container-board {
  height: calc(100vh - 100px);
  padding: 10px;
}
.columns {
  height: 100%;
}
.columns .column .panel {
  height: 100%;
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}

.tile {
  margin-top: 1rem;
  padding: 5px;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}
</style>
