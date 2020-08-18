<template>
    <div class ="lay2">
      <div id="box">
        <div class="show">
         <div class ="show-me">
          Show me</div>
          <button class ="show-all">
            Show all</button>
        </div>   
        <div class="category">
          <div><button>White</button></div>
          <div><button>Red</button></div>
          <div><button>Sparkling</button></div>
          <div class="order-by">
            Order by </div>
            <div><button>Price</button></div>
            <div><button>Vintage</button></div>
          </div>
      </div>

      <div class="part2">
        <div class="delivery-info">
          Delivery info
        </div>   
        <div class="totalBottles">
          <h2>36</h2> 
          <h2>Bottles</h2>
        </div>
      </div>

      <div class="part3" id="box">      
          <div class="top">
            36*2013 Breidecker
          <button class="empty-cart">Empty Cart</button>
          </div>   
        <hr/>
          <div class="bottom">
            Ksh.432.56x
          <button class="check-out">Check Out</button>
          </div>  
        </div>

     </div>
</template>

<script>
export default {
  name: 'section',
  components:{
    
  },
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>

.lay2{
  width:100%;
  position:relative;
  display:flex;
  margin:10px;
  padding:10px;
  background-color: blue;
}
#box{
width: 29%;
padding:20px;
display: inline-block;
margin:2px;
max-height: 100px;
min-height: 100px;
}
button{
  background-color: rgb(179, 164, 164);
  border:none;
  text-align: center;
}
.show-me{
  padding:2px;
  width:100px;
  height:30px;
  text-align: center;
  background-color: rgb(230, 236, 236);
  font-size:17px;
}
.category{
  position: relative;
  width:100%;
  padding-left:10px;
  background-color: rgb(230, 236, 236);
}
.category div{
  margin:1px;
  padding:5px;
  width:30%;
  display:inline-block;
}
.category button{
  width:100px;
  height:30px;
}
.part2{
  padding:2px;
  position:relative;
  display:flex;
  
}
.part2 div{
  width:20vh;
  display: inline-block;
  background-color: rgb(230, 236, 236);
  padding: 20px;
  height:100px;
  margin-right:3px;
}
.delivery-info{
  text-align: center;
}
.totalBottles{
 text-align: center;
}
.part3{
padding:5px;
background-color: rgb(230, 236, 236);
}
.part3 div{
  height: 45%;
}
.part3 button{
  width:100px;
  height:30px;
}
.empty-cart{
  margin-left:100px;
}
.check-out{
  margin-left:150px;
  background-color: rgb(39, 37, 37);
  color:white;
}
</style>