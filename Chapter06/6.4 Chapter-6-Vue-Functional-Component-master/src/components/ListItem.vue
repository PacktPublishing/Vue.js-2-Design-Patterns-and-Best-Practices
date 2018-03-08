<script>
export default {
  props: ['name'],
  functional: true,
  render(createElement, context) {
    return createElement('li', context.props.name)
  }
}
</script>

<style>

</style>
