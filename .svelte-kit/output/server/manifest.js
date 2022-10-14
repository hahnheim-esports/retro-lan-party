export const manifest = {
	appDir: "_app",
	assets: new Set(["esports-logo.webp","favicon.png","termine.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-a62184d7.js","imports":["_app/immutable/start-a62184d7.js","_app/immutable/chunks/index-378cba13.js","_app/immutable/chunks/singletons-6f7a9dff.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
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
				id: "impressum",
				pattern: /^\/impressum\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "konzept",
				pattern: /^\/konzept\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "news",
				pattern: /^\/news\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "team",
				pattern: /^\/team\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "termine",
				pattern: /^\/termine\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "api/content",
				pattern: /^\/api\/content\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/content/_server.ts.js')
			},
			{
				id: "api/news",
				pattern: /^\/api\/news\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/news/_server.ts.js')
			},
			{
				id: "api/team",
				pattern: /^\/api\/team\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/team/_server.ts.js')
			},
			{
				id: "api/termine",
				pattern: /^\/api\/termine\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/termine/_server.ts.js')
			},
			{
				id: "api/content/[position]",
				pattern: /^\/api\/content\/([^/]+?)\/?$/,
				names: ["position"],
				types: [null],
				page: null,
				endpoint: () => import('./entries/endpoints/api/content/_position_/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
