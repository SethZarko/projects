<script>
import Nav from './Nav.vue'

export default {
    data() {
        return {
            isSticky: false, 
        }
    },
    components: {
        Nav
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 100) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<template>
    <header :class="{ 'sticky': isSticky }">
        <div class="overlay"></div>
        <div class="header-container">
            <h1>sethZDEV</h1>
            <Nav />
            <i class="fa-solid fa-code"></i>
        </div>
    </header>
</template>

<style scoped>
header {
    position: relative;
    width: 100%;
    margin: 0 auto;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
}


.header-container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em 2.5em;
}

.overlay {
    width: 100%;
    max-width: 1300px;
    height: 100%;
    background: #2980B9;
    background: -webkit-linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);
    background: linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);
    opacity: 0.15;
    position: absolute;
    top: 0;
    left: 0;
}

header h1 {
    font-family: 'Roboto-Mono', sans-serif;
    font-weight: 100;
}

header i {
    display: none;
    border: solid 1.5px rgb(20, 173, 255);
    padding: 0.75em;
    color: white;
    background-color: black;
    border-radius: 50px;
}

@media(min-width: 650px) {
    header {
        justify-content: space-around;
    }
}

@media(min-width: 1024px) {
    header i {
        display: block;
    }
}
</style>