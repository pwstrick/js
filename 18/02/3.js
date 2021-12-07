function lemonadeChange(bills) {
  let five = 0,		//5元纸币数量
    ten = 0;		//10元纸币数量
  for (let bill of bills) {
    switch (bill) {
      case 5:
        five++;				//增加5元纸币数量
        break;
      case 10:
        if (five > 0) {		//有5元才纸币能找零
          five--;
        } else {
          return false;
        }
        ten++;
        break;
      case 20:
        if (five > 0 && ten > 0) {		//用5元和10元两种纸币找零
          five--;
          ten--;
        } else if (five >= 3) {			//用3张5元纸币找零
          five -= 3;
        } else {
          return false;
        }
        break;
    }
  }
  return true;
}

console.log("[5,5,5,10,20]", lemonadeChange([5,5,5,10,20]));
console.log("[5,5,10]", lemonadeChange([5,5,10]));
console.log("[10,10]", lemonadeChange([10,10]));
console.log("[5,5,10,10,20]", lemonadeChange([5,5,10,10,20]));

