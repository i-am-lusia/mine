<template>
    <div id="">
    </div>
</template>
<script>
import Sentiment from 'sentiment'
export default {
  name: 'comment',
  data () {
    return {
      comment: null
    }
  },
  methods: {
    getAnysis () {
      var sentiment = new Sentiment()
      let score = sentiment.analyze('cats are dog')
      console.log(score)
    }
  }
}
</script>
<style>

</style>
