//Phone mask
$(function(){
    $("#phone").mask("8(999) 999-9999");

    //Email validation
    errorMail = false;
    $("#email").focusout(function(){
        var value = $(this).val().trim();
        if (!(isEmail(value)) && value.length > 0) {
            $(this).notify("Некорректный email", "error");
            $(this).addClass("errtextbox");
            errorMail = true;
        } else {
            $(this).removeClass("errtextbox");
            errorMail = false;
        }
    });

    $("#send").click(function(){
        if (!(errorMail)) {
            $("#regForm").submit();
        } else {
            $(this).notify("Форма пустая или заполнена некорректно", "error");
        }
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
});