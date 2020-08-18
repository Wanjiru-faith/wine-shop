<template>
<footer>
<p> {{copyright}} </p>
</footer>
  
</template>

<script>

export default {
  data(){
    return{
        copyright:'Copyright Wine Shop 2020'
     
    }
  },
}

</script>

<style>
footer{
background:white;
padding:6px;
position:inherit;
height: 90px;
}
p{
    color:black;
    text-align:center;
}

</style>