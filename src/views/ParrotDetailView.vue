<template>
  <div class="parrot-detail">
    <div class="container">
      <button class="back-button" @click="$router.back()">
        <span class="arrow">←</span> 返回上一页
      </button>

      <div class="detail-content" v-if="parrot">
        <div class="image-section">
          <img :src="parrot.image" :alt="parrot.name">
        </div>
        <div class="info-section">
          <h1>{{ parrot.name }}</h1>
          <p class="description">{{ parrot.description }}</p>
          
          <div class="characteristics">
            <h2>特征介绍</h2>
            <ul>
              <li v-for="(trait, index) in parrot.characteristics" :key="index">
                <strong>{{ trait.title }}：</strong>
                {{ trait.content }}
              </li>
            </ul>
          </div>
          
          <div class="care-tips">
            <h2>饲养建议</h2>
            <ul>
              <li v-for="(tip, index) in parrot.careTips" :key="index">
                {{ tip }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else class="not-found">
        <h2>未找到该鹦鹉信息</h2>
        <router-link to="/" class="btn btn--primary">返回首页</router-link>
      </div>

      <CommentSection :parrot-id="route.params.id" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CommentSection from '../components/CommentSection.vue'

const route = useRoute()
const parrot = ref(null)

// 鹦鹉详细数据
const parrotDetails = {
  'grey-parrot': {
    id: 1,
    name: '灰鹦鹉',
    description: '非洲灰鹦鹉以其超凡的智慧和模仿人类语言的能力而闻名。它们不仅能够学习说话，还能理解简单的概念和进行基础的数学运算。',
    image: 'https://images.pexels.com/photos/9365605/pexels-photo-9365605.jpeg',
    characteristics: [
      { title: '体型', content: '身长约30-35厘米' },
      { title: '寿命', content: '平均40-50年' },
      { title: '智商', content: '相当于5-6岁人类儿童' },
      { title: '语言能力', content: '可以学习上千个单词' }
    ],
    careTips: [
      '需要大型鸟笼，建议尺寸至少60×60×90厘米',
      '每天需要12-14小时的睡眠时间',
      '饮食应包含优质鹦鹉粮、新鲜蔬果和适量坚果',
      '需要大量互动和智力训练',
      '定期修剪指甲和翅膀'
    ]
  },
  'macaw': {
    id: 2,
    name: '金刚鹦鹉',
    description: '金刚鹦鹉是体型最大的鹦鹉品种之一，以其艳丽的羽毛和聪明的性格著称。它们性格活泼，喜欢互动，是非常受欢迎的宠物鸟类。',
    image: 'https://images.pexels.com/photos/12474956/pexels-photo-12474956.jpeg',
    characteristics: [
      { title: '体型', content: '身长可达80-95厘米' },
      { title: '寿命', content: '平均50-60年' },
      { title: '性格', content: '活泼好动，喜欢玩耍' },
      { title: '叫声', content: '声音响亮，适合独栋房屋饲养' }
    ],
    careTips: [
      '需要特大型鸟笼，建议尺寸至少90×90×120厘米',
      '每天需要充足的运动和飞行时间',
      '提供各种玩具和攀爬设施',
      '饮食需要多样化，包括坚果、水果、蔬菜等',
      '需要定期洗澡和羽毛护理'
    ]
  },
  'budgie': {
    id: 3,
    name: '虎皮鹦鹉',
    description: '虎皮鹦鹉体型小巧，性格温和，是最受欢迎的入门级宠物鹦鹉。它们易于饲养，能学说简单的话，适合新手饲养者。',
    image: 'https://images.pexels.com/photos/14847844/pexels-photo-14847844.jpeg',
    characteristics: [
      { title: '体型', content: '身长约18-20厘米' },
      { title: '寿命', content: '平均8-10年' },
      { title: '性格', content: '温顺友好，容易驯养' },
      { title: '语言能力', content: '可以学习简单的词语' }
    ],
    careTips: [
      '适合小型鸟笼，建议尺寸至少45×45×45厘米',
      '喜欢成对饲养',
      '提供小型玩具和磨喙器',
      '每天需要新鲜的食物和清水',
      '保持环境温暖，避免寒风'
    ]
  },
  'cockatoo': {
    id: 4,
    name: '葵花凤头鹦鹉',
    description: '葵花凤头鹦鹉以其优雅的白色羽毛和醒目的黄色冠羽而闻名。它们非常聪明，性格温顺亲人，但需要大量的关注和互动。这种鹦鹉以其出色的模仿能力和丰富的情感表达而受到爱好者的喜爱。',
    image: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg',
    characteristics: [
      { title: '体型', content: '身长约45-50厘米' },
      { title: '寿命', content: '平均40-60年' },
      { title: '性格', content: '感情丰富，需要大量关注' },
      { title: '特点', content: '标志性的黄色冠羽，会跳舞' }
    ],
    careTips: [
      '需要大型鸟笼，建议尺寸至少80×80×120厘米',
      '每天需要3-4小时的笼外活动时间',
      '需要定期修剪冠羽和指甲',
      '饮食应包含各种坚果、水果和蔬菜',
      '对环境噪音敏感，需要安静的休息环境'
    ]
  },
  'lovebird': {
    id: 5,
    name: '情侣鹦鹉',
    description: '情侣鹦鹉因其亲密的伴侣关系和恩爱的行为而得名。它们体型小巧，羽毛色彩艳丽，性格活泼可爱。这种鹦鹉最好成对饲养，它们会展现出令人惊叹的忠诚和感情。',
    image: 'https://images.pexels.com/photos/5998628/pexels-photo-5998628.jpeg',
    characteristics: [
      { title: '体型', content: '身长约13-17厘米' },
      { title: '寿命', content: '平均10-15年' },
      { title: '性格', content: '活泼好动，重感情' },
      { title: '特点', content: '适合成对饲养，色彩鲜艳' }
    ],
    careTips: [
      '建议成对饲养，笼子尺寸至少45×45×45厘米',
      '提供多样化的玩具和攀爬设施',
      '每天需要充足的运动时间',
      '定期补充维生素和矿物质',
      '保持环境清洁和适宜温度'
    ]
  },
  'conure': {
    id: 6,
    name: '太阳锥尾鹦鹉',
    description: '太阳锥尾鹦鹉以其明亮的橙黄色羽毛和活泼的性格而闻名。它们是很好的宠物鸟，既聪明又充满活力，能够学习简单的词语和技巧。这种鹦鹉特别适合喜欢互动的饲养者。',
    image: 'https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg',
    characteristics: [
      { title: '体型', content: '身长约30厘米' },
      { title: '寿命', content: '平均20-25年' },
      { title: '性格', content: '活泼开朗，喜欢玩耍' },
      { title: '特点', content: '叫声较响，适合互动' }
    ],
    careTips: [
      '需要中型鸟笼，建议尺寸至少60×60×75厘米',
      '提供丰富的玩具和攀爬器具',
      '每天需要规律的运动和训练时间',
      '饮食要均衡，包括专用饲料和新鲜食物',
      '需要适当的社交和互动'
    ]
  }
}

onMounted(() => {
  const parrotId = route.params.id
  parrot.value = parrotDetails[parrotId]
})
</script>

<style lang="scss" scoped>
.parrot-detail {
  padding: $spacing-lg 0;
}

.detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-lg * 2;
  
  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
    padding: 0 $spacing-md;
  }
}

