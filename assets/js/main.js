if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

function ready() {
  const top_nav = document.getElementById('link_list');
  // Top Nav EL
  for (let i = 0; i < top_nav.length; i++) {
    const element = top_nav[i];
    element.addEventListener('click', e => {
      // handle topNav link click
      console.debug(e.target)
    })
  }

  // Mobile Nav EL
  const mobile_nav = document.getElementById('mobile_nav');
  top_nav.addEventListener('click', (e) => {
    console.debug(e.target)
  })
  mobile_nav.parentElement.addEventListener('hover', (e) => {
    console.debug(e.target)
  })
  // console.log(top_nav.)
}

// Top Nav EL
// const top_nav = document.getElementById('link_list');
// for (let i = 0; i < top_nav.length; i++) {
//   const element = top_nav[i];
//   element.addEventListener('click', (e) => {
//     if (element === brand_name) console.log('EYADL')
//     console.debug(e.target)
//   })
// }
// const brand_name = document.getElementById('brand_name');
//   for (let i = 0; i < brand_name.length; i++) {
//     const element = brand_name[i];
//     element.addEventListener('click', e => {
//       // handle topNav link click
//       console.debug(e.target)
//     })
//   }


function displayResults() {
}




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
  `
}

function loadEventListeners() {
  console.debug('Loading Event Listeners');
  addAllEL();
}

function displayMobileMenu() {

}

module.exports = cmd, loadEventListeners(), handleClick();