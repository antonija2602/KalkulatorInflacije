function inflationCalculator() {
    const inflationRate = document.getElementById("inflation-rate")
    const money = document.getElementById("money")

    inflationRate = parseFloat(inflationRate.value)
    money = parseFloat(money.value)

    const years = document.getElementById("years").value
    years = parseFloat(years)

    let worth = money + money * (inflationRate / 100)

    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100)
    }

    const result = document.getElementById("result")
    result.innerText = `${worth.toFixed(2)} €`
    console.log(result)
    // let recenica = document.querySelector("label")
    // recenica.innerText = `Danasnjih ${money} eura vrijedi isto kao ${worth.toFixed(
    //     2
    // )} eura prije ${years} godina.`
    // console.log(recenica)
}
