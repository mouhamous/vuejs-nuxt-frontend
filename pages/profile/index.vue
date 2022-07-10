<template>
  <div>
    <h1>Hello {{user.username}}</h1>
    <p>your email: {{ user.email }}</p>
    <div>
    <b-button id="show-btn" @click="showModal">change password</b-button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <b-form >
          <label class="sr-only" for="inline-form-input-username">email</label>
          <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input 
              id="inline-form-input-email"
              placeholder="email" 
              type="email"
              v-model="user.email"
              >
            </b-form-input>
          </b-input-group>
        </b-form>
      </div>
      <b-button class="mt-2"  block @click="updateInfo">Update</b-button>
      <b-button class="mt-3" variant="danger" block @click="hideModal">Cancel</b-button>
    </b-modal>
  </div>
    
  </div>
 
</template>

<script>
export default {
  middleware: 'auth',
  name: 'IndexPage',
  data:() => ({
    user:{},
  }),
  methods:{
    getUserInfo(){
      this.$axios.setHeader('Authorization', `jwt ${localStorage.token}`)
      this.$axios.get('/userinfo')
      .then((response) => {
        this.user = response.data
      }).catch((error) => { 
        localStorage.removeItem("token")
        console.log(error)
      })
    },

    updateInfo(){
      this.$axios.setHeader('Authorization', `jwt ${localStorage.token}`)
      this.$axios.put(`/users/${this.user.id}` , {email: this.user.email})
      .then((response) => {
        this.user = response.data
        this.hideModal()
      }).catch((error) => console.log(error))
    },

    showModal() {
        this.$refs['my-modal'].show()
    },
    hideModal() {
        this.$refs['my-modal'].hide()
    },

  },
  mounted(){
    this.getUserInfo()
  }
}
</script>