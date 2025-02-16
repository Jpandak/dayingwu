<template>
  <div class="care">
    <div class="container">
      <h1>鹦鹉饲养指南</h1>
      <div class="care-grid">
        <div class="care-card" v-for="(guide, index) in careGuides" :key="index">
          <h2>{{ guide.title }}</h2>
          <p>{{ guide.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const careGuides = [
  {
    title: '日常饮食',
    content: '鹦鹉的饮食应当以优质饲料为主，supplemented with新鲜的蔬菜和水果。每天需要提供清洁的饮用水。'
  },
  {
    title: '居住环境',
    content: '鸟笼要足够大，让鹦鹉能够展翅活动。需要定期清洁，保持通风，避免阳光直射。'
  },
  {
    title: '日常互动',
    content: '每天需要与鹦鹉进行互动和训练，这对于它们的心理健康非常重要。'
  },
  {
    title: '健康护理',
    content: '定期检查鹦鹉的健康状况，注意观察它们的行为变化，必要时及时就医。'
  }
]
</script>

<style lang="scss" scoped>
.care {
  padding: $spacing-lg 0;
  
  h1 {
    text-align: center;
    margin-bottom: $spacing-lg;
    color: $primary-color;
  }
}

.care-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-lg;
  padding: $spacing-md;
}

.care-card {
  background: white;
  padding: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: $secondary-color;
    margin-bottom: $spacing-md;
  }
  
  p {
    line-height: 1.6;
    color: lighten($text-color, 20%);
  }
}
</style> 