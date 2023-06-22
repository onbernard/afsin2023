<script lang="ts">
	import { onMount } from 'svelte'

	import Reveal from 'reveal.js';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Notes from 'reveal.js/plugin/notes/notes';
	import Math from 'reveal.js/plugin/math/math';
	import RevealMath from 'reveal.js/plugin/math/math';
	import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';

	import 'reveal.js/dist/reveal.css'
	import 'reveal.js/dist/theme/moon.css'
	import 'reveal.js/plugin/highlight/monokai.css'


	import Partie1Intro from './slides/partie1Intro.svelte';
	import Partie2TracesEtReferences from './slides/partie2TracesEtReferences.svelte';
	import Partie3Attentes from './slides/partie3Attentes.svelte';
	import Partie4Exemples from './slides/partie4Exemples.svelte';
	import Partie5Math from './slides/partie5Math.svelte';
	import Partie6Lfw from './slides/partie6LFW.svelte';
	import Partie8Umap from './slides/partie8Umap.svelte';
	import Partie9Similarity from './slides/partie9Similarity.svelte';
	import Partie10Histogram from './slides/partie10Histogram.svelte';
	import Partie11Hack from './slides/partie11Hack.svelte';


	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true
			// controls: false,
			// progress: false
		});

		deck.initialize({center: true, plugins: [RevealMath.MathJax3, RevealMarkdown, Notes] });
		deck.slide(0);
	});
</script>

<div class="reveal">
	<div class="slides">
		<Partie1Intro />
		<Partie2TracesEtReferences />
		<Partie3Attentes />
		<Partie4Exemples />
		<Partie5Math />
		<Partie6Lfw />
		<Partie8Umap />
		<Partie9Similarity />
		<Partie10Histogram />
		<Partie11Hack />
	</div>
	<div class="absolute left-0 bottom-0 w-52"><img class="lerti-logo" src="Lerti_logo_vect.svg"></div>
</div>

<style lang="postcss">
    lerti-logo {
        display: block;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: -1;
        max-width: 100%;
    }
</style>