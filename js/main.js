

// DEFAULT COOKIE FUNCTIONS


function setCookie(cookieName, cookieValue, expires) {
    var days = new Date();
    days.setTime(days.getTime() + expires * 24 * 60 * 60* 1000);
    days.toUTCString();
    document.cookie = cookieName + " = " + cookieValue + "; expires = " + days + "; path = /";
    
}

function newCookie(cookieName, cookieValue) {
    // var cookieName = prompt('Koji cookie zelite da sacuvate?');
    // var cookieValue = prompt('Sta zelite da upisete u cookie ' + cookieName + '?');
    // var expires = prompt('Koliko dana da se sacuva cookie?');
    var expires = 10;
    setCookie(cookieName, cookieValue, expires);
}

function deleteCookie() {
    var cookieName = prompt("koji cookie zelite da obrisete?");
    var cookieValue = "";
    var expires = -1;
    
    setCookie(cookieName, cookieValue, expires);
}

function getCookie(cookieName){
    // var cookieName = prompt("unesite cookie ciju vrednost trazite");
    var cookie = decodeURIComponent(document.cookie);
    var allCookies = cookie.split(';');
    
    
    for (let i = 0; i < allCookies.length; i++) {
        if (allCookies[i].charAt(0)== ' '); {
            allCookies[i] =allCookies[i].substring(1);
        }
        var cookieContent = allCookies[i].split('=');
        if (cookieContent[0] === cookieName) {
            
            return cookieContent[1];
        }
        
    }
    return false;
}

// -----------------------------------------------------
window.onload = function() {
    var name = getCookie('name');
    if ( name !== false) {
        document.querySelector('h1 span').innerHTML = name;
    }
    // var bgCol = getCookie('bg');
    // if ( bg!== false) {
    //     document.querySelector('body').style.backgroundColor = bgCol;
    // }
    var textCol = getCookie('textCol');
    if (textCol !== false){
        document.querySelector('h1').style.color = textCol;
    }
    var Boja = getCookie('Boja');
    if (Boja !== false){
        document.querySelector('body').style.BackgroundColor = Boja;
    }
    
    
    
}

function setName() {
    var name = document.getElementById('name').value;
    document.querySelector('h1 span').innerHTML = name;
    document.getElementById('name').value = "";
    newCookie('name', name);
};

// // function setBgCol() {
// //     var bgCol = document.getElementById('bg').value;
// //     document.querySelector('body').style.backgroundColor = bgCol;
// //     document.getElementById('bg').value = "";
// //     // newCookie('bg', bgCol);
// };

function setTextCol() {
    var textCol = document.getElementById('text').value;
    document.querySelector('h1').style.color = textCol;
    document.getElementById('text').value = "";
    newCookie('textCol', textCol);
    
};

function setAll(){
    var name = document.getElementById('name').value;
    document.querySelector('h1 span').innerHTML = name;
    document.getElementById('name').value = "";
    newCookie('name', name);
    
    var bgCol = document.getElementById('bg').value;
    document.querySelector('body').style.backgroundColor = bgCol;
    document.getElementById('bg').value = "";
    newCookie('bg', bgCol);
    
    var textCol = document.getElementById('text').value;
    document.querySelector('h1').style.color = textCol;
    document.getElementById('text').value = "";
    newCookie('textCol', textCol);
    
    
    
};
// ----------------------------------------------------------------------------------


function setBoja() {
    var Boja = prompt ('unesite boju za pozadinu u heksadecimalnom zapisu. npr #ffffff');
    document.querySelector('body').style.backgroundColor = Boja ;
    if (Boja.indexOf("#") != 0){
        
        alert ('pogresno ste uneli zapis')
        
    };
    newCookie('Boja', Boja);
    
    
}



































// function setSlika() {
//     var Slika = prompt ('unesite link za sliku');
//     document.querySelector('body').style.backgroundImage = url() 


// }









