/*-==VARIABLES==-*/
const input = document.querySelector('form input'),
counter= document.querySelector('form .counter'),
maxLength = input.getAttribute('maxlength');

/*-==ARROW FUNCTION TO SUBTRACT VALUE VISIBLE IN INPUT==-*/
input.onkeyup = () => {
    counter.innerText = maxLength - input.value.length;
}