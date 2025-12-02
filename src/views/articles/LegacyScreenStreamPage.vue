<template>
  <ArticleTemplate
    title="Legacy screen stream"
    hero-image="/Webkey-Stills-part2-0098-1920x1080.jpg"
    date="2021-10-27"
    :related-articles="relatedArticles"
  >
    <p>As we continue to develop our app, there may be special cases where you encounter issues with the newer versions. One such issue can be with the screen stream.</p>

    <p>In such cases, we recommend that you switch back to the legacy screen stream mode – an earlier version that worked well for you.</p>

    <p>To do this, you will need to go to your settings in your Webkey Android app (on the controlled device).</p>

    <p>After clicking this, you will find a check box, that lets you switch back to the legacy mode. Please note that by switching back to the legacy mode screen stream the quality may be effected. We only recommend doing this if the screen stream has stopped working with the app update.</p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'Partnership – Everengine',
    link: '/partnership-everengine',
    image: '/Webkey-Stills-part2-0002-1920x1080.jpg'
  },
  {
    id: 2,
    title: 'Remote Control – non rooted device',
    link: '/remote-control-non-rooted',
    image: '/succesfull_connection-fin-1.jpg'
  }
]
</script>
