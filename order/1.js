let makeGetRequest = async () => {
  console.log("ABOUT TO MAKE GET REQUETS");

  const coffeeType = document.querySelector("#coffeeType").value;
  const quantity = document.querySelector("#quantity").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const deliveryAddress = document.querySelector("#deliveryAddress").value;
  const city = document.querySelector("#city").value;
  const zipCode = document.querySelector("#zipCode").value;

  // http://localhost:3000/adduser?username=santosh&password=12345&email=abcd@gmail.com&mobile=123456
  const url = `http://localhost:3000/adduser?coffeeType=${coffeeType}&quantity=${quantity}&name=${name}&email=${email}&phoneNumber=${phoneNumber}&deliveryAddress=${deliveryAddress}&city=${city}&zipCode=${zipCode}`;

  console.log(url);

  // ajax call
  await fetch(url);
};

let makePostRequest = async () => {
  console.log("ABOUT TO MAKE POST REQUETS");

  const coffeeType = document.querySelector("#coffeeType").value;
  const quantity = document.querySelector("#quantity").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const deliveryAddress = document.querySelector("#deliveryAddress").value;
  const city = document.querySelector("#city").value;
  const zipCode = document.querySelector("#zipCode").value;

  const data = {
    coffeeType,
    quantity,
    name,
    email,
    phoneNumber,
    deliveryAddress,
    city,
    zipCode,
  };
  const url = "http://localhost:3000/adduser";

  console.log(url);

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
