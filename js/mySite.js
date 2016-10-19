// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar-default").offset().top > 150) {
        $(".navbar-default").addClass("affix");
    } else {
        $(".navbar-default").removeClass("affix");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-default'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function(){
    
    $('#username').on('blur', function(){
        var username = $('#username').val();
        if(username.trim() == ""){
            $("#username-group").addClass('has-error');
            $('#username-error').addClass('help-block');
            $("#username-error").text('The username field is required.');
        }
    })
    .on('focusin',function(){
        $("#username-group").removeClass('has-error');
        $("#username-error").text('');
    }); 

    $('#email').on('blur', function(){
        var email = $('#email').val();
        if(email.trim() == ""){
            $("#email-group").addClass('has-error');
            $('#email-error').addClass('help-block');
            $("#email-error").text('The password field is required.');
        }else if(!validateEmail(email.trim())){
            $("#email-group").addClass('has-error');
            $('#email-error').addClass('help-block');
            $("#email-error").text('The email is not valid.');
        }
    })                  
    .on('focusin',function(){
        $('#email-group').removeClass('has-error');
        $("#email-error").text('');
    });


    $('#message').on('blur', function(){
        var message = $('#message').val();
        if(message.trim() == ""){
            $("#message-group").addClass('has-error');
            $('#message-error').addClass('help-block');
            $("#message-error").text('The message field is required.');
        }
    })                  
    .on('focusin',function(){
        $('#message-group').removeClass('has-error');
        $("#message-error").text('');
    });

    $("#messageForm").submit(function(e){
        e.preventDefault();

        var username = $('#username').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if(username.trim() == ""){
            $("#username-group").addClass('has-error');
            $('#username-error').addClass('help-block');
            $("#username-error").text('The username field is required.');
        }else if(email.trim() == ""){
            $("#email-group").addClass('has-error');
            $('#email-error').addClass('help-block');
            $("#email-error").text('The password field is required.');
        }else if(!validateEmail(email.trim())){
            $("#email-group").addClass('has-error');
            $('#email-error').addClass('help-block');
            $("#email-error").text('The email is not valid.');
        }else if(message.trim() == ""){
            $("#message-group").addClass('has-error');
            $('#message-error').addClass('help-block');
            $("#message-error").text('The message field is required.');
        }else{

            var formData = new FormData();
            formData.append('name', username);
            formData.append('email', email);
            formData.append('message', message);

            $.ajax({
                method: 'post',
                url: 'mail/contact.php',
                cache: false,
                contentType: false,
                processData: false,
                dataType: 'json',
                data: formData,
                beforeSend: function(){
                    $('#signup-btn').html('Please Wait <i class="fa fa-spinner fa-spin"></i>');
                    },
                success:function(data){
                    $('#signup-btn').html('Submit');

                    if(!data.success){
                        alert(data.message);    
                    }else{
                        alert(data.message);
                        $('#messageForm')[0].reset();
                    }
                },
                error:function(){}
            });
        }

    });

});

function validateEmail(email) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(email)) 
        return true;
    
    else 
        return false;
    
}
