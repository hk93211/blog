<template>
  <div>
    <h2 class="hr">
      <span>Contact</span>
    </h2>
    <ul class="contact-list non-style-list">
      <li class="post-list-item" v-for="contact in contactList" :key="contact.type">
        <b :class="contact.type">{{contact.type.toUpperCase()}}</b>
        :
        <a :href="contact.href">{{contact.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactList: [
        { name: '@黄鹍', type: 'zhihu', href: 'https://www.zhihu.com/people/KwinHuang/activities' },
        { name: '@hk93211', type: 'github', href: 'https://github.com/hk93211' },
        { name: '@hk93211', type: 'medium', href: 'https://medium.com/@hk93211' },
        { name: '@hk93211', type: 'email', href: 'mailto:hk93211@gmail.com' },
        { name: '@hk93211', type: 'telegram', href: 'https://t.me/hk93211' },
      ]
    }
  }
}
</script>