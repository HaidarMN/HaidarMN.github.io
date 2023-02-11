<template>
  <div class="flex flex-col">
    <Navbar />
    <Home />
    <Profile id="about" />
    <Skills id="skills" />
    <Experience id="experience" />
    <Project id="projects" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/general/Navbar.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
import Footer from './components/general/Footer.vue'

export default {
  components: { 
    Navbar, 
    Home, 
    Profile,
    Skills,
    Experience,
    Project,
    Contact,
    Footer,
  }
}
</script>