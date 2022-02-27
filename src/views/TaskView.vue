<template>
  <div class="container">
    <Header/>
    <EmptyTask v-if="taskCount"/>
    <TaskList/>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import EmptyTask from "@/components/EmptyTask.vue";
import TaskList from "@/components/TaskList.vue";
import { store } from "@/store";

@Options({
  components: {
    Header,
    EmptyTask,
    TaskList,
  },
})
export default class TaskView extends Vue {

  isNewTaskModal = false;
  isCommentModal = false;
 
  get taskCount(){

    if(store.getters.totalCount >=1){
      return false
    }
    else{
      return true
    }
  }

  toggleTaskModal(){
    this.isNewTaskModal = !this.isNewTaskModal
  }

  toggleCommentModal(){
    this.isCommentModal = !this.isCommentModal
  }

}
</script>
