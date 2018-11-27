<template>
  <div class="post">
    <div  class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{user.name}}</a>
        <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
        </a>
        <p class="desktop-only text-small">{{UserPostCount}} posts</p>
        </div>
        <div class="post-content">
          <div>
            <p>
            {{post.text}}
            </p>
          </div>
        </div>
        <div class="post-date text-faded">
          <AppDate :timestamp="post.publishedAt"/>
        </div>
    </div>
  </div>
</template>

<script>
import {countObjectProperties} from '@/utils'

export default {

  props: {
    post: {
      require: true,
      type: Object
    }
  },

  computed: {
    user () {
      return this.$store.state.users[this.post.userId]
    },

    UserPostCount () {
      return countObjectProperties(this.user.posts)
    }
  }

}
</script>