<template>
  <div class="search-model">
    <div class="h-100 d-flex align-items-center justify-content-center">
      <slot name="close-btn"></slot>
      <form class="search-model-form">
        <input
          type="text"
          id="search-input"
          placeholder="Search here....."
        >
      </form>
    </div>
  </div>
</template>

<script>

  export default {

    
  }
</script>

