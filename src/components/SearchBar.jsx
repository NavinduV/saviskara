
import React from 'react'

export default function SearchBar() {
  return (
<div>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-xs"><i class="fa-solid  fa-magnifying-glass"></i></span>
    </div>
    <input type="text" name="price" id="price" class="block w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search Video..."/>
    <div class="absolute inset-y-0 right-0 flex items-center">
    </div>
  </div>
</div>

  )
}
