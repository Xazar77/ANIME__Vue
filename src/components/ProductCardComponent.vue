<template>
  <div class="col-lg-4 col-md-6 col-sm-6">
    <div class="product__item">
      <div class="product__item__pic set-bg" :style="`background-image: url(${card.image})`" >
        <div class="ep">{{card.rating}} / 10</div>
        <div class="view"><i class="fa fa-eye"></i>{{card.views}}</div>
      </div>
      <div class="product__item__text">
        <ul>
          <li 
          v-for="(tag, index) in card.tags"
          :key="index"
          >{{tag}}</li>
          
        </ul>
        <h5>
          <router-link :to="`/anime-details?itemId=${card.id}`">{{card.title}}</router-link>
        </h5>
        <!-- <h5><a href="/anime-details.html">The Seven Deadly Sins: Wrath of the Gods</a></h5> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        
        classItem: {
            type: String,
            required: false,
        },
        
        card: {
            type: Object,
            required: true
        }
    },

}

</script>