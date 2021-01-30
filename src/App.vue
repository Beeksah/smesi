<template>
    <div class="request-form_container" v-show="show_modal" @click.prevent="hideModal($event)" >
        <form class="request-form" @click.prevent="formClick($event)">
            <span>ОСТАВИТЬ ЗАЯВКУ</span>
            <ul>
                <li :key="error" v-for="error in errors">{{error}}</li>
            </ul>
            <p></p>
            <input placeholder="Ваше имя" type="text" v-model="name">
         
            <input placeholder="Телефон" type="text"    @input="handleUserInput" v-model="phone">
            <textarea placeholder="Сообщение" type="text" v-model="message"></textarea>
            <span class="form-success-line" v-show="send_email_success" style="color: black">Спасибо за заявку! Мы свяжемся с вами в ближайшее время</span>
            <span class="form-success-error" v-show="send_email_error" style="color: black">Ошибка: заявка не отправлена!</span>
            
            <button @click.prevent="checkForm()">Отправить</button>
        </form>
    </div>
    <header>
        <div class="header-top">
            <router-link to="/" class="header-top_logo">
                <img src="/assets/img/logo-red.png">
                <span>Сухие строительные смеси</span>
            </router-link>
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
                            <router-link :to="{path:'/',hash:'#contacts'}"  >
                             <span @click="contactsClick()">КОНТАКТЫ</span>
                                
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
//import VuePhoneNumberInput from 'vue-phone-number-input';
//import 'vue-phone-number-input/dist/vue-phone-number-input.css';


export default {
  name: 'App',
  data: ()=>({
      show_modal: false,
      click_form: false,
        name: null,
        phone: null,
        message: null,
        errors: [],
        send_email_success:false,
        send_email_error:false
  }),
  methods:{
        handleUserInput(e) {
      var replacedInput = e.target.value
        .replace(/\D/g, "")
        .match(/(\d)(\d{0,3})(\d{0,3})(\d{0,4})/);
        if(replacedInput!=null){
             this.phone =  !replacedInput[2]
                ? '+' + replacedInput[1]
                : '+' + replacedInput[1]+"(" +
                replacedInput[2] +
                ") " +
                replacedInput[3] +
                (replacedInput[3] ? "-" + replacedInput[4] : "");
           
            console.log( this.phone)
        }
     
    },
      showModel(){
          this.name=null;
           this.phone=null;
            this.message=null;
          this.send_email_success = false;
          this.send_email_error =false;
          this.errors = []
          this.show_modal = true;
      },
    
      checkForm(e){
          let isEmpty = (v)=>v==null||v==""
            debugger; // eslint-disable-line
             this.errors = [];
          if(!isEmpty(this.name) && !isEmpty(this.phone) && !isEmpty(this.message) ){
              this.sendData({
                  name:this.name,
                  phone:this.phone,
                  message:this.message
              })
              return true;
          }
         
          if(this.name==null||this.name==""){
              this.errors.push('Имя обязательно')
          }
          if(this.phone==null||this.phone==""){
              this.errors.push("Номер телефона обязателен")
          }
          if(this.message==null||this.message==""){
              this.errors.push("Сообщение обязательно")
          }
          e.preventDefault()
      },
      sendData(data){
          fetch("http://localhost:3000/sendemail",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json",
                  
              },
              body: JSON.stringify(data)
          }).then(a=>{
              return a.json()
          }).then(a=>{
               //debugger; // eslint-disable-line
              if(a.success){
                  //TODODO  успешность
   this.send_email_success = true;
              } else {
                  //TODO ошибка
                     this.send_email_error = true;
              }
          })
          console.log(data)
      },
      hideModal(){
          if(!this.click_form){
            this.show_modal =false;
          } 
          this.click_form =false;
         // debugger; // eslint-disable-line
      },
      formClick(){
          this.click_form = true;
          // debugger; // eslint-disable-line
      },
      submitMessage(){
          let data = { 
                name: this.name,
                phone: this.phone,
                message: this.message,
          }
          
          console.log(data)  

      },
      contactsClick(){
        this.$nextTick(() => {
                let selector = this.$route.hash;
                debugger; // eslint-disable-line
                if(selector){
                    console.log(selector);
                    const el = document.querySelector(selector);
                    debugger; // eslint-disable-line
                    console.log(el);
                    el && el.scrollIntoView();
                }
            })
      }
  },
  components: {
   
  }
}
</script>

<style lang="scss">
@import "./style/style.scss";

</style>
