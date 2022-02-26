<template>
<div class="row">
  <!-- <label class="block">
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>
    <span class="mr-5">Task Title</span>
      <div class="spaced">
      <i class="fa-solid fa-calendar" style="margin-left: 45px"></i>
    </div> -->
</div>
</template>

<script lang="ts">
    import { Options, Vue } from "vue-class-component";

    @Options({

    props: {
        msg: String,
    },
    })
    export default class TaskList extends Vue {
    }
</script>
<style scoped  lang="scss">

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
  flex-direction: row;
  justify-content: center;
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
}

</style>
