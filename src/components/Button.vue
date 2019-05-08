<template>
  <div class="text-xs-center">
    <v-btn round color="normal" @click="getNumbers" dark>Generate New Phone
      Numbers</v-btn>
  </div>
</template>
<script>
export default {
  props: {
    getNumbers: Function
  }
}
</script>
