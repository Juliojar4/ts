const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const nameInput = document.querySelector('.input-user') as HTMLInputElement;
const emailInput = document.querySelector('.input-email') as HTMLInputElement;
const passwordInput = document.querySelector('.input-password') as HTMLInputElement;
const confirmPasswordInput = document.querySelector('.input-confirm-password') as HTMLInputElement;   


form.addEventListener('submit', function (even: Event){
    even.preventDefault();
    hideErrorMessages(this);
    cheakForEmptyFilds(nameInput, emailInput, passwordInput, confirmPasswordInput);
    heveErr(nameInput, emailInput, passwordInput, confirmPasswordInput) && console.log('mandou');  
})

function cheakForEmptyFilds(...input: HTMLInputElement[]) {
    input.forEach((input) => {
        if(!input.value) {
            showErrorMessage(input,'invalido')
        };
    });
};

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((i) => i.classList.remove(SHOW_ERROR_MESSAGES));
};

function showErrorMessage(input: HTMLInputElement, mgs: string): void {
    const formFilds = input.parentElement as HTMLDivElement;
    const errorMessage = formFilds.querySelector('.error-message') as HTMLSpanElement;
    errorMessage.innerText = mgs;
    formFilds.classList.add(SHOW_ERROR_MESSAGES);
};

function heveErr(...inputs: HTMLInputElement[]) : boolean {
    let devo = true
    inputs.forEach((e) => {
        e.parentElement?.classList.forEach((e) => {
            if(e === 'show-error-message'){
                devo = false
            }
        })
    })
    return devo
}
