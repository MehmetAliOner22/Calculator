var optDurum=false,opt="",sonuc=0;

var btnRakam=document.querySelectorAll(".btnRakam");
var gösterge=document.querySelector("table .gösterge");
var btnOpt=document.querySelectorAll(".btnOpt");
var islem=document.querySelector("table .islem");
var btnCE=document.querySelector(".btnCE");
var btnC=document.querySelector(".btnC");
var btnEsit=document.querySelector(".btnEsit");
btnNokta=document.querySelector(".btnNokta");

btnRakam.forEach(function(element){


    element.onclick=function(e){

        if(gösterge.textContent=="0" || optDurum)
        gösterge.textContent="";

        gösterge.textContent+=this.textContent;
        optDurum=false;
    }
});

btnOpt.forEach(function(element){

    element.onclick=function(e){
        optDurum=true;
        var yeniOpt=this.textContent;

        islem.textContent=islem.textContent+" "+gösterge.textContent+" "+yeniOpt;

        switch(opt)
        {

            case "+":
            gösterge.textContent = (sonuc + Number(gösterge.textContent));
            break;

            case "-":
            gösterge.textContent = (sonuc - Number(gösterge.textContent));
            break;

            case "*":
            gösterge.textContent = (sonuc * Number(gösterge.textContent));
            break;

            case "/":
            gösterge.textContent = (sonuc / Number(gösterge.textContent));
            break;

            default: break;
        }
        
        sonuc = Number(gösterge.textContent);
        opt=yeniOpt;
    }
});


btnC.onclick=function(e){
    gösterge.textContent="";
}

btnCE.onclick=function(e){
    gösterge.textContent="";
    islem.textContent="";
    sonuc=0;
    opt="";
}

btnEsit.onclick=function(e){
    islem.textContent="";
    optDurum=true;

    switch(opt)
        {

            case "+":
            gösterge.textContent = (sonuc + Number(gösterge.textContent));
            break;

            case "-":
            gösterge.textContent = (sonuc - Number(gösterge.textContent));
            break;

            case "*":
            gösterge.textContent = (sonuc * Number(gösterge.textContent));
            break;

            case "/":
            gösterge.textContent = (sonuc / Number(gösterge.textContent));
            break;

            default: break;
        }

        sonuc=Number(gösterge.textContent);
        gösterge.textContent=sonuc;
        sonuc=0;
        opt="";
}

btnNokta.onclick=function(e){
    if(!optDurum && !gösterge.textContent.includes(".")){
        gösterge.textContent+=".";
    }
    else if(optDurum){
        gösterge.textContent="0";
    }
    if(!gösterge.textContent.includes(".")){
        gösterge.textContent+=".";
    }
    optDurum=false;
}