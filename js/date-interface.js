import {GalacticDate} from './../js/date.js';

$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();

    let age = $('#ageEntered').val();
    let date = $('#dateEntered').val();
    let currentDate = new Date();
    let gender = $("#gender").val();
    let location = $("#location").val();
    // let isDead = checkIfExpired(age);
    let test = new GalacticDate(age, date);
    let ageEarth = test.ageIfOnEarth(age);
    let ageMercury = test.ageIfOnMercury(age);
    let ageVenus = test.ageIfOnVenus(age);
    let ageMars = test.ageIfOnMars(age);
    let ageJupiter = test.ageIfOnJupiter(age);
    let ageSaturn = test.ageIfOnSaturn(age);
    let ageNeptune = test.ageIfOnNeptune(age);
    let ageUranus = test.ageIfOnUranus(age);
    let expirationDate = test.demographicInfo(location, gender);
    let expireEarth = expirationDate - ageEarth;
    let expireMercury = expirationDate - ageEarth;
    let expireVenus = expirationDate - ageEarth;
    let expireMars = expirationDate - ageEarth;
    let expireJupiter = expirationDate - ageEarth;
    let expireSaturn = expirationDate - ageEarth;
    let expireNeptune = expirationDate - ageEarth;
    let expireUranus = expirationDate - ageEarth;

    console.log(test);

    console.log(age);
    console.log(date);
    console.log(gender);
    console.log(location);
    console.log(expirationDate);

    console.log(expireEarth);

    $('#ageEarth').append("" + ageEarth);
    $('#ageMercury').append("" + ageMercury);
    $('#ageVenus').append("" + ageVenus);
    $('#ageMars').append("" + ageMars);
    $('#ageJupiter').append("" + ageJupiter);
    $('#ageSaturn').append("" + ageSaturn);
    $('#ageNeptune').append("" + ageNeptune);
    $('#ageUranus').append("" + ageUranus);

    $('#expireEarth').append("" + expireEarth);
    $('#expireMercury').append("" + expireMercury);
    $('#expireVenus').append("" + expireVenus);
    $('#expireMars').append("" + expireMars);
    $('#expireJupiter').append("" + expireJupiter);
    $('#expireSaturn').append("" + expireSaturn);
    $('#expireNeptune').append("" + expireNeptune);
    $('#expireUranus').append("" + expireUranus);

  });
});
