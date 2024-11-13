// script.js
function switchContent(contentId) {
  // 获取所有的内容区域
  var contents = document.querySelectorAll('.content-item');
  // 遍历所有的侧边栏链接
  var links = document.querySelectorAll('.sidebar a');
  // 隐藏所有的内容区域
  contents.forEach(function(content) {
    content.style.display = 'none';
  });
  // 激活对应的侧边栏链接
  links.forEach(function(link) {
    link.style.fontWeight = 'normal';
  });
  // 显示对应的内容区域
  document.getElementById(contentId).style.display = 'block';
  // 激活对应的侧边栏链接
  document.querySelector('.' + contentId).style.fontWeight = 'bold';
}// JavaScript Document