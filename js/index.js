$(document).ready(function(){
  var latitude; 
  var longitude;
  var location,temp;
  if (navigator.geolocation) 
  {
      navigator.geolocation.getCurrentPosition(function(position) {
        latitude =position.coords.latitude;
        longitude =position.coords.longitude;
        
        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var link='https://api.darksky.net/forecast/8804bfef921a93a443a959fab2cd2d2c/'+latitude+','+longitude;
      $.ajax({
          
            url:proxy+link,
            datatype:'jsonp',
            success:function(data){
              
                location=data.timezone;
                var arr=location.split('/');  
              
                temp=data.currently.temperature;
              
                $("#location").html(arr[1]);
                $("#country").html(arr[0]);
              
                var centigrade=(5*(temp-32))/9;
          
                $("#temp").html(centigrade.toFixed(2));
                
                alert(location+" "+temp+" "+latitude+" "+longitude);
            }
            
        });
        
      });
  }
  
  /**/
});













/*$.getJSON(url,function(data){  
           
           alert(url);
           apidata=data;
           location=apidata.timezone;
           console.log(data);
           $("#location").html(location);
           /*
           $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=762607b76abd9f7a53a0e500af26a737',function(data){
            country=data.sys.country;
            
          
            $("#country").html(country);
        });//location
           
           ktemp=apidata.main.temp;
           ctemp=ktemp-273;
           var xtemp=Math.round(ctemp);         //temperature
           $("#temp").html(xtemp);
           
           $("#weather").html(apidata.weather[0].main);
           
           icon=apidata.weather[0].icon;
           console.log(icon);
           $("#imgicon").append('<img src="http://openweathermap.org/img/w/'+icon+'.png"></img>');
           /*if(id==200||id==201||id==202||id==210||id==211||id==212||id==221||id==230||id==231||id==232)
           {
              ("#icon").css("background-image","url("+"http://openweathermap.org/img/w/11d.png"+")");
           }
           else if(id==300||id==301||id==302||id==310||id==311||id==312||id==313||id==314||id==321)
           {
              ("#icon").css("background-image","url("+"http://openweathermap.org/img/w/09d.png"+")");
           }
           else if(id==500||id==501||id==502||id==503||id==504)
           {
              ("#icon").css("background-image","url("+"http://openweathermap.org/img/w/10d.png"+")");
           }
           else if(id==511)
           {
              ("#icon").css("background-image","url("+"http://openweathermap.org/img/w/13d.png"+")");
           
           }
           else if(id==520||id==521||id==522||id==531)
           {
              ("#icon").css("background-image","url("+"http://openweathermap.org/img/w/09d.png"+")");
           
           }
           else if(id==600||id==601||id==602||id==611||id==612||id==615||id==616||id==620||id==621||id==622)
           {
              ("#icon").css("background-image","url("+"http://openweathermap.org/img/w/13d.png"+")");
           }
           else if(id==701||id==711||id==721||id==731||id==741||id==751||id==761||id==762||id==771||id==781)
           {
              ("#icon").css("background-image","url("+"http://openweathermap.org/img/w/50d.png"+")");
           
           }
           else if(id==800)
           {
               
           }
           else if(id==801||id==802||id==803||id==804)
           {
              
           }
           */