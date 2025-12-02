<template>
  <ArticleTemplate
    title="Good to know: Firewall and Network settings for Webkey"
    hero-image="/Webkey-Stills-part2-0002-1920x1080.jpg"
    date="2021-09-21"
    :related-articles="relatedArticles"
  >
    <p>If you need to control Android devices behind a firewall, the set-up can be a little tricky. The rules set for the firewall need to be updated to allow Webkey to function. This practically means that your Android devices should be directed to reach a server and a port directly.</p>

    <p>Webkey uses several server addresses, which we have listed below; these should allow you to set your firewall rules to allow for a fully functioning Webkey on your Android devices.</p>

    <h2>Server addresses and ports:</h2>

    <ul>
      <li>172.104.128.191: TCP: 443</li>
      <li>85.90.246.244: TCP: 443, 5349, optionally UDP: 3478</li>
      <li>188.166.253.77: TCP: 443, 5349, optionally UDP: 3478</li>
      <li>34.126.142.151: TCP: 443, 5349, optionally UDP: 3478</li>
      <li>35.246.147.185: TCP: 443, 5349, optionally UDP: 3478</li>
    </ul>

    <p>Please note that the above listed addresses and ports may later change. We will do our best to keep this page up-to-date, however if you have technical difficulties setting up your firewall rules for Webkey, please contact us at <a href="mailto:info@webkeyapp.com">info@webkeyapp.com</a></p>

    <p>Please also note, that to reach devices in deep sleep state, we use Google Firebase services. To make sure that all features and functions work properly, you may need to permit access to Firebase as well.</p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'Webkey: Headless version',
    link: '/webkey-headless',
    image: '/Webkey-how-to-root.jpg'
  },
  {
    id: 2,
    title: 'What is screen mirroring?',
    link: '/screen-mirroring-webkey',
    image: '/243A2909-0-1920x1080.jpg'
  }
]
</script>
