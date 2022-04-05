window.onload = function () {
    const calc = document.querySelector('#calc');
    const percent = document.querySelector('#calc span');
    const result = document.querySelector('#result');

    calc.rate.addEventListener('input', function () {
        percent.innerHTML = calc.rate.value;
    });

calc.calculate.addEventListener('click', function(e) {
e.preventDefault;
const res = calc.amount.value / 100 * calc.rate.value * +calc.years.value;
const year = 2022 + +calc.years.value;

result.innerHTML = `<p>If your deposit <mark>${calc.amount.value}</mark>, at an interest rate of <mark>${calc.rate.value}%</mark>.
You will receive an amount of <mark>${res}</mark>, in the year <mark>${year}</mark>.</p>`;
result.classList.remove('off');
result.classList.add('on');
});
}