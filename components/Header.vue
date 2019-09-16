<template>
  <header>
    <div class="description">
      <div class="avatar">
        <img src="../images/avatar.jpeg" />
      </div>
      <p class="name">{{name}}</p>
      <p class="desc">{{description}}.</p>
    </div>
    <nav>
      <ul class="nav">
        <li
          class="nav-item"
          v-for="nav in navList"
          :key="nav.text"
        >
          <a :href="nav.link">{{nav.text}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$siteConfig.name
    },
    description() {
      return this.$siteConfig.description
    },
    navList() {
      return this.$themeConfig.nav
    },
  },
  created() {
    console.log(this);
  },
}
</script>

<style scoped lang="less">
header {
  text-align: center;
  
  .name {
    font-weight: 700;
  }
  .desc {
    color: #65737E;
  }
}

/* ... omitted some css */
</style>