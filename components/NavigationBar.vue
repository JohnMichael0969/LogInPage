<template>

    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Admin</span>
        <span>DASHBOARD</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey" @click="$router.push('/auth/signout')">Logout</v-btn>
    </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
</style>