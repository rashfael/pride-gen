<template lang="pug">
.preset
	svg(viewBox="0 0 100 100", v-html="SVGContent", @click="$emit('select')")
</template>
<script>
import generateSVG from 'lib/generator'
export default {
	props: {
		preset: Object
	},
	data () {
		return {
		}
	},
	computed: {
		SVGContent () {
			return generateSVG({
				colors: this.preset.colors,
				stripeCurve: this.preset.stripeCurve,
				transform: this.preset.transform,
				mask: this.preset.mask,
				addLogo: this.preset.addLogo,
				mastodonBackground: this.preset.mastodonBackground
			})
		}
	},
	created () {},
	mounted () {
		this.$nextTick(() => {
		})
	},
	methods: {}
}
</script>
<style lang="stylus">
@import '~settings'
.preset
	// width: 256px
	// height: @width
	padding: 16px
	cursor: pointer
	&:hover
		opacity: .5

</style>
