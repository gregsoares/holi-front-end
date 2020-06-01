var body = document.getElementsByClassName('max-w-xl text-gray-900 bg-gray-400 bodyContainer');
var top_nav = document.getElementsByClassName('link_list');

const cmd = {

  addAllEL: function () {
    for (let i = 0; i < top_nav.length; i++) {
      const element = top_nav[i];
      element.addEventListener('click', (e) => {
        console.debug(e.target)
      })
    }
  },
  listNodes: function (list) {
    let nodeList = [];
    console.debug(list)
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      nodeList.push(element)
    }
      return nodeList;
  }
}

function loadEventListeners() {
  console.debug(`Loading Event Listeners`)
  cmd.addAllEL(); 
}

module.exports = cmd, loadEventListeners();