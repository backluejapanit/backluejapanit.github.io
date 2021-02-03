$(function () {
    /*cach1 $('.n1').click(function() {
        $('html,body').animate({scrollTop:700})
        return false; */
    
    //cach 2
    $('.n1').click(function() {
        $('html,body').animate({scrollTop:$('#sanpham').offset().top},1000,"easeInOutExpo");
        return false; 
    })
    $('.n2').click(function() {
        $('html,body').animate({scrollTop:$('#gioithieu').offset().top},1000,"easeOutBack");
        return false; 
    })
    $('.n3').click(function() {
        $('html,body').animate({scrollTop:$('#lienhe').offset().top},1000,"easeInOutElastic");
        return false; 
    })
    //cachthaydoieasing thay doi gia doc them thoigian va gia tri






    //hieuung addclass
        $(window).scroll(function(){
            //console.log('banvuacuonchut');
            vitrihientai = $('html').scrollTop();
            console.log(vitrihientai);
            
            if(vitrihientai > 337){
                $('.navbar-fixed-top').addClass('tienhoa')
            }
            else if(vitrihientai <= 337){
                $('.navbar-fixed-top').removeClass('tienhoa')
            }
        
        //morong
        if(vitrihientai > 290){
            $('.portfolio').addClass('bienra');
        }
        else if(vitrihientai < 290){
            $('.portfolio').removeClass('bienra');
        }
        })
    })