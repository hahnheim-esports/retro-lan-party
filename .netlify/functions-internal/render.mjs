import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["esports-logo.webp","svelte.ico","svelte.svg"]),
	mimeTypes: {".webp":"image/webp",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-3cacbdc1.js","imports":["_app/immutable/start-3cacbdc1.js","_app/immutable/chunks/index-840dbd00.js","_app/immutable/chunks/singletons-df75c4d9.js","_app/immutable/chunks/index-a183a804.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "datenschutz",
				pattern: /^\/datenschutz\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "impressum",
				pattern: /^\/impressum\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "konzept",
				pattern: /^\/konzept\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "news",
				pattern: /^\/news\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "team",
				pattern: /^\/team\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "termine",
				pattern: /^\/termine\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "api/test",
				pattern: /^\/api\/test\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/test/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
