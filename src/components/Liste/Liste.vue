<template>
    <ul class="liste">
        <li v-for="(yolo,index) in objchat1" v-bind:key="index">{{yolo}}</li>
        <li v-for="(obj) in objchat" v-bind:key="obj">
            <div v-for="(chat,index) in obj" v-bind:key="index">{{chat}}</div>
        </li>
    </ul>
</template>
<script>
export default {
    name:"listeobj",
    data(){
        return{
            objchat:[
                {race:'tigre', age:3,poid:"5kg",nom:"tigrette"},
                {race:'tigre', age:1,poid:"5kg",nom:"tigrette2"},
                {race:'tigre', age:6,poid:"5kg",nom:"tigrette3"},
                {race:'tigre', age:5,poid:"5kg",nom:"tigrette4"},
                {race:'tigre', age:9,poid:"5kg",nom:"tigrette5"},
                {race:'tigre', age:10,poid:"5kg",nom:"tigrett6e"},
                {race:'tigre', age:5,poid:"5kg",nom:"tigrette7"},
                {race:'tigre', age:3,poid:"5kg",nom:"tigrette8"},
            ],
            objchat1:["yolo","yolo2","yolo3"],
        }
    }
}
</script>
<style scoped src="./Liste.css"></style>