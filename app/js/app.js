var $amount_total = 0;
var $backers_total = 0;
var $day_left = 150;
var $bamboo_stand = 1;
var $black_edition = 100;
var $special_edition = 50;


//event when click on hamburger to open drop menu
$('.header__hamburger').click(function(){
    if($(this).hasClass('close')){
        $(this).removeClass('close');
        $(this).addClass('open');
        $('.header__menu').removeClass('fade_out').addClass('fade_in');
        $('.header__overlay').removeClass('fade_out').addClass('fade_in');
    }
    else {
        $(this).removeClass('open');
        $(this).addClass('close');
        $('.header__menu').removeClass('fade_in').addClass('fade_out');
        $('.header__overlay').removeClass('fade_in').addClass('fade_out');
    }
});

//event when click ok back this project button to open modals
$('.button__project').click(function(){
    $('.modal').removeClass('fade_out').addClass('fade_in');
    $('.header__overlay').removeClass('fade_out').addClass('flop_in');
    $('.main').removeClass('fade_in').addClass('fade_out');
});

    //and close modals
    $('.closeModal').click(function(){
        $('.main').removeClass('fade_out').addClass('fade_in');
        $('.header__overlay').removeClass('flop_in').addClass('fade_out');
        $('.modal').removeClass('fade_in').addClass('fade_out');
    });

    //when click on modal 
    $('.m_options__item').click(function(){
        $('.m_options__item').removeClass('selected');
        $(this).addClass('selected');
        $('.m_item__pledge').removeClass('pop_in');
        $(this).find('.m_item__pledge').removeClass('pop_out').addClass('pop_in');
    });

    //event when click on pledge input
    $('.button__amount').click(function(){
        var $base_value = $(this).val();
        $(this).change(function(){
            if(isNaN($(this).val()) || $(this).val() == ''){
                $(this).val($base_value);
            }
            else {
                //Code come here
            }
        });
    });

    //event when click on continue button
    $('.button__continue').click(function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        $('.m_options__item').removeClass('selected');
        $amount_total += parseInt($(this).parent().find('.button__amount').val());
        $('.statistic__amountSummer .statistic__number').html('$' + $amount_total);
        $backers_total += 1;
        $('.statistic__backers .statistic__number').html($backers_total);
        if($(this).parent().parent().parent().hasClass('m_item2')){
            $bamboo_stand -= 1;
            $('.m_item2 .m_counter').html($bamboo_stand);
            $('.item1 .counter').html($bamboo_stand);

            //make reward option blur and unclickable when run out of stock
            if($bamboo_stand <= 0){
                $('.item1').addClass('outStock');
                $('.item1 .item__button').html('Out Of Stock');
            }
        }
        else if($(this).parent().parent().parent().hasClass('m_item3')){
            $black_edition -= 1;
            $('.m_item3 .m_counter').html($black_edition);
            $('.item2 .counter').html($black_edition);
        }
        else if($(this).parent().parent().parent().hasClass('m_item4')){
            $special_edition -= 1;
            $('.m_item4 .m_counter').html($special_edition);
            $('.item3 .counter').html($special_edition);

        }
        else {
            //Code come here for no reward pledge
        }

        //feedback show up
        $('.feedback').removeClass('fade_out').addClass('fade_in');
        $('.header__overlay').css('z-index','5');
        $('.header__overlay').removeClass('fade_out').addClass('flop_in');
    });

    //event when click on Got it! button during feedback showing up
    $('.feedback__button').click(function(){
        $('.feedback').removeClass('fade_in').addClass('fade_out');
        $('.header__overlay').css('z-index','0');
        $('.header__overlay').removeClass('flop_in').addClass('fade_out');
    });

//event when click on select reward button 
$('.options__item .item__button').click(function(){
    if($(this).parent().parent().hasClass('item1')){
        $amount_total += 25;
        $bamboo_stand -= 1;
        $('.m_item2 .m_counter').html($bamboo_stand);
        $('.item1 .counter').html($bamboo_stand);

        //make reward option blur and unclickable when run out of stock
        if($bamboo_stand <= 0){
            $('.item1').addClass('outStock');
            $('.item1 .item__button').html('Out Of Stock');
            $('.m_item2').addClass('outStock');
        }
    }
    else if($(this).parent().parent().hasClass('item2')){
        $amount_total += 75;
        $black_edition -= 1;
        $('.m_item3 .m_counter').html($black_edition);
        $('.item2 .counter').html($black_edition);
        
        //make reward option blur and unclickable when run out of stock
        if($black_edition <= 0){
            $('.item2').addClass('outStock');
            $('.item1 .item__button').html('Out Of Stock');
            $('.m_item3').addClass('outStock');
        }
    }
    else if($(this).parent().parent().hasClass('item3')){
        $amount_total += 200;
        $special_edition -= 1;
        $('.m_item4 .m_counter').html($special_edition);
        $('.item3 .counter').html($special_edition);

        //make reward option blur and unclickable when run out of stock
        if($black_edition <= 0){
            $('.item3').addClass('outStock');
            $('.item1 .item__button').html('Out Of Stock');
            $('.m_item4').addClass('outStock');
        }
    }
    $('.statistic__amountSummer .statistic__number').html('$' + $amount_total);
    $backers_total += 1;
    $('.statistic__backers .statistic__number').html($backers_total);

    $('.feedback').removeClass('fade_out').addClass('fade_in');
    $('.header__overlay').css('z-index','5');
    $('.header__overlay').removeClass('fade_out').addClass('flop_in');
});

$(document).ready(function(){
    //loading start point 
    $('.statistic__amountSummer .statistic__number').html('$' + $amount_total);
    $('.statistic__backers .statistic__number').html($backers_total);
    $('.m_item2 .m_counter').html($bamboo_stand);
    $('.item1 .counter').html($bamboo_stand);
    $('.m_item3 .m_counter').html($black_edition);
    $('.item2 .counter').html($black_edition);
    $('.m_item4 .m_counter').html($special_edition);
    $('.item3 .counter').html($special_edition);


    var start_day = new Date('May 1 2021 24:00:00').getTime();
    var dest_day = new Date('May 1, 2022 24:00:00').getTime();
    var current_distance_day = Math.floor((dest_day - start_day)/(1000 * 60 * 60 * 24));
    //interval to countdown 
    var interval = setInterval(function(){
        var now_day = new Date().getTime();
        var now_distance_millisecond = Math.floor(dest_day - now_day);
        var now_distance_day =  Math.floor(now_distance_millisecond / (1000 * 60 *60 * 24));
        $('.statistic__time .statistic__number').html(now_distance_day);
        var process = (now_distance_day/current_distance_day) * 100;

        $('.processNow').css('width',process + '%');
        if(now_distance_millisecond <= 0){
            clearInterval(interval);
        }
    },1000);
});