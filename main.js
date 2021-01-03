$(".input").on('input',function(){

    var x1= document.getElementById('cs51').value;
    x1 = parseInt((x1/10)+1);

    var x2= document.getElementById('cs52').value;
    x2 = parseInt((x2/10)+1);

    var x3= document.getElementById('cs53').value;
    x3 = parseInt((x3/10)+1);

    var x4= document.getElementById('cs54').value;
    x4 = parseInt((x4/10)+1);

    var x5= document.getElementById('cs55').value;
    x5 = parseInt((x5/10)+1);

    var x6= document.getElementById('cs56').value;
    x6 = parseInt((x6/10)+1);

    var x7= document.getElementById('cs57').value;
    x7 = parseInt((x7/10)+1);

    var x8= document.getElementById('cs58').value;
    x8 = parseInt((x8/10)+1);
    
    var x9= document.getElementById('cs59').value;
    x9 = parseInt((x9/10)+1);

    if(Number.isNaN(x1))
    x1 = 0;
    if(Number.isNaN(x2))
    x2=0;
    if(Number.isNaN(x3))
    x3=0;
    if(Number.isNaN(x4))
    x4=0;
    if(Number.isNaN(x5))
    x5=0;
    if(Number.isNaN(x6))
    x6=0;
    if(Number.isNaN(x7))
    x7=0;
    if(Number.isNaN(x8))
    x8=0;
    if(Number.isNaN(x9))
    x9 = 0;


    var cs51=3;
    var cs52=4;
    var cs53=3;
    var cs54=3;
    var cs55=3;
    var cs56=3;
    var cs57=2;
    var cs58=2;
    var cs59=1;
    var cs5=cs51+cs52+cs53+cs54+cs55+cs56+cs57+cs58+cs59;

    document.getElementById('result').value=((x1*cs51)+(x2*cs52)+(x3*cs53)+(x4*cs54)+(x5*cs55)+(x6*cs56)+(x7*cs57)+(x8*cs58)+(x9*cs59))/cs5;
    
});