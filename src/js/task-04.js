let counterValue = 0;
const valueRef = document.getElementById('value');
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

const onClickDecrementBtn = (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

const onClickIncrementBtn = (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};


