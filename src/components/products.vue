<template>
<div class="products">
    <div class="flex-container" id="containers">
        <div class="product-container" v-for="item in items" :key="item.id">
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
                <button class="add-to-cart">Add to cart</button>
            </div>    
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            picture:"./assets/reisling.png",
            bottleQuantity:1,
            caseQuantity:1,
            items:[],  
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
            } 
    },
    created(){
        this.$http.get('https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/wineshop-assets/wine-shop.json')
        .then(response => {          
            this.items = response.data 
            console.log(response.data) 
            // for(var i=0; i<this.items.length; i++){  
            //     var product =this.items[i];
            //     var totalPrice = this.bottleQuantity * product.cost.bottle
            //     console.log(product.cost.bottle) 
            //     console.log(totalPrice) 
            // }
        }) 
        }
        }
        
</script> 
<style>
body{
    background-color: white;
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