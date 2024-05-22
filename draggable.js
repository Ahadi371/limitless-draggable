fetch('https://picsum.photos/v2/list?page=2&limit=40')
      .then(response => response.json())
      .then(json => {
        let photoInfo = ""
        for (const gellery of json) {
            console.log(gellery);
            photoInfo += `
            <div class="col-lg-2 p-1">
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
       apiKey:"V3SDBZBNSN3J62ER2PV6AA9NL&contentType=json", //Sign up for your personal key
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