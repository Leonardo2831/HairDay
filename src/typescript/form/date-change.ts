import hoursLoad from "./hours-load";

const selectedDate = document.querySelector('#date') as HTMLInputElement;

selectedDate.addEventListener('change', () => {
    const date = selectedDate.value;
    hoursLoad({ date });
});