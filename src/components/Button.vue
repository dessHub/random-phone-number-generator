<template>
  <div class="text-xs-center">
    <v-btn class="btn-generate" round color="normal" @click="getNumbers" dark>Generate New Phone
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
