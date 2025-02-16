<template>
  <div class="search-container">
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        @input="handleSearch"
        @focus="showDropdown = true"
        @blur="handleBlur"
        placeholder="搜索鹦鹉..."
        ref="searchInput"
      >
      <button class="search-icon">
        <span>🔍</span>
      </button>
    </div>
    
    <!-- 搜索建议下拉框 -->
    <div 
      class="search-dropdown" 
      v-show="showDropdown && filteredParrots.length"
      ref="dropdown"
    >
      <router-link
        v-for="parrot in filteredParrots"
        :key="parrot.id"
        :to="{ name: 'parrot-detail', params: { id: parrot.slug }}"
        class="search-item"
        @click="handleSelect(parrot)"
      >
        <img :src="parrot.image" :alt="parrot.name">
        <div class="item-info">
          <h4>{{ parrot.name }}</h4>
          <p>{{ parrot.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  parrots: {
    type: Array,
    required: true
  }
})

const router = useRouter()
const searchQuery = ref('')
const showDropdown = ref(false)
const searchInput = ref(null)
const dropdown = ref(null)

// 过滤鹦鹉列表
const filteredParrots = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value.toLowerCase()
  return props.parrots.filter(parrot => 
    parrot.name.toLowerCase().includes(query) ||
    parrot.description.toLowerCase().includes(query)
  )
})

// 处理搜索
const handleSearch = () => {
  showDropdown.value = true
}

// 处理选择
const handleSelect = (parrot) => {
  searchQuery.value = parrot.name
  showDropdown.value = false
  // 可以添加选择后的其他操作
}

// 处理失焦
const handleBlur = () => {
  // 使用setTimeout确保点击下拉项能够触发路由跳转
  setTimeout(() => {
    showDropdown.value = false
  }, 200)
}
</script>

<style lang="scss" scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  z-index: 100;
}

.search-bar {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  input {
    flex: 1;
    padding: $spacing-md;
    border: none;
    outline: none;
    font-size: 1rem;
    
    &::placeholder {
      color: lighten($text-color, 40%);
    }
  }
  
  .search-icon {
    padding: $spacing-md;
    background: none;
    border: none;
    color: $primary-color;
    cursor: pointer;
    
    &:hover {
      background: rgba($primary-color, 0.1);
    }
  }
}

.search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: $spacing-sm;
  max-height: 400px;
  overflow-y: auto;
  
  .search-item {
    display: flex;
    align-items: center;
    padding: $spacing-sm;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: rgba($primary-color, 0.1);
    }
    
    img {
      width: 50px;
      height: 50px;
      border-radius: 4px;
      object-fit: cover;
      margin-right: $spacing-md;
    }
    
    .item-info {
      flex: 1;
      
      h4 {
        margin: 0;
        color: $text-color;
      }
      
      p {
        margin: $spacing-sm 0 0;
        font-size: 0.9rem;
        color: lighten($text-color, 20%);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}

// 移动端适配
@media (max-width: $breakpoint-sm) {
  .search-container {
    padding: 0 $spacing-sm;
  }
  
  .search-bar {
    input {
      padding: $spacing-sm;
      font-size: 0.9rem;
    }
    
    .search-icon {
      padding: $spacing-sm;
    }
  }
  
  .search-dropdown {
    .search-item {
      padding: $spacing-sm;
      
      img {
        width: 40px;
        height: 40px;
      }
      
      .item-info {
        h4 {
          font-size: 0.9rem;
        }
        
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style> 