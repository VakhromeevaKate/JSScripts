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
            $(this).notify("Максимальная длина комментария - 1000 символов.", "error");
            $(this).addClass("errtextbox");
        }
    });

    $('#message').on('input', function(){
        cVal = $.trim($(this).val());
        if(cVal.length > 1000){
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

    /*
    function validate(form) {
        var elems = form.elements;
        var error = false;

        if (!elems.address.value) {
            $('#address').notify("Поле должно быть заполнено.", "error");
            $('#address').addClass("errtextbox");
            error = true;
        }

        if (!elems.phone.value) {
            $('#phone').notify("Поле должно быть заполнено.", "error");
            $('#phone').addClass("errtextbox");
            error = true;
        }

        if (!elems.name.value) {
            $('#name').notify("Поле должно быть заполнено.", "error");
            $('#name').addClass("errtextbox");
            error = true;
        }

        if (!elems.price.value) {
            $('#price').notify("Поле должно быть заполнено.", "error");
            $('#price').addClass("errtextbox");
            error = true;
        }

            if (!elems.square.value) {
            $('#square').notify("Поле должно быть заполнено.", "error");
            $('#square').addClass("errtextbox");
            error = true;
        }
        if(!error){
            form.submit();
        }
    }
    }*/

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