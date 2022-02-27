<template>
<div class="modal">
    <div class="modal-content">
        <div class="center-spaced">
          <div class="title"><h2>New Task</h2></div>
          <button class="sm-btn" v-on:click="closeModal">&times;</button>
        </div>
        <form @submit.prevent="createTask">
            <label class="label">Title</label>
            <input type="text" @keyup.enter="submit"  v-model="taskForm.title" placeholder="Enter Task Title">
             <p class="error">{{ !taskForm.title ? "Title is required" : "" }}</p>
            <label class="label">Description</label>
            <input type="text"  v-model="taskForm.description" placeholder="Enter Task Description">
            <p class="error">  {{ !taskForm.description ? "Title is required" : "" }}</p>
            <label class="label">Set Due Date</label>
            <input type="date"  v-model="taskForm.date">
            <p class="error">  {{ !taskForm.date ? "Due Date is required" : "" }}</p>
            <label class="label">Priority</label>
            <select  v-model="taskForm.priority">
                <option>Low</option>
            </select>
             <p class="error"> {{ !taskForm.priority ? "Priority is required" : "" }}</p>
            <label class="label">Comments</label>
            <textarea placeholder="Enter comments"  v-model="taskForm.comment"></textarea>
            <button type="submit" class=" d-block mr-0 ml-auto right-btn"><i class="fa-solid fa-spinner fa-spin"></i> Add New Task</button>
           
        </form>
    </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { store } from '@/store'
import { MutationType } from '@/store/mutations'
import { TaskItem } from "@/models"
import { v4 as uuidv4 } from "uuid";

@Options({

  

})
export default class NewTask extends Vue {

  isValid = true;

  taskForm : TaskItem = {
    id: 0,
    title: "",
    description: "",
    date: "",
    priority: "",
    comment: "",
    completed: false
  };

  get formValid(): boolean {
   const { title, description, date, priority } = this.taskForm;
   return Boolean(title && description && date && priority);
 
  }
  
  createTask(){

    if (!this.formValid) {
      return;
    }
    this.taskForm = {
      id: Date.now(),
      title: this.taskForm.title,
      description: this.taskForm.description,
      date: this.taskForm.date,
      priority : this.taskForm.priority,
      comment: this.taskForm.comment,
      completed: false
    },

    console.log(this.taskForm);
    store.commit(MutationType.CreateTask, this.taskForm);
    store.commit(MutationType.SetToggleAddModal, false);
  }

 
  
  get isClose(){
    return store.state.ToggleAddModal;
  }

   closeModal (){
     store.commit(MutationType.SetToggleAddModal, false);
  }
}
</script>

<style scoped lang="scss">
  
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 35px;
    border: none;
    width:40vw;
    height: 500px;
    border-radius: 5px;
    animation: scaled .3s ease-in-out ;//infinite alternate;
    overflow-y:auto;
  }

  @keyframes scaled {
        0% {
            transform: scale(0);
            -webkit-transform: scale(0);
        }
        100% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
      }
  }


.error {
  color: rgb(255, 59, 59);
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(237, 77, 36, 1); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 70, 70); 
}
// @media screen and (max-width: 500px) {
// 	.modal-wrap {
// 		width: calc(100% - 40px);
// 		padding-bottom: 15px;
// 	}
// 	.modal-wrap p {
// 	  padding: 15px 20px 0 20px;
// 	}
// }
    


</style>
