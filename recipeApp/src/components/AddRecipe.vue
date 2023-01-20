
 <template>
 <div class="bg-gray-200 py-10">
        <form id="login" v-on:submit.prevent>
            <div class="bg-white dark:bg-gray-800">
                <div class="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div class="mx-auto">
                        <div class="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                            <div class="mt-16 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full ">
                                <label for="username" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Recipe Title</label>
                                <input type="text" id="username" name="username" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Salad and Grain" rows="5" />
                            </div>
                            <div class="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                                <label for="about" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Description</label>
                                <textarea id="about" name="about" required class="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let the world know who you are" rows="5"></textarea>
                                <p class="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 200</p>
                            </div>
                            <div class="mt-16 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full ">
                                <label for="username" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Ingridients</label>
                                <p class="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                                    Enter one ingredient per line.Include the quantity (i.e. cups, tablespoons) and any special preparation 
                                    (i.e. sifted, softened, chopped). Use optional  headers to organize the different parts of the recipe (i.e. Cake, Frosting, Dressing).</p>
                            </div>
                            <div  class="mt-16 flex flex-row justify-between xl:w-3/5 lg:w-full md:w-1/2 w-full">
                                <input  style="width: 100%;margin-right: 15px;" type="text" id="username" name="username" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm mr-0 rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="E.g 2 cup floor and water" z />
                                <!-- <i  style="border-radius:50;" class="fa-regular fa-xmark"></i> -->
                                <div class="self-stretch flex items-center  flex-shrink-0 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" class="h-10 w-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                            </div>
                            <div  class="mt-7 flex flex-row justify-between xl:w-3/5 lg:w-full md:w-1/2 w-full">
                                <input  style="width: 100%;margin-right: 15px;" type="text" id="username" name="username" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm mr-0 rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="E.g 2 cup floor and water" z />
                                <!-- <i  style="border-radius:50;" class="fa-regular fa-xmark"></i> -->
                                <div class="self-stretch flex items-center  flex-shrink-0 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" class="h-10 w-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                            </div>
                            <button type="button" class=" btn px-8 py-3 my-10 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"><span> <i class="mr-4 fa-solid fa-plus"></i></span>Add Ingriedent</button>
                            
                            <fieldset class="grid grid-cols-3 gap-6 p-6 rounded-md my-10 shadow-sm bg-gray-50">
				<div class="space-y-2  lg:col-span-1">
					<p class="font-bold">Preparation time</p>
				</div>
				<div class="grid grid-cols-4 md:grid-rows sm:grid-rows row-span-2 ">

					<div class="col-span-full sm:col-span-1">
						<input id="state" type="number" placeholder="0" class="time w-full border-2-solid rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-600 border-gray-300 text-gray-900">
					</div>
					<div class="col-span-full md-grid-rows sm:col-span-2">
						 <select class="select" name="" id="">
                            <option value="min">hour</option>
                            <option value="min">min</option>
                            <option value="min">min</option>

                         </select>
					</div>            
				</div>
			  </fieldset>

            
              <select multiple x-data="multiselect">
                <optgroup label="Categories">
               <option value="Breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
               <option value="Dinner">Dinner</option>
               <button type="button" class=" btn px-8 py-3 my-10 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"><span> <i class="mr-4 fa-solid fa-plus"></i></span>Add Ingriedent</button>
               </optgroup>
               </select>                
               <button type="button" class=" btn px-8 py-3 my-10 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"><span> <i class="mr-4 fa-solid fa-plus"></i></span>Add category</button>




               <fieldset class="w-full space-y-1 text-gray-800">
		       <label for="files" class="block text-sm font-medium">Upload images</label>
		         <div class="flex">
		       	<input type="file" name="files" id="files" class="px-8 py-12 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100">
		         </div>
	           </fieldset>


                        </div>
                    </div>
                </div>
            </div>


           
        </form>

        
    </div>
</template>
<script>

</script>

<style>
.fa-xmark{  
  background-color: white;
  border-radius: 50%;
  border: 1px solid grey;
  padding: 10px;
}
.btn:hover{
    text-align: center;
    border: 2px solid #d54215;
    border-radius: 4px;
    background: #d54215;
    border-color: #d54215;
   color: #fff;
}
.btn{
    background: #fff;
    color: rgba(0,0,0,.95);
    border: 2px solid #d54215;
    border-radius: 4px;
}

.time{
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,.65);
    min-height: 48px;
    padding: 0 16px;
    font: 400 16px/24px "Source Sans Pro",sans-serif;
    letter-spacing: 0;
    width: 72px;
    float: right;
}
.select{
    box-sizing: border-box;
    min-height: 48px;
    padding: 0 16px;
    margin-left: 16px;
}
.all{
    color: rgba(0,0,0,.95);
    font-family: "Source Sans Pro",sans-serif;
    box-sizing: border-box;
    padding: 24px 16px;
    background-color: #fff;
    margin: 0 16px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
}

</style>