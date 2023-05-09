<template>
	<div>
		<header class="pt-4">
			<div class="container">
				<div class="d-flex align-items-center justify-content-between  px-2">
					<div class="logo-wrapper pointer" @click="backToHomePage">
						<img class="logo" src="img/logo.webp">
						<span class="title">DEBOST</span>
					</div>
					<div>
						menu
					</div>
					<div>
						<span class="title">Login</span>
						<span class="title"> / </span>
						<span class="title">Sign Up</span>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>
<script>
	export default{
		components:{

		},
		data(){
			return{

			}
		},
		methods:{
			backToHomePage(){
				this.$inertia.visit('/')
			}
		}
	}
</script>