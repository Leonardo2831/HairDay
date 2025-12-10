import dayjs from "dayjs";

export default function initSubmitEvent(){
    const form = document.querySelector('form') as HTMLFormElement;
    const selectedDate = document.querySelector('#date') as HTMLInputElement;

    const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

    selectedDate.value = inputToday;
    selectedDate.min = inputToday;

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        console.log(data);
    });
}