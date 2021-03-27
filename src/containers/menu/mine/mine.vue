<template>
    <div id='mine'>
        <el-tabs  class="tab">
          <el-tab-pane>
            <span slot="label">
              <span class="pane1">我的</span>
            </span>
          </el-tab-pane>
        </el-tabs>
        <span class="el-icon-message" @click="toMessage"></span>
        <span class="el-icon-more" @click="toMore"></span>
    </div>
</template>
<script>
import more from '@/components/pages/fourth/more/more.vue'
import messages from '@/components/pages/fourth/messages/messages.vue'
export default {
  name: 'mine',
  components: {
    more,
    messages
  },
  data () {
    return {
      isMore: false,
      isMessage: false
    }
  },
  methods: {
    toMore () {
      this.isMore = true
    },
    toMessage () {
      this.isMessage = true
    },
    closeMore () {
      this.isMore = false
    },
    closeMessage () {
      this.isMessage = false
    }
  }
}
</script>
<style scoped>
@import './index.css';
</style>
