<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" v-on:click="togglemodale"></div>
        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="togglemodale">X</div>
            <h2>contenue modale</h2>
            
        </div>
    </div>
</template>
<script>
export default {
    name:"modale",
    props:['revele' ,'togglemodale']
}
</script>
<style  src="./modale.css" scoped></style>