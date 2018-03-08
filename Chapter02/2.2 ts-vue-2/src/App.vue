
<script lang="ts">
  import Vue  from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component({
    template: `
      <div>
        <input type="text" v-model="name" />
        <button @click="sayHello(name)">Say Hello!</button>
        <p>{{nameReversed}}</p>
      </div>
    `
  })
  export default class App extends Vue {
    @Prop({ default: 'Paul ' }) name: string;

    // Computed values
    get nameReversed() {
      return this.name.split("").reverse().join("");
    }

    sayHello(name: string): void {
      alert(`Hello ${name}`)
    }
  }
</script>