<template>
  <ArticleTemplate
    title="Partnership – Everengine"
    hero-image="/Webkey-Stills-part2-0002-1920x1080.jpg"
    date="2021-10-26"
    :related-articles="relatedArticles"
  >
    <p>Webkey is proud to announce a new partnership with Everengine.</p>

    <p>Everengine is a Budapest based digital creative agency that takes on complex marketing campaigns by creating graphics, videos, movies as well as print solutions, branding of events with an emphasis on digital solutions.</p>

    <p>Webkey is proud to have partnered with a forward thinking and solution oriented company like Everengine. We have already received great feedback and insight from working together on a specialized Kiosk mode for Everengine. We are sure that the future of digital marketing and remotely controlled devices will bring more and more success to our mutual clients.</p>

    <p>If you are interested in setting up a partnership with us, we have more than one option for this.</p>

    <p><strong>APK Certification:</strong> If you are an Android device manufacturer, we would be more than happy to have our APK certified with us. This is mutually beneficial as this will unlock more features of our app on your device for the end-users. It is free and a relatively easy process. If you are interested, please do not hesitate to send us an email.</p>

    <p><strong>Referral/Sales Incentives:</strong> If you are interested in setting up a partnership that includes referral codes or other sales incentives then please let us know and we will be happy to start a collaboration. We are open to any ideas that can be beneficial to our clients.</p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'Why Choose Webkey for Your Small Business?',
    link: '/why-webkey-small-business',
    image: '/243A2909-0-1920x1080.jpg'
  },
  {
    id: 2,
    title: 'Legacy screen stream',
    link: '/legacy-screen-stream',
    image: '/Webkey-Stills-part2-0098-1920x1080.jpg'
  }
]
</script>
