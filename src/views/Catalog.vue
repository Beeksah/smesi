<template>
    <div class="catalog">
        <ul class="catalog_list">
            <li v-for="item in categories" :key="item.id" @click="categorySelected(item)" 
            :class="{active: selectedCategory!=null && selectedCategory.id == item.id}"> 
                <a>→ {{item.name}}</a>
            </li>
             <li  @click="categorySelected(null)" :class="{active: selectedCategory == null}"> 
                <a>→ Все строительные смеси</a>
            </li>
       
        </ul>
       <div class="catalog_content">
            <router-link :to="{name:'Product',params:{id:item.id}}"  class="catalog_content_item" :key="item.id" v-for="item in products">
                <img :src="item.img">
                <span>{{item.name}}</span>
            </router-link>
        </div>

    </div>
</template>
<script>
import categories from './../../public/data/catalog.json'
  
export default {
    data: ()=>{
        return {
            selectedCategory:null,
            categories: categories
        }
    },
    computed:{
        products(){
            if(this.selectedCategory!=null){
                return this.selectedCategory.products || []
            }
            let products = []
            for (let category of this.categories ){
                if(category.products){

                    for (let product of category.products){
                        products.push(product)
                    }
                }
            }
            return products;
        }
    },
   
    methods:{
        categorySelected(item){
            this.$data.selectedCategory = item
        },
        productClick(item){
            this.$router.push({name:"Product",params:{id:item.id}})
        }
    }
}
</script>