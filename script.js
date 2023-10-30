const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerHTML);

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tipPercentage = Number(tipInput.value) / 100;
  const tipAmount = bill * tipPercentage;
  const total = tipAmount + bill;

  const perPersonTotal = total / numberOfPeople;
  console.log({ perPersonTotal });
};
