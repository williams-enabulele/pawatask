<template>
  <div class="spaced">
    <div v-on:click="markComplete(id, title, description, date, priority,comment, completed)">
      <label class="block">
          <input type="checkbox"  :checked="completed"
        @change="markComplete()">
          <span class="checkmark"></span>
      </label>
      <span class="mr-5">{{title}}</span>
    </div>
    <div>
      <i class="fa-solid fa-calendar-day"></i> <span>{{date}}</span> <span class="btn" v-on:click="openModal"><i class="fa-solid fa-comments"></i></span><span class="btn" v-on:click="openEditModal"><i class="fa-solid fa-pen"></i></span>
    </div>
  </div>
  <Comment v-if="isOpenComputed"/>
  <NewTask v-if="isOpenEditModal"/>
</template>

<script lang="ts">
    import { Options, Vue, prop } from "vue-class-component";
    import Comment  from "@/components/Comment.vue";
    import NewTask from "@/components/NewTask.vue";
    import { store } from "@/store";
    import { MutationType } from "@/store/mutations";

    @Options({

    components : {
      Comment,
      NewTask
    },
    props: {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      date: { type: String, required: true },
      priority: { type: String, required: true },
      comment: { type: String, required: true },
      completed: { type: Boolean, required: true }
    },
    })

    export default class TaskItem extends Vue {

    get isOpenComputed(){
      return store.state.ToggleCommentModal
    }

    get isOpenEditModalComputed(){
       return store.state.ToggleAddModal
    }

     markComplete(
       id:string, 
       title:string, 
       description:string, 
       date: string, 
       priority: string, 
       comment:string, 
       completed:boolean
       ){
      store.commit(MutationType.CompleteItem, {
      id: id,
      title: title,
      description: description,
      date: date,
      priority: priority,
      comment: comment,
      completed:!completed
    })
  }

    openModal(){
    store.commit(MutationType.SetToggleCommentModal, true);
    }

    openEditModal(){
    store.commit(MutationType.SetToggleAddModal, true);
  }
}
</script>
<style scoped  lang="scss">
.spaced {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #b5171740;
  background: #fff6f6;
  padding: 15px;
}

.block {
    display: block;
    position: relative;
    font-size: 22px;
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
  height:25px;
  width: 25px;
  background-color: rgb(255, 181, 181);
}

.block:hover input ~ .checkmark {
  background-color: #ccc;
}

.block input:checked ~ .checkmark {
  background-color: #313fbeee;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.block input:checked ~ .checkmark:after {
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
  border: solid rgb(132, 253, 51);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.mr-5 {
    margin-left: 35px;
    display:inline-block;
}

.btn {
  width: 25px;
  height: 25px;
  padding: 10px;
  background: $color-button-bg;
  margin: 0 5px;
  color: #fff;
}

.btn:hover {
  background: #313fbeee;
}
</style>
