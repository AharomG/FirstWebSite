$(document).ready(function(){
    var links = document.querySelectorAll(".options a");
    for(var i = 0; i<links.length; i++){
        links[i].addEventListener("click",hide,false);
    }
    $("#example img").hover(function(){
        $(this).fadeTo(500,0,function(){
            $(this).attr("src","css/homer.jpg")
            .fadeTo(500,1,function(){ 
                $(this).fadeTo(500,0,function(){ 
                    $(this).attr("src","css/funny.jpg")
                    .fadeTo(500,1,function(){
                        //empty
                    })
                })
            })
        });
    },function(){
        $(this).stop().fadeTo(500,0,function(){
            $(this).attr("src","css/yo.jpg")
            .fadeTo(500,1,function(){
                //empty
            });
        })
    });

    $("#searching").submit(function(e){
        e.preventDefault();
    });
});

function hide(e){
    var opts = document.querySelectorAll("#hideOpts iframe");
    for(var i=0; i< opts.length; i++){
        opts[i].style.display = 'none';
    }
    if(e.target.target == "opt1"){
        opts[0].style.display = 'block';
    }
    if(e.target.target == "opt2"){
        opts[1].style.display = 'block';
    }
    if(e.target.target == "opt3"){
        opts[2].style.display = 'block';
    }
    if(e.target.target == "opt4"){
        opts[3].style.display = 'block';
    }
}