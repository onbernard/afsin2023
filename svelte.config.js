import adapter from '@sveltejs/adapter-static';
import {
    vitePreprocess
} from '@sveltejs/kit/vite';

const dev = process.env.NODE_ENV !== 'production';
const repo = "afsin2023";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	
	vitePlugin: {
		inspector: true,   
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
		}),
		paths: {
			base: dev ? '' : `/${repo}`
		}
	}
};
export default config;
// const config = {
//     preprocess: vitePreprocess(),

//     kit: {
//         adapter: adapter(),
//         paths: {
//             base: process.env.NODE_ENV === 'production' ? '/afsin2023' : '',
//         }
//     }
// };

// export default config;
