<template lang="pug">
#app
	generator
	github-corner
</template>

<script>
import Generator from './components/generator'
import GithubCorner from './components/github-corner'

export default {
	name: 'App',
	components: {Generator, GithubCorner}
}
</script>

<style lang="stylus">
#app
	display: flex
</style>
