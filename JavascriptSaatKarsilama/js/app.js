
function startTime(isPromt) {

    if(isPromt)
    {
        var name = prompt("Adınızı giriniz");
        var hasNumber = /\d/;   
        
        if(hasNumber.test(name)) 
        { 
            var isTryAgain = confirm('sayısal bir sey girmemeniz gerekmektedir.Tekrar deneyiniz');
            if(!isTryAgain)
            {
                document.getElementsByTagName("BODY")[0].style.display = "none";
                return; 
            }
            else
                startTime(true);
        } 
        else
            document.querySelector(".name").innerText = name.toLocaleUpperCase();    
    }

    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();

    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.clock').innerHTML =  h + ":" + m + ":" + s + " "+ days[d];
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }