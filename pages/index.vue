<template>
    <div class="flex flex-cloumn align-start align-self-start jusrtify-start">
        <h1> Dashboard</h1>
        <p> Insert Dashboard</p>
        <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
