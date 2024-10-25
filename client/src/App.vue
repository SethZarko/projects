<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    data() {
      return {

      }
    },
    components: {
      Header,
      Footer,
    },
    mounted() {
      this.log('App was visited')
    }
  }
</script>

<template>
    <Header/>
    <main>
        <router-view></router-view>
    </main>
    <Footer/>
</template>