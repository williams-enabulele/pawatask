<template>
<div class="spaced">
 <div title=".check" v-on:click="markComplete(id, title, description, date, priority,comment, completed)">
    <div class="check">
      <input type="checkbox" value="None" id="check" name="check" :checked=false @change="markComplete()" />
      <label for="check"></label>
          {{ title}}
    </div>
  </div>
    <div class="md-lg-screen"><i class="fa-solid fa-calendar-days"></i>   {{date}} <span class="btn" v-on:click="openCommentModal(id)"><i class="fa-solid fa-comments"></i></span><span class="btn" v-on:click="openEditModal(id)"><i class="fa-solid fa-pen"></i></span></div>
        
    <div class="dropdown">
        <span class="menu"><i class="fa-solid fa-ellipsis-vertical"></i></span>
        <div class="dropdown-content">
            <span class="menu-item"  v-on:click="openCommentModal(id)"><i class="fa-solid fa-comments icon"></i>  Comments</span> 
            <hr>
            <span class="menu-item"  v-on:click="openEditModal(id)"><i class="fa-solid fa-pen icon"></i>  Edit</span>
            <hr>
            <span class="menu-item"> <i class="fa-solid fa-calendar-days"></i> {{date}}</span> 
        </div>
    </div>

</div>
<Comment v-if="isOpenCommentComputed" />
<NewTask v-if="isOpenEditModal" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Comment from "@/components/Comment.vue";
import NewTask from "@/components/NewTask.vue";
import TaskStatus  from "@/components/TaskStatus.vue";
import { store } from "@/store";
import { MutationType } from "@/store/mutations";


export interface stats {
    completed:Number,
    total: Number
}

@Options({

    components: {
        Comment,
        NewTask,
        TaskStatus
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        }
    },
})



export default class TaskItem extends Vue {
    get taskCompleted(){
       return store.getters.completedCount
    }

    get totalCount(){
        return store.getters.totalCount
    }

    get isOpenCommentComputed() {
        return store.state.ToggleCommentModal
    }

    get isOpenEditModalComputed() {
        return store.state.ToggleAddModal
    }

    get count(){
        return store.state.tasks.length
    }
    
    markComplete(
        id: string,
        title: string,
        description: string,
        date: string,
        priority: string,
        comment: string,
        completed: boolean
    ) {
        store.commit(MutationType.CompleteTask, {
            id: id,
            title: title,
            description: description,
            date: date,
            priority: priority,
            comment: comment,
            completed: !completed
        })
    }

    openCommentModal(id: number) {
        store.commit(MutationType.SetToggleCommentModal, true);
        store.commit(MutationType.SetCurrentId, id);
    }

    openEditModal(id: number) {
        store.commit(MutationType.SetToggleAddModal, true);
        store.commit(MutationType.SetCurrentId, id);
    }
}
</script>

<style lang="scss" scoped>
.spaced {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #b5171717;
    background: #fff6f6;
    padding: 15px;
    margin-top: 25px;
}

.block {
    display: flex;
    position: relative;
    font-size: 22px;
    margin: 15px;
}

.block input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #f0f0f0;
}

.block:hover input~.checkmark {
    background-color: rgb(255, 181, 181);
}

.block input:checked~.checkmark {
    background-color: #f0f0f0;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.block input:checked~.checkmark:after {
    display: block;
}

.row {
    display: flex;
}

.block .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid rgb(253, 51, 51);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}


.btn {
    width: 20px;
    height: 20px;
    padding: 8px;
    background: $color-button-bg;
    margin: 0 5px;
    color: #fff;
    box-shadow: 0px 6px 18px -5px rgb(250, 38, 38);
}

.btn:hover {
    background: #d84520;
}

.dropdown {
  position: relative;
}
.md-lg-screen {
    
    justify-content: center;
    align-items: center;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 0px;
}




.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}

hr{
    width: 100%;
    background:$color-button-bg;

}

.menu{
    display: flex;
    padding-top: 23px;
}

.menu-item{
    cursor: pointer;
    padding: 12px 16px;
    display: block;
}

.icon {
    color: $color-button-bg;
}
</style>
