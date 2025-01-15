function convertFromCelsius(){
    var celsius = document.getElementById("celsiusInp").value;
    if (celsius != ""){
        document.getElementById("fahrenheitInp").value = (Number(celsius)*9/5)+32;
        document.getElementById("kelvinInp").value = Number(celsius)+273.15;
        if(celsius>=0 && celsius<=29){
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
    }
}
function convertFromKelvin(){
    var kelvin = document.getElementById("kelvinInp").value;
    if (kelvin != ""){
        document.getElementById("celsiusInp").value = (Number(kelvin)-273.15);
        document.getElementById("fahrenheitInp").value = (Number(kelvin)-273.15)*9/5+32;
    }
}
