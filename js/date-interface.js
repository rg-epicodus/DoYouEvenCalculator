import {GalacticDate} from './../js/date.js';

$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();

    let age = $('#ageEntered').val();
    let date = $('dateEntered').val();
    let currentDate = new Date();
    let gender = $("#gender").val();
    let location = $("#location").val();
    let test = new GalacticDate(age, date);
    let ageEarth = test.ageIfOnEarth(age);
    let ageMercury = test.ageIfOnMercury(age);
    let ageVenus = test.ageIfOnVenus(age);
    let ageMars = test.ageIfOnMars(age);
    let ageJupiter = test.ageIfOnJupiter(age);
    let ageSaturn = test.ageIfOnSaturn(age);
    let ageNeptune = test.ageIfOnNeptune(age);
    let ageUranus = test.ageIfOnUranus(age);

    $('#ageEarth').append("<li>" + ageEarth + "</li>");
    $('#ageMercury').append("<li>" + ageMercury + "</li>");
    $('#ageVenus').append("<li>" + ageVenus + "</li>");
    $('#ageMars').append("<li>" + ageMars + "</li>");
    $('#ageJupiter').append("<li>" + ageJupiter + "</li>");
    $('#ageSaturn').append("<li>" + ageSaturn + "</li>");
    $('#ageNeptune').append("<li>" + ageNeptune + "</li>");
    $('#ageUranus').append("<li>" + ageUranus + "</li>");

    $('#expireEarth').append("<li>" + expireEarth + "</li>");
    $('#expireMercury').append("<li>" + expireMercury + "</li>");
    $('#expireVenus').append("<li>" + expireVenus + "</li>");
    $('#expireMars').append("<li>" + expireMars + "</li>");
    $('#expireJupiter').append("<li>" + expireJupiter + "</li>");
    $('#expireSaturn').append("<li>" + expireSaturn + "</li>");
    $('#expireNeptune').append("<li>" + expireNeptune + "</li>");
    $('#expireUranus').append("<li>" + expireUranus + "</li>");

  });
});
