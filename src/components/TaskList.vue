<template>
  <div class="spaced">
    <div>
      <label class="block">
          <input type="checkbox">
          <span class="checkmark"></span>
      </label>
      <span class="mr-5">Task Title</span>
    </div>
    <div>
      <i class="fa-solid fa-calendar-day"></i> <span>05/05/2019</span> <span class="btn"><i class="fa-solid fa-comments"></i></span><span class="btn"><i class="fa-solid fa-pen"></i></span>
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
    export default class TaskList extends Vue {
    }
</script>
<style scoped  lang="scss">
.spaced {
  display: flex;
  justify-content: space-between;
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
