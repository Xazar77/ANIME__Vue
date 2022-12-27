<template>
  <div>
    <slider-component />
    <section class="product spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <trending-product-component
              v-for="ganre in ganres"
              :key="ganre.id"
              :ganre="ganre"
            />

          </div>
          <top-views-component />
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import TopViewsComponent from "@/components/TopViewsComponent.vue";
import SliderComponent from "@/components/SliderComponent.vue";
import TrendingProductComponent from "@/components/TrendingProductComponent.vue";

export default {

  components: {
    TopViewsComponent,
    SliderComponent,
    TrendingProductComponent,
  },
  computed: {
    ganres() {
      return this.$store.getters["getGanreData"];
    },
  },

  mounted() {
    fetch("https://anime-b6e87-default-rtdb.firebaseio.com/anime.json")
      .then((res) => res.json())
      .then((data) => {
        const ganres = new Set();

        data.forEach((item) => {
          ganres.add(item.ganre);
        });

		
        this.$store.dispatch("setAnimeData", data);
        this.$store.dispatch("setGanreData", ganres);
  	})
  },
  
};
</script>