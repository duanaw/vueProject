
import 'whatwg-fetch';
import {HAPPY_TYPE} from '../common/constant/constant';

export  const HappyListCache = {

    
    getHappyList(data) {
        let key = '&key=ec451dc7ad29d93c72de5f281123a496&';

        switch(data.happyType)
        {
        case HAPPY_TYPE.TEXT:
            return fetch('happy/joke/randJoke.php?' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result);
            break;
        case HAPPY_TYPE.IMAGE:
            return fetch('happy/joke/randJoke.php?type="pic"' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result);
            break;
        case HAPPY_TYPE.OTHER:
            return fetch('api/joke/img/text.from?"' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.data);
            break;
        }

    }
}


export  const WeatherCache = {

   
    getWeather(data) {
        let key = '?key=7cc263ec409e69b4aeb54b55639bcc87&';
        return fetch('op/onebox/weather/query' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.data);
    }
}


export  const RobotCache = {

    
    getWeather(data) {
        let key = '?key=50cd35eb206526335a1c1e0f149f98a5&';
        return fetch('op/robot/index' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.text);
    }
}


function parseParam(obj) {
    let paramStr = '';
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (typeof(obj[p]) == " function ") {
                obj[p]();
            }
            else {
                paramStr += p + '=' + encodeURIComponent(obj[p]) + "&";
            }
        }
    }
    return paramStr;
}

