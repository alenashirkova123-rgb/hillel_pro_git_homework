var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function () {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === "string") {
                total += parseFloat(this[key]);
            }
        }
        return total + " грн";
    },

    minPrice: function () {
        let min = Infinity;

        for (let key in this) {
            if (typeof this[key] === "string") {
                let value = parseFloat(this[key]);
                if (value < min) {
                    min = value;
                }
            }
        }
        return min + " грн";
    },

    maxPrice: function () {
        let max = -Infinity;

        for (let key in this) {
            if (typeof this[key] === "string") {
                let value = parseFloat(this[key]);
                if (value > max) {
                    max = value;
                }
            }
        }
        return max + " грн";
    }
};

services["Розбити скло"] = "200 грн";

console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());
