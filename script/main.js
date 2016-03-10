var myimage = document.querySelector('img');
myimage.onclick = function()
{
    var mysrc = myimage.getAttribute('src');
    if(mysrc=='images/firefox-icon.png')
    {
        myimage.setAttribute('src','images/firefox2.png')
    }
    else
        {
            myimage.setAttribute('src','images/firefox-icon.png')
        }
    
}
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUsername()
{
    var myName=prompt("Please Enter your name.");
    localStorage.setItem('name',myName);
    myHeading.textContent="Mozilla is cool, "+myName;
    
}
if(!localStorage.getItem('name'))
    {
        setUsername();
    }
else
    {
        var storedName=localStorage.getItem('name')
        myHeading.textContent="Mozilla is cool, "+storedName;
    }
    
myButton.onclick=function()    
{
    setUsername();
}


