$(function(){
    var
    $home = $('#home');
    $topLeft = $('#topLeft');
    $histoir = $('.histoir');
    $bgTL = $('.bgTL');
    $topRight = $('#topRight');
    $paysage = $('.paysage');
    $bgTR = $('.bgTR');
    $bottomLeft = $('#bottomLeft');
    $today = $('.today');
    $bgBL = $('.bgBL');
    $bottomRight = $('#bottomRight');
    $material = $('.material');
    $bgBR = $('bgBR');

    $topLeft.on('click', function(){
        $topLeft.animate({height: '90%', width: '90%'},1500);
        $bottomLeft.animate({height: '8%', width: '8%'},1500);
        $topRight.animate({height: '8%', width: '8%'},1500);
        $bottomRight.animate({height: '8%', width: '8%'},1500);
        $histoir.css('background-image', 'initial');
        $bgTL.css('display', 'initial');

    });

});
