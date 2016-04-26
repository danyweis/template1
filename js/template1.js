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
    $bgBR = $('.bgBR');

    $home.on('click',function(){
        $topLeft.animate({height: '48%', width: '48%'},1500);
        $bottomLeft.animate({height: '48%', width: '48%'},1500);
        $topRight.animate({height: '48%', width: '48%'},1500);
        $bottomRight.animate({height: '48%', width: '48%'},1500);
        $histoir.fadeIn(1500);
        $bgTL.fadeOut(1500);
        $paysage.fadeIn(1500);
        $bgTR.fadeOut(1500);
        $today.fadeIn(1500);
        $bgBL.fadeOut(1500);
        $material.fadeIn(1500);
        $bgBR.fadeOut(1500);
    });

    $topLeft.on('click', function(){
        $topLeft.animate({height: '90%', width: '90%'},1500);
        $bottomLeft.animate({height: '8%', width: '8%'},1500);
        $topRight.animate({height: '8%', width: '8%'},1500);
        $bottomRight.animate({height: '8%', width: '8%'},1500);
        $histoir.fadeOut(1500);
        $bgTL.fadeIn(1500);
        $paysage.fadeIn(1500);
        $bgTR.fadeOut(1500);
        $today.fadeIn(1500);
        $bgBL.fadeOut(1500);
        $material.fadeIn(1500);
        $bgBR.fadeOut(1500);

    });
    $topRight.on('click', function(){
        $topRight.animate({height: '90%', width: '90%'},1500);
        $bottomLeft.animate({height: '8%', width: '8%'},1500);
        $topLeft.animate({height: '8%', width: '8%'},1500);
        $bottomRight.animate({height: '8%', width: '8%'},1500);
        $paysage.fadeOut(1500);
        $bgTR.fadeIn(1500);
        $histoir.fadeIn(1500);
        $bgTL.fadeOut(1500);
        $today.fadeIn(1500);
        $bgBL.fadeOut(1500);
        $material.fadeIn(1500);
        $bgBR.fadeOut(1500);

    });
    $bottomLeft.on('click', function(){
        $bottomLeft.animate({height: '90%', width: '90%'},1500);
        $topLeft.animate({height: '8%', width: '8%'},1500);
        $topRight.animate({height: '8%', width: '8%'},1500);
        $bottomRight.animate({height: '8%', width: '8%'},1500);
        $today.fadeOut(1500);
        $bgBL.fadeIn(1500);
        $paysage.fadeIn(1500);
        $bgTR.fadeOut(1500);
        $histoir.fadeIn(1500);
        $bgTL.fadeOut(1500);
        $material.fadeIn(1500);
        $bgBR.fadeOut(1500);

    });
    $bottomRight.on('click', function(){
        $bottomRight.animate({height: '90%', width: '90%'},1500);
        $bottomLeft.animate({height: '8%', width: '8%'},1500);
        $topLeft.animate({height: '8%', width: '8%'},1500);
        $topRight.animate({height: '8%', width: '8%'},1500);
        $material.fadeOut(1500);
        $bgBR.fadeIn(1500);
        $histoir.fadeIn(1500);
        $bgTL.fadeOut(1500);
        $today.fadeIn(1500);
        $bgBL.fadeOut(1500);
        $paysage.fadeIn(1500);
        $bgTR.fadeOut(1500);

    });

});
