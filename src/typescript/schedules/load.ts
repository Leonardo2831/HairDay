import initHoursLoad from "../form/hours-load";

export default function initScheduleLoad(){
    const selectedDate = document.querySelector('#date') as HTMLInputElement;
    const date : string = selectedDate.value;

    initHoursLoad({ date });
}