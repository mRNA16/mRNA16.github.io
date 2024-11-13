 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '这里是mRNA的Blog';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/back.JPG");
         document.title = '欢迎回来！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });