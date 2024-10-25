<script>
export default {
    data() {
        return {
            aboutInfo: [
                { id: 1, text: 'Web Development' },
                { id: 2, text: 'Honours Degree in Philosophy' },
                { id: 3, text: 'Musician in a band' },
                { id: 4, text: 'Former Realtor' },
                { id: 5, text: 'Commercial Insurance Broker' },
                { id: 6, text: 'Self Proclaimed Nerd' },
            ]
        }
    }
}
</script>

<template>
    <section id="about-comp">
        <h1>Brief Bio</h1>
        <div class="about-me-container">
            <div class="sub-one">
                <div v-for="elem in aboutInfo" :key="elem.id" class="about-item-container">
                    <i class="fa-solid fa-circle-check"></i>
                    <p>{{ elem.text }}</p>
                </div>
            </div>

            <hr>

            <div class="sub-two">
                <h4>A little about me</h4>
                <p class="mini-bio">I am a self-taught web developer, with a passion for creating and working on projects that involve web development and design, business, and client
                    service. <br><br> I have a unique and eclectic background that spans across real estate, law,
                    insurance, music, and philosophy. <br> <br> I believe that my personal and professional background provide a
                    creative and practical perspective on web development and how web applications can best serve the needs of various businesses.</p>
            </div>

            <hr>

            <div class="sub-two">
                <h4>My Mission</h4>
                <p class="mini-bio">My overall goal is to continually improve as a web developer. <br> <br> This website serves to showcase what I've learned so far, to connect with businesses in need of custom websites, and to network with software agencies looking to hire and nurture a highly motivated self-taught web developer. <br> <br> Above all, this website exists because I genuinely enjoy building websites in my spare time.</p>
            </div>

        </div>
    </section>
</template>


<style scoped>
#about-comp {
    width: 100%;
    margin: 0 auto;
    background-color: rgb(240, 240, 240);
    padding: 1.25em;
}

#about-comp h1 {
    margin-bottom: 2em !important;
}

#about-comp h1,
#about-comp h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 1px;
    text-align: center;
    margin: 1em auto;
}

.about-me-container {
    width: 100%;
    margin: 0 auto;
}

.about-me-container hr {
    width: 80%;
    margin: 3em auto;
}

.sub-one {
    width: 100%;
    margin: 0 auto;
    text-align: left;
}

.sub-two {
    width: 100%;
}

.about-item-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 1.25em;
}

.about-item-container i {
    font-size: 2.25rem;
    color: rgb(20, 173, 255);
}

.about-item-container p {
    width: 100%;
    margin: 0 auto;
    font-family: 'Roboto-Mono', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 1px;
    line-height: 1.4;

}

.mini-bio {
    font-family: 'Roboto-Mono', sans-serif;
    font-size: 1.15rem;
    width: 80%;
    margin: 3em auto;
    line-height: 1.6;
    letter-spacing: 1px;
    text-align: center;
}


@media (min-width: 500px) {
    .sub-one {
        font-size: 1.25rem;
    }

}
@media (min-width: 650px) {
    .sub-two {
        width: 75%;
        max-width: 600px;
        margin: 0 auto;
    }
}

@media (min-width: 910px) {
    .sub-one {
        width: 100%;
        max-width: 1000px;
        padding-left: 4.5em;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, minmax(250px, 1fr));
        justify-content: center; 
        align-content: center; 
    }
} 
</style>