const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {array}
 */
function getCountryNameByIso3(isoCode){
    const country = countries.filter(iso3=> iso3.iso3 === isoCode); 

    const justname = country.map(just => just.name); 
    console.log(justname);
   
    //complete with your code
}

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){
    const newCountry = countries.find(country => country.iso3 === isoCode)
    let name = newCountry.name;
    let iso3 = newCountry.iso3;
    let iso2 = newCountry.iso2;
    let phone_code = newCountry.phone_code;
    let capital = newCountry.capital;
    let currency = newCountry.currency;
    let tld = newCountry.tld;
    let region = newCountry.region;
    let emoji = newCountry.emoji;
    
     return {name,iso3,iso2,phone_code,capital,currency,tld,region,emoji};
   //const h= {name,iso3,iso2,phone_code,capital,currency,tld,region,emoji};
    //console.log(h);
    //complete with     your code
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('ARG'),
        '\n');

}

main();