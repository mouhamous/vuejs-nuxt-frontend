<template>
  <div class="container d-flex d-flex justify-content-center vh-100 align-content-center flex-wrap">
     <b-card
        title="Login Form"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
    <b-card-text>
      <b-form >
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-form-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="username"
        v-model="login.username"
      ></b-form-input>

      <label class="sr-only" for="inline-form-input-username">password</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input 
          id="inline-form-input-pass"
          placeholder="password" 
          type="password"
          v-model="login.password"
          >
        </b-form-input>
      </b-input-group>


    </b-form>
    </b-card-text>

    <b-button variant="primary" @click="userLogin">Se connecter</b-button>

  </b-card>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',
  data:() =>({  
    login:{
      username: '',
      password: ''
    }
    
  }),

  methods:{
    userLogin(){
      this.$axios.post('/auth',  this.login)
      .then((response) => {
        let token = response.data.access_token
        localStorage.setItem("token", token);
        this.$router.push('/profile')
      })
      .catch((error) => console.log(error))
    },

  },


}
</script>
