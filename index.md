---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "obj-lite"
  text: "一个用于对象操作的轻量级实用库。"
  image:
    src: /favicon.png
    alt: obj-lite
  actions:
    - theme: brand
      text: use
      link: /pages/use
    - theme: alt
      text: API
      link: /pages/api
---
<script setup>
import FeatureCard from '.vitepress/components/FeatureCard.vue'
</script>

<div class="features-grid">

<FeatureCard
icon="🎯"
badgeText="精简核心方法"
details="提供 omit、pick、set、get 等常用对象操作方法，满足日常开发需求"
/>

<FeatureCard 
icon="🔧"
badgeText="深度操作支持" 
details="支持嵌套路径访问和修改，可处理复杂的对象结构" 
/>

<FeatureCard 
icon="🛡️"
badgeText="安全可靠" 
details="纯函数设计，不修改原对象，所有操作返回新对象" 
/>

<FeatureCard 
icon="📦"
badgeText="轻量无依赖" 
details="零外部依赖，体积极小，易于集成到任何项目" 
/>

<FeatureCard 
icon="🔍"
badgeText="类型检测工具" 
details="内置 isObject、isPlainObject、deepClone 等实用工具方法" 
/>

<FeatureCard 
icon="⚡"
badgeText="高性能" 
details="优化算法实现，提供快速的对象操作性能" 
/>

</div>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  padding: 40px 0;
}
</style>
