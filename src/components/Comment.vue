<template>
    <div class="modal">
    <div class="modal-content">
        <div class="center-spaced">
        <div class="title"><h2>Task Title <i class="lni lni-pencil"></i></h2> </div>
        <button class="sm-btn" v-on:click="closeModal">&times;</button>
        </div>
        <p class="description">
            Task description lorem ipsum dolor lorem task description lorem ipsum 
            dolor lorem task description lorem ipsum dolor lorem task description 
            lorem ipsum dolor lorem task.
        </p>
        <div class="wrapper">
                <i class="lni lni-calendar font">  05/05/2015</i>
                <p>Priority: Low</p>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="name">Holand Cage</h3>
                <p class="date"> today at 10:25am</p>
            </div>
            <div class="card-content">
                <p>Is the meeting room available next Monday? comment lorem ipsum dolor lorem ipsum dolor.</p>
            </div>
        </div>
        <form>
            <div class="wrapper">
                <textarea placeholder="Write a comment"></textarea>
                <button class="right-btn">Add New Task</button>
            </div>
        </form>
    </div>
</div>
</template>

<script lang="ts">
import { store } from "@/store";
import { MutationType } from "@/store/mutations";
import { Options, Vue } from "vue-class-component";


@Options({

  props: {
    msg: String,
  },
})
export default class Comment extends Vue {
  
  closeModal (){
     store.commit(MutationType.SetToggleCommentModal, false);
   }
}
</script>

<style scoped  lang="scss">
 
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width:40%;
     animation: scaled .3s ease-in-out //infinite alternate;
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
  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .font{
        font-family: Montserrat;
  }

  .card {
         border-bottom: 2px solid rgb(170, 170, 170);
         margin-bottom: 35px;
  }

  .card-header {
        display: flex;
        justify-content: space-between;
  }
</style>

