<template>
    <div class="preview">
        <section/>
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
                <h3 class="bottle-price">Bottle <br>${{totalPrice}}<br> 
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
            
             for(var i=0; i<this.items.length; i++){  
                var product =this.items[i]; 
                var totalPrice = this.bottleQuantity * product.cost.bottle
                console.log(product.cost.bottle) 
                console.log(totalPrice) 
            }
        }) 
        }
}
</script>

<style scoped>


.preview{
    background-color: aqua;
}
section{
    margin:10px;
    padding:60px;
    background-color: blue;
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