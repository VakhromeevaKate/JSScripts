//Phone mask
$(function(){
    $("#phone").mask("8(999) 999-9999");

    //Email validation
    var errors = false;

    $("#email").focusout(function(){
        var value = $(this).val().trim();
        if (!(isEmail(value)) && value.length > 0) {
            $(this).notify("Некорректный email", "error");
            $(this).addClass("errtextbox");
            errors = true;
        } else {
            $(this).removeClass("errtextbox");
            errors = false;
        }
    });

    $('#square').on('input', function(){
        var re = /^\d+\.?(\d{1,2})?$/ig,
            cVal = $.trim($(this).val());
        $(this).val(cVal.replace(/,/g, '.'));
        if(!(re.test(cVal.replace(",",".")))|| cVal.length > 6){
            $(this).val(cVal.substr(0,cVal.length-1));
        }
    });


    $(".required").focusout(function(){
        var value = $(this).val().trim();
        if(value.length < 1){
            $(this).notify("Поле должно быть заполнено.", "error");
        }
    });

    $('#price').on('input', function(){
        var re = /^\d+\.?(\d{1,2})?$/ig,
            cVal = $.trim($(this).val());
        $(this).val(cVal.replace(/,/g, '.'));
        if(!(re.test(cVal.replace(",",".")))|| cVal.length > 10){
            $(this).val(cVal.substr(0,cVal.length-1));
        }
    });

    $("#send").click(function(){
        if (!(isError())) {
            $("#regForm").submit();
        } else {
            $(this).notify("Не все обязательные поля верно заполнены.", "error");
        }
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function isError() {
        if (('#square').val().empty() || ('#price').val().empty()  ||
            ('#phone').val().empty()  ||  errors == true
        ){
            return true;
        } else return false;
    }
});