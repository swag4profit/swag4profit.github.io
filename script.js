function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Load YouTube IFrame API
if (!window.YT) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  
  let customPlayer;
  let currentVideoIndex = 0;
  const videoIds = ['ljPNo1dMsqI', 'xhVKf5-X4zA', 'ESybMXb5Q5E', 'moGwPcCDcXk', 'HoVyncyIYc0',
                    'd8OJQb3IRFU', '3wvxC-8ONn4', '602ft-ARMeI', '2DHGUn-laAE'
  ]; // Add your video IDs
  
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('custom-youtube-player', {
        videoId: videoIds[currentVideoIndex], 
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: videoIds[currentVideoIndex % videoIds.length],
        },
    });
  };

//   Event Handlers for Next and Previous Video Buttons
  document.getElementById('prev-video-btn').addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videoIds.length) % videoIds.length;
    player.loadVideoById(videoIds[currentVideoIndex]);

    player.setOption('playerVars', {
        loop: 1,
        playlist: videoIds[currentVideoIndex % videoIds.length]
      });
  });
  
  document.getElementById('next-video-btn').addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    player.loadVideoById(videoIds[currentVideoIndex]);

    player.setOption('playerVars', {
        loop: 1,
        playlist: videoIds[currentVideoIndex % videoIds.length]
      });
  });


  