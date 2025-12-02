<template>
  <ArticleTemplate
    title="Pricing overview"
    hero-image="/Webkey-Stills-part2-0002-1920x1080.jpg"
    date="2021-11-26"
    :related-articles="relatedArticles"
  >
    <p>Webkey believes that a transparent and easy to follow pricing is the basis of the customer satisfaction.</p>

    <p>Therefore, we would like to give you a little bit more information on our pricing plans and how to best read our website's pricing page</p>

    <p>First, it is important to note that we have two main different pricing categories:</p>

    <ul>
      <li>Individual users</li>
      <li>Business users</li>
    </ul>

    <h2>Individual users</h2>

    <p>For individual users, we offer our Free version for one device and the Home version for upto 5 devices. In these pricing plans, only our Standard, Cloud based edition is available. The main difference is the device limit.</p>

    <p>The Home version is the only version that we offer with a monthly billing plan, however we do recommend choosing the yearly subscription plan – this way you can save 4 months.</p>

    <p>These two plans are also ideal for testing purposes before making a decision on a larger subscription.</p>

    <h2>Business users</h2>

    <p>For Business users, we offer a stair-step pricing plan, based on the number of devices. The Professional Plan includes our Standard Edition of the app, while the Professional Plus version comes with the Business Edition. The main difference between the two Editions is that the Business edition is a tailormade app, with special features, priority support and possible unique developments.</p>

    <p>If you need to make any changes to increase the device limit, you may do this from the app at any times.</p>

    <h2>Other</h2>

    <p>In addition to these we also offer server solutions which are recommended to business clients. They can either be dedicated servers and on-premise servers. As both of these solutions are quite unique and will require prior check of the environment and existing infrastructure, please always contact us for a quotation.</p>

    <p>As for our premium in app features, please be referred to an earlier article.</p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'Remote Control – non rooted device',
    link: '/remote-control-non-rooted',
    image: '/succesfull_connection-fin-1.jpg'
  },
  {
    id: 2,
    title: 'What is screen mirroring?',
    link: '/screen-mirroring-webkey',
    image: '/243A2909-0-1920x1080.jpg'
  }
]
</script>
