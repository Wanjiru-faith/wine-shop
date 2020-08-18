<template>
  <div class="home-page">
    <div class ="lay2">
      <div id="box" class="show">
         <div class ="show-me" id="text">Show me</div>
          <!-- <button class ="show-all">
            Show all</button> -->
            <div class="category" id="text">
              <!-- <div><button @click="search" >White</button></div> -->
               <div><button v-on:click="search = 'white'"  
               :class="{ active: search == 'filteredWines' }">
               White</button></div>
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
     
     <div class="products">
      
    <div class="flex-container" id="containers">
        <div class="product-container" v-for="item in filteredWines" :key="item.id">
            <img src="@/assets/reisling.png" class="image"/>
            <div class="nam-num">
                <h3 class="number">{{item.no}}</h3> 
                <h3 class="name">{{item.name}}</h3>
            </div>
            <div class="cost">
                <h3 class="bottle-price">Bottle <br>${{bottleQuantity * item.cost.bottle}}<br> 
                <input placeholder="0" 
                v-model="bottleQuantity">QTY</h3>
                <div class="vl"></div>
                <h3 class="case-price">Case <br> ${{caseQuantity * item.cost.case}}<br>
                <input placeholder="1" 
                v-model="caseQuantity">QTY</h3> 
            </div>
            <div class="details-cart">
                <button class=details @click="viewDetails()">Details</button>
                <button class="add-to-cart" @click="addToCart">Add to cart</button>
            </div>    
        </div>
    </div>
</div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'HelloWorld',
  components:{
  },
  props: {
    msg: String
  },
data(){
        return{
            picture:"./assets/reisling.png",
            bottleQuantity:1,
            caseQuantity:1,
            items:[],
            search:''  
        }
    },
    methods:{
        orderPrice: function(){
                 for(var i=0; i<this.items.length; i++){
                     var product =this.items[i];
                     var totalPrice = this.bottleQuantity * product.cost.bottle
                     console.log(product.cost.bottle) 
                     console.log(totalPrice)
                     }
                     return totalPrice
                     },
                     viewDetails(){
                       console.log('/product/:no')
                       this.$router.push('/product/:no')
                       },
                       addToCart(){
                         console.log(this.item)
                          Swal.fire('Success !', this.item.name, 'is added in the cart', 'success')
                          
                       }
    },
    created(){
        this.$http.get('https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/wineshop-assets/wine-shop.json')
        .then(response => {          
            this.items = response.data 
            console.log(this.items) 
        }) 
        },
        computed:{
          filteredWines: function(){
            //   for(var i=0; i<this.items.length; i++){  
            //     var product =this.items[i];
            //     console.log(product) 
            // }
            return this.items.filter((item)=>{
              return item.name.match(this.search);
            })
          }   
        }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.home-page{
  background-color:white;
  font-size:15px;
  overflow:hidden;
}
.search{
  background-color: rgb(140, 140, 150);
  padding:10px;
  margin:10px;
  width:20vw;
  color:white;
}
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
.products{
  margin:0.2px;
}
.flexcontainer{
    display: flex;
    flex-wrap: wrap;
    position:fixed;
}
.product-container{
    background-color: white;
    width: 32%;
    margin:5px;
    display: inline-block;
    height:30vh;
}
.image{
    height:29vh;
    /* width:100px; */
    float:left;
}
img{
  height:30vh;
    width:150px;  
}
.nam-num{
    height:12vh;
    position: relative;
    margin-left:100px;
    color:rgb(124, 118, 118);
}
.nam-num h3{
    padding-left: 10px;
    margin:2px;
    height: 35%;
}
.number{
    
    font-size:30px;
}
.name{
    font-size:15px;
}
input{
    width:4vh;
    margin-right:2px;
    border:2px black solid;
}
.cost{
    display:flex;
    margin-top:-17px;
    height:15vh;
}
.cost h3{
    display:inline-block;
    text-align: center;
    width:50%;
}
.vl{
    border-left: 2px solid black;
    height: 55px;
    display:inline-block;
    margin-top:25px;
}
.details-cart{
  padding-left:100px;
}
.details-cart button{
    margin:3px;
    width:38%;
    height:30px;
}

.add-to-cart{
    background-color: black;
    color:white;
}


</style>
