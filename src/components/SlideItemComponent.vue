<template>
	<div class="hero__items swiper-slide set-bg" :style="slide.setBg">
		<div class="row">
			<div class="col-lg-6">
				<div class="hero__text">
					<div class="label">{{ slide.ganre }}</div>
					<h2>{{ slide.title }}</h2>
					<p>{{ slide.subtitle }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import "swiper/css";


export default {
	props: {
		slide: {
			type: Object,
			require: true,
		},
	},

};
</script>