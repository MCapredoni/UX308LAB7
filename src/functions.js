function hello(name){
    return(`hello ${name}`);
}

function SQFeet2Acres(SQFeet){
    const Acres = SQFeet/43560;
    return Acres;
}

function LawnSize(length, width, metres_cut_per_minute){
    const metres = length * width;
    const minutes = metres /metres_cut_per_minute;
    return minutes;
}

function AirQualityIndex(air){
    if(air <= 50){
        return "Good";
        }
        if(air <= 100){
        return "Moderate";
        }
        if(air <= 150){
        return "Unhealthy for Sensitive Groups";
        }
        if(air <= 200){
        return "Unhealthy";
        }
        if(air <= 300){
        return "Very Unhealthy";
        }
        if(air >= 301){
        return "Hazardous";
         }
    } 

    function YeeHa(integer){
        if(integer % 3 === 0){
        return "Yee";
        }
        if(integer % 7 === 0){
        return "Ha";
        }
        if(integer % 3 === 0 && integer % 7 === 0){
        return "YeeHa";
        }
        else{
            return "Nada";
        }
          
    }  

    function LineSlope(x1, y1, x2, y2){
        return (y2 - y1) / (x2 - x1)
    }
        
export {hello, SQFeet2Acres, LawnSize, AirQualityIndex, YeeHa, LineSlope}