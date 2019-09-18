<template>
  <div class="container">
    <About />
    <Posts :posts="page.posts" />
    <Skill />
    <Contact />
  </div>
</template>

<script>
import About from '../components/About.vue'
import Posts from '../components/Posts.vue'
import Skill from '../components/Skill.vue'
import Contact from '../components/Contact.vue'

export const attributes = {
  layout: 'page',
  injectAllPosts: true
}
export default {
  components: {
    About,
    Posts,
    Skill,
    Contact,
  },
  props: ['page'],
}
</script>

