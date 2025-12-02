<template>
  <div class="faq-accordion">
    <div
      v-for="item in faqs"
      :key="item.id"
      class="accordion-item"
      :class="{ active: expandedId === item.id }"
    >
      <div
        class="accordion-header"
        @click="toggleItem(item.id)"
      >
        <h3 class="accordion-title">{{ item.question }}</h3>
        <span class="accordion-arrow">→</span>
      </div>
      <transition
        name="accordion"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @leave="onLeave"
      >
        <div v-if="expandedId === item.id" class="accordion-content">
          <div class="accordion-content-inner">
            <p v-html="item.answer"></p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  faqs: {
    type: Array,
    required: true
  }
})

const expandedId = ref(props.faqs[0]?.id || null)

const toggleItem = (id) => {
  expandedId.value = expandedId.value === id ? null : id
}

const onEnter = (el) => {
  el.style.height = '0'
  el.style.opacity = '0'
  // Force reflow
  el.offsetHeight
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
}

const onAfterEnter = (el) => {
  el.style.height = 'auto'
}

const onLeave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  // Force reflow
  el.offsetHeight
  el.style.height = '0'
  el.style.opacity = '0'
}
</script>

<style scoped>
.faq-accordion {
  max-width: 1400px;
  margin: 0 auto;
}

.accordion-item {
  border-bottom: none;
}

.accordion-item.active {
  border-bottom: 1px solid rgba(32, 36, 46, 0.1);
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
  text-transform: none;
}

.accordion-arrow {
  font-size: 24px;
  font-style: normal;
  color: #20242e;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-item.active .accordion-arrow {
  transform: rotate(90deg);
}

.accordion-content {
  overflow: hidden;
}

.accordion-content-inner {
  padding: 0 0 20px 0;
}

.accordion-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.accordion-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.accordion-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.accordion-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.accordion-content p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0;
}

.accordion-content :deep(a) {
  color: #145cff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.accordion-content :deep(a):hover {
  color: #5a4ee0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .accordion-header {
    padding: 16px 0;
  }

  .accordion-title {
    font-size: 14px;
  }

  .accordion-arrow {
    font-size: 20px;
  }

  .accordion-content p {
    font-size: 14px;
    line-height: 24px;
  }

  .accordion-content-inner {
    padding: 0 0 16px 0;
  }
}
</style>
