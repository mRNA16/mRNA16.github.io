// 创建新的 div 元素
var newDiv = document.createElement("div");
newDiv.innerHTML = `
      <span id="time"></span>
      <script src="/js/time.js"></script>
      `;

// 获取目标插入位置，div1 和 div2 之间
var div1 = document.getElementsByClassName("statistics");
var div2 = document.getElementsByClassName("beian");

// 将新 div 插入到 div1 和 div2 之间
div1.parentNode.insertBefore(newDiv, div2);
