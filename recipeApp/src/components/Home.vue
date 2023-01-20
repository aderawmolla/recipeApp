<template>   
<nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
  
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
  
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
  
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
  
          <!-- Profile dropdown -->
          <div @click="toggleAdd()" @mouseover="toggleRemove()" class="relative ml-3">
            <div>
              <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="false" aria-haspopup="true">
                <img  class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </button>
            </div>
            <div  class="toggled absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" id="user-menu-button" aria-labelledby="user-menu-button" tabindex="-1">
              <!-- Active: "bg-gray-100", Not Active: "" -->
               <router-link to="/AddRecipe" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Add Recipe</router-link>
               <router-link to="/Detail" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">DetailPage</router-link>
              <router-link to="/Login" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign in</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
  
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
  
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
  
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
      </div>
    </div>
</nav>
<img data-src="https://www.allrecipes.com/thmb/YZumdbfuGV6RaOwaw0WoMiemIxc=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-year-BrieGoldman_ALR1122_InSeason_BUBBLES_ONLY_3125-3x1-39252f588a5048c7acffaf17ab03e9a1.jpg" width="2000" height="666" alt="chicken rice bowls" class="card__img universal-image__image lazyloaded" data-expand="300" src="https://www.allrecipes.com/thmb/YZumdbfuGV6RaOwaw0WoMiemIxc=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-year-BrieGoldman_ALR1122_InSeason_BUBBLES_ONLY_3125-3x1-39252f588a5048c7acffaf17ab03e9a1.jpg">
  
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Brand new
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)" width="52" height="24"></rect>
          </svg>
          <span class="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
    <div class="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
      <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-full h-48" alt="" />
          <div class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">The doctor said</h6>
              <p class="text-sm text-gray-900">
                Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
              </p>
              <font-awesome-icon icon="fa-regular fa-star" />
            </div>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-full h-48" alt="" />
          <div class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
              <p class="text-sm text-gray-900">
                Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-full h-48" alt="" />
          <div class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">They urge you</h6>
              <p class="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear.
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-full h-48" alt="" />
          <div class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">Baseball ipsum dolor</h6>
              <p class="text-sm text-gray-900">
                Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy.
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" class="object-cover w-full h-48" alt="" />
          <div class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">The doctor said</h6>
              <p class="text-sm text-gray-900">
                Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-full h-48" alt="" />
          <div class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
              <p class="text-sm text-gray-900">
                Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <use class="icon" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-star"></use>
            </div>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-full h-48" alt="" />
          <div class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">They urge you</h6>
              <p class="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear.
              </p>
            
            </div>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div style="position:relative" class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-full h-48" alt="" />
          <div  class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">Baseball ipsum dolor</h6>
              <p class="text-sm text-gray-900">
                Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy.
              </p>
              <div class="icons">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i  style="color:#d54215" class="fa-solid fa-star-half-stroke"></i>
              <span style="margin:0 10px;"><span style="margin-right:6px;">4.8</span>(220)</span>ratings</div>
             </div>
             <div class="heart">
                <i class="fa-regular fa-heart"></i>
             </div>
          </div> 
        </div>
      </a>
    </div>
    <div class="text-center">
      <a
        href="/"
        class="load inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-red transition duration-200 rounded shadow-md md:w-auto bg-red hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        Load more
      </a>
    </div>
  </div>
 
</template>
<script setup>
 function toggleAdd(){
  let toggleId=document.getElementById('user-menu-button')
   toggleId.classList.add("toggled")

 }
 function toggleRemove(){
  let toggleId=document.getElementById('user-menu-button')
   toggleId.classList.remove("toggled")

 }
</script>
<style scoped>
.toggled{ 
display:none;
transition-delay: 3s;
}
.icon{
    cursor: pointer;
    font-weight: 400;
    fill: #d54215;
    box-sizing: border-box;
}
.fa-regular{
    color:#d54215;
}
.load{
    background-color: #d54215;
}
.icons{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
}
.heart{
    width: 3rem;
    height: 3rem;
    background: #d54215;
    border-radius: 100%;
    position:absolute;
    top:15px;
    right:20px;
}
.fa-heart{
  color:white;
  padding:15px;
  font-size: 20px;
}
</style>
