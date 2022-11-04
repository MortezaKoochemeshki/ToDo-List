$(document).ready(function(){
    $('.textb').on('keyup', function(e){
        // The keyCode Of 'enter' Is 13;
        if(e.keyCode === 13 && $('.textb').val() != ''){
            let task = $('<div class="task"></div>').text($('.textb').val());
            let del = $('<i class="fa-solid fa-trash-alt remove"></i>').click(function(){
                let p = $(this).parent();
                p.fadeOut(function(){
                    p.remove();
                });
            });

            let check = $('<i class="fa-solid fa-check-circle done"></i>').click(function(){
                let p = $(this).parent();
                p.fadeOut(function(){
                    $('.completed').append(p);
                    p.fadeIn();
                });
                $(this).remove();
            });

            task.append(del, check);            
            $('.notComp').append(task);
            $('.textb').val(''); 
        }
        
    });
});