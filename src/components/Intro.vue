<template>
  <div class="intro-page">
    <div>
      Intro
    </div>
    <video
      :src="require('@/assets/images/intro/intro_video.mp4')"
      autoplay
      muted
    />
  </div>
</template>

<script>
export default {
  name: 'Intro',
}
</script>

<style lang="scss" scoped>
.intro-page {
  position: relative;
}
</style>
