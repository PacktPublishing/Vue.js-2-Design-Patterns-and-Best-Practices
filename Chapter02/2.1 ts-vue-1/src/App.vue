
<script lang="ts">
  import Vue  from 'vue';
  import Component from 'vue-class-component';

  @Component({
    template: `
      <div>
        <input type="text" v-model="name" />
        <button @click="sayHello(name)">Say Hello!</button>
      </div>
    `
  })
  export default class App extends Vue {
    name: string = 'Paul';

    mounted() {
      console.log(`Mounted: Hello ${this.name}`);
    }

    created() {
      console.log(`Created: Hello ${this.name}`)
    }

    sayHello(name: string): void {
      alert(`Hello ${name}`)
    }
  }
</script>