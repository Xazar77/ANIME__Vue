<template>
    
    <div class="col-lg-4 col-md-6 col-sm-8">
        <div class="product__sidebar">
            <div class="product__sidebar__view">
                <div class="section-title">
                    <h5>Top Views</h5>
                </div>
                <div class="filter__gallery">
                    <product-sidebar-component
                    v-for="card in anime"
                    :key="card.id"
                    :card="card"
                    />
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductSidebarComponent from '@/components/ProductSidebarComponent.vue'

export default {
    components: {ProductSidebarComponent},
    computed: {
    anime() {
      return this.$store.getters["getProductSidebarCard"];
    },
  },
}


</script>