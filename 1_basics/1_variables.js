const accountId = 34895
let accountEmail = "mayank@google.com"
var accountPassword = "12345"
accountCity = "Chandpur"    // this way of declare variables is not good.

console.log(accountId);

// accountId = 2    //it is not allowed, const value can't change, but others can change.

accountEmail = "me@google.com"
accountPassword = "54321"
accountCity = "ChaandKePaar"

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
prefer not to use 'var' beacause of issue in block scope and functional scope
*/