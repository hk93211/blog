<template>
  <div>
    <h2 class="hr">
      <span>Skills</span>
    </h2>
    <ul class="skill-list non-style-list">
      <li class="post-list-item" v-for="skill in skillList" :key="skill">
        {{skill}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillList: [
        'Fundamental HTML/CSS/ECMAScript(5/6/7)',
        'AngularJs',
        'Vue.js',
        'Webpack',
        'Git',
        'Npm Yarn',
        'Nodejs',
        'HTTP Protocol',
      ]
    }
  }
}
</script>