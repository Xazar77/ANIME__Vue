<template>

  <div class="trending__product">
    <div class="row">
      <div class="col-lg-8 col-md-8 col-sm-8">
        <div class="section-title">
          <h4 class="mb-5">{{ganre}}</h4>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="btn__all">
          <router-link
            class="primary-btn"
            :to="`/categories?ganres=${ganre}`"
          >View All <span class="arrow_right"></span>
          </router-link>
          <!-- <a href="/categories.html" class="primary-btn">View All <span class="arrow_right"></span></a> -->
        </div>
      </div>
    </div>
    <div class="row">
      <template v-for="card in anime">
        <product-card-component
          :key="card.id"
          :card="card"
          v-if="card.ganre === ganre"
        />
      </template>
    </div>
  </div>
</template>

</div>
</div>
</template>

<script>
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
  components: { ProductCardComponent },
  computed: {
    anime() {
      return this.$store.getters["getAnimeCard"];
    },
  },
  props: {
    ganre: {
      require: true,
      type: String,
    },
  },
};
</script>