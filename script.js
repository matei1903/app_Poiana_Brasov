function ShowWeatherWidget(container) {
    var node = document.getElementById(container);
    var iframecode = "";
    var awidth = node.clientWidth;
    var days = "7";
    var widgetwidth = "805";
    if (awidth >= 460) {
        days = "7";
        widgetwidth = "460";
        if (awidth >= 575) {
            days = "5";
            widgetwidth = "575"
        }
        if (awidth >= 690) {
            days = "6";
            widgetwidth = "690"
        }
        if (awidth >= 805) {
            days = "7";
            widgetwidth = "805"
        }
        iframecode = '<iframe src="https://www.meteoblue.com/en/weather/widget/three/poiana-brasov_romania_6693026?geoloc=fixed&nocurrent=0&noforecast=0&days=' + days + '&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=bright&location_url=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fwidget%2Fthree%2Fpoiana-brasov_romania_6693026&location_mainUrl=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fweek%2Fpoiana-brasov_romania_6693026&nolocation_url=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fwidget%2Fthree&nolocation_mainUrl=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fweek%2Findex&dailywidth=115&tracking=%3Futm_source%3Dweather_widget%26utm_medium%3Dlinkus%26utm_content%3Dthree%26utm_campaign%3DWeather%252BWidget"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: ' + widgetwidth + 'px;height: 623px"></iframe><div>\x3c\x3e<a href="https://www.meteoblue.com/en/weather/week/poiana-brasov_romania_6693026?utm_source=weather_widget&utm_medium=linkus&utm_content=three&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>'
    } else {
        awidth = awidth - 10;
        days = "4";
        widgetwidth = "216";
        if (awidth >= 270) {
            days = "5";
            widgetwidth = "270"
        }
        if (awidth >= 324) {
            days = "6";
            widgetwidth = "324"
        }
        if (awidth >= 378) {
            days = "7";
            widgetwidth = "378"
        }
        iframecode = '<iframe title="Vremea în Poiana Brașov" src="https://www.meteoblue.com/en/weather/widget/daily/poiana-brasov_romania_6693026?geoloc=fixed&days=' + days + '&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=monochrome&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&pressure=0&layout=light&location_url=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fwidget%2Fdaily%2Fpoiana-brasov_romania_6693026&location_mainUrl=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fweek%2Fpoiana-brasov_romania_6693026&nolocation_url=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fwidget%2Fdaily&nolocation_mainUrl=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fweek%2Findex&dailywidth=54&tracking=%3Futm_source%3Dweather_widget%26utm_medium%3Dlinkus%26utm_content%3Ddaily%26utm_campaign%3DWeather%252BWidget"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: ' + widgetwidth + 'px;height: 305px"></iframe><div>\x3c!-- DO NOT REMOVE THIS LINK --\x3e<a href="https://www.meteoblue.com/en/weather/week/poiana-brasov_romania_6693026?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>'
    }
    node.innerHTML = iframecode
}

function redirectioneaza_dr_rosu() {
    window.location.href = "partie_dr_rosu.html";
}

function redirectioneaza_sulinar() {
    window.location.href = "partie_sulinar.html";
}

function redirectioneaza_lup() {
    window.location.href = "partie_lupului.html";
}

function redirectioneaza_subtele() {
    window.location.href = "partie_subteleferic.html";
}

function redirectioneaza_kanzel() {
    window.location.href = "partie_kanzel.html";
}

function redirectioneaza_stadion() {
    window.location.href = "partie_stadion.html";
}