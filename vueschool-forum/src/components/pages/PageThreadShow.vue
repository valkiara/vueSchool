<template>
    <div>
      <div class="col-large push-top">
          <h1>{{thread.title}}</h1>
           <p>
              By <a href="#" class="link-unstyled">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt"/>
              <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
            </p>
          <PostList :posts="posts"/>
          <postEditor
            @save="addPost"
            :threadId="id"
          />
      </div>
  </div>
</template>
<script>
import sourceData from '@/data'
import PostList from '@/components/PostList'
import postEditor from '@/components/postEditor'

console.log(sourceData)

export default {
  components: {
    PostList,
    postEditor
  },

  props: {
    id: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      thread: sourceData.threads[this.id]
    }
  },

  computed: {
    posts () {
      const postIds = Object.keys(this.thread.posts)
      return Object.values(sourceData.posts).filter(post => postIds.includes(post['.key']))
    },
    user () {
      return sourceData.users[this.thread.userId]
    }

  },

  methods: {
    addPost ({post}) {
      const postId = post['.key']

      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, post)
      this.$set(sourceData.users[post.userId].posts, postId, postId)
    }

  }

}
</script>
