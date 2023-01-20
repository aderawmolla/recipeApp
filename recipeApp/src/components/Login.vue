<template>
	<div class="login w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-100">
		<h1 class="text-2xl font-bold text-center">Login</h1>
		<form  action="" class="space-y-6 ng-untouched ng-pristine ng-valid">
			<div class="space-y-1 text-sm">
				<label for="username" class="block dark:text-gray-400">Username</label>
				<input type="text" name="username" id="username" placeholder="Username" class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-rose-400">
			</div>
			<div class="space-y-1 text-sm">
				<label for="password" class="block dark:text-gray-400">Password</label>
				<input type="password" name="password" id="password" placeholder="Password" class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-rose-400">
				<div class="flex justify-end text-xs dark:text-gray-400">
					<a rel="noopener noreferrer" href="#">Forgot Password?</a>
				</div>
			</div>
			<button class="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-rose-400">Login</button>
		</form>
		<p class="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
			<router-link to="/Signup" rel="noopener noreferrer" href="#" class="underline dark:text-gray-100">Register</router-link>
		</p>
	</div>
</template>

<style>
.login{
    background-color:brown;
}

</style>