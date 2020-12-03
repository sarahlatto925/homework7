function gettingJSON(){
    //Display the forecast
    // Your code here.
    let forecast = document.querySelector("#forecast");
    forecast.style.display="block";

    //Set default location if one isn't provided
    let location = 'Ann Arbor';
    if (document.querySelector("#location").value != ""){
        location = document.querySelector("#location").value;
    }
    console.log("Location is: " + location);

    //set default temperature format if one isn't provided
    let format;
    if (document.querySelectorAll("input[name=temp]:checked").length!=0){
        format = 'metric';
    }
    else{
        format = 'imperial';
    }
    // Your code here.
    console.log("Format is:" + format);

    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=4b35f3e25e9cb1d96498dc927fc964a2";
    // Your code here.  
    
    console.log("Query is:" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        temp.innerHTML = (json['main'].temp) + " with " + (json['weather'][0].description)
        loc.innerHTML = (json['name'])
        console.log(JSON.stringify(json));
        tempImg.src = "http://opeanweathermap.org/img/wn/" + (json['weather'][0].icon) + ".png";
        tempImg.alt = (json['weather'][0].description);
        console.log("Icon is " + json['weather'][0].icon);
    });
}
