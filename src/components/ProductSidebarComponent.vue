<template>
    <div class="product__sidebar__view__item set-bg mix"
    :style="`background-image: url(${card.image})`"
    data-setbg="img/trending/trend-1.jpg">
        <div class="ep">{{card.rating}} / 10</div>
        <div class="view"><i class="fa fa-eye"></i>{{card.views}}</div>
        <h5><a href="/anime-details.html">{{card.title}}</a></h5>
    </div>
</template>

<script>

export default {
    props: {
        
        card: {
            type: Object,
            required: true
        }
    },

}

</script>