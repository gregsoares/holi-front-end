function handleClick() {
  const body = document.getElementById('section_one');
  body.innerHTML = `
  <section id="indexSection" class="flex p-0 m-0 bg-gray-300">
    <div class=" overflow-visible space-y-3 bg-indigo-200 py-12 my-2 mx-0">
    Index Section Clicked
    </div>
    <div class="flex w-full px-1 mx-2 border-2 border-dotted items-right ">  
    <div class="text-center border-indigo-300 mx-0 space-y-3 bg-indigo-200 py-12 my-2">
    Index Section Clicked
    </div></div> 
  </section>
  `;
}
exports.handleClick = handleClick;
