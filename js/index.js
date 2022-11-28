(() => {
    const projectTypeSelectNode = document.getElementById('calculator-project-type');
    const calculatorPriceNode = document.getElementById('calculator__price');
    const calculatorSquareNode = document.getElementById('calculator-square');

    const calculate = (e) => {
        const multiplierValue = e?.target.id === 'calculator-square' ? e.target.value : calculatorSquareNode.value;
        const PRICES = {
            full: 4000,
            dendro: 1000,
            engineering: 2000
        }; 
        calculatorPriceNode.innerHTML = PRICES[projectTypeSelectNode.value] * multiplierValue;
    };

    calculatorSquareNode.addEventListener('input', calculate);
    projectTypeSelectNode.addEventListener('change', calculate);
    
    calculate();
})();
