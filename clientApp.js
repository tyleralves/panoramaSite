/**
 * Created by Tyler on 3/20/2016.
 */
$(document).ready(function(){
    alert("ready");
    $('.panorama-section').clone().appendTo('.panorama').clone().prependTo('.panorama');

    $('.container').scrollLeft(1800);

/*
    (function adjustImage(){
        var readyForPrepend;
        var scrollSet;
        $('.container').scroll(function(){
            if($(this).scrollLeft()<200){
                clearTimeout(readyForPrepend);
                readyForPrepend = setTimeout(function() {
                    $('.panorama-section').last().prependTo('.panorama');
                    $('.container').scrollLeft(3800);
                    scrollSet = true;
                },1000);
            }
        });
    })();
*/
    (function dragScroll(){
        var clicked = false, clickX;

        $('.container').on({
            'mousemove': function(e){

                infiniteScroll() && clicked && updateScrollPosition(e);
            },
            'mousedown': function(e){
                e.preventDefault();
                clickX = $('.container').scrollLeft() + e.pageX;
                clicked = true;
            },
            'mouseup': function(e){
                clicked = false;
            }
        });

        var updateScrollPosition = function(e){
            $('.container').scrollLeft(clickX - e.pageX);
        };

        var infiniteScroll = function(){
            if($('.container').scrollLeft()<200){
                $('.panorama-section').last().prependTo('.panorama');
                $('.container').scrollLeft(3800);
                clickX = clickX + 3600;
            }else if($('.container').scrollLeft()>7000){
                $('.panorama-section').first().appendTo('.panorama');
                $('.container').scrollLeft(3400);
                clickX = clickX - 3600;
            }
            return true;
        };

    })();



    /*var panoramaClone = $('.panorama').clone();
    panoramaClone.prependTo('.container');
    panoramaClone.clone().appendTo('.container');
    $(document).on('scroll', function(){
        var scrollPos = $('.panorama').scrollLeft();

    });*/
});