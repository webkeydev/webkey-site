<template>
  <div class="article-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="article-hero">
      <div class="article-hero-overlay"></div>
      <div class="article-hero-content">
        <h1 class="article-hero-title">{{ title }}</h1>
        <div v-if="date" class="article-meta">
          <time>{{ formattedDate }}</time>
        </div>
      </div>
      <div
        class="article-hero-bg"
        :style="{ backgroundImage: `url(${heroImage})` }"
      ></div>
    </section>

    <!-- Article Content -->
    <article class="article-content-section">
      <div class="article-container">
        <div class="article-body">
          <slot></slot>
        </div>
      </div>
    </article>

    <!-- Related Articles (if provided) -->
    <section v-if="relatedArticles && relatedArticles.length" class="related-articles-section">
      <div class="related-articles-container">
        <div class="related-articles-grid">
          <a
            v-for="article in relatedArticles"
            :key="article.id"
            :href="article.link"
            class="related-article-card"
          >
            <div
              class="related-article-bg"
              :style="{ backgroundImage: `url(${article.image})` }"
            ></div>
            <div class="related-article-overlay"></div>
            <div class="related-article-title">
              <span>{{ article.title }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  heroImage: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: null
  },
  relatedArticles: {
    type: Array,
    default: () => []
  }
})

const formattedDate = computed(() => {
  if (!props.date) return ''
  const date = new Date(props.date)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>

<style scoped>
.article-page {
  min-height: 100vh;
}

.article-hero {
  position: relative;
  padding: 180px 40px 100px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.article-hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.article-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.article-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
}

.article-hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0;
  color: #ffffff;
}

.article-meta {
  margin-top: 20px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.article-content-section {
  padding: 80px 40px;
  background: #ffffff;
}

.article-container {
  max-width: 900px;
  margin: 0 auto;
}

.article-body {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
}

.article-body :deep(h2) {
  font-family: 'DrukWide', sans-serif;
  font-size: 32px;
  font-weight: 500;
  color: #20242e;
  margin: 60px 0 30px;
  line-height: 1.2;
  letter-spacing: 1px;
}

.article-body :deep(h3) {
  font-family: 'DrukWide', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #20242e;
  margin: 40px 0 20px;
  line-height: 1.3;
}

.article-body :deep(p) {
  margin: 0 0 20px;
}

.article-body :deep(ul),
.article-body :deep(ol) {
  margin: 0 0 20px;
  padding-left: 30px;
}

.article-body :deep(li) {
  margin-bottom: 10px;
}

.article-body :deep(a) {
  color: #145cff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.article-body :deep(a:hover) {
  color: #5a4ee0;
}

.article-body :deep(img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 40px auto;
  border-radius: 3px;
}

.article-body :deep(code) {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.article-body :deep(pre) {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 3px;
  overflow-x: auto;
  margin: 20px 0;
}

.related-articles-section {
  padding: 80px 40px;
  background: #f6f5f6;
}

.related-articles-container {
  max-width: 1400px;
  margin: 0 auto;
}

.related-articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.related-article-card {
  position: relative;
  height: 300px;
  border-radius: 3px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.related-article-card:hover {
  transform: translateY(-5px);
}

.related-article-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.related-article-card:hover .related-article-bg {
  transform: scale(1.05);
}

.related-article-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease;
}

.related-article-card:hover .related-article-overlay {
  background: rgba(0, 0, 0, 0.6);
}

.related-article-title {
  position: relative;
  z-index: 2;
  padding: 30px;
  text-align: center;
}

.related-article-title span {
  font-family: 'DrukWide', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.3;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .article-hero {
    padding: 160px 40px 80px;
  }

  .article-hero-title {
    font-size: 40px;
  }

  .article-content-section {
    padding: 60px 40px;
  }

  .article-body :deep(h2) {
    font-size: 28px;
    margin: 50px 0 25px;
  }

  .related-articles-section {
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .article-hero {
    padding: 140px 20px 60px;
    min-height: 300px;
  }

  .article-hero-title {
    font-size: 32px;
  }

  .article-content-section {
    padding: 40px 20px;
  }

  .article-body {
    font-size: 15px;
    line-height: 26px;
  }

  .article-body :deep(h2) {
    font-size: 24px;
    margin: 40px 0 20px;
  }

  .article-body :deep(h3) {
    font-size: 20px;
  }

  .related-articles-section {
    padding: 40px 20px;
  }

  .related-articles-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .related-article-card {
    height: 250px;
  }

  .related-article-title span {
    font-size: 20px;
  }
}
</style>
