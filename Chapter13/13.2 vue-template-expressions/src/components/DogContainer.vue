<template>
  <dog-presentational :dogName="dogName" @woof="woof"></dog-presentational>
</template>

<script>
import DogPresentational from './DogPresentational'

export default {
  data() {
    return {
      dogName: 'Coco',
    }
  },
  components: {
    'dog-presentational': DogPresentational
  },
  methods: {
    woof() {
      alert('Woof!');
    }
  },
}
</script>