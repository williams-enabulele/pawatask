<template>
<div class="center">
    <p class="semi-bold">Completed Task: {{completed}}</p>
    <p class="semi-bold">Total Tasks: {{total}} </p>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { store } from "@/store";

@Options({
 props: {
        completed: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
 }
})
export default class TaskStatus extends Vue {

}
</script>

<style lang="scss" scoped>
.center {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content:space-between;
    text-align: center;
    margin-top: 35px;
}
</style>
