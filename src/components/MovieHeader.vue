<template>
	<header class="header">
		<nav
			class="header__navigate navigate"
		>
			<router-link
				class="navigate__logo logo"
				to="/"
				title="На главную"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="48px"
					height="48px"
				>
					<path
						d="M 4.5 3 C 2.5788117 3 1 4.5788117 1 6.5 L 1 18 C 1 19.64497 2.3550302 21 4 21 L 8 21 L 8 13.673828 L 12 16.798828 L 16 13.673828 L 16 21 L 20 21 C 21.64497 21 23 19.64497 23 18 L 23 6.5 C 23 4.5788117 21.421188 3 19.5 3 C 18.750123 3 17.982547 3.2422598 17.34375 3.7421875 L 12 7.9121094 L 6.65625 3.7421875 L 6.6542969 3.7421875 C 6.0158061 3.2430811 5.2492693 3 4.5 3 z M 4.5 5 C 4.8301235 5 5.1426247 5.098287 5.4238281 5.3183594 L 6 5.7675781 L 6 9.5742188 L 3 7.2324219 L 3 6.5 C 3 5.6591883 3.6591883 5 4.5 5 z M 19.5 5 C 20.340812 5 21 5.6591883 21 6.5 L 21 7.2324219 L 18 9.5742188 L 18 5.7675781 L 18.576172 5.3183594 C 18.857375 5.0982871 19.169877 5 19.5 5 z M 8 7.328125 L 12 10.449219 L 16 7.328125 L 16 11.136719 L 12 14.261719 L 8 11.136719 L 8 7.328125 z M 3 9.7695312 L 6 12.111328 L 6 19 L 4 19 C 3.4349698 19 3 18.56503 3 18 L 3 9.7695312 z M 21 9.7695312 L 21 18 C 21 18.56503 20.56503 19 20 19 L 18 19 L 18 12.111328 L 21 9.7695312 z"
					/>
				</svg>
			</router-link>
			<ul class="navigate__list">
				<li class="navigate__item">
					<router-link
						class="navigate__link navigate__link_movies"
						to="/movies"
					>
						фильмы
					</router-link>
				</li>
				<li class="navigate__item">
					<router-link
						class="navigate__link navigate__link_series"
						to="/about"
					>
						о сайте
					</router-link>
				</li>
			</ul>
		</nav>
		<form
			class="header__form formSearch"
			action="#"
			method="POST"
		>
			<input
				class="formSearch__input"
				name="search"
				type="search"
				placeholder="поиск фильмов и сериалов"
			/>
		</form>
	</header>
</template>

<script setup></script>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #408ad2;
		position: relative;
	}

	.header::before {
		content: "";
		width: 100vw;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: calc((-100vw + 100%) / 2);
		z-index: -1;
		background-color: #408ad2;
	}

	.navigate {
		display: flex;
		column-gap: 40px;
		align-items: center;
	}

	.navigate__logo {
		width: 48px;
		height: 75px;
		position: relative;
	}

	.navigate__logo svg {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.navigate__logo:hover::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		border-bottom: 3px solid #ffffff80;
	}

	.navigate__logo:focus::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		border-bottom: 3px solid #fff;
	}

	.navigate__list {
		display: block;
	}

	.navigate__item {
		display: inline-block;
	}

	.navigate__link {
		display: inline-block;
		position: relative;
		font-size: 2rem;
		font-weight: 400;
		text-transform: uppercase;
		line-height: 75px;
		color: #0000008a;
	}

	.navigate__link:focus {
		color: #fff;
	}

	.navigate__link:hover::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		border-bottom: 3px solid #ffffff80;
	}

	.navigate__link:focus::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		border-bottom: 3px solid #fff;
	}

	.navigate__item:not(:first-child) {
		margin-left: 20px;
	}

	.formSearch {
		width: 285px;
		overflow: hidden;
		border-radius: 8px;
	}

	.formSearch__input {
		width: 100%;
		height: 100%;
		display: block;
		padding: 10px 15px;

		text-align: left;
		font-size: 1.8rem;
	}
</style>
