function convertFromCelsius(){
    var celsius = document.getElementById("celsiusInp").value;
    if (celsius != ""){
        document.getElementById("fahrenheitInp").value = (Number(celsius)*9/5)+32;
        document.getElementById("kelvinInp").value = Number(celsius)+273.15;
        if(celsius<0){
            document.body.style.backgroundColor = "lightblue"
        }
        else if(celsius>=0 && celsius<=29){
            document.body.style.backgroundColor = "lightblue"
        }
        else if(celsius>=30 && celsius<=39){
            document.body.style.backgroundColor = "lightgreen"
        }
        else if(celsius>=40 && celsius<=44){
            document.body.style.backgroundColor = "lightsalmon"
        }
        else if(celsius>=45 && celsius<=50){
            document.body.style.backgroundColor = "rgb(255, 71, 71)"
        }
        else{
            document.body.style.backgroundColor = "red"
        }
    }
}
function convertFromFahrenheit(){
    var fahrenheit = document.getElementById("fahrenheitInp").value;
    if (fahrenheit != ""){
        document.getElementById("celsiusInp").value = (Number(fahrenheit)-32)*5/9;
        document.getElementById("kelvinInp").value = (Number(fahrenheit)-32)*5/9+273.15;
        if(fahrenheit<32){
            document.body.style.backgroundColor = "lightblue"
        }
        else if(fahrenheit>=32 && fahrenheit<=84){
            document.body.style.backgroundColor = "lightblue"
        }
        else if(fahrenheit>=85 && fahrenheit<=103){
            document.body.style.backgroundColor = "lightgreen"
        }
        else if(fahrenheit>=104 && fahrenheit<=111){
            document.body.style.backgroundColor = "lightsalmon"
        }
        else if(fahrenheit>=112 && fahrenheit<=112){
            document.body.style.backgroundColor = "rgb(255, 71, 71)"
        }
        else{
            document.body.style.backgroundColor = "red"
        }
    }
}
function convertFromKelvin(){
    var kelvin = document.getElementById("kelvinInp").value;
    if (kelvin != ""){
        document.getElementById("celsiusInp").value = (Number(kelvin)-273.15);
        document.getElementById("fahrenheitInp").value = (Number(kelvin)-273.15)*9/5+32;
        if(kelvin<273){
            document.body.style.backgroundColor = "lightblue"
        }
        else if(kelvin>=273 && kelvin<=302){
            document.body.style.backgroundColor = "lightblue"
        }
        else if(kelvin>=303 && kelvin<=312){
            document.body.style.backgroundColor = "lightgreen"
        }
        else if(kelvin>=313 && kelvin<=317){
            document.body.style.backgroundColor = "lightsalmon"
        }
        else if(kelvin>=318 && kelvin<=323){
            document.body.style.backgroundColor = "rgb(255, 71, 71)"
        }
        else{
            document.body.style.backgroundColor = "red"
        }
    }
}
