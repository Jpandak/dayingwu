<template>
  <div class="home">
    <header class="hero">
      <div class="container">
        <h1>探索缤纷鹦鹉世界</h1>
        <p>发现这些聪明可爱的羽毛朋友</p>
        <SearchBar :parrots="parrots" class="hero-search" />
      </div>
    </header>

    <section class="parrot-types container">
      <h2>常见鹦鹉品种</h2>
      <div class="parrot-grid">
        <router-link
          v-for="parrot in parrots"
          :key="parrot.id"
          :to="{ name: 'parrot-detail', params: { id: parrot.slug } }"
          class="parrot-card"
        >
          <img :src="parrot.image" :alt="parrot.name" />
          <h3>{{ parrot.name }}</h3>
          <p>{{ parrot.description }}</p>
        </router-link>
      </div>
    </section>

    <button
      class="scroll-top"
      :class="{ visible: showScrollTop }"
      @click="scrollToTop"
      aria-label="回到顶部"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SearchBar from "../components/SearchBar.vue";

const parrots = [
  {
    id: 1,
    slug: "lovebird",
    name: "牡丹鹦鹉",
    description: "体型娇小，色彩缤纷，以其亲密的伴侣关系而闻名。",
    image:
      "https://img.win3000.com/m00/89/27/2c48d340036686363c762c47fea197bd.jpg",
  },
  {
    id: 2,
    slug: "cockatiel",
    name: "玄凤鹦鹉",
    description: "标志性羽冠与腮红斑点，性格温顺亲人，是小型鹦鹉中的颜值担当。",
    image:
      "https://n.sinaimg.cn/sinakd20200913ac/607/w640h767/20200913/e164-iyywcta1628440.jpg",
  },
  {
    id: 3,
    slug: "sun-conure",
    name: "小太阳鹦鹉",
    description: "橙黄渐变羽毛如落日，精力旺盛互动性强，擅长学习小技巧。",
    image:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.YmFtrPPuXQ0YGY7uvyDm4AAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    slug: "quaker-parrot",
    name: "和尚鹦鹉",
    description: "灰绿色羽毛配呆萌眼神，筑巢能力强，语言模仿天赋出众。",
    image:
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.4jKRettsIFgVSaiDNvSnUAAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    slug: "grey-parrot",
    name: "灰鹦鹉",
    description: "非洲灰鹦鹉以其超凡的智慧和模仿人类语言的能力而闻名。",
    image: "https://pic.birdnet.cn/forum/201610/08/174127tpjyp4ofkqazxjid.jpg",
  },
  {
    id: 6,
    slug: "macaw",
    name: "金刚鹦鹉",
    description: "体型较大，羽毛艳丽，性格活泼好动的鹦鹉品种。",
    image:
      "https://cdn.pixabay.com/photo/2016/03/26/22/50/nature-1281689_960_720.jpg",
  },
  {
    id: 7,
    slug: "budgie",
    name: "虎皮鹦鹉",
    description: "小巧可爱，适合新手饲养的入门级鹦鹉。",
    image:
      "https://cdn.pixabay.com/photo/2017/09/23/18/59/budgerigar-2779842_640.jpg",
  },
  {
    id: 8,
    slug: "cockatoo",
    name: "葵花凤头鹦鹉",
    description: "优雅的白色羽毛和醒目的冠羽，性格亲人，非常适合作为宠物。",
    image:
      "https://cdn.pixabay.com/photo/2023/05/11/03/34/white-cockatoo-7985434_1280.jpg",
  },
  {
    id: 9,
    slug: "conure",
    name: "金太阳鹦鹉",
    description: "活泼开朗，羽毛鲜艳，是很受欢迎的中型鹦鹉。",
    image:
      "https://n.sinaimg.cn/sinacn/w640h388/20180107/4274-fyqincv0220855.jpg",
  },
  {
    id: 10,
    slug: "lory",
    name: "吸蜜鹦鹉",
    description: "刷状舌尖适应花蜜饮食，羽毛如彩虹般绚丽，鸣叫清脆悦耳。",
    image: "https://p1.ssl.qhimg.com/t0183d540e5fea9e255.jpg",
  }
];

const showScrollTop = ref(false);

const checkScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.hero {
  background: linear-gradient(rgba(46, 204, 113, 0.8), rgba(52, 152, 219, 0.8)),
    url("https://n.sinaimg.cn/sinacn/w640h388/20180107/4274-fyqincv0220855.jpg")
      15% / cover;
  color: white;
  padding: $spacing-lg * 3 0;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: $spacing-md;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    @media (max-width: $breakpoint-sm) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  .hero-search {
    margin-top: $spacing-lg;

    @media (max-width: $breakpoint-sm) {
      margin-top: $spacing-md;
    }
  }
}

.parrot-types {
  padding: $spacing-lg 0;

  h2 {
    text-align: center;
    margin-bottom: $spacing-lg;
  }
}

.parrot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-lg;

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-md;
    padding: 0 $spacing-sm;
  }

  @media (max-width: $breakpoint-xs) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 $spacing-md;
  }
}

.parrot-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;

  @media (max-width: $breakpoint-sm) {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
    }

    img {
      height: 140px;
    }

    h3 {
      padding: $spacing-sm;
      font-size: 1rem;
    }

    p {
      padding: 0 $spacing-sm $spacing-sm;
      font-size: 0.9rem;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    padding: $spacing-md;
    margin: 0;
  }

  p {
    padding: 0 $spacing-md $spacing-md;
    color: lighten($text-color, 20%);
  }
}

.scroll-top {
  position: fixed;
  bottom: $spacing-lg;
  right: $spacing-lg;
  background: $primary-color;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: all 0.3s ease;
  border: none;

  &.visible {
    opacity: 1;
  }

  @media (max-width: $breakpoint-sm) {
    width: 36px;
    height: 36px;
    bottom: $spacing-md;
    right: $spacing-md;
  }
}

.hero-search {
  @media (max-width: $breakpoint-sm) {
    margin: $spacing-lg $spacing-md 0;
  }
}
</style>
