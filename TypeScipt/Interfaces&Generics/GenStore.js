var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.genArr = [];
    }
    GenericStorage.prototype.add = function (item) {
        this.genArr.push(item);
    };
    GenericStorage.prototype.remove = function (item) {
        this.genArr = this.genArr.filter(function (i) { return i !== item; });
        console.log(this.genArr);
    };
    GenericStorage.prototype.getAll = function () {
        return this.genArr;
    };
    return GenericStorage;
}());
var gs1 = new GenericStorage();
gs1.add(1);
gs1.add(2);
gs1.add(3);
gs1.add(4);
gs1.add(5);
console.log(gs1.getAll());
gs1.remove(2);
var gs2 = new GenericStorage();
gs2.add("AbC");
gs2.add("DEF");
gs2.add("GHI");
gs2.add("PQR");
gs2.add("XYZ");
console.log(gs2.getAll());
gs2.remove("GHI");
