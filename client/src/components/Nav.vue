<script>
export default {
    data() {
        return {
            mobileNavOpen: false,
            year: new Date().getFullYear(),
        }
    },
    methods: {
        toggleMenu() {
            this.mobileNavOpen = !this.mobileNavOpen;
            this.updateBodyOverflow();
        },
        updateBodyOverflow() {
            if (window.innerWidth < 650) {
                document.body.style.overflow = this.mobileNavOpen ? 'hidden' : 'auto';
            } else {
                document.body.style.overflow = 'auto';
            }
        },
        watchWindowSize() {
            if (window.innerWidth >= 650) {
                this.mobileNavOpen = false;
                this.updateBodyOverflow();
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.watchWindowSize);
        this.watchWindowSize();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.watchWindowSize);
    }
}
</script>

<template>
    <nav @click="toggleMenu">
        <!-- DESKTOP NAV -->
        <div class="hamburger-menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul>
            <li><router-link to="/" @click="this.scrollToTop" active-class="active">Home</router-link></li>
            <li><router-link to="/portfolio" @click="this.scrollToTop"  active-class="active">Portfolio</router-link></li>
            <li><router-link to="/about" @click="this.scrollToTop"  active-class="active">About</router-link></li>
        </ul>

        <!-- MOBILE NAV -->
        <ul v-if="this.mobileNavOpen" class="mobile-nav">
            <div class="mobile-nav-btn-container">
                <h1>sethZDEV</h1>
                <div class="x-btn">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div>
            <li><router-link to="/" @click="this.scrollToTop"  active-class="active">Home</router-link></li>
            <li><router-link to="/portfolio" @click="this.scrollToTop"  active-class="active">Portfolio</router-link></li>
            <li><router-link to="/about" @click="this.scrollToTop"  active-class="active">About</router-link></li>
            <small>Seth Zarkovich. Web Dev. {{ year }} &copy;</small>
        </ul>
    </nav>
</template>


<style scoped>
nav {
    z-index: 100000000;
}

nav ul {
    display: none;
    align-items: center;

}

nav li {
    padding: 0.5em;
}

nav a {
    position: relative;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    color: black;
    transition: color 0.3s ease;
}

nav a:hover {
    color: crimson;
}

nav a.active {
    color: rgb(20, 173, 255);
    transition: color 0.3s ease;
}

nav a.active:hover {
    color: crimson;
}

nav a.active::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 15px;
    height: 1px;
    background-color: black;
    transition: width 0.3s ease;
}

.hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 24px;
    cursor: pointer;
}

.bar {
    width: 36px;
    height: 1.15px;
    background-color: #333;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.bar:nth-child(1) {
    transform-origin: top left;
}

.bar:nth-child(2) {
    margin: 8px 0;
    width: 30px;
}

.bar:nth-child(3) {
    transform-origin: bottom left;
}

.mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000000;
}

.mobile-nav a {
    font-size: 1.5rem;
}

.mobile-nav-btn-container h1 {
    font-family: 'Roboto-Mono', sans-serif;
    font-size: 2rem;
    font-weight: 100;
    position: absolute;
    top: 25px;
    left: 40px;
}

.x-btn {
    position: absolute;
    top: 20px;
    right: 40px;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
}

.x-btn::before,
.x-btn::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #333;
    transition: transform 0.3s ease;
}

.x-btn::before {
    transform: rotate(45deg);
}

.x-btn::after {
    transform: rotate(-45deg);
}

small {
    position: absolute;
    bottom: 60px;
    font-family: 'Poppins', sans-serif;
    color: black;
}

@media(min-width: 650px) {
    nav ul {
        display: flex;
    }

    .hamburger-menu {
        display: none;
    }

    .mobile-nav {
        display: none;
    }
}
</style>