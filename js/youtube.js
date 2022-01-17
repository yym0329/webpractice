 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
     playerVars: {
       autoplay: true, // 자동 재생
       loop: true, // 반복 재생 유무
       playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
     },
     
     events: {
       onReady: function(event) {
         event.target.mute() /* event.target: YT.Player 함수에서 onReady라는 이벤트가 발생하여 같은 이름의 메소드가 실행되면,
         위의 익명 메소드를 실행된다. 이때 onReady 메소드는 onReady event method를 콜하면서 유튜브 player의 여러 정보를 object data로 넘겨준다.
         객체의 target 레코드는 영상 플레이어 자체를 의미함. */
       }
     }

   });
 };