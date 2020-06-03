$(document).ready(function () {
    //---------------- декор тексту ------------------
    $('.b').click(() => $('.text').toggleClass('bold'));
    $('.i').click(() => $('.text').toggleClass('italic'));
    $('.u').click(() => {
        $('.text').removeClass('through');
        $('.text').toggleClass('underline')
    });
    $('.s').click(() => {
        $('.text').removeClass('underline');
        $('.text').toggleClass('through')
    });

    //---------------- вирівнювання тексту ------------------
    $('.l').click(() => {
        $('.text').removeClass('alignCenter alignRight');
    });
    $('.c').click(() => {
        $('.text').removeClass('alignRight');
        $('.text').toggleClass('alignCenter')
    });
    $('.r').click(() => {
        $('.text').removeClass('alignCenter');
        $('.text').toggleClass('alignRight')
    });

    //---------------- зміна шрифта ------------------
    $('.arial').click(() => {
        $('.text').removeClass('georgia impact tahoma times varnada');
        $('.text').addClass('arial')
    });
    $('.georgia').click(() => {
        $('.text').removeClass('arial impact tahoma times varnada');
        $('.text').addClass('georgia')
    });
    $('.impact').click(() => {
        $('.text').removeClass('georgia arial tahoma times varnada');
        $('.text').addClass('impact')
    });
    $('.tahoma').click(() => {
        $('.text').removeClass('georgia impact arial times varnada');
        $('.text').addClass('tahoma')
    });
    $('.times').click(() => {
        $('.text').removeClass('georgia impact tahoma arial varnada');
        $('.text').addClass('times')
    });
    $('.varnada').click(() => {
        $('.text').removeClass('georgia impact tahoma times arial');
        $('.text').addClass('varnada')
    });

    //---------------- розмір тексту ------------------
    $('.size14').click(() => {
        $('.text').removeClass('size18 size22 size26 size30');
        $('.text').addClass('size14')
    });
    $('.size18').click(() => {
        $('.text').removeClass('size14 size22 size26 size30');
        $('.text').addClass('size18')
    });
    $('.size22').click(() => {
        $('.text').removeClass('size18 size14 size26 size30');
        $('.text').addClass('size22')
    });
    $('.size26').click(() => {
        $('.text').removeClass('size18 size22 size14 size30');
        $('.text').addClass('size26')
    });
    $('.size30').click(() => {
        $('.text').removeClass('size18 size22 size26 size14');
        $('.text').addClass('size30')
    });

    //---------------- колір тексту та фону------------------
    const color = ['red', 'maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal', 'blue', 'navy', 'fuchsia', 'purple', 'white', 'silver', 'gray', 'black', 'purple', 'Orange', 'Snow', 'PowderBlue', 'LightSlateGray'];
    for (let i = 0; i < 21; i++) {
        $('.color').eq(i).css('background-color', `${color[i]}`);
        $('.fonColor').eq(i).css('background-color', `${color[i]}`);
    }

    $('.color').click(function () {
        $('.text').css('color', `${$(this).css('background-color')}`)
    })
    $('.fonColor').click(function () {
        $('.text').css('background-image', ``)
        $('.text').css('background-color', `${$(this).css('background-color')}`)
    })
    $('.fonImg').click(function () {
        $('.text').css('background-image', `${$(this).css('background-image')}`)
    })

    $('#customFile').change(function () {
        const url = URL.createObjectURL($('#customFile')[0].files[0]);
        $('.text').css('background-image', `url(${url})`)
    })

    //---------------- валідація логіну та паролю------------------
    let regPass = /^admin$/;
    $('.sign').click(() => {
        if (regPass.test($('.login').val()) && regPass.test($('.password').val())) {
            $('.login').removeClass('invalid');
            $('.password').removeClass('invalid');
            $('.none').addClass('hidden');
            $('.wrong').addClass('hidden');
            $('.sign').attr('data-dismiss', 'modal');
            $('form[name="login"]').trigger("reset");
            $('#edit').removeAttr('disabled');
            $('.lock').addClass('hidden');
            $('.lock2').addClass('hidden');
            $('.unlock').removeClass('hidden');
            $('.unlock2').removeClass('hidden');
        } else if (!$('.login').val() && !$('.password').val()) {
            $('.none').removeClass('hidden');
            $('.wrong').addClass('hidden');
            $('.sign').removeAttr('data-dismiss');
        } else {
            $('.wrong').removeClass('hidden');
            $('.none').addClass('hidden');
            $('.login').addClass('invalid');
            $('.password').addClass('invalid');
            $('.sign').removeAttr('data-dismiss');
        }
    });
    //---------------- Розлогін ------------------
    $('.signOut').click(() => {
        $('#edit').prop('disabled', true);
        $('.unlock').addClass('hidden');
        $('.unlock2').addClass('hidden');
        $('.lock').removeClass('hidden');
        $('.lock2').removeClass('hidden');
    })
    //----------------нажимання EDIT ------------------
    $('#edit').click(() => {
        $('.text').addClass('hidden');
        $('.nav1').addClass('hidden');
        $('textarea').removeClass('hidden');
        $('.nav2').removeClass('hidden');
        $('textarea').val($('.text').html());
    })
    //----------------нажимання save ------------------
    $('.save').click(() => {
        $('.text').html($('textarea').val())
        $('.text').removeClass('hidden');
        $('.nav1').removeClass('hidden');
        $('textarea').addClass('hidden');
        $('.nav2').addClass('hidden');
    })
    //----------------нажимання Reset ------------------
    $('.reset').click(() => {
        $('form[name="table"]').trigger("reset")
        $('.select1').prop('selectedIndex', 0);
        $('.select2').prop('selectedIndex', 0);
    })
    //---------------- валідація полів таблиці------------------
    $('.newTable').click(() => {
        !$('.countTr').val() ? $('.countTr').addClass('invalid') : $('.countTr').removeClass('invalid');
        !$('.widthTd').val() ? $('.widthTd').addClass('invalid') : $('.widthTd').removeClass('invalid');
        !$('.widthBo').val() ? $('.widthBo').addClass('invalid') : $('.widthBo').removeClass('invalid');
        !$('.countTd').val() ? $('.countTd').addClass('invalid') : $('.countTd').removeClass('invalid');
        !$('.heightT').val() ? $('.heightT').addClass('invalid') : $('.heightT').removeClass('invalid');
        !$('.select1').val() ? $('.select1').addClass('invalid') : $('.select1').removeClass('invalid');
        !$('.select2').val() ? $('.select2').addClass('invalid') : $('.select2').removeClass('invalid');
        $('.check').hasClass("invalid")
            ? $('.error').removeClass('hidden') && $('.newTable').removeAttr('data-dismiss')
            : $('.newTable').attr('data-dismiss', 'modal') && $('.error').addClass('hidden') && createTable();
    })
    /// ------функція для створення таблиці-----------
    function createTable() {
        const countTr = $('.countTr').val();
        const countTd = $('.countTd').val();
        let table = `<table>`
        for (let i = 1; i <= countTr; i++) {
            table += `<tr>`;
            for (let j = 1; j <= countTd; j++) {
                table += `<td style="border:${$('.select1').val()};border-color:${$('.select2').val()}; width:${$('.widthTd').val() + 'px'};height:${$('.heightT').val() + 'px'}; border-width:${$('.widthBo').val() + 'px'}";>TD</td>`;
            }
            table += `</tr>`;
        }
        table += `</table>`
        let test = $('.area').val();
        $('.area').val(test + table);
    }

    //----------------нажимання Reset Ol списку ------------------
    $('.resetList').click(() => {
        $('form[name="ol"]').trigger("reset")
        $('.typeOl').prop('selectedIndex', 0);
    })
    //---------------- валідація полів Ol списку------------------
    $('.newOl').click(() => {
        !$('.countOl').val() ? $('.countOl').addClass('invalid') : $('.countOl').removeClass('invalid');
        !$('.typeOl').val() ? $('.typeOl').addClass('invalid') : $('.typeOl').removeClass('invalid');

        $('.checkOl').hasClass("invalid")
            ? $('.error2').removeClass('hidden') && $('.newOl').removeAttr('data-dismiss')
            : $('.newOl').attr('data-dismiss', 'modal') && $('.error2').addClass('hidden') && createOl();
    })
    /// функція для створення Ol списку-----------
    function createOl() {
        const countOl = $('.countOl').val();
        const typeOl = $('.typeOl').val();
        let Ol = `<ol type="${typeOl}">`;
        for (let i = 1; i <= countOl; i++) {
            Ol += '<li>some text</li>';
        }
        Ol += '</ol>';
        let test = $('.area').val();
        $('.area').val(test + Ol);
    }
    //----------------нажимання Reset Ul списку ------------------
    $('.resetList').click(() => {
        $('form[name="ul"]').trigger("reset");
        $('.typeUl').prop('selectedIndex', 0);
    })
    //---------------- валідація полів Ul списку------------------
    $('.newUl').click(() => {
        !$('.countUl').val() ? $('.countUl').addClass('invalid') : $('.countUl').removeClass('invalid');
        !$('.typeUl').val() ? $('.typeUl').addClass('invalid') : $('.typeUl').removeClass('invalid');

        $('.checkUl').hasClass("invalid")
            ? $('.error3').removeClass('hidden') && $('.newUl').removeAttr('data-dismiss')
            : $('.newUl').attr('data-dismiss', 'modal') && $('.error3').addClass('hidden') && createUl();
    })
    /// функція для створення Ul списку-----------
    function createUl() {
        const countUl = $('.countUl').val();
        const typeUl = $('.typeUl').val();
        let Ul = `<ul type="${typeUl}">`;
        for (let i = 1; i <= countUl; i++) {
            Ul += '<li>some text</li>';
        }
        Ul += '</ul>';
        let test = $('.area').val();
        $('.area').val(test + Ul);
    }
})