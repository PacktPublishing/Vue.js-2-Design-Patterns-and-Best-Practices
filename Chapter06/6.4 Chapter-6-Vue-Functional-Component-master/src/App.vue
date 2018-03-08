<script>
import ListItem from './components/ListItem.vue';

export default {
  data() {
    return {
      names: ['Evan You', 'Edd Yerburgh', 'Paul Halliday']
    }
  },
  render(h) {
    return (
      <div>
        <ul>
          { this.names.map(name => <ListItem name={name} />) }
        </ul>
      </div>
    )
  }
}
</script>