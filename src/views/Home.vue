<template>
 <carousel :items-to-show="1.5">
    <slide v-for="slide in 10" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
    <!-- <div class="owl-carousel owl-theme">
        <div class="item"><h4>1</h4></div>
        <div class="item"><h4>2</h4></div>
        <div class="item"><h4>3</h4></div>
        <div class="item"><h4>4</h4></div>
        <div class="item"><h4>5</h4></div>
        <div class="item"><h4>6</h4></div>
        <div class="item"><h4>7</h4></div>
        <div class="item"><h4>8</h4></div>
        <div class="item"><h4>9</h4></div>
        <div class="item"><h4>10</h4></div>
        <div class="item"><h4>11</h4></div>
        <div class="item"><h4>12</h4></div>
    </div> -->
    <div class="main-page_about">
        <div class="main-page_about_container">
            <span>
                О компании
            </span>
            <article>
                MEGA – это ведущий поставщик и производитель сухих строительных смесей, который зарекомендовал себя как надежный торговый представитель на потребительском рынке Северного Кавказа. Мы предлагаем своим клиента качественную продукцию, выполнению с использованием современного оборудования и последних технологических разработок.
            </article>
            <router-link class="main-page_about_link" to="/about">
                Подробнее →
            </router-link>
        </div>
    </div>
    <div class="contacts" id="contacts">
        <div class="contacts_container">
            <div class="contacts_info">
                <h3>Контакты</h3>
                <ul>
                    <li>
                        <span>Телефон: </span>+7 (928) 054-44-73
                    </li>
                    <li>
                        <span>Адрес: </span>Симферополь, улица Мамеди Эмир-Усеина, дом 14, корпус Б, офис 005
                    </li>
                </ul>
            </div>
            <div class="map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A62277e948a9e795a7c58d704d3b87c6932bb8d7e64193b9f6cbb287a250a4fc6&amp;source=constructor" width="800px" height="400" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
    mounted() {
        this.$nextTick(() => {
        console.log(this.$route.hash);
        const el = document.querySelector(this.$route.hash);
        
        console.log(el);
        el && el.scrollIntoView();
        })
    },
    components:{
          Carousel,
    Slide,
    Pagination,
    Navigation,
    }
}
</script>
<style lang="scss" scoped>

</style>