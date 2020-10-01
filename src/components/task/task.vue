<template>
    <div class="card my-2 item-todo">
        <p>{{task}}</p>
        <div v-on:click="remove" class="btn-supr btn btn-danger">X</div>
    </div>
</template>
<script>
export default {
    name:"tast",
    props:['task','remove'],
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .item-todo{
        position: relative;
        padding: 20px 60px 20px 30px;
        font-size: 20px;
        height: 88px;
    }
    .btn-supr{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .tem-todo p {
        margin-bottom: 0!important;
        
    }
</style>