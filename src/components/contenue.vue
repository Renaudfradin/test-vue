<template>
    <div>
        <h1>{{hello}}</h1>
        <listeobj v-bind:myArr="myArr">
            envoyer
            <template v-slot:info>
                <h1>le contenue du slot nome</h1>
            </template>
        </listeobj>
        <div class="btn btn-outline-primary mr-2" v-on:click="component = 'text1'">1</div>
        <div class="btn btn-outline-primary mr-2" v-on:click="component = 'text2'">2</div>
        <div class="card mb-5">
            <component v-bind:is="component"></component>
        </div>
        <div class="btn btn-success" v-on:click="togglemodale">modale</div>
        <modale v-bind:revele="revele" v-bind:togglemodale="togglemodale"></modale>
        <!--<img v-bind:src="urlImg">-->
        <form action="">
            <div class="form-group">
                <label for="prenom1">Ton prenom</label>
                <input v-on:input="togleinp" v-model="formData.prenom1" type="text" id="prenom1" class="form-control">
            </div>
            <div class="form-group">
                <label for="txt">Ton texte</label>
                <textarea v-model="formData.txt" id="txt" class="form-control"></textarea>
            </div>
            
            <select v-model="formData.seltec">
                <option v-bind:key="index" v-for="(pays,index) in formData.selectOption1">{{pays}}</option>
            </select>


            <div class="form-check">
                <input v-model=" formData.checkFruit" value="fraise" id="fraise" type="checkbox" class="form-check-input">
                <label for="fraise">fraise</label>
            </div>
            <div class="form-check">
                <input v-model=" formData.checkFruit" value="pomme" id="pomme" type="checkbox" class="form-check-input">
                <label for="pomme">pomme</label>
            </div>
            <div class="form-check">
                <input  v-model=" formData.checkFruit" value="poire" id="poire" type="checkbox" class="form-check-input">
                <label for="poire">poire</label>
            </div>


            <button class="btn btn-primary mt-3" v-on:click.prevent="submitfor">envoyer</button>
        </form>
        <div class="card p-3" v-if="donneafiche">
            <p>Prenom : {{formData.prenom1}}</p>
            <p style="white-space: pre">Texte: {{formData.txt}}</p>
            <p>Fruits : </p>
            <p v-bind:key="index" v-for="(fruits,index) in formData.checkFruit">{{fruits}}</p>
            <p>Choix du pays : {{formData.seltec}}</p>
        </div>

        <form action="">
            <div class="form-group">
                <label for="task">task</label>
                <input id="task" type="text" class="form-control" v-model="formData1.task">
            </div>
            <button class="btn btn-primary mt-3" v-on:click.prevent="creationItem">envoyer</button>
        </form>
        
        <ul>
            <li v-bind:key="index" v-for="(task,index) in tableTask" ><tast v-bind:task="task" v-bind:id="index" v-bind:remove="remove"></tast></li>
        </ul>
    </div>
</template>
<script>
import listeobj from './Liste/Liste.vue';
import text1 from './text1.vue';
import text2 from './text2.vue';
import modale from './modale/modale.vue'
import axios from 'axios';
import tast from './task/task.vue'
export default {
    name:'contenu',
    components:{
        listeobj,
        text1,
        text2,
        modale,
        tast
    },
    data:function() {
        return{
            hello:"bonjour le monde",
            prenom:"j.l fradin",
            myArr : [
                {titre:"Iception",date:2010,img:'./assets/logo.png'},
                {titre:"Transformer",date:2008},
                {titre:"Tennet",date:2020},
                {titre:"Transformer3",date:2014},
            ],
            toggle1: true,
            toggle2: false,
            component: 'text1',
            revele:false,
            urlImg:null,
            formData:{
                prenom1:'',
                txt:'',
                checkFruit:[ ],
                seltec:'',
                selectOption1:["Russie","France","Us","Uk","Canada","Bresil"]
            },
            donneafiche:false,
            formData1:{
                task:'',
            },
            tableTask:['js','html'],
        }
    },
    mounted(){
        axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then(reponse => {
            console.log(reponse);
            this.urlImg = reponse.data[0].url
        })
    },
    methods:{
        togglemodale:function(){
            this.revele = !this.revele;
        },
        submitfor:function(){
            if (this.formData.prenom1 == "") {
                this.donneafiche= false;
            }else{
                this.donneafiche= true;
            }
        },
        togleinp:function(){
            this.donneafiche=false;
        },
        creationItem:function(){
            this.tableTask.push(this.formData1.task);
            this.formData1.task ='';
        },
        remove:function(e){
            //console.log(e.target.parentNode.id, 1);
            this.tableTask.splice(e.target.parentNode.id, 1)
        }
    },
    
}
</script>
<style scoped>
    ul{
        list-style: none;
        padding: 0%;
    }
</style>