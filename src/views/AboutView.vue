<template>
  <div class="about">
    <div class="container">
      <h1>关于鹦鹉世界</h1>
      <div class="content">
        <section class="intro">
          <h2>我们的故事</h2>
          <p>鹦鹉世界成立于2024年，致力于为鹦鹉爱好者提供专业的知识分享平台。我们希望通过这个网站，帮助更多人了解这些聪明可爱的鸟类朋友。</p>
        </section>
        
        <section class="mission">
          <h2>我们的使命</h2>
          <p>推广科学的鹦鹉饲养知识，促进鹦鹉爱好者之间的交流，为鹦鹉创造更好的生活环境。</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding: $spacing-lg 0;
  
  h1 {
    text-align: center;
    margin-bottom: $spacing-lg;
    color: $primary-color;
  }
  
  .content {
    max-width: 800px;
    margin: 0 auto;
    
    section {
      margin-bottom: $spacing-lg;
      
      h2 {
        color: $secondary-color;
        margin-bottom: $spacing-md;
      }
      
      p {
        line-height: 1.8;
      }
    }
  }
}
</style> 