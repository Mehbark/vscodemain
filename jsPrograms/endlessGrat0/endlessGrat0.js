let totalMoney  = 0;
let moneyPerAct = 1;
let level = 1;

let currencyList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let currency = "1";
let prestige = 1;

function updateMoney() {
  document.getElementById("totalMoney").innerHTML = `${totalMoney} $${currency}`;
}

function makeMoney() {
  totalMoney += moneyPerAct;
  totalMoney = Math.ceil(totalMoney);
  updateMoney();
}

function upgrade1() {
  if (totalMoney >= level * 10) {
    totalMoney -= level * 10;
    level += 1;
    moneyPerAct *= 1.1;
    updateMoney();
    document.getElementById("upgrade").innerHTML = `Level ${
      level + 1
    }: Increases Profits by 10 Percent! (${level * 10})`;
  }
}

function getCurrencyName(prestige) {
  /*return currencyList[prestige - 26 * Math.floor(prestige / 26)].repeat(
    Math.floor(prestige / 26) + 1
  );*/
  /*return parseInt(prestige.toString(10), 36);*/
  return prestige;
}

function prestige1() {
  if (totalMoney >= /*1000000000*/0) {
    prestige++;
    currency = getCurrencyName(prestige);
    totalMoney  = 0;
    moneyPerAct = prestige;
    level = 1;
    document.getElementById("upgrade").innerHTML = `Level ${
      level + 1
    }: Increases Profits by 10 Percent! (${level * 10})`;
    document.getElementById(
      "prestige"
    ).innerHTML = `Prestige to ${getCurrencyName(
      prestige + 1
    )} (10000000000)`;
    updateMoney();
  }
}
