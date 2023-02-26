<script>
	import albatros_logo from '$lib/images/logos/albatros-logo-og.jpg';
	import albatros_team from '$lib/images/albatros-intro-img.jpg';
</script>

<div class="w-full bg-white py-8">
	<div class="container mx-auto flex flex-col md:flex-row ">
		<div class="mx-3 flex-1">
			<img class="w-auto h-52 pb-2 mx-auto md:mx-0" src={albatros_logo} alt="Albatros" />
			<h2 class="pb-2 text-2xl font-bold">Pasión por un club</h2>
			<p class="pb-8">
				El Club de Golf Albatros en Panamá es un club de golf reconocido por la Federación de Golf
				de Panamá. El club fue fundado en 1998 y cuenta con un campo de golf de 18 hoyos. Está
				ubicado en el área de Cerro Azul, en la provincia de Panamá.
			</p>
			<button class=" bg-orange-700 px-4 py-2   rounded-full"
				><a class="text-white" href="/about">¿Quienes Somos?</a></button
			>
		</div>

		<div class="mx-3 flex-1 pt-8 md:pt-0 self-center">
			<img class=" rounded-2xl" src={albatros_team} alt="Albatros team" />
		</div>
	</div>
</div>
