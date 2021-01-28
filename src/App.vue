<template>
    <div class="request-form" v-show="show_modal" @click.prevent="show_modal=false">
        <div class="request-form_container" @click.prevent="">
            <span></span>
            <p></p>
            <input placeholder="Ваше имя" type="text" v-model="name">
            <input placeholder="Телефон" type="text" v-model="phone">
            <textarea placeholder="Сообщение" type="text" v-model="message"></textarea>
            <button>Отправить</button>
        </div>
    </div>
    <header>
        <div class="header-top">
            <div class="header-top_logo">
                <img src="/assets/img/logo-red.png">
                <span>Сухие строительные смеси</span>
            </div>
            <a class="header-top_call" href="tel:+79780169022">
                <img src="/assets/img/phone-red.png">
                <span>+7 (978) 016-90-22</span>
            </a>
        </div>
        <div class="header-bottom">
            <ul>
                <li>
                    <router-link to="/">ГЛАВНАЯ</router-link>
                </li>
                <li>
                     <router-link to="/catalog">КАТАЛОГ</router-link>
                </li>
                <div class="header-bottom_hidden-list">
                    <!-- <router-link class="header-bottom_hidden-list_link">МОНТАЖНЫЕ СМЕСИ</router-link>
                    <router-link class="header-bottom_hidden-list_link">НАЛИВНЫЕ ПОЛЫ</router-link>
                    <router-link class="header-bottom_hidden-list_link">ПЕСКОБЕТОН</router-link>
                    <router-link class="header-bottom_hidden-list_link">ПЛИТОЧНЫЙ КЛЕЙ</router-link>
                    <router-link class="header-bottom_hidden-list_link">ШПАТЛЁВКА</router-link>
                    <router-link class="header-bottom_hidden-list_link">ШТУКАТУРКА</router-link> -->
                </div>
                <li>
                    <router-link to="/about">
                        О НАС
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path:'/',hash:'#contacts'}">
                        КОНТАКТЫ
                    </router-link>
                </li>
            </ul>
        </div>
    </header>

  <router-view />
  

   <footer>
        <div class="footer-top">
            <div class="footer-top_container">
                <div class="footer-top_container_item">
                    <div class="footer-top_logo">
                        <img src="/assets/img/logo-white.png">
                        <span>Сухие строительные смеси</span>
                    </div>
                </div>
                <div class="footer-top_container_item">
                    <a class="footer-top_call" href="tel:+79780169022">
                        <img src="/assets/img/phone-white.png">
                        <span>+7 (978) 016-90-22</span>
                    </a> 
                    <button @click="show_modal=true">Заказать звонок</button>
                </div>
                <div class="footer-top_container_item">
                    <ul class="footer-top_links"> 
                        <li>
                            <router-link to="/">
                                ГЛАВНАЯ
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/catalog">
                                КАТАЛОГ
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about">
                                О НАС
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/',hash:'#contacts'}">
                                КОНТАКТЫ
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <span>© 2021 г. МЕГА - Сухие строительные смеси</span>
        </div>
    </footer>

</template>

<script>


export default {
  name: 'App',
  data: ()=>({
      show_modal: false,
  }),
  methods:{
      showModel(){
          this.show_modal = true;
      },
      hideModal(){
          this.show_modal =false;
      },
      submitMessage(){
          let data = { 
                name: this.name,
                phone: this.phone,
                message: this.message,
          }
          console.log(data)  

      }
  },
  components: {
    
  }
}
</script>

<style lang="scss">
@import "./style/style.scss";

</style>
