<template>
    <div>
        <ul class="container mt-5">
            <!--<li v-for="(yolo,index) in objchat1" v-bind:key="index">{{yolo}}</li>-->
            <li v-for="(film,index1) in myArr" v-bind:key="index1">
            <div class="card">
                <div class="car-body">
                    Titre : {{film.titre}}
                    <br>
                    Date : {{film.date}}
                </div>
            </div>
            </li>
        </ul>
        <div class="btn btn-danger" v-on:click="removefilm" id="btnremovefilm">X</div>
        <div class="btn btn-danger" v-on:click="changetitreheader">Change titre</div>
    </div>
</template>
<script>
import {bus} from '../../main'
export default {
    name:"listeobj",
    data(){
        return{
            objchat:[
                {race:'tigre', age:3,poid:"5kg",nom:"tigrette"},
                {race:'tigre1', age:1,poid:"5kg",nom:"tigrette2"},
                {race:'tigre2', age:6,poid:"5kg",nom:"tigrette3"},
                {race:'tigre3', age:5,poid:"5kg",nom:"tigrette4"},
                {race:'tigre4', age:9,poid:"5kg",nom:"tigrette5"},
                {race:'tigre5', age:10,poid:"5kg",nom:"tigrett6e"},
                {race:'tigre6', age:5,poid:"5kg",nom:"tigrette7"},
                {race:'tigre7', age:3,poid:"5kg",nom:"tigrette8"},
            ],
            objchat1:["yolo","yolo2","yolo3"],
        }
    },
    props:['myArr'],
    methods:{
        reversing1: function () {
            return this.prenom.split('').reverse().join('')
        },
        removefilm:function() {
            this.myArr.pop();
        },
        changetitreheader:function() {
            bus.$emit('changetitreheader','Titre changer avec le bus lol');
        }
    }
}
</script>
<style scoped src="./Liste.css"></style>