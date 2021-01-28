<template>
    <div class="product">
        <img class="product_image" src="/assets/img/products/plit1.jpg">
        <div class="product_content">
            <div class="product_content_description" v-if="product.description">
                <h3>ОПИСАНИЕ</h3>
                <article >
                    <span>{{product.description.title}}</span>
                    <div :v-html="product.description.content"></div>
                </article>
            </div>
            <ul class="product_content_props">
                <li class="product_content_props_line" :key="item.name" v-for="item in product.props">
                    <span class="line-item">{{item.name}}</span>
                    <span class="line-splitter">|</span>
                    <span class="line-item">{{item.value}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import categories from './../../public/data/catalog.json'
  
export default {
    data(){
        return {
            product:null
        }
    },
    created(){
        let productId = +this.$route.params.id;
        let product = null;
        for (let c of categories){
            if(c.products){
                product = c.products.find(a=>a.id==productId);
                if(product!=null){
                    break;
                }        
            }
        }
        this.product = product;
        debugger; // eslint-disable-line

    }
}
</script>
<style lang="less" scoped>

</style>