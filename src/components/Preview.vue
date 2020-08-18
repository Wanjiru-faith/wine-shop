<template>
    <div class="preview">
            <div class ="lay2">
      <div id="box" class="show">
         <div class ="show-me" id="text">Show me</div>
          <!-- <button class ="show-all">
            Show all</button> -->
            <div class="category" id="text">
              <div><button>White</button></div>
              <div><button>Red</button></div>
              <div><button>Sparkling</button></div>
              <div class="order-by">
                Order by </div>
              <div><button>Price</button></div>
              <div><button>Vintage</button></div>
          </div>
      </div>  

      <div class="part2" id="box">
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
        <div class="product-container">
            <div class="image">
                <img src="@/assets/reisling.png" />
            </div>
            
            <div>
                <div class="nam-num">
                <h3 class="number">13</h3> 
                <h3 class="name"> White Wine</h3>
            </div>

            <div class="cost">
                <h3 class="bottle-price">Bottle <br><br> 
                <input placeholder="0" 
                v-model="bottleQuantity">QTY</h3>
                <div class="vl"></div>
                <h3 class="case-price">Case <br>$<br>
                <input placeholder="1">QTY</h3> 
            </div>
            </div>
            
            <div class="details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br>
                Phasellus mollis eget lorem nec placerat. <br>
                Morbi sed sapien eu lorem eleifend elementum.  <br>
                Donec scelerisque, odio quis placerat tempor, eros dui feugiat.
                </div>  
                <div class="tag">
                    Category
                    <li>
                        red
                    </li>
                    <li>
                        vintage
                    </li>
                </div>
                 <div class="cart">
                <button class="add-to-cart">ADD TO CART</button>
                <button class="buy-now">BUY NOW</button>
            </div> 
        </div>
        
    </div>
</template>
<script>

export default {
    name:'Preview',
  components:{
    
  },
  props: {
   
  },
  data(){
    return{
        items:[],
        bottleQuantity: 2,
      
    }
  },
    created(){
        this.$http.get('https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/wineshop-assets/wine-shop.json')
        .then(response => {          
            this.items = response.data 
            console.log(response.data)
            
        }) 
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
}
#box{
width: 33%;
padding:1px;
margin:2px;
height: 18vh;
}
button{
  background-color: rgb(179, 164, 164);
  border:none;
}
.show{
   height:100%;
   margin-top:100px;
}

.show-me{
  font-size:17.5px;
  height:5vh;
  padding-left:10px;
  padding-top:5px;
  background-color: rgb(230, 236, 236);
  width:120px;
}
.category{
  background-color: rgb(230, 236, 236);
  padding-bottom: 10px;
}
.category div{
  margin:1px;
  padding:3px;
  width:30%;
  display:inline-block;
}
.category button{
  width:100px;
  height:30px;
}
.order-by{
   font-size:17px;

}
.part2{
  padding:2px;
  display:flex;
  height:50vh;
  
}
.part2 div{
  background-color: rgb(230, 236, 236);
  width:40vh;
  padding: 10px;
  height:18vh;
  text-align: center;
}
.delivery-info{
  font-size: 17px;
   margin-left:40px;
}
.totalBottles{
 margin-left:5px;
}
.part3{
padding:5px;
font-size:17px;
background-color: rgb(230, 236, 236);
}
.part3 div{
  height: 45%;
  padding-top:10px;
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

.product-container{
    background-color: white;
    width: 98%;
    margin:10px;
    
    display: inline-block;
    height:50vh;
}

.image{
    width: 200px;
    height:30vh;
    float:left;
    margin-top:30px;
}
img{
  height:30vh;
    width:150px;  
}
.nam-num{
    margin:20px;
    margin-left:200px;
    color:rgb(124, 118, 118);
    width:300px;
    
}
.nam-num h3{
    padding-left: 25px;
    margin:2px;
    height: 35%;
    font-size: 30px;
}
.cost{
    display:flex;
    margin-top:-17px;
    height:20vh;
    width:300px;
    background-color: rgb(192, 184, 184);
}
.cost h3{
    display:inline-block;
    text-align: center;
    width:50%;
    font-size: 20px;
    margin-top:28px;
}
input{
    width:3vh;
    margin-right:2px;
    border: 1px black solid;
}
.vl{
    border-left: 2px solid black;
    height: 55px;
    display:inline-block;
    margin-top:25px;
}
.cart{
  padding-left:100px;
}
.cart button{
    margin:3px;
    width:38%;
    height:30px;
}

.add-to-cart{
    background-color:rgb(124, 118, 118);
    color:black;
}
.buy-now{
    background-color: black;
    color:white;
}
.tag{
     position:relative;
    margin-left:550px;
    /* background-color: brown; */
    font-size: 20px;
}
.details{
    position:relative;
    margin-left:550px;
    height:20vh;
    margin-top:-170px;
    font-size: 25px;
    /* background-color: rgb(124, 118, 118); */
}
</style>