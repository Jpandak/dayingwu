<template>
  <div class="parrot-detail">
    <div class="container">
      <button class="back-button" @click="$router.back()">
        <span class="arrow">←</span> 返回上一页
      </button>

      <div class="detail-content" v-if="parrot">
        <div class="image-section">
          <img :src="parrot.image" :alt="parrot.name" />
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
      <!--<CommentSection :parrot-id="route.params.id" />-->
      <div class="donate-section">
        <h2>支持鹦鹉保护</h2>
        <p>守护鹦鹉伙伴，从一次点击开始！您的捐赠将直接用于搭建全球首个鹦鹉百科平台，让濒危鸟类的保护知识触手可及。加入我们，您就是鹦鹉的云端守护者！</p>
        <button @click="handleDonateClick" class="btn btn--donate">捐献</button>
        <img v-if="showDonateImage" src="../../public/images/juanxian.jpg" alt="捐献图片" class="donate-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import CommentSection from "../components/CommentSection.vue";
import { useParrotDetails } from '../stores/parrotDetails'

const route = useRoute();
const parrot = ref(null);
const showDonateImage = ref(false); // 新增状态，用于控制是否展示捐献图片

// 鹦鹉详细数据
const parrotDetails = useParrotDetails().parrotDetails

onMounted(() => {
  const parrotId = route.params.id;
  parrot.value = parrotDetails[parrotId];
});

// 新增方法，用于处理捐献按钮点击事件
const handleDonateClick = () => {
  showDonateImage.value = true;
};
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

.donate-section {
  text-align: center;
  margin-top: $spacing-lg * 2;
  padding: $spacing-lg;
  background-color: rgba($primary-color, 0.1);
  border-radius: 8px;

  h2 {
    color: $primary-color;
    margin-bottom: $spacing-md;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: $spacing-lg;
  }

  .btn--donate {
    display: block;
    margin: auto;
    padding: $spacing-sm $spacing-lg;
    background-color: $primary-color;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: scale-color($primary-color, $lightness: -10%);
    }
  }
}

.donate-image {
  width: 100%;
  max-width: 400px;
  margin-top: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>