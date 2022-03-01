<template>
<TaskItem v-for="(task, index ) in tasks" :key="index" v-bind="task" />
</template>

<script lang="ts">
import { store } from "@/store";
import { Options, Vue } from "vue-class-component";
import TaskItem from "./TaskItem.vue"

@Options({
    components: {
        TaskItem
    }
})
export default class TaskList extends Vue {

    get tasks() {
        return store.state.tasks;
    }
}
</script>

<style scoped  lang="scss">
</style>
