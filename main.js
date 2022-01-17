const sydneyTime = document.querySelector('.sydney-time');
const saoPauloTime = document.querySelector('.sao-paulo-time');
const shanghaiTime = document.querySelector('.shanghai-time');
const parisTime = document.querySelector('.paris-time');
const kolkataTime = document.querySelector('.kolkata-time');
const jerusalemTime = document.querySelector('.jerusalem-time');
const romeTime = document.querySelector('.rome-time');
const tokyoTime = document.querySelector('.tokyo-time');
const mexicoCityTime = document.querySelector('.mexico-city-time');
const lagosTime = document.querySelector('.lagos-time');
const moscowTime = document.querySelector('.moscow-time');
const johannesburgTime = document.querySelector('.johannesburg-time')
const dubaiTime = document.querySelector('.dubai-time');
const londonTime = document.querySelector('.london-time');
const newYorkTime = document.querySelector('.new-york-time');


// Main Function
function countryTime(continentCity, cityName) {
        let countryName = new Date().toLocaleString("en-US",{
        timeZone: `${continentCity}`,
        timeStyle: "long",
        hourCycle: "h12"
    });
    cityName.textContent = countryName;
}


// Calling the function in an interval
setInterval(function() {
    // Australia
    countryTime("Australia/Sydney", sydneyTime);

    //Brazil
    countryTime("America/Sao_Paulo", saoPauloTime);
    
    // China
    countryTime("Asia/Shanghai", shanghaiTime);
    
    // France
    countryTime("Europe/Paris", parisTime);
    
    // India
    countryTime("Asia/Kolkata", kolkataTime);
    
    //Israel
    countryTime("Asia/Jerusalem", jerusalemTime);
    
    //Italy
    countryTime("Europe/Rome", romeTime);
    
    // Japan
    countryTime("Asia/Tokyo", tokyoTime);
    
    //Mexico
    countryTime("America/Mexico_City", mexicoCityTime);
    
    //Nigeria
    countryTime("Africa/Lagos", lagosTime);
    
    // Russia
    countryTime("Europe/Moscow", moscowTime);
    
    // South Africa
    countryTime("Africa/Johannesburg", johannesburgTime);
    
    // UAE
    countryTime("Asia/Dubai", dubaiTime);
    
    // UK
    countryTime("Europe/London", londonTime);
    
    //USA
    countryTime("America/New_York", newYorkTime);
    
}, 1000);
