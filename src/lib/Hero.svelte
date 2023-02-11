<script>
	let hero768 = './assets/hero/hero-768.jpg';
</script>

<div class="w-full">
	<picture class="d-appear-1">
		<source media="(min-width: 1024px)" srcset={hero1920} />
		<source media="(min-width: 768px)" srcset={hero1024} />
		<img class="w-full" alt="" src={hero768} />
	</picture>
</div>
