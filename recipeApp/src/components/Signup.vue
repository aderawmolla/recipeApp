<template>
	<div class="login w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-100">
		<h1 class="text-2xl font-bold text-center">SignUp</h1>
		<form  action="" class="space-y-6 ng-untouched ng-pristine ng-valid">
			<div class="space-y-1 text-sm">
				<label for="username" class="block dark:text-gray-400">Username</label>
				<input type="text" name="username" id="username" placeholder="Username" class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-rose-400">
			</div>
            <div class="space-y-1 text-sm">
				<label for="username" class="block dark:text-gray-400">email</label>
				<input type="text" name="username" id="username" placeholder="Username" class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-rose-400">
			</div>
			<div class="space-y-1 text-sm">
				<label for="password" class="block dark:text-gray-400">Password</label>
				<input type="password" name="password" id="password" placeholder="Password" class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-rose-400">
			</div>
			<button class="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-rose-400">Signup</button>
		</form>
		<p class="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
			<router-link to="/Login" rel="noopener noreferrer" href="#" class="underline dark:text-gray-100">Login</router-link>
		</p>
	</div>
</template>

<style>
.login{
    background-color:lightgoldenrodyellow;
}

</style>