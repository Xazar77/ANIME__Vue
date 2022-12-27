<template>
	<div class="wrapper">
		<preloader-component v-if="isActive" />
		<header-component/>
		<router-view/>
		<footer-component>
			<template v-slot:smoothScrollBtn>
				<a
					href="/"
					@click.prevent="smoothScroll"
					id="scrollToTopButton"
				><span class="arrow_carrot-up"></span></a>
			</template>
		</footer-component>

	</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PreloaderComponent from "@/components/PreloaderComponent";
import { scrollIntoView } from "seamless-scroll-polyfill";

export default {
	data() {
		return {
			isActive: true,
		};
	},

	components: {
		PreloaderComponent,
		HeaderComponent,
		FooterComponent,
	},
	methods: {
		smoothScroll() {
			scrollIntoView(document.getElementById('header'), {
				behavior: "smooth",
				block: "start",
			});
			
		},
		CategoriesPage() {

		},
		HomePage() {
			document.getElementById('header').classList.add("active");
			document.getElementById('header').classList.remove("active");
		}
	},

	mounted() {
		setTimeout(() => {
			this.isActive = false;
		}, 500);

		
	},
};
</script>
