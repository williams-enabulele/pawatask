<template>
<div class="modal">
    <div class="modal-content">
        <div class="center-spaced">
        <div class="title"><h2>New Task</h2></div>
        <button class="sm-btn">&times;</button>
        </div>
        <form>
            <label class="label">Title</label>
            <input type="text" placeholder="Enter Task Title">
            <label class="label">Description</label>
            <input type="text" placeholder="Enter Task Description">
            <label class="label">Set Due Date</label>
            <input type="date">
            <label class="label">Priority</label>
            <select>
                <option>Low</option>
            </select>
            <label class="label">Comments</label>
            <textarea placeholder="Enter comments"></textarea>
            <button class=" d-block mr-0 ml-auto right-btn">Add New Task</button>
        </form>
    </div>
</div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
  .modal {
    display: none;
    position: fixed; 
    z-index: $layer-modal-z-index;
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color:rgb(0, 25, 25);
    opacity: 0.698039;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width:40%;
  }

</style>
