var flag=0;
function imgno(x)
{
    flag=flag+x;
    show(flag);
}
function show(num)
{
let slides=document.getElementsByClassName("slide");
if(num==slides.length)
{
    flag=0;
    num=0;
}
if(num<0)
{
 flag=slides.length;
 num=slides.length;
}
for(let i of slides)
{
    i.style.display="None";
}
slides[num].style.display="block";
}
