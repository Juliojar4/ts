// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!)
const body2 = document.querySelector('body')!; // Tendo certeza da existencia do Body
body2.style.background = 'red';

// Type assertion 
const body3 = document.querySelector('body') as HTMLBodyElement // Assume que o elemento é HTMLBodyElement assim facilitando o reconhecimento
body3.style.background = 'red';

// HTMLElemente 
const input = document.querySelector('.input') as HTMLInputElement // Mesma coisa, comento com o elemento Input
input.value = 'Qualquer coisa';
input.focus();

