/**
 * Created by Ucenik on 27.4.2017..
 */
function prikazi()
{
    document.getElementById("SaPri").style.visibility="visible";
}
function sakri()
{
    document.getElementById("SaPri").style.visibility="hidden";
}
function dodaj()
{
    var novi = document.createElement("p");
    var upis = document.getElementById("myText").value;
    var ispis = document.createTextNode(upis);
    novi.appendChild(ispis);
    var element = document.getElementById("div1");
    element.appendChild(novi);
    var boja=document.getElementById("myText2").value;
    document.getElementById("div1").style.backgroundColor=boja;
}
function ViSi()
{
    var visina=window.innerHeight;
    var sirina=window.innerWidth;
    document.getElementById("visina").innerHTML="Visina je: "+visina;
    document.getElementById("sirina").innerHTML="Širina je: "+sirina;
    window.open("https://github.com/","_blank","width=200 , height=200");
}

