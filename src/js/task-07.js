const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.addEventListener('input', () => {
    const fontSize = inputRef.value + 'px';
    textRef.style.fontSize = fontSize;
})