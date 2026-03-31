$('#btn-form-search').click(function(){
    $('.nav-left').toggle('blind')
})
$('#btn-cat').click(function(){
   $('.categories').toggle('slide') 
})
$('#btn-menu').click(function(){
   $('.categories').toggle('slide') 
})
$('#cat-close').click(function(){
   $('.categories').toggle('slide') 
})

$('#btn-filter').click(function(){
    $('#sidebar').toggle('slide');
})
$('#btn-sidebar-close').click(function(){
    $('#sidebar').toggle('slide');
})
$
$('#plus').click(function(){
    var qty=$('#qty').val();
    qty=parseInt(qty,10);
    qty++;
    $('#qty').val(qty);
})
$('#minus').click(function(){
    var qty=$('#qty').val();
    qty=parseInt(qty,10);
    if(qty<=1)
    {
        qty=1;
    }
    else
    {
        qty--;
    }
    $('#qty').val(qty);
})

$('#plus1').click(function(){
    var sl1=$('#qty1').val();
    sl1=parseInt(sl1,10);
    sl1++;
    $('#qty1').val(sl1);
})
$('#minus1').click(function(){
    var sl1=$('#qty1').val();
    sl1=parseInt(sl1,10);
    if(sl1<=1)
    {
        sl1=1;
    }
    else
    {
        sl1--;
    }
    $('#qty1').val(sl1);
})
$('#plus2').click(function(){
    var sl2=$('#qty2').val();
    sl2=parseInt(sl2,10);
    sl2++;
    $('#qty2').val(sl2);
})
$('#minus2').click(function(){
    var sl2=$('#qty2').val();
    sl2=parseInt(sl2,10);
    if(sl2<=1)
    {
        sl2=1;
    }
    else
    {
        sl2--;
    }
    $('#qty2').val(sl2);
})
$('#plus3').click(function(){
    var sl3=$('#qty3').val();
    sl3=parseInt(sl3,10);
    sl3++;
    $('#qty3').val(sl3);
})
$('#minus3').click(function(){
    var sl3=$('#qty3').val();
    sl3=parseInt(sl3,10);
    if(sl3<=1)
    {
        sl3=1;
    }
    else
    {
        sl3--;
    }
    $('#qty3').val(sl3);
})
$(window).resize(function(){
    if($(window).width()>768)
    {
        $('nav-left').css('display', 'block')
        $('#sidebar').css('display', 'block')
    }
    else
    {
        $('nav-left').css('display', 'none')
    }
})

$(document).ready(function() {
    $('#owl-cat').owlCarousel({
        loop: true,
        margin: 24,
        responsiveClass: true,
        responsive: 
        {
            0: 
            {
                items: 2,
               
            },
            600: 
            {
                items: 4,
    
            },
            1000: 
            {
                items: 6,
            }
        }
    })
    $('#owl-testimonial').owlCarousel({
        loop: true,
        margin: 24,
        responsiveClass: true,
        responsive: 
        {
            0: 
            {
                items: 1,
               
            },
            600: 
            {
                items: 1,
    
            },
            1000: 
            {
                items: 2,
            }
        }
    })
    $('#blog').owlCarousel({
        loop: true,
        margin: 24,
        responsiveClass: true,
        responsive: 
        {
            0: 
            {
                items: 1,
               
            },
            600: 
            {
                items: 2,
    
            },
            1000: 
            {
                items: 3,
            }
        }
    })
    $('#brand').owlCarousel({
        loop: true,
        margin: 24,
        responsiveClass: true,
        responsive: 
        {
            0: 
            {
                items: 3,
               
            },
            600: 
            {
                items: 4,
    
            },
            1000: 
            {
                items: 5,
            }
        }
    })
    $('#img').owlCarousel({
        loop: true,
        margin: 24,
        responsiveClass: true,
        responsive: 
        {
            0: 
            {
                items: 3,
               
            },
            600: 
            {
                items: 4,
    
            },
            1000: 
            {
                items: 6,
            }
        }
    })
})