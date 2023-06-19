<template lang="pug">
#generator
	.controls
		.settings(v-scrollbar.y="")
			.colors
				.color(v-for="color, index in colors")
					bunt-input.input-color(type="color", :name="`color-${index + 1}`", :label="`Color ${index + 1}`", :value="color.color", @input="changeColor(index, $event)")
					bunt-input.input-ratio(type="number", :name="`ratio-${index + 1}`", label="Ratio", :value="color.ratio", @input="changeRatio(index, $event)")
					bunt-icon-button(@click="deleteColor(index)") close
				bunt-button#btn-add-color(@click="addColor") add color
			bunt-input(name="stripe-curve", v-model="stripeCurve", label="Stripe Curve", hint="<a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths' target='_blank'>svg path string</a>. Use relative commands!", :hint-is-html="true", :disabled="mastodonBackground")
			bunt-input(name="transform", v-model="transform", label="Transform", hint="<a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform' target='_blank'>svg transform</a>. Transforms the complete flag.", :hint-is-html="true", :disabled="mastodonBackground")
			bunt-input(name="mask", v-model="mask", label="Mask", hint="Content of a <a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask' target='_blank'>svg mask definition</a>.", :hint-is-html="true", :disabled="mastodonBackground")
			bunt-switch(name="use-clip", v-model="useClip", label="Use clip instead of mask")
			small.switch-hint mask is prettier for display, but isn't supported in pdf for print
			p: small All SVG options operate on a 100x100 viewport, with 0,0 in the top left corner
			bunt-switch(name="add-logo", v-model="addLogo", label="add datenobservatorium logo")
			bunt-switch(name="add-mastodon", v-model="mastodonBackground", label="use chaos social logo")
		a#btn-export.bunt-button(:href="downloadFile", download="pride.svg") export
	svg(viewBox="0 0 100 100", v-html="SVGContent")
	.presets(v-scrollbar.y="")
		preset(v-for="preset in presets", :preset="preset", @select="selectPreset(preset)")
	canvas(ref="faviconCanvas", height="32px", width="32px")
</template>
<script>
import generateSVG from 'lib/generator'
import presets from 'presets'
import Preset from './preset'

const URL_WRITE_DEBOUNCE = 1000

export default {
	components: {Preset},
	data () {
		return {
			colors: [
				{color: '#e40303', ratio: 1.5},
				{color: '#ff8c00', ratio: 1},
				{color: '#ffed00', ratio: 1},
				{color: '#008026', ratio: 1},
				{color: '#004dff', ratio: 1},
				{color: '#750787', ratio: 1}
			],
			stripeCurve: 'c 30 4, 40 -15, 100 0',
			transform: 'rotate(-20, 50, 50)',
			mask: '<circle cx="50" cy="50" r="50" fill="white"/>',
			offsetTop: 7,
			useClip: false,
			addLogo: false,
			mastodonBackground: false,
			presets
		}
	},
	computed: {
		SVGContent () {
			return generateSVG({
				colors: this.colors.slice(),
				stripeCurve: this.stripeCurve,
				transform: this.transform,
				mask: this.mask,
				addLogo: this.addLogo,
				useClip: this.useClip,
				mastodonBackground: this.mastodonBackground
			})
		},
		SVGFile () {
			return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">' + this.SVGContent + '</svg>'
		},
		downloadFile () {
			return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(this.SVGFile)
		}
	},
	watch: {
		// watch the whole output because I am lazy
		SVGContent () {
			if (this.urlWriteDebounceTimeout) return
			this.updateURL()
			this.drawFavicon()
			this.urlWriteDebounceTimeout = setTimeout(() => {
				this.urlWriteDebounceTimeout = null
				this.updateURL()
				this.drawFavicon()
			}, URL_WRITE_DEBOUNCE)
		}
	},
	created () {},
	mounted () {
		const hash = window.location.hash.substr(1)
		if (hash) {
			try {
				Object.assign(this, JSON.parse(atob(hash)))
			} catch (e) {
				console.error('Could not parse hash', e)
			}
		}
		this.drawFavicon()
	},
	methods: {
		changeColor (index, color) {
			this.$set(this.colors[index], 'color', color)
		},
		changeRatio (index, ratio) {
			this.$set(this.colors[index], 'ratio', Number(ratio))
		},
		deleteColor (index) {
			this.colors.splice(index, 1)
		},
		addColor () {
			this.colors.push({color: '#ffffff', ratio: 1})
		},
		selectPreset (preset) {
			this.colors = preset.colors.slice()
			this.stripeCurve = preset.stripeCurve
			this.transform = preset.transform
			this.mask = preset.mask
			this.addLogo = preset.addLogo
			this.mastodonBackground = preset.mastodonBackground
		},
		updateURL () {
			const hash = btoa(JSON.stringify({
				colors: this.colors,
				stripeCurve: this.stripeCurve,
				transform: this.transform,
				mask: this.mask,
				addLogo: this.addLogo,
				mastodonBackground: this.mastodonBackground,
				useClip: this.useClip
			}))
			window.location.hash = hash
		},
		drawFavicon () {
			const canvas = this.$refs.faviconCanvas
			const svg = new Blob([this.SVGFile], {type: 'image/svg+xml;charset=utf-8'})
			const url = URL.createObjectURL(svg)
			const img = new Image()
			img.onload = function () {
				canvas.getContext('2d').drawImage(this, 0, 0)
				URL.revokeObjectURL(url)
				const link = document.querySelector("link[rel*='icon']")
				link.href = canvas.toDataURL()
			}
			img.src = url
		}
	}
}
</script>
<style lang="stylus">
@import '~settings'

#generator
	flex: auto
	display: flex
	.controls
		card()
		width: 400px
		padding: 16px
		display: flex
		flex-direction: column
		justify-content: space-between
		.settings
			display: flex
			flex-direction: column
		.colors
			display: flex
			flex-direction: column
			.color
				display: flex
				align-items: flex-end
				.bunt-input
					flex: auto
					input-style(size: compact)
				.input-color
					.label-input-container
						height: 37px
					input
						padding: 2px 16px
				.input-ratio
					max-width: 64px
					margin-left: 4px
					input
						text-align: right
				.bunt-icon-button
					margin-left: 8px
			#btn-add-color
				margin: 16px 0 32px 0
				button-style(text-color: $clr-primary-text-dark)
				background-image: unquote(stripe(rainbow, -45deg, 16px))
		.bunt-icon-button
			icon-button-style()
		.bunt-input
			flex: none
		.bunt-switch
			margin: 16px 0

		.switch-hint
			margin: -16px 0 0 46px
		#btn-export
			button-style(text-color: $clr-primary-text-dark, size: huge)
			background-image: unquote(stripe(rainbow, -45deg, 16px))
	small
		font-size: 12px

	> svg
		flex: auto
		margin: 0 64px
		align-self: center
		max-height: 80vh

	.presets
		card()
		display: flex
		flex-direction: column
		width: 6vw

	> canvas
		display: none
		position: fixed
		right: 0
		top: 0
</style>
