// if (document.readyState == 'loading') {
//   document.addEventListener('DOMContentLoaded', ready)
// } else {
//   ready();
// }

// function ready() {
//   const top_nav = document.getElementById('link_list');

//   // Top Nav EL
//   for (let i = 0; i < top_nav.length; i++) {
//     const element = top_nav[i];
//     element.addEventListener('click', (e) => {
//       // handle click
//       console.debug(e.target)
//     })
//   }

var body = document.getElementsByClassName('max-w-xl text-gray-900 bg-gray-400 bodyContainer');
const top_nav = document.getElementById('link_list');
const mobile_nav = document.getElementById('mobile_nav');
const brand_name = document.getElementById('brand_name');

const cmd = {

  addAllEL: function () {

    // Top Nav EL
    for (let i = 0; i < top_nav.length; i++) {
      const element = top_nav[i];
      element.addEventListener('click', (e) => {
        if(element === brand_name) console.log('EYADL')
        console.debug(e.target)
      })
    }

    // Mobile Nav EL
      top_nav.addEventListener('click', (e) => {
        console.debug(e.target)
      })
      mobile_nav.parentElement.addEventListener('hover', (e) => {
        console.debug(e.target)
      })
      // console.log(top_nav.children);
      console.log(mobile_nav);
  },
  listNodes: function (inputList) {
    let nodeList = [];
    console.debug(inputList)
    for (let i = 0; i < inputList.length; i++) {
      const element = inputList[i];
      nodeList.push(element)
    }
      return nodeList;
  }
}

function handleClick() {
  console.debug()
}

function loadEventListeners() {
  console.debug('Loading Event Listeners');
  cmd.addAllEL(); 
}

function displayMobileMenu() {
  
}

module.exports = cmd, loadEventListeners(), handleClick();