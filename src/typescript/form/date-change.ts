import scheduleLoad from "../schedules/load";

const selectedDate = document.querySelector('#date') as HTMLInputElement;

selectedDate.addEventListener('change', () => {
    scheduleLoad();
});