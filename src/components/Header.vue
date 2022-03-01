<template>
<div class="nav-wrapper">
    <div class="logo">pawa<span class="bold">Task</span></div>
    <div class="btn" v-on:click="openModal()">Add a new Task</div>
    <NewTask v-if="isOpenComputed" />
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewTask from "@/components/NewTask.vue";
import { store } from "@/store";
import { MutationType } from '@/store/mutations';

@Options({
    components: {
        NewTask
    },

})
export default class Header extends Vue {

    get isOpenComputed() {
        return store.state.ToggleAddModal;
    }

    openModal() {
        store.commit(MutationType.SetToggleAddModal, true);
    }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 25px 15px;
    border-bottom: 2px solid rgb(0 0 0 / 7%);
}

.btn {

    background-color: $color-button-bg;
    border: none;
    color: white;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 6px 18px -5px rgba(237, 103, 85, 1);
}

.logo {
    display: inline-block;
}

</style>
