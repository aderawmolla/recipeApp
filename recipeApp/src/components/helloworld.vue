<template>

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

</template>
<style> 

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