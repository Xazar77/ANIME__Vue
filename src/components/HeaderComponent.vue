<template>

	<div>
		<modal-search-component v-if="isModal">
			<template v-slot:close-btn>
				<div
					class="search-close-switch"
					@click="closeModal"
				><i class="icon_close"></i></div>
			</template>
		</modal-search-component>
		<header
			class="header" id="header"
		
		>
			<div class="container">
				<div class="row">
					<div class="col-lg-2">
						<div class="header__logo">
							<router-link to="/"><img
									src="@/assets/img/logo.png"
									alt=""
								></router-link>
						</div>
					</div>
					<div class="col-lg-8">
						<div class="header__nav">
							<nav class="header__menu mobile-menu">
								<ul>
									<li	class="mobile-menu_list active"	ref="Homepage" @click="classActiveHomepage">
										<router-link to="/">Homepage</router-link>
									</li>

									<li	class="mobile-menu_list" ref="Categories"	@click="classActiveCategories">
										<router-link to="/categories?ganres=Приключения">Categories <span class="arrow_carrot-down"></span></router-link>
										<ul class="dropdown">
											<li
												v-for="ganre in ganres"
												:key="ganre.id"
												:ganre="ganre"
											>
												<router-link :to="`/categories?ganres=${ganre}`">{{ ganre }}</router-link>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="col-lg-2">
						<div class="header__right">
							<a
								href="#"
								@click="showModal"
								class="search-switch"
							><span class="icon_search"></span></a>

							<router-link to="/login"><span class="icon_profile"></span></router-link>

						</div>
					</div>
				</div>
				<div id="mobile-menu-wrap"></div>
			</div>
		</header>
	</div>

</template>

<script>
import ModalSearchComponent from "@/components/ModalSearchComponent.vue";

export default {
	data() {
		return {
			isModal: false,
		};
	},
	components: {
		ModalSearchComponent,
	},
	computed: {
		ganres() {
			return this.$store.getters["getGanreData"];
		},
	},
	methods: {
		showModal() {
			this.isModal = true;
		},
		closeModal() {
			this.isModal = false;
		},
		classActiveHomepage() {
			this.$refs.Homepage.classList.add("active");
			this.$refs.Categories.classList.remove("active");
		},
		classActiveCategories() {
			this.$refs.Homepage.classList.remove("active");
			this.$refs.Categories.classList.add("active");
		},
	},
	mounted() {
		// console.log(this);
	},
};
</script>