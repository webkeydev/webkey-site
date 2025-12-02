<template>
  <ArticleTemplate
    title="What is screen mirroring?"
    hero-image="/243A2909-0-1920x1080.jpg"
    date="2022-03-29"
    :related-articles="relatedArticles"
  >
    <h2>Screen mirroring explained simply</h2>

    <p>Screen mirroring is duplicating the screen of a mobile, tablet or laptop on a different screen. It can be a useful tool for providing remote support or centrally overseeing a fleet of devices. With Webkey, it is possible to mirror the screen or screens of the connected Android devices in the central Dashboard.</p>

    <h2>What can we know about the screen mirroring feature of Webkey?</h2>

    <p>Webkey offers you the ability to mirror the screens of the connected devices in real time. We have worked on improving the quality and lag time of the screen mirror (and the screen stream) recently. With Webkey you only need a stable connection to have a full view of your Android device's screen, running smoothly in real time. No rooted devices are required for this feature.</p>

    <p>We offer the screen mirroring feature as part of our standard app. You may also combine the screen mirroring feature with other Webkey features such as the remote screenshot or screen recording.</p>

    <h2>What can I use the screen mirroring feature for?</h2>

    <p>This is one of the most important features of our app. It is the simplest way we can provide to check the controlled phone's screen remotely. But you can also think about a tablet for example with a broken screen: in this case the screen mirror feature will give you back the visibility of what you stored on your tablet, thus allowing you to continue to use it or save files etc.</p>

    <p>In the business environment, this feature is the basis of providing remote support as it allows you to centrally monitor the connected devices and what is on their screens, all in real time.</p>

    <p>You may also find important notes about the <a href="/legacy-screen-stream">Legacy Screen Stream</a> setting in this article.</p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'Pricing overview',
    link: '/pricing-overview',
    image: '/Webkey-Stills-part2-0002-1920x1080.jpg'
  },
  {
    id: 2,
    title: 'About location tracking',
    link: '/locationtracking',
    image: '/243A2909-0-1920x1080.jpg'
  }
]
</script>
