<template >
  <div>

    <template v-for="card in anime">
      <section
        :key="card.id"
        :card="card"
        v-if="card.id === +$route.query.itemId"
        class="anime-details spad"
      >
        <div class="container">
          <div class="anime__details__content">
            <div class="row">
              <div class="col-lg-3">
                <div
                  class="anime__details__pic set-bg"
                  :style="`background-image: url(${card.image})`"
                >
                  <div class="view"><i class="fa fa-eye"></i>{{ card.views}}</div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="anime__details__text">
                  <div class="anime__details__title">
                    <h3>{{ card.title}}</h3>
                    <span>{{ card['original-title']}}</span>
                  </div>

                  <p>{{ card.description }}</p>
                  <div class="anime__details__widget">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <ul>
                          <li><span>Date aired:</span> {{ card.date }}</li>
                          <li><span>Rating:</span> {{ card.rating }}</li>
                          <li><span>Genre:</span> {{card.ganre}}</li>
                        </ul>
                      </div>
                      <div class="col-lg-6 col-md-6">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>

</template>

<script>

export default {

  computed: {
    anime() {
      return this.$store.getters["getAnimeCard"];
    },
  },


};
</script>