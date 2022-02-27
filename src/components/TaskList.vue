<template>
  <TaskItem v-for="task in tasks" :key="task" v-bind="task"/>
</template>

<script lang="ts">
    import { store } from "@/store";
    import { MutationType } from '@/store/mutations';
    import { Options, Vue } from "vue-class-component";
    import TaskItem from "./TaskItem.vue"

    @Options({

    components: {
      TaskItem
    },

    })
    export default class TaskList extends Vue {

      get tasks(){
        return store.state.tasks;
      }
}
</script>
<style scoped  lang="scss">
</style>
