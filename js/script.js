$(document).ready(function(){
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // scroll spy
        $('section').each(function(){
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let height = $(this).height();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    function updateSceneContent(btn) {
        let title = btn.data('title');
        let description = btn.data('description');
        let emotionText = btn.data('emotion-text');
        $('#scene-title').html('<span id="scene-title">' + title + '</span> <span id="emotion-text">' + emotionText + '</span>');
        $('#scene-description').text(description);
        let src = btn.data('src');
        $('#scene-gif').attr('src', src);
    }

    updateSceneContent($('.scene .list .btn:first-child'));

    $('.scene .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        updateSceneContent($(this));
    });
});

  var listItems = document.querySelectorAll('.list .btn');
  listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var videoSrc = this.getAttribute('data-src');
      loadVideo(videoSrc);
    });
  });