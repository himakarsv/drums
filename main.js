var a=document.querySelectorAll(".box").length;
for(var i=0;i<a;i++){
    document.querySelectorAll(".box")[i].addEventListener("click",function(){
        var c=this.innerHTML;
        sounds(c);
    });
}

document.addEventListener("keypress",function(event){
      sounds(event.key);
});



function sounds(key){
    switch(key){
        case "A":
            var AA=new Audio("tom-1.mp3");
            AA.play();
            break;
        case "S":
            var BB=new Audio("tom-2.mp3");
            BB.play();
            break;
        case "D":
            var CC=new Audio("tom-3.mp3");
            CC.play();
            break;
        case "F":
            var DD=new Audio("tom-4.mp3");
            DD.play();
            break;
        case "Q":
            var EE=new Audio("crash.mp3");
            EE.play();
            break;
        case "W":
            var FF=new Audio("snare.mp3");
            FF.play();
            break;
        case "E":
            var GG=new Audio("kick-bass.mp3");
            GG.play();
            break;
            default: console.log(key);
    }
}