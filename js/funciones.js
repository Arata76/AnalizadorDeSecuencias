var sara=1;
function agregar(){
    if(sara < 12){
                var divmaster =document.createElement("div");//divicion mayor
        var divmaster2=document.createElement("div");//segunda divición
        var etiqueta=document.createElement("label");//etiquet label
        var textetiqueta=document.createTextNode("Familia agregada n°"+sara);//texto de label
        var inputtexto=document.createElement("input");//texbox
        var divcaja=document.createElement("div");//divicion de la caja
        var linka=document.createElement("a");//link de referencia
        var etiquetalink=document.createTextNode("Desde archivo");//texto del link
        var linkinput=document.createElement("input");//boton de link
        var sapanlabel=document.createElement("span");//span k no sabemos k hace :P

        sapanlabel.setAttribute("class","label label-info");
        sapanlabel.setAttribute("id","upload-file-info"+sara);

        linkinput.setAttribute("type","file");
        linkinput.setAttribute("style","position:absolute;z-index:2;top:0;left:0;filter: alpha(opacity=0);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;background-color:transparent;color:transparent;");
        linkinput.setAttribute("name","file_source");
        linkinput.setAttribute("size","40");
        linkinput.setAttribute("onchange"," ");

        linka.setAttribute("class","btn btn-primary");
        linka.setAttribute("href","javascript:;");

        divcaja.setAttribute("style","position:relative;");

        inputtexto.setAttribute("type","text");
        inputtexto.setAttribute("class","form-control");
        inputtexto.setAttribute("id","lblSeq1"+sara);
        inputtexto.setAttribute("name","lblSeq1"+sara);
        inputtexto.setAttribute("placeholder","Secuencia");
        
        divmaster2.setAttribute("class","col-xs-12");
        
        divmaster.setAttribute("class","form-group");

        a.appendChild(etiquetalink);
        a.appendChild(linkinput);

        divcaja.appendChild(a);
        divcaja.appendChild(sapanlabel);

        etiqueta.appendChild(textetiqueta);

        divmaster2.appendChild(etiqueta);
        divmaster2.appendChild(inputtexto);
        divmaster2.appendChild(divcaja);

        divmaster.appendChild(divmaster);

        document.getElementById(carmen).appendChild(divmaster);

        sara=sara+1;
    }
    else{
        alert("Se ha creado más de doce secuencias");
    }
}
