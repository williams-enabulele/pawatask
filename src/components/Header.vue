<template>
  <div class="nav-wrapper">
    <div class="logo">pawa<span class="bold">Task</span></div>
    <div class="btn" v-on:click="openModal()" >Add a new Task</div>
    <NewTask v-if="isOpenComputed" />
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import  NewTask  from "@/components/NewTask.vue";
import { store } from "@/store";
import { MutationType } from '@/store/mutations';

@Options({
 components: {
   NewTask

 },
  props: {
    msg: String,
  },
})
export default class Header extends Vue {

  get isOpenComputed(){
    return store.state.ToggleAddModal;
  }

  openModal(){
    store.commit(MutationType.SetToggleAddModal, true);
  }
}
</script>
<style scoped  lang="scss">

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  border-bottom: 2px #000;
 }

 .btn {
    
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block; 
    font-size: 16px;
    cursor: pointer;
 }

 .logo {
   display: inline-block;
 }

 .bold {
   font-size: 20px;
   font-weight: 800;
 }

</style>
