var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    }
];

var trustedEmails = [];

var re = /^[a-z0-9.]+@[a-z0-9.]+$/i;

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;

    
    if (re.test(email)) {

    
        if (
            email.indexOf("gmail.com") !== -1 ||
            email.indexOf("yahoo.com") !== -1
        ) {
            trustedEmails.push(email);
        }
    }
}

console.log(trustedEmails);

// ====== TASK 2 ======
// 6+ symbols without letter A/a

var text = "Wonderful Joyful Happiness Time Task Apple";
var reNoA = /\b[^aA\s]{6,}\b/g;

console.log("Words without A/a:", text.match(reNoA));