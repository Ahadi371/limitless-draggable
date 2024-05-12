fetch('https://picsum.photos/v2/list?page=2&limit=8')
      .then(response => response.json())
      .then(json => {
        let photoInfo = ""
        for (const gellery of json) {
            console.log(gellery);
            photoInfo += `
            <div class="col-lg-6 p-1">
            <img src= ${gellery.download_url} width="100%">
            </div>
            `

        }
        document.getElementById("photo").innerHTML = photoInfo

      }
    )


window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"J7LM8UHF9J6HJPF8VZH3HD9MS&contentType=json", //Sign up for your personal key
       location:"MYMENSINGH, BANGLADESH", //Enter an address
       unitGroup:"metric", //"us" or "metric"
       forecastDays:5, //how many days forecast to show
       title:"Mymensingsh,BD", //optional title to show in the 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script');
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();