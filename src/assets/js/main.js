const { handleClick } = require('./handleClick');

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

function ready() {
  // const top_nav = document.getElementById('link_list');
  const Topnav = document.getElementById('Topnav');
  console.debug(Topnav)
  for (let i = 0; i < Topnav.length; i++) {
    const element = Topnav[i];
    element.addEventListener('click', e => {
      // handle topNav link click
      console.debug(e.target)
    })
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
}

module.exports = handleClick();