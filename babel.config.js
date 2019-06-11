module.exports = {
	presets: [
		'@vue/app'
	],
	plugins: [
		["@babel/plugin-proposal-optional-chaining", { "loose": false }],
		["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }]
	]
}
