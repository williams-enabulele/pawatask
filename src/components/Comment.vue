<template>
<div class="modal">
    <div class="modal-content">
        <div class="center-spaced">
            <div class="title">
                <h2>{{task.title}}<span class="hover" v-on:click="openEditModal(task.id)"><i class="lni lni-pencil"></i></span></h2>
            </div>
            <button class="sm-btn" v-on:click="closeModal">&times;</button>
        </div>
        <p class="description">{{task.description}}</p>
        <div class="center-spaced">
            <p><span class="semi-bold">Date: </span> {{task.date}}</p>
            <p><span class="semi-bold">Priority:</span> {{task.priority}}</p>
        </div>
        <div class="card" v-for="(comment, index ) in taskComments" :key="index">
            <div class="card-header">
                <h3 class="name">{{names[index]}}</h3>
                <p class="date">{{comment.date}}</p>
            </div>
            <div class="card-content">
                <p>{{comment.content}}</p>
            </div>
        </div>
        <form class="wrapper">
            <textarea placeholder="Write a comment" v-model.lazy="taskComment.content"></textarea>
            <button type="submit" v-on:click="createTaskComment()"  class="right-btn">Add New Task</button>
        </form>
    </div>
</div>
<NewTask/>
</template>

<script lang="ts">
import { CommentItem, TodoTask } from "@/models";
import { store } from "@/store";
import { MutationType } from "@/store/mutations";
import { Options, Vue } from "vue-class-component";


export default class Comment extends Vue {



    content?: string;

    names = ["James King", "Dev 0x", "Williams"]
    
    currentTask ? : TodoTask
    taskComment: CommentItem = {
        id: 0,
        taskId: 0,
        name: "",
        content: "",
        date: ""
    }
    

    get taskComments(){

       return store.state.comments.filter(x => x.taskId == this.currentId)
    }

    get comments(){
        return store.state.comments
    }

    get currentId() {
     return store.state.currentId
    }

    get task() {
        const data = store.state.tasks
        this.currentTask = data.find(x => x.id == this.currentId)
        return this.currentTask
    }

    getContent($event: { target: { value: string } }){
        return this.content = $event.target.value;
       
    }

   
    createTaskComment(){
        this.taskComment = {
            id: Date.now(),
            taskId: this.currentId,
            name: "Alex Ray",
            content: this.taskComment.content,
            date: new Date().toLocaleDateString()
        };
        store.commit(MutationType.CreateComment, this.taskComment)
        this.taskComment.content = ""
        this.taskComments
       
    }

     openEditModal(id: number) {
        store.commit(MutationType.SetToggleAddModal, true);
        store.commit(MutationType.SetToggleCommentModal, false);
        store.commit(MutationType.SetCurrentId, id);
    }

    closeModal() {
        store.commit(MutationType.SetCurrentId, 0);
        store.commit(MutationType.SetToggleCommentModal, false)
    }
}
</script>

<style lang="scss" scoped>
    
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

    .card {
        border-bottom: 2px solid rgb(170, 170, 170);
        margin-bottom: 35px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
    }
    .hover:hover{
        color: #ff1919;
    }
</style>