.image-section {
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    
    @media (max-width: $breakpoint-sm) {
      height: 300px;
    }
  }
}

.info-section {
  h1 {
    color: $primary-color;
    margin-bottom: $spacing-md;
    @media (max-width: $breakpoint-sm) {
      font-size: 1.8rem;
    }
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: $spacing-lg;
  }
  
  h2 {
    color: $secondary-color;
    margin: $spacing-lg 0 $spacing-md;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: $spacing-md;
      line-height: 1.6;
      
      &::before {
        content: "•";
        color: $primary-color;
        font-weight: bold;
        margin-right: $spacing-sm;
      }
    }
  }

  @media (max-width: $breakpoint-sm) {
    padding: 0 $spacing-md;
  }
}

.not-found {
  text-align: center;
  padding: $spacing-lg * 2;
  
  h2 {
    color: $text-color;
    margin-bottom: $spacing-lg;
  }
  
  .btn {
    display: inline-block;
    padding: $spacing-sm $spacing-lg;
    background-color: $primary-color;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    
    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}

.back-button {
  display: inline-flex;
  align-items: center;
  padding: $spacing-sm $spacing-md;
  margin-bottom: $spacing-lg;
  background: none;
  border: none;
  color: $secondary-color;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  .arrow {
    font-size: 1.4rem;
    margin-right: $spacing-sm;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: $primary-color;

    .arrow {
      transform: translateX(-4px);
    }
  }
}
</style> 