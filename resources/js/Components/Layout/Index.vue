<template>
	<div>
	    <div id="wrapper">
	        <div id="content-wrapper" class="d-flex flex-column">
	            <div id="content">
	               <Header />
	                <div class="container-fluid" style="min-height: calc(100% - 55px - 72px);">
	                	<section>
	                		<slot />
	                	</section>
	                </div>
	            	<Footer />
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import Header from './Header';
	import Footer from './Footer';
	import ContentWrapper from './ContentWrapper';
    Vue.component('ContentWrapper', ContentWrapper)
	export default{
		name: 'Master',
		components:{ Footer, Header }
	}
</script>
<style lang="scss" scoped>
	.fs-80{ font-size: 80%; }
</style>