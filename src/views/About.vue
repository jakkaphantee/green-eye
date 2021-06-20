<template>
  <div class="app-page about-page">
    <div class="about-title">
      <img
        :src="require('@/assets/images/about/about_title.png')"
      />
    </div>
    <div class="about-content-container mt-3">
      <div class="about-text">
        <img
          :src="require('@/assets/images/about/about_text.png')"
        />
      </div>
      <div class="about-graphic-container">
        <div class="about-logo">
          <img
            :src="require('@/assets/images/about/about_logo.png')"
          />
        </div>
        <div class="about-graphic">
          <img
            :src="require('@/assets/images/about/about_graphic.png')"
          />
        </div>
      </div>
    </div>
    <img class="about-footer" :src="require('@/assets/images/about/about_footer.png')" />
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  padding: 20% 20px 0 20px;
}
.about-title {
  position: relative;
  width: 100%;
  text-align: right;
  img {
    width: 50%;
  }
}
.about-content-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .about-text {
    height: fit-content;
    img {
      width: 75%;
    }
  }
  .about-graphic-container {
    .about-logo {
      position: absolute;
      top: 10%;
      z-index: 5;
      img {
        width: 75%;
      }
    }
    .about-graphic {
      position: relative;
      img {
        width: 80%;
      }
    }
  }
}
.about-footer {
  position: fixed;
  width: 100%;
  left: 0;
  top: 85%;
  z-index: 0;
}
</style>
