import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["esports-logo.webp","favicon.png","termine.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-91b364d6.js","imports":["_app/immutable/start-91b364d6.js","_app/immutable/chunks/index-12be3c58.js","_app/immutable/chunks/singletons-794d5445.js","_app/immutable/chunks/index-c8f96e03.js"],"stylesheets":[]},
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
