<template>
  <div class="features-accordion">
    <div
      v-for="feature in features"
      :key="feature.id"
      class="accordion-item"
      :class="{ active: expandedId === feature.id }"
    >
      <div class="accordion-header" @click="toggleItem(feature.id)">
        <h3 class="accordion-title">{{ feature.title }}</h3>
        <span class="accordion-arrow">→</span>
      </div>
      <transition name="accordion" @enter="onEnter" @leave="onLeave">
        <div v-if="expandedId === feature.id" class="accordion-content">
          <div class="accordion-content-inner">
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedId = ref(null)

const toggleItem = (id) => {
  expandedId.value = expandedId.value === id ? null : id
}

const onEnter = (el) => {
  el.style.height = '0'
  el.offsetHeight
  el.style.height = el.scrollHeight + 'px'
}

const onLeave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  el.offsetHeight
  el.style.height = '0'
}

const features = [
  {
    id: 1,
    title: 'Real-time remote view',
    description: 'Get a view of your Android device in a central web dashboard from afar. An all-round feature, useful for everyone from home users to enterprises. With Webkey you only need a stable connection to have a full view of your Android device\'s screen, running smoothly in realtime. This feature is your number one tool when you need to gather data from your devices or you need to follow any screen action on a remote device. If you have more than one device added to your Webkey account you can easily switch between them or even group them; all this done smoothless from a central place, your dashboard. This feature is available across all editions and does not require a rooted device.'
  },
  {
    id: 2,
    title: 'Full remote control including touch and key events',
    description: 'Webkey lets you control your device remotely and fully – this means that the device will react just the same way as when it is controlled manually. This is a key feature that can be used for among other things for remote troubleshooting and educational purposes, just to name a few. Touch screen movements in the centralized web Dashboard are controlled by the mouse or touchpad and the keypad is used for the text input. This feature requires a rooted device (but works without root on Samsung devices)'
  },
  {
    id: 3,
    title: 'File explorer',
    description: 'Webkey lets you control your device remotely and fully – this means that the device will react just the same way as when it is controlled manually. This is a key feature that can be used for among other things for remote troubleshooting and educational purposes, just to name a few. Touch screen movements in the centralized web Dashboard are controlled by the mouse or touchpad and the keypad is used for the text input. This feature requires a rooted device (but works without root on Samsung devices)'
  },
  {
    id: 4,
    title: 'Linux terminal access',
    description: 'Webkey allows you to make changes under the hood remotely. This is an important feature if you would like to manage and maintain your Android device remotely, but can be especially useful for IT fleet management of enterprises devices. Available in all editions and does not require a rooted device.'
  },
  {
    id: 5,
    title: 'GPS-based location tracking',
    description: 'Webkey\'s GPS based location tracking feature lets you locate and track your Android device on a map. In addition to this absolutely vital information about your device, this feature also opens a lot of opportunities; you can display information on your device depending on its location or gather information from the movement of devices in your fleet among many other things. No rooted device is necessary to be able to use this feature which is available across all editions of Webkey.'
  },
  {
    id: 6,
    title: 'Remote screenshot and screen recording',
    description: 'From a broken screen, to collecting information for remote maintenance of fleet devices, this feature gives you a multitude of possibilities to handle your Android device remotely. In your dashboard, there will be a dedicated screenshot icon for you to take screenshots. The screenshot or recording then can be handled just as you would handle any similar file. This feature is included in all editions of Webkey and does not require the device to be rooted.'
  },
  {
    id: 7,
    title: 'Quick open URLs in Android',
    description: 'It is possible to set a URL that will open without having to type the URL – this is a useful feature for KIOSK mode or digital signage or other similar purposes as it allows you to display urls on remote devices from a central hub. No rooted device required and available in all editions of Webkey.'
  },
  {
    id: 8,
    title: 'Web Dashboard to monitor devices',
    description: 'This is the central control panel for you to manage your devices connected through Webkey. A smooth web interface with intuitive design for your ease, the Web Dashboard is capable of showing all connected devices, which you can name and group for a better overview.'
  },
  {
    id: 9,
    title: 'List installed packages through a Rest API',
    description: 'All our dashboard features can be controlled by REST APIs – please find more info: https://www.webkeyapp.com/apidoc'
  },
  {
    id: 10,
    title: 'Install/Remove packages',
    description: 'You can add and delete apps on your device with Webkey using install and remove packages.'
  },
  {
    id: 11,
    title: 'Fleet ID',
    description: 'When you have a larger fleet of devices, it can be problematic to roll out and pair all devices one-by-one, we at Webkey therefore offer you our Fleet ID solution: you will receive one unique key from us that will connect all your devices to your account without having to go through a long enrollment process consuming your time and money. This feature is part of our business edition only.'
  },
  {
    id: 12,
    title: 'Direct access to your device by nick name/groups',
    description: 'Managing a group of devices can become chaotic. In your Webkey dashboard you can group and name devices in your fleet to have a better overview of the work at hand. Naming your device is available in the Free plan with just one device, grouping them only possible when there are more than one device added to your account.'
  },
  {
    id: 13,
    title: 'Device to Device control',
    description: 'Control your device from another device within the app is possible with Webkey. We have optimized our app to support device to device control without having to open a laptop or a desk computer.'
  },
  {
    id: 14,
    title: 'Sending Android intents',
    description: 'It is possible to send intents from your Dashboard to the controlled device(s). An intent is basically a passive data structure holding an abstract description of an action to be performed.'
  },
  {
    id: 15,
    title: 'Headless version',
    description: 'Webkey comes installed on your devices, without the icon displayed. This feature allows you to run Webkey in the background, accessing all features but not disrupting the end device. This feature available in the Business edition.'
  },
  {
    id: 16,
    title: 'Configuration via intent',
    description: 'Webkey can help you setting up devices using intents only to help you manage your devices in an automated manner instead of manual work.'
  },
  {
    id: 17,
    title: 'Pre-installed Webkey client',
    description: 'If you are an Android device manufacturer, Webkey will be happy to enter a technical cooperation agreement with you: To use our app to its best without rooting the device, a pre-installed Webkey app is the best solution.'
  }
]
</script>

<style scoped>
.features-accordion {
  max-width: 1200px;
  margin: 0 auto;
}

.accordion-item {
  border-bottom: none;
  transition: all 0.3s ease;
}

.accordion-item.active {
  border-bottom: 1px solid rgba(32, 36, 46, 0.1);
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.accordion-header:hover {
  opacity: 0.7;
}

.accordion-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #20242e;
  margin: 0;
  line-height: 1.4;
  letter-spacing: 1px;
  flex: 1;
}

.accordion-arrow {
  font-size: 24px;
  color: #145cff;
  font-weight: bold;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 20px;
  flex-shrink: 0;
}

.accordion-item.active .accordion-arrow {
  transform: rotate(90deg);
}

.accordion-content {
  overflow: hidden;
  transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-content-inner {
  padding: 0 0 30px 0;
}

.accordion-content-inner p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .accordion-title {
    font-size: 16px;
  }

  .accordion-arrow {
    font-size: 20px;
  }

  .accordion-content-inner p {
    font-size: 15px;
    line-height: 26px;
  }
}

@media (max-width: 480px) {
  .accordion-header {
    padding: 20px 0;
  }

  .accordion-title {
    font-size: 15px;
  }

  .accordion-content-inner {
    padding: 0 0 25px 0;
  }

  .accordion-content-inner p {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
