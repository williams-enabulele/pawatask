<template>
  <div class="center">
     <img src="@/assets/empty.png" class="empty">
      <p>No task yet, create one!</p>
    
</div>
</template>

<script lang="ts">
import { store } from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({

  props: {
    msg: String,
  },
})
export default class EmptyTask extends Vue {
  
 
}
</script>
<style scoped  lang="scss">
 .center {
     display: flex;
     flex-direction: column;
     justify-content: center;
     text-align: center;
     margin-top: 10%;
 }

 .empty {
     width: 20%;
     height: auto;
     display: flex;
     align-self: center;
 }
</style>
