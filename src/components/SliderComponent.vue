<template>
	<section class="hero">
		<div class="container">
			<div class="hero-box">
				<div class="hero__slider swiper">
					<div class="swiper-wrapper">
						<slide-item-component
							v-for="slide in slides"
							:key="slide.id"
							:slide="slide"
						/>

					</div>
				</div>

				<div class="hero__slider-pagination swiper-pagination" ref="pagination"></div>
				<div class="hero__slider-arrow arrow__next swiper-button-next" ref="nextBtn">
					<span class="arrow_carrot-left"></span>
				</div>
				<div class="hero__slider-arrow arrow__prev swiper-button-prev" ref="prevBtn">
					<span class="arrow_carrot-left"></span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SlideItemComponent from "@/components/SlideItemComponent.vue";



export default {
	computed: {
       slides() {
            return this.$store.getters["getSlides"];
       }
	},
	components: { SlideItemComponent },
	mounted() {
		const swiper = new Swiper(".swiper", {
          
			pagination: {
				el: this.$refs.pagination,
                clickable: true,
			},
			navigation: {
				nextEl: this.$refs.nextBtn,
				prevEl: this.$refs.prevBtn,
			},
			spaceBetween: 30,
			centeredSlides: true,
			effect: "fade",
			speed: 1000,

		});
       
	},
};
</script>