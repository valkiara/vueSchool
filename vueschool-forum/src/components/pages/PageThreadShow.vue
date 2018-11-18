<template>
    <div>
        <div class="col-large push-top">
            <h1>{{thread.title}}</h1>
            <PostList :posts="posts"/>
        </div>
  </div>
</template>
<script>
import sourceData from '@/data'
import PostList from '@/components/PostList'
console.log(sourceData)

export default {
  components: {
    PostList
  },

  props: {
    id: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      thread: sourceData.threads[this.id],
      posts: sourceData.posts,
      users: sourceData.users
    }
  },

  computed: {
    psots () {
      const postIds = Object.keys(this.thread.posts)
      return Object.values(sourceData.posts).filter(post => postIds.includes(post['.key']))
    }

  }
}
</script>
