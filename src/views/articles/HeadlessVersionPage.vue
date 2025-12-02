<template>
  <ArticleTemplate
    title="Webkey: Headless version"
    hero-image="/Webkey-how-to-root.jpg"
    date="2021-10-04"
    :related-articles="relatedArticles"
  >
    <p>The Headless edition of Webkey allows the user interface to be hidden. This means that there is no way to make changes to the client app from the controlled device. In the below post we have summarized some of the main characteristics of this edition of our app.</p>

    <p>It is important to note that the Headless edition of our app is a tailor-made application and therefore it is only released as part of our Professional Plus package. This means, that if you wish to use the Headless version, you will need to get in touch with us so that we can create the APK to match your needs.</p>

    <h2>Main characteristics:</h2>

    <ul>
      <li>After the initial launch, the app will automatically register itself on the Webkey server, under the pre-set account.</li>
      <li>The permissions in the Android Webkey client applications signed with Android platform key are automatically accepted and set. (This means that there is no interaction needed from the user of the controlled device.) Screen stream, touch inject, file transfer and location tracking.</li>
      <li>Webkey Icon on the controlled device is hidden in 'Android Launcher'. In the full list of installed applications, Webkey will be shown.</li>
      <li>Webkey Icon will also be shown in the notification bar. Without this, the devices may go to deep sleep mode and so inaccessible from the internet.</li>
    </ul>

    <p>Headless version is recommended for organizations who distribute preinstalled devices and would later prefer to remotely control those with a limited user interaction.</p>

    <p>If you have any questions to the above or if you would like to use the headless app, please get in touch with us via <a href="mailto:info@webkeyapp.com">info@webkeyapp.com</a></p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'Good to know: Firewall and Network settings for Webkey',
    link: '/firewall-and-network-settings',
    image: '/Webkey-Stills-part2-0002-1920x1080.jpg'
  },
  {
    id: 2,
    title: 'New: Premium features in app',
    link: '/premium-features',
    image: '/tools-bg.jpg'
  }
]
</script>
