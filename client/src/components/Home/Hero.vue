<script>
export default {

}
</script>

<template>
    <section id="hero">
        <div class="overlay"></div>
        <div class="hero-container">
            <div class="hero-text-container">
                <h4>Hi, I'm Seth!</h4>
                <div class="h1-container">
                    <h1><span>Front</span>end</h1>
                    <h1>Developer</h1>
                </div>
                <p>I'm a self-taught frontend web developer based out of Ontario, Canada! I thoroughly enjoy building beautiful websites that people love to use!</p>
                <div class="hero-btn-container">
                    <router-link to="/about">Get in Touch</router-link>
                    <router-link to="/portfolio">Browse Portfolio</router-link>
                </div>
            </div>
            <div class="hero-img-container">
                <img src="../../assets/comp.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
#hero {
    width: 100%;

    position: relative;
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
    z-index: -100;
}

.hero-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}

.hero-text-container {
    margin-bottom: 2em;
    padding: 2em;
}

.hero-img-container {
    width: 100%;
    height: 100%;
}

.hero-img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    margin-bottom: 0.5em;
}

.h1-container {
    margin-bottom: 1.15em;
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.25rem;
    font-weight: 800;
    line-height: 1.0;
    text-shadow: -1px 0.5px 1px rgb(20, 173, 255);
}

span {
    color: rgb(20, 173, 255);
}

p {
    font-family: 'Roboto-Mono', sans-serif;
    color: rgb(90, 90, 90);
    line-height: 1.5;
    letter-spacing: 0.65px;
    margin-bottom: 1.5em;
}

.hero-btn-container {
    display: flex;
    align-items: center;
    gap: 1.5em;
}

.hero-btn-container a {
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    padding: 0.65em 1em;
    min-height: 45px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
}

.hero-btn-container a:first-of-type {
    background-color: black;
    color: white;
    transition: ease-in 0.1s;
}

.hero-btn-container a:first-of-type:hover {
    background-color: rgba(0, 0, 0, 0.15);
    color: black;
}

.hero-btn-container a:nth-of-type(2) {
    background-color: white;
    color: black;
    transition: ease-in 0.1s;
}

.hero-btn-container a:nth-of-type(2):hover {
    background-color: rgb(220, 220, 220);
}

@media (min-width: 425px) {
    p {
        width: 95%;
    }
}

@media (min-width: 600px) {
    p {
        width: 70%;
    }
}

@media (min-width: 768px) {
    .hero-container {
        display: flex;
        align-items: center;
        gap: 2em;
    }

    .hero-img-container img { 
        padding: 1.5em;
        width: 300px;
        height: 300px;
        border: solid 2px rgb(20, 173, 255);
        border-radius: 50%;
    }
}
</style>