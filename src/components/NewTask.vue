<template>
<div class="modal">
    <div class="modal-content">
        <div class="center-spaced">
            <div class="title">
                <h2>{{currentTask? "Edit Task" : "Add Task"}}</h2>
            </div>
            <button class="sm-btn" v-on:click="closeModal">&times;</button>
        </div>
        <form @submit.prevent="createTask">
            <label class="label">Title</label>
            <input type="text" v-model="taskForm.title" placeholder="Enter Task Title">
            <p class="error">{{ !taskForm.title ? "Title is required" : "" }}</p>
            <label class="label">Description</label>
            <input type="text" v-model="taskForm.description" placeholder="Enter Task Description">
            <p class="error"> {{ !taskForm.description ? "Title is required" : "" }}</p>
            <label class="label">Set Due Date</label>
            <input type="date" v-model="taskForm.date">
            <p class="error"> {{ !taskForm.date ? "Due Date is required" : "" }}</p>
            <label class="label">Priority</label>
            <select v-model="taskForm.priority">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <p class="error"> {{ !taskForm.priority ? "Priority is required" : "" }}</p>
            <label class="label">Comments</label>
            <textarea placeholder="Enter comments" v-model="taskForm.comment"></textarea>
            <div class="right">
                <button type="submit" class=" d-block mr-0 ml-auto right-btn">{{currentTask? "Update Task" : "Add New Task"}}</button>
            </div>
            

        </form>
    </div>
</div>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component"
import { store } from '@/store'
import { MutationType } from '@/store/mutations'
import { TodoTask } from "@/models"

@Options({
})
export default class NewTask extends Vue {
    isValid = true;

    [x: string]: any;
     toastTopEnd(msg: string) {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        title: 'Saved',
        text: msg,
      })
    }

    mounted(){
        if(this.currentTask!=undefined){
        this.taskForm = this.currentTask
    }
      
    }

    taskForm: TodoTask = {
        id: 0,
        title: "",
        description: "",
        date: "",
        priority: "",
        comment: "",
        completed: false
    };

    get currentId(){
        return store.state.currentId
    }

    get currentTask(){
        const tasks = store.state.tasks;
        return tasks.find(x => x.id == this.currentId);  
    }
    // Validation
    get formValid(): boolean {
        const {
            title,
            description,
            date,
            priority
        } = this.taskForm;
        return Boolean(title && description && date && priority);

    }

    createTask() {

        if (!this.formValid) {
            return;
        }
        this.taskForm = {
                id: Date.now(),
                title: this.taskForm.title,
                description: this.taskForm.description,
                date: this.taskForm.date,
                priority: this.taskForm.priority,
                comment: this.taskForm.comment,
                completed: false
            };
        if(!this.currentTask){
            store.commit(MutationType.CreateTask, this.taskForm);
            this.toastTopEnd('Your task has been successfully entered!')
        }else{
            store.commit(MutationType.EditTask, this.taskForm)
            this.toastTopEnd('Your task has been successfully updated!')
        }
        
        store.commit(MutationType.SetToggleAddModal, false);
    }

    get isClose() {
        return store.state.ToggleAddModal;
    }

    closeModal() {
        store.commit(MutationType.SetCurrentId, 0);
        store.commit(MutationType.SetToggleAddModal, false);
        
    }
}
</script>

<style lang="scss" scoped>

.right {
    display: flex; 
    justify-content: flex-end;
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
</style>
