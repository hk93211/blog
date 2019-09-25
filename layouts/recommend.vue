<template>
  <div>
    <Header />
    
    <div class="post-body">
      <h1 class="title">{{page.title}}</h1>

      <slot name="default" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  props: ['page'],
  head() {
    const pageTitle = this.page.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
    }
  },
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    getCreatedDate(slug) {
      const dateStr = (slug || '').substring(0, 8);
      return dateStr.replace(/^(\d{4})(\d{2})(\d{2})$/g, '$1-$2-$3');
    }
  },
}
</script>

<style scoped>
@import '../assets/rexo.css';
@import '../assets/font.css';
</style>