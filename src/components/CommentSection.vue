<template>
  <div class="comments-section">
    <h2>饲养经验分享</h2>
    
    <!-- 发布评论表单 -->
    <div class="comment-form">
      <textarea 
        v-model="newComment.content" 
        placeholder="分享你的饲养经验..."
        rows="3"
      ></textarea>
      
      <!-- 图片上传 -->
      <div class="image-upload">
        <label class="upload-btn">
          <input 
            type="file" 
            accept="image/*" 
            @change="handleImageUpload" 
            multiple
          >
          <span class="icon">📷</span> 添加图片
        </label>
        <!-- 预览图片 -->
        <div class="image-previews" v-if="newComment.images.length">
          <div 
            v-for="(img, index) in newComment.images" 
            :key="index" 
            class="preview-item"
          >
            <img :src="img.url" :alt="`预览图 ${index + 1}`">
            <button class="remove-btn" @click="removeImage(index)">×</button>
          </div>
        </div>
      </div>
      
      <button 
        class="submit-btn" 
        @click="submitComment"
        :disabled="!newComment.content.trim()"
      >
        发布评论
      </button>
    </div>

    <!-- 评论列表 -->
    <div class="comments-list">
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <div class="comment-header">
          <div class="user-info">
            <img :src="comment.userAvatar" :alt="comment.userName" class="avatar">
            <span class="username">{{ comment.userName }}</span>
          </div>
          <span class="time">{{ formatTime(comment.timestamp) }}</span>
        </div>
        
        <p class="comment-content">{{ comment.content }}</p>
        
        <!-- 评论图片 -->
        <div class="comment-images" v-if="comment.images.length">
          <div 
            v-for="(img, index) in comment.images" 
            :key="index" 
            class="image-item"
            @click="showImagePreview(comment.images, index)"
          >
            <img :src="img.url" :alt="`图片 ${index + 1}`">
          </div>
        </div>

        <!-- 评论互动 -->
        <div class="comment-actions">
          <button @click="likeComment(comment)">
            <span class="icon">👍</span> {{ comment.likes }}
          </button>
          <button @click="showReplyForm(comment)">
            <span class="icon">💬</span> 回复
          </button>
        </div>

        <!-- 回复列表 -->
        <div class="replies" v-if="comment.replies.length">
          <div 
            v-for="reply in comment.replies" 
            :key="reply.id" 
            class="reply-item"
          >
            <div class="reply-header">
              <img :src="reply.userAvatar" :alt="reply.userName" class="avatar">
              <span class="username">{{ reply.userName }}</span>
              <span class="time">{{ formatTime(reply.timestamp) }}</span>
            </div>
            <p class="reply-content">{{ reply.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片预览模态框 -->
    <div class="image-preview-modal" v-if="previewImages.show" @click="closeImagePreview">
      <div class="modal-content">
        <img :src="previewImages.current.url" alt="预览图片">
        <button class="close-btn" @click="closeImagePreview">×</button>
        <button 
          class="nav-btn prev" 
          v-if="previewImages.images.length > 1"
          @click.stop="navigateImage(-1)"
        >❮</button>
        <button 
          class="nav-btn next" 
          v-if="previewImages.images.length > 1"
          @click.stop="navigateImage(1)"
        >❯</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useUserStore } from '../stores/user'

const props = defineProps({
  parrotId: {
    type: String,
    required: true
  }
})

const userStore = useUserStore()

// 新评论数据
const newComment = ref({
  content: '',
  images: []
})

// 评论列表
const comments = ref([
  {
    id: 1,
    userName: '鹦鹉爱好者',
    userAvatar: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=50',
    content: '我家的灰鹦鹉已经养了5年了，特别聪明，会说很多话！',
    images: [
      { url: 'https://images.pexels.com/photos/9365605/pexels-photo-9365605.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ],
    timestamp: Date.now() - 3600000,
    likes: 12,
    replies: [
      {
        id: 2,
        userName: '鸟语花香',
        userAvatar: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=50',
        content: '请问你是怎么训练它说话的呀？',
        timestamp: Date.now() - 1800000
      }
    ]
  }
])

// 图片预览状态
const previewImages = ref({
  show: false,
  images: [],
  currentIndex: 0,
  current: null
})

// 处理图片上传
const handleImageUpload = (event) => {
  const files = Array.from(event.target.files)
  files.forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      newComment.value.images.push({
        url: e.target.result,
        file: file
      })
    }
    reader.readAsDataURL(file)
  })
}

// 移除预览图片
const removeImage = (index) => {
  newComment.value.images.splice(index, 1)
}

// 提交评论
const submitComment = () => {
  if (!newComment.value.content.trim()) return

  const comment = {
    id: Date.now(),
    userName: userStore.userName || '匿名用户',
    userAvatar: userStore.userAvatar || 'default-avatar.jpg',
    content: newComment.value.content,
    images: newComment.value.images,
    timestamp: Date.now(),
    likes: 0,
    replies: []
  }

  comments.value.unshift(comment)
  newComment.value = { content: '', images: [] }
}

// 点赞评论
const likeComment = (comment) => {
  comment.likes++
}

// 显示图片预览
const showImagePreview = (images, index) => {
  previewImages.value = {
    show: true,
    images: images,
    currentIndex: index,
    current: images[index]
  }
}

// 关闭图片预览
const closeImagePreview = () => {
  previewImages.value.show = false
}

// 切换预览图片
const navigateImage = (direction) => {
  const { images, currentIndex } = previewImages.value
  let newIndex = currentIndex + direction
  
  if (newIndex >= images.length) newIndex = 0
  if (newIndex < 0) newIndex = images.length - 1
  
  previewImages.value.currentIndex = newIndex
  previewImages.value.current = images[newIndex]
}

// 格式化时间
const formatTime = (timestamp) => {
  const now = Date.now()
  const diff = now - timestamp

  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`
  
  const date = new Date(timestamp)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
</script>

<style lang="scss" scoped>
.comments-section {
  margin-top: $spacing-lg * 2;
  @media (max-width: $breakpoint-sm) {
    padding: 0 $spacing-md;
  }
  
  h2 {
    color: $secondary-color;
    margin-bottom: $spacing-lg;
  }
}

.comment-form {
  background: white;
  padding: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: $spacing-lg;

  textarea {
    width: 100%;
    padding: $spacing-md;
    border: 1px solid lighten($text-color, 50%);
    border-radius: 4px;
    resize: vertical;
    margin-bottom: $spacing-md;
    
    &:focus {
      outline: none;
      border-color: $primary-color;
    }
  }
}

.image-upload {
  margin-bottom: $spacing-md;

  .upload-btn {
    display: inline-flex;
    align-items: center;
    padding: $spacing-sm $spacing-md;
    background: none;
    border: 1px solid $primary-color;
    color: $primary-color;
    border-radius: 4px;
    cursor: pointer;
    
    input[type="file"] {
      display: none;
    }
    
    .icon {
      margin-right: $spacing-sm;
    }
    
    &:hover {
      background: rgba($primary-color, 0.1);
    }
  }
}

.image-previews {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-sm;
  margin-top: $spacing-md;

  .preview-item {
    position: relative;
    width: 100px;
    height: 100px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
    
    .remove-btn {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      cursor: pointer;
      
      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
}

.submit-btn {
  width: 100%;
  padding: $spacing-md;
  background: $primary-color;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
  
  &:disabled {
    background: lighten($primary-color, 20%);
    cursor: not-allowed;
  }
}

.comments-list {
  .comment-item {
    background: white;
    padding: $spacing-lg;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: $spacing-lg;
    @media (max-width: $breakpoint-sm) {
      margin: $spacing-md 0;
      padding: $spacing-md;
    }
  }
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-md;
  
  .user-info {
    display: flex;
    align-items: center;
    
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: $spacing-sm;
      object-fit: cover;
    }
    
    .username {
      font-weight: bold;
      color: $text-color;
    }
  }
  
  .time {
    color: lighten($text-color, 30%);
    font-size: 0.9rem;
  }
}

.comment-content {
  margin-bottom: $spacing-md;
  line-height: 1.6;
}

.comment-images {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-sm;
  margin-bottom: $spacing-md;
  
  .image-item {
    width: 150px;
    height: 150px;
    cursor: pointer;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}

.comment-actions {
  display: flex;
  gap: $spacing-md;
  
  button {
    display: flex;
    align-items: center;
    padding: $spacing-sm $spacing-md;
    background: none;
    border: none;
    color: lighten($text-color, 20%);
    cursor: pointer;
    
    .icon {
      margin-right: $spacing-sm;
    }
    
    &:hover {
      color: $primary-color;
    }
  }
}

.replies {
  margin-top: $spacing-md;
  padding-left: $spacing-lg;
  border-left: 2px solid lighten($text-color, 50%);
  
  .reply-item {
    margin-bottom: $spacing-md;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.reply-header {
  display: flex;
  align-items: center;
  margin-bottom: $spacing-sm;
  
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: $spacing-sm;
  }
  
  .username {
    font-weight: bold;
    margin-right: $spacing-sm;
  }
  
  .time {
    color: lighten($text-color, 30%);
    font-size: 0.9rem;
  }
}

.image-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  
  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90vh;
    
    img {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
    }
    
    .close-btn {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
    }
    
    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: none;
      padding: $spacing-md;
      cursor: pointer;
      
      &.prev {
        left: -60px;
      }
      
      &.next {
        right: -60px;
      }
      
      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
}

.comment-images {
  @media (max-width: $breakpoint-sm) {
    .image-item {
      width: calc(50% - #{$spacing-sm});
      height: 120px;
    }
  }
}

.image-preview-modal {
  .modal-content {
    @media (max-width: $breakpoint-sm) {
      .nav-btn {
        &.prev { left: $spacing-sm; }
        &.next { right: $spacing-sm; }
      }
    }
  }
}

.comment-header {
  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    align-items: flex-start;
    
    .time {
      margin-top: $spacing-sm;
    }
  }
}

.comment-actions {
  @media (max-width: $breakpoint-sm) {
    justify-content: space-around;
    
    button {
      flex: 1;
      justify-content: center;
    }
  }
}

.image-previews {
  @media (max-width: $breakpoint-sm) {
    .preview-item {
      width: 80px;
      height: 80px;
    }
  }
}
</style> 