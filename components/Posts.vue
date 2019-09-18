<template>
  <div>
    <h2 class="hr">
      <span>Posts</span>
    </h2>
    <ul class="post-link non-style-list">
      <li class="post-list-item" v-for="post in postsList" :key="post.permalink">
        <a :href="post.permalink">{{post.title}}</a>
        <span class="post-list-date">({{getCreatedDate(post.slug)}})</span>
      </li>
    </ul>
  </div>
</template>

<script>
function getCreatedDate(slug) {
  const dateStr = (slug || '').substring(0, 8);
  return dateStr.replace(/^(\d{4})(\d{2})(\d{2})$/g, '$1-$2-$3');
}
export default {
  props: {
    posts: Array,
  },
  computed: {
    postsList() {
      return this.posts.sort(function(a, b) {
        const aaa = a.slug.substring(0, 8)
        const bbb = b.slug.substring(0, 8)

        return new Date(getCreatedDate(aaa)) - new Date(getCreatedDate(bbb))
      })
    }
  },
  methods: {
    getCreatedDate(slug = '') {
      const dateStr = slug.substring(0, 8);
      return dateStr.replace(/^(\d{4})(\d{2})(\d{2})$/g, '$1-$2-$3');
    },
  }
}
</script>

<style>

</style>