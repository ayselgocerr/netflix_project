var video = document.getElementById('background-video');

   
        video.addEventListener('ended', function () {
            this.pause();
            document.getElementById('video-container').style.display = 'none';
            document.querySelector('.pics').classList.add('body')
        });

        // Play the video
        video.play();


 