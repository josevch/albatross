<script>
	import About from "./components/About.svelte";
	export let name;
	export let LastName;
	let logo =
		"https://scontent.fpty1-1.fna.fbcdn.net/v/t1.6435-9/118992965_109953677513825_657255271266255266_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=k_twuayKpBQAX8EdCNP&_nc_ht=scontent.fpty1-1.fna&oh=00_AT-paI0rpBiMIpB1l5AbrjX9U3bGPK5P33VvPeDhspFSPw&oe=62749996";
</script>

<main>
	<h1>{name} {LastName}</h1>
	<p>Panama City, Panama</p>
	<About />
	<img src={logo} alt="Albatross Golf Crew" />
</main>

<style>
	:global(body) {
		background: linear-gradient(90deg, #12416e, #0d3050);
		color: #fff;
	}
	:global(:root) {
		--white: #fff;
		--color-red: #e4002b;
		--color-cyan: #3fa9f5;
		--color-blue: #0032a0;
		--content-gray: #737373;
		--header-bg: #e7f4fe;
		--white: #ffffff;
		--light-gray: #efefee;
		--gray: #999;
		--dark-gray: #666;
		--select-border: #c0c0c0;
		--gray-2: #808080;
		--color-dark-blue: #001a54;
		--golden: #c27028;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--white);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
	}
	p {
		color: var(--golden);
	}

	main img {
		width: 30%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
