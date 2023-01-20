<template>

	<div class="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
		<div class="flex space-x-4">
			
            <img   alt="" src="https://source.unsplash.com/100x100/?portrait" class="object-cover w-12 h-12 rounded-full shadow bg-gray-500">
            
         
            <div class="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#" class="text-sm font-semibold">Leroy Jenkins</a>
				<span class="text-xs text-gray-600">4 hours ago</span>
			</div>
            
		</div>
		<div style="position:relative">
			<img src="https://source.unsplash.com/random/100x100/?5" alt="" class="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500">
			<h2 class="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
			<p class="text-sm text-gray-600">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
            <div class="heart">
                <i style="color:white;padding:15px;" class="fa-regular fa-heart"></i>
             </div>
		</div>
        <input type="text" placeholder="Add a comment..." class="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-gray-800">
		<div class="flex flex-wrap justify-between">
			<div class="space-x-2">
             <div class="icons">
			  <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i  style="color:#d54215" class="fa-solid fa-star-half-stroke"></i>
              <span style="margin:0 10px;"><span style="margin-right:6px;">4.8</span>(220)</span>ratings</div>
			</div>
			<div class="flex space-x-2 text-sm text-gray-600">
				<button type="button" class="flex items-center p-1 space-x-1.5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of comments" class="w-4 h-4 fill-current text-orange-600">
						<path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
						<path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
					</svg>
					<span>30</span>
				</button>
				<button type="button" class="flex items-center p-1 space-x-1.5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" class="w-4 h-4 fill-current text-orange-600">
						<path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
						<path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
					</svg>
					<span>283</span>
				</button>
			</div>
		</div>  

  
		
<h2  class="ingredient" id="mntl-structured-ingredients__heading_1-0" >
Ingredients</h2>		

<ol class="list-decimal">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>

  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <!-- ... -->
</ol>
   
<h2  class="ingredient" id="mntl-structured-ingredients__heading_1-0" >
Directions</h2>

<ol id="mntl-sc-block_2-0-1" class="comp mntl-sc-block-group--LI mntl-sc-block mntl-sc-block-startgroup">
 <li
   class="font-bold mt-4" >step1</li>
<p id="mntl-sc-block_2-0-2" class="comp mntl-sc-block mntl-sc-block-html">
Bring a small pot of water to a boil. Add chicken; boil until an instant-read thermometer inserted into the center reads at least 165 degrees F (74 degrees C), about 7 minutes. Drain.
</p>
<li
   class="font-bold mt-4 " >step2</li>
<p id="mntl-sc-block_2-0-2" class="comp mntl-sc-block mntl-sc-block-html">
Bring a small pot of water to a boil. Add chicken; boil until an instant-read thermometer inserted into the center reads at least 165 degrees F (74 degrees C), about 7 minutes. Drain.
</p>
<li
   class="font-bold mt-4 " >step3</li>
<p id="mntl-sc-block_2-0-2" class="comp mntl-sc-block mntl-sc-block-html">
Bring a small pot of water to a boil. Add chicken; boil until an instant-read thermometer inserted into the center reads at least 165 degrees F (74 degrees C), about 7 minutes. Drain.
</p>
<div id="mntl-sc-block_2-0-3" class="comp mntl-sc-block mntl-sc-block-adslot mntl-block"></div>
</ol>


<article>
	<h2  class="ingredient" id="mntl-structured-ingredients__heading_1-0" >
All Comments</h2>
    <div class="flex items-center mb-4 space-x-4">
        <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
        <div class="space-y-1 font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1">
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
</article>

</div>  
</template>
<style>

 i{
    cursor: pointer;
    font-weight: 400;
    fill: #d54215;
    box-sizing: border-box;
    color:#d54215;
}
.heart{
    width: 3rem;
    height: 3rem;
    background: #d54215;
    border-radius: 100%;
    position:absolute;
    top:20px;
    right:20px;
}
.fa-regular{
    color:#d54215;;

}

img{
    position:relative;
}
.ingredient{
    color: rgba(0,0,0,.95);
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    padding: 0;
    font-family: CopperPot,Helvetica,sans-serif;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.75rem;
    text-underline-offset: .6875rem;
    margin-top:50px !important;
    margin-bottom: 2rem;
}

article{
    font-family: SourceSansPro,Helvetica,sans-serif;
    font-size: 1.125rem;
    line-height: 1.75rem;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    color: rgba(0,0,0,.95);
    box-sizing: border-box;
    border-top: 1px solid rgba(0,0,0,.15);
    border-bottom: none;
    padding: 1.5rem 0 0;
    margin: 0;
}
</style>
<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export default {
  setup() {
 const result = useQuery(gql`
 query GetUser {
  User {
    id
	email
	password
  }
} 
`)
result.onResult((result)=>{
 const newResult=result.data;
 console.log(newResult.User[0])

})
result.onError((error)=>{
    console.log(error.message)
})
  return{
    result
  } 
},
  } 
</script>
