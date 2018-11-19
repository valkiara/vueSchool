<template>
    <div>
    <div class="col-large push-top">

        <h1>{{thread}}</h1>

        <div  v-for="postId in thread.posts" v-bind:key="postId.key"  class="post-list">

            <div  class="post">

                <div class="user-info">
                    <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
                    

                    <a href="#">
                        <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                    </a>

                    <p class="desktop-only text-small">107 posts</p>



                </div>

                <div class="post-content">
                    <div>
                      <p>
                        {{posts[postId].text}}
                      </p>
                    </div>
                </div>



                <div class="post-date text-faded">
                    {{posts[postId].publishedAt}}
                </div>
            </div>
        </div>

        
    </div>
  </div>
</template>

<script>
    import sourceData from '@/data'
    export default {
        
        props: {
            id: {
                required: true,
                type: string
            }
        },

        data(){
            return {
                thread: sourceData.threads[this.id],
                posts: sourceData.posts,
                users: sourceData.users
            }
        }
    }
</script>
