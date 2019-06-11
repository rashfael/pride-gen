<template lang="pug">
#generator
	.controls
		.settings
			.colors
				.color(v-for="color, index in colors")
					span Color {{ index + 1 }}
					input(type="color", :value="color", @input="changeColor(index, $event)")
					bunt-icon-button(@click="deleteColor(index)") close
				bunt-icon-button(@click="addColor") add
			bunt-input(name="stripe-curve", v-model="stripeCurve", label="Stripe Curve")
			bunt-input(name="transform", v-model="transform", label="Transform")
			bunt-input(name="mask", v-model="mask", label="Mask")
			bunt-input(name="offset-top", type="number", v-model.number="offsetTop", label="Offset Top")
			bunt-switch(name="add-logo", v-model="addLogo", label="add datenobservatorium logo")
		a#btn-export.bunt-button(:href="downloadFile", download="pride.svg") export
	svg(viewBox="0 0 100 100", v-html="SVGContent")
</template>
<script>
import generateSVG from 'lib/generator'
export default {
	components: {},
	data () {
		return {
			colors: [
				'#e40303',
				'#ff8c00',
				'#ffed00',
				'#008026',
				'#004dff',
				'#750787'
			],
			stripeCurve: 'c 30 4, 40 -15, 100 0',
			transform: 'rotate(-20, 50, 50)',
			mask: '<circle cx="50" cy="50" r="50" fill="white"/>',
			offsetTop: 7,
			addLogo: false
		}
	},
	computed: {
		SVGContent () {
			return generateSVG({
				colors: this.colors.slice(),
				stripeCurve: this.stripeCurve,
				transform: this.transform,
				mask: this.mask,
				offsetTop: this.offsetTop,
				addLogo: this.addLogo
			})
		},
		downloadFile () {
			let svg = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">' + this.SVGContent + '</svg>'
			return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
		}
	},
	created () {},
	mounted () {
		this.$nextTick(() => {
		})
	},
	methods: {
		changeColor (index, event) {
			this.$set(this.colors, index, event.target.value)
		},
		deleteColor (index) {
			this.colors.splice(index, 1)
		},
		addColor () {
			this.colors.push('#ffffff')
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
				align-items: center
				margin: 4px 0
				.bunt-icon-button
					margin-left: 8px
		.bunt-icon-button
			icon-button-style()
		.bunt-input
			input-style(size: compact)
		.bunt-switch
			margin: 16px 0
		#btn-export
			button-style(text-color: $clr-primary-text-dark, size: huge)
			background-image: unquote(stripe(rainbow, -45deg, 16px))

	> svg
		flex: auto
		margin: 0 64px
		align-self: center
		max-height: 80vh
</style>
