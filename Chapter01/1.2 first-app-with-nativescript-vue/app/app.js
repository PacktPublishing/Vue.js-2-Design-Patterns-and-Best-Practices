const Vue = require('nativescript-vue/dist/index');
const http = require('http');
Vue.prototype.$http = http;

new Vue({
    template: `
    <page>
        <action-bar class="action-bar" title="Posts"></action-bar>
        <stack-layout>
            <list-view :items="posts">
                <template scope="post">
                    <stack-layout class="list">
                        <label :text="post.title"></label>
                        <label :text="post.body"></label>
                    </stack-layout>
                </template>
            </list-view>
        </stack-layout>
    </page>
    `,
    data: {
        posts: []
    },
    created(args) {
        this.getPosts();
    },
    methods: {
        getPosts() {
            this.$http
                .getJSON(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    this.posts = response.map(
                        post => {
                            return {
                                title: post.title,
                                body: post.body
                            }
                        }
                    )
                });
        }
    }
}).$start();