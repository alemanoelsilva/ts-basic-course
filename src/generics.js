var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var userA = {
    name: 'Ale',
    data: {
        header: 'teste',
        url: 'teste',
        requestType: 'teste',
        count: 2
    },
    actions: [1, 2, 3, 4]
};
var result = addId(userA);
// const resultA = addId('userA') // worng
console.log('result', result);
