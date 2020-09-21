<template>
    <div class="herder-top">
        <p>{{titre}}</p>
    </div>
</template>
<script>
import { bus } from '../main'
export default {
    name:"headerTop",
    data(){
        return{
            titre:"titre header",
        }
    },
    beforeCreate(){
        console.log("il va etre cree");
    },
    created(){
        console.log("le composer est cree");
        bus.$on('changetitreheader',(data)=>{
            this.titre = data
        })
    },
    beforeMount(){
        console.log("il va etre monte dan sle dom");
    },
    mounted(){
        console.log("il est integre dans le dom");
    },
    beforeUpdate(){
        console.log("il va se mettre a jour");
    },
    updated(){
        console.log("le composant ce mi a jour");
    }

}
</script>
<style scoped>
.herder-top{
    position: fixed;
    top: 0;
    height: 50px;
    background-color: #333;
    color: antiquewhite;
    text-align: center;
    line-height: 50px;
}
</style>