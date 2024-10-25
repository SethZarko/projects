<script>
    import Hero from '../components/Home/Hero.vue'
    import Services from '../components/Home/Services.vue'
    import AboutComponent from '../components/Home/AboutComponent.vue'
    import Technology from '../components/Home/Technology.vue'
    import RecentProjects from '../components/Home/RecentProjects.vue'
    import ReactWrapper from '../components/Home/ReactWarapper.vue'

    export default {
        data() {
            return {
                
            }
        },
        components: {
            Hero,
            Services,
            AboutComponent,
            Technology,
            RecentProjects,
            ReactWrapper,
        }
    }
</script>

<template>
    <section id="home-page">
        <Hero/>
        <Services/>
        <AboutComponent/>
        <Technology/>
        <RecentProjects/>
        <ReactWrapper/>
    </section>
</template>