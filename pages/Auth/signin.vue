<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center">
      <v-card width="500" class="elevation-4 text-left" shaped color="blue">
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Login to your dashboard</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="auth.email"
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"             
            ></v-text-field>

            <v-text-field
              v-model="auth.password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn
            class="login-button"
            depressed
            large
            @click="login"
            >Login</v-btn>
          <v-btn class="reset-button" depressed large @click="forgotPassword" 
            >Forgot Password</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-snackbar        
        :timeout="4000"   
        v-model="snackbar"    
        absolute
        bottom
        color="success"
        outlined
        right
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>


<script>
export default{
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      }
    }
  },

  methoods: {
    login() {
        let that = this
        this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
        }).then((user) => {
            that.$router.push('/')
        })
    }, 
    fotgotPassword(){

    }
  }

}
</script>