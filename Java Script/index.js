function updateTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss SS [<small>]A[</small>]"
  );

  //kampala
  let kampalaElement = document.querySelector("#kampala");
  let kampalaDateElement = kampalaElement.querySelector(".date");
  let kampalaTimeElement = kampalaElement.querySelector(".time");
  let kampalaTime = moment().tz("Africa/Kampala");

  kampalaDateElement.innerHTML = kampalaTime.format("MMMM	Do YYYY");
  kampalaTimeElement.innerHTML = kampalaTime.format(
    "h:mm:ss SS [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss SS [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
