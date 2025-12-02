<template>
  <section class="hero-section">
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/ldyht7YGYIU?autoplay=1&mute=1&loop=1&playlist=ldyht7YGYIU&controls=0&showinfo=0&rel=0&modestbranding=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        class="hero-video"
      ></iframe>
    </div>
    <div class="hero-overlay">
      <div class="hero-content">
        <h1 class="hero-title">Take Control</h1>
      </div>
    </div>
    <div class="hero-mobile-video" @click="playVideo" v-if="!isPlaying">
      <img
        src="https://img.youtube.com/vi/ldyht7YGYIU/maxresdefault.jpg"
        alt="Video thumbnail"
        class="video-thumbnail"
      />
      <div class="play-button">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" fill="rgba(0, 0, 0, 0.7)" />
          <polygon points="32,25 32,55 55,40" fill="white" />
        </svg>
      </div>
    </div>
    <div class="hero-mobile-video" v-else>
      <img
        src="https://img.youtube.com/vi/ldyht7YGYIU/maxresdefault.jpg"
        alt="Video thumbnail"
        class="video-thumbnail"
      />
    </div>

    <!-- Video Modal Overlay -->
    <div class="video-modal-overlay" v-if="isPlaying" @click="closeVideo">
      <div class="video-modal-container" @click.stop>
        <button class="close-button" @click="closeVideo">✕</button>
        <div class="video-wrapper">
          <iframe
            ref="videoIframe"
            src="https://www.youtube.com/embed/ldyht7YGYIU?autoplay=1&mute=0&controls=1&rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            class="hero-video-modal"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="hero-mobile-content">
      <h1 class="hero-title-mobile">Take Control</h1>
      <h2 class="hero-subtitle-mobile">
        Run your Android device<br />
        from your browser
      </h2>
      <div class="hero-cta-mobile">
        <a href="https://dashboard.webkeyapp.com/registration" class="btn-try-free-mobile">Try Free</a>
      </div>
      <p class="hero-note-mobile">No credit card required</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isPlaying = ref(false)
const videoIframe = ref(null)

const playVideo = () => {
  isPlaying.value = true
}

const closeVideo = () => {
  isPlaying.value = false
}
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 900px;
  overflow: hidden;
  background: #000000;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 56.25vw; /* 16:9 aspect ratio */
  min-height: 100vh;
  min-width: 177.77vh; /* 16:9 aspect ratio */
  transform: translate(-50%, -50%);
}

.hero-overlay {
  display: none;
}

.hero-content {
  text-align: center;
  z-index: 11;
}

.hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 100px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 8px 30px rgba(0, 0, 0, 0.8);
}

/* Hide mobile elements on desktop */
.hero-mobile-video,
.hero-mobile-content {
  display: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-section {
    height: 650px;
  }

  .hero-title {
    font-size: 70px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  /* Hide desktop video and overlay on mobile */
  .video-container,
  .hero-overlay {
    display: none;
  }

  /* Show mobile video at top */
  .hero-mobile-video {
    display: block;
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .video-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
  }

  .hero-mobile-video:hover .play-button {
    transform: translate(-50%, -50%) scale(1.1);
  }

  .hero-video-mobile {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }

  /* Show mobile content below video */
  .hero-mobile-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: #000000;
    padding: 80px var(--padding-horizontal-mobile) 100px;
  }

  .hero-title-mobile {
    font-family: 'DrukWide', sans-serif;
    font-size: 55px;
    font-weight: 500;
    color: transparent;
    -webkit-text-stroke: 2px #ffffff;
    text-stroke: 2px #ffffff;
    letter-spacing: 2px;
    text-transform: none;
    margin: 0 0 30px 0;
    text-align: left;
  }

  .hero-subtitle-mobile {
    font-family: 'DrukWide', sans-serif;
    font-size: 17px;
    line-height: 28px;
    color: #ffffff;
    margin: 0 0 30px 0;
    text-align: left;
    font-weight: 500;
  }

  .hero-cta-mobile {
    margin: 0 0 20px 0;
  }

  .btn-try-free-mobile {
    display: inline-block;
    background: #145cff;
    color: #ffffff;
    padding: 12px 28px;
    border-radius: 3px;
    font-family: 'DecimaMonoPro', monospace;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-try-free-mobile:hover {
    background: #ffffff;
    color: #000000;
  }

  .hero-note-mobile {
    font-family: 'DecimaMonoPro', monospace;
    font-size: 12px;
    color: #ffffff;
    margin: 0;
    text-align: left;
  }

  /* Video Modal Overlay for Mobile */
  .video-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .video-modal-container {
    position: relative;
    width: 100%;
    max-width: 100%;
  }

  .close-button {
    position: absolute;
    top: -50px;
    right: 0;
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 40px;
    cursor: pointer;
    z-index: 10000;
    padding: 10px;
    line-height: 1;
  }

  .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    background: #000000;
  }

  .hero-video-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
