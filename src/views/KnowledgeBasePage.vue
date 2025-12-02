<template>
  <div class="knowledge-base-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="kb-hero-section">
      <div class="kb-hero-container">
        <h1 class="kb-hero-title">Knowledge Base</h1>
        <p class="kb-hero-subtitle">
          Whether you're a newcomer or advanced user, this documentation should cover almost everything you need to know about the app.
        </p>
      </div>
    </section>

    <!-- Articles Grid Section -->
    <section class="kb-articles-section">
      <div class="kb-articles-container">
        <div class="kb-articles-grid">
          <article
            v-for="article in articles"
            :key="article.id"
            class="kb-article-card"
          >
            <a :href="article.link" class="article-link">
              <div class="article-media">
                <div class="article-thumbnail">
                  <img :src="article.image" :alt="article.title" loading="lazy" />
                  <div class="article-overlay"></div>
                </div>
              </div>
              <div class="article-content">
                <time class="article-date">{{ article.date }}</time>
                <h2 class="article-title">{{ article.title }}</h2>
                <p class="article-excerpt">{{ article.excerpt }}</p>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

const articles = [
  {
    id: 1,
    title: 'How to rename your device?',
    link: '/rename-your-device',
    excerpt: 'How to rename your devices in Webkey? When you have a large number of...',
    image: '/243A2909-0-1920x1080.jpg',
    date: '2022-11-29'
  },
  {
    id: 2,
    title: 'About location tracking',
    link: '/locationtracking',
    excerpt: 'Location Tracking Webkey\'s location tracking feature allows you to locate and track your devices...',
    image: '/243A2909-0-1920x1080.jpg',
    date: '2022-11-29'
  },
  {
    id: 3,
    title: 'What is screen mirroring?',
    link: '/screen-mirroring-webkey',
    excerpt: 'Screen mirroring explained simply Screen mirroring is duplicating the screen of a mobile, tablet...',
    image: '/243A2909-0-1920x1080.jpg',
    date: '2022-03-29'
  },
  {
    id: 4,
    title: 'Pricing overview',
    link: '/pricing-overview',
    excerpt: 'Webkey believes that a transparent and easy to follow pricing is the basis of...',
    image: '/Webkey-Stills-part2-0002-1920x1080.jpg',
    date: '2021-11-26'
  },
  {
    id: 5,
    title: 'Remote Control – non rooted device',
    link: '/remote-control-non-rooted',
    excerpt: 'Webkey gives you the possibility to remotely control your devices without rooting them and...',
    image: '/succesfull_connection-fin-1.jpg',
    date: '2021-11-05'
  },
  {
    id: 6,
    title: 'Legacy screen stream',
    link: '/legacy-screen-stream',
    excerpt: 'As we continue to develop our app, there may be special cases where you...',
    image: '/Webkey-Stills-part2-0098-1920x1080.jpg',
    date: '2021-10-27'
  },
  {
    id: 7,
    title: 'Partnership – Everengine',
    link: '/partnership-everengine',
    excerpt: 'Webkey is proud to announce a new partnership with Everengine. Everengine is a Budapest...',
    image: '/Webkey-Stills-part2-0002-1920x1080.jpg',
    date: '2021-10-26'
  },
  {
    id: 8,
    title: 'Why Choose Webkey for Your Small Business?',
    link: '/why-webkey-small-business',
    excerpt: 'If you are a small business owner, we at Webkey understand your day to...',
    image: '/243A2909-0-1920x1080.jpg',
    date: '2021-10-12'
  },
  {
    id: 9,
    title: 'New: Premium features in app',
    link: '/premium-features',
    excerpt: 'As some of you may have already seen, recently a new menu item has...',
    image: '/tools-bg.jpg',
    date: '2021-10-06'
  },
  {
    id: 10,
    title: 'Webkey: Headless version',
    link: '/webkey-headless',
    excerpt: 'The Headless edition of Webkey allows the user interface to be hidden. This means...',
    image: '/Webkey-how-to-root.jpg',
    date: '2021-10-04'
  },
  {
    id: 11,
    title: 'Good to know: Firewall and Network settings for Webkey',
    link: '/firewall-and-network-settings',
    excerpt: 'If you need to control Android devices behind a firewall, the set-up can be...',
    image: '/Webkey-Stills-part2-0002-1920x1080.jpg',
    date: '2021-09-21'
  }
]
</script>

<style scoped>
.knowledge-base-page {
  min-height: 100vh;
}

.kb-hero-section {
  padding: 140px var(--padding-horizontal) 80px;
  background: #14181a;
  text-align: center;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kb-hero-container {
  max-width: 1400px;
  margin: 0 auto;
}

.kb-hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0 0 20px;
  color: #ffffff;
}

.kb-hero-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  margin: 0 auto;
  max-width: 800px;
}

.kb-articles-section {
  padding: 80px var(--padding-horizontal);
  background: #ffffff;
}

.kb-articles-container {
  max-width: 1600px;
  margin: 0 auto;
}

.kb-articles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.kb-article-card {
  background: #ffffff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.kb-article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.article-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.article-media {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.article-thumbnail {
  position: relative;
  padding-top: 56.333%;
  overflow: hidden;
}

.article-thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.kb-article-card:hover .article-thumbnail img {
  transform: scale(1.05);
}

.article-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease;
}

.kb-article-card:hover .article-overlay {
  background: rgba(0, 0, 0, 0.1);
}

.article-content {
  padding: 25px 20px;
}

.article-date {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 12px;
  color: #999999;
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.article-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #20242e;
  margin: 0 0 12px;
  line-height: 1.3;
  letter-spacing: 0.5px;
}

.article-excerpt {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 22px;
  color: #20242e;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .kb-hero-section {
    padding: 120px 40px 60px;
  }

  .kb-hero-title {
    font-size: 40px;
  }

  .kb-hero-subtitle {
    font-size: 15px;
    line-height: 26px;
  }

  .kb-articles-section {
    padding: 60px 40px;
  }

  .kb-articles-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .kb-hero-section {
    padding: 100px var(--padding-horizontal-mobile) 50px;
  }

  .kb-hero-title {
    font-size: 32px;
  }

  .kb-hero-subtitle {
    font-size: 14px;
    line-height: 24px;
  }

  .kb-articles-section {
    padding: 40px var(--padding-horizontal-mobile);
  }

  .kb-articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .article-content {
    padding: 20px 15px;
  }

  .article-title {
    font-size: 16px;
  }

  .article-excerpt {
    font-size: 13px;
    line-height: 20px;
  }
}

@media (max-width: 480px) {
  .kb-articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
