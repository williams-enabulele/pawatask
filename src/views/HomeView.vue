<template>
  <div class="container">
    <Header/>
    <EmptyTask/>
    <NewTask/>
    <TaskList/>
    <Comment/>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import NewTask from "@/components/NewTask.vue";
import EmptyTask from "@/components/EmptyTask.vue";
import Comment from "@/components/Comment.vue";
import TaskList from "@/components/TaskList.vue";

@Options({
  components: {
    Header,
    NewTask,
    EmptyTask,
    Comment,
    TaskList,
  },
})
export default class HomeView extends Vue {}
</script>
