var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var boy = {
    name: "dell",
    //   age: 18,
    sex: "male",
    say: function () {
        return "hi";
    },
    teach: function () {
        return "teach";
    }
};
// 直接傳 { name: "dell",sex: "male",} 會報錯,TS會嚴格檢查,或加入  [propName: string]: any;
getPersonName(boy);
setPersonName(boy, "lee");
// 類 class 用介面去約束屬性，語法 implements
var User_8 = /** @class */ (function () {
    function User_8() {
        //   sex: "male";
        this.name = "dell";
    }
    User_8.prototype.say = function () {
        return "hel";
    };
    return User_8;
}());
// 用 sayHi 介面去約束函式
var say_8 = function (word) {
    return word;
};
