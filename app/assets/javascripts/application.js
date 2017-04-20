// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree ../../../vendor/assets/javascripts/.
//= require social-share-button
//= require bootstrap-sprockets
//= require ckeditor/init
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてsec
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 1000
        }, 500);
        return false;
    });
});

$(function () {
    setTimeout('rect()'); //アニメーションを実行
});

function rect() {
    $('#rect').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
    setTimeout('rect()', 1600); //アニメーションを繰り返す間隔
}

$(document).ready(function() {
    var top_sec_sentences = $('.top-sec-sentences')
    var second = $('.second');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 850) {
            top_sec_sentences.fadeIn();
        } else {
            top_sec_sentences.fadeOut();
        }
        if ($(this).scrollTop() > 1600) {
            second.fadeIn();
        } else {
            second.fadeOut();
        }
    });
});
