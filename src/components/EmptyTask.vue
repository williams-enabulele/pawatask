<template>
<div class="center">
    <img src="@/assets/empty.png" class="empty">
    <p>You do not have any tasks! <span class="red" v-on:click="openModal()"> add a new task</span></p>

</div>
<NewTask v-if="isOpenEditModal"/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewTask from "@/components/NewTask.vue";
import { store } from "@/store";
import { MutationType } from "@/store/mutations";

@Options({
    components: {
        NewTask
    }
})
export default class EmptyTask extends Vue {
    openModal() {
        store.commit(MutationType.SetToggleAddModal, true);
    }
}
</script>

<style lang="scss" scoped>
.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 10%;
}

.empty {
    width: 40%;
    height: auto;
    display: flex;
    align-self: center;
}

.red {
    color: rgb(255, 59, 59);
    cursor:pointer;
}

</style>
