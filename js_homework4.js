function checkProbabilityTheory(count) {
    let odd = 0;   // кількість непарних
    let even = 0;  // кількість парних

    for (let i = 0; i < count; i++) {
        let rnd = Math.random(); // 0..1
        rnd *= 901;              // 0..900.999...
        rnd = Math.floor(rnd);   // 0..900
        rnd += 100;              // 100..1000 (включно)

        if (rnd % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + even);
    console.log("Непарних чисел: " + odd);

    let evenPercent = even / count * 100;
    let oddPercent = odd / count * 100;

    console.log("Відсоток парних: " + evenPercent.toFixed(2) + "%");
    console.log("Відсоток непарних: " + oddPercent.toFixed(2) + "%");
}

checkProbabilityTheory(1000);
