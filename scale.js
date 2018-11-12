function Drag(son, father) {
  var position = {
    id: son,
    width: '',
    height: '',
    x: '',
    y: ''
  }
  var son = document.getElementById(son)
  var box = document.getElementById(father)
  son.onmousedown = function(e) {
    var X = son.offsetLeft + box.offsetLeft
    var x2 = e.clientX - X
    var Y = son.offsetTop + box.offsetTop
    var y2 = e.clientY - Y
    son.style.cursor = 'move'

    document.onmousemove = function(e) {
      son.style.left = e.clientX - box.offsetLeft - x2 + 'px'
      son.style.top = e.clientY - box.offsetTop - y2 + 'px'

      if (son.offsetLeft > box.clientWidth - son.clientWidth)
        son.style.left = box.clientWidth - son.clientWidth + 'px'
      if (son.offsetLeft < 0) son.style.left = 0 + 'px'

      if (son.offsetTop > box.clientHeight - son.clientHeight)
        son.style.top = box.clientHeight - son.clientHeight + 'px'
      if (son.offsetTop < 0) son.style.top = 0 + 'px'
    }
  }

  document.onmouseup = function() {
    document.onmousemove = null
    son.style.cursor = 'unset'
  }
  // 鼠标抬起获取位置
  son.onmouseup = function() {
    position.width = son.offsetWidth
    position.height = son.offsetHeight
    position.x = son.offsetLeft
    position.y = son.offsetTop
    //实际数据
    // position.newWidth = son.offsetWidth / (360 / window.imgWidth) + 'px'
    // position.newHeight = (son.offsetHeight / son.offsetWidth) * parseFloat(position.newWidth) + 'px'
    // position.newX = son.offsetLeft / (360 / window.imgWidth) + 'px'
    // position.newY = son.offsetTop / (360 / window.imgWidth) + 'px'
    console.log(position)
  }
}

function Scale(son, father, pot, min, freedom) {
  var position = {
    id: son,
    width: '',
    height: '',
    x: '',
    y: ''
  }
  var pot = document.getElementById(pot)
  var son = document.getElementById(son)
  var father = document.getElementById(father)
  pot.onmousedown = function(e) {
    e.preventDefault()
    event.stopPropagation()
    father.style.cursor = 'se-resize'

    var X = e.clientX
    var Y = e.clientY
    var width = son.clientWidth
    var height = son.clientHeight
    var rat = width / height
    min = min || 100
    document.onmousemove = function(e) {
      e.preventDefault()
      e.stopPropagation()
      son.style.width = width + e.clientX - X + 'px'
      console.log(freedom)
      if (freedom) son.style.height = height + e.clientY - Y + 'px'
      else son.style.height = height + (e.clientX - X) / rat + 'px'

      if (son.clientWidth < min) {
        son.style.width = min + 'px'
        son.style.height = min / rat + 'px'
      }
      if (son.clientWidth > father.clientWidth - son.offsetLeft) {
        son.style.width = father.clientWidth - son.offsetLeft + 'px'
        if (freedom) son.style.height = son.clientHeight + 'px'
        else son.style.height = (father.clientWidth - son.offsetLeft) / rat + 'px' // 等比例
      }
      if (son.clientHeight > father.clientHeight - son.offsetTop) {
        son.style.height = father.clientHeight - son.offsetTop + 'px'
        if (freedom) son.style.width = son.clientWidth + 'px'
        else son.style.width = (father.clientHeight - son.offsetTop) * rat + 'px' // 等比例
      }
    }
  }
  father.onmouseup = function() {
    pot.onmousemove = null
    father.style.cursor = 'unset'
  }
  // 鼠标抬起获取位置
  son.onmouseup = function() {
    position.width = son.offsetWidth
    position.height = son.offsetHeight
    position.x = son.offsetLeft
    position.y = son.offsetTop
    //实际数据
    // position.newWidth = son.offsetWidth / (360 / window.imgWidth) + 'px'
    // position.newHeight = (son.offsetHeight / son.offsetWidth) * parseFloat(position.newWidth) + 'px'
    // position.newX = son.offsetLeft / (360 / window.imgWidth) + 'px'
    // position.newY = son.offsetTop / (360 / window.imgWidth) + 'px'
    console.log(position);	
  }
}
