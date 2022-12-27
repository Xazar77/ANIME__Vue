<template>
  <div>

    <breadcrumb-component />
    <section class="product-page spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="product__page__content">
              <div class="product__page__title">
                <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-6">
                    <div class="section-title">
                      <h4>{{$route.query.ganres}}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <template v-for="card in anime">
                  <product-card-component
                    :key="card.id"
                    :card="card"
                    v-if="card.ganre === $route.query.ganres  || card.tags.includes($route.query.ganres)"
                  />
                </template>
              </div>
            </div>
          </div>
          <top-views-component />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import TopViewsComponent from "@/components/TopViewsComponent.vue";
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {


  components: {
    
    TopViewsComponent,
    BreadcrumbComponent,
    ProductCardComponent,
  },
  computed: {
    anime() {
      return this.$store.getters["getAnimeCard"];
    },
  },

};
</script>