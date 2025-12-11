import hoursLoad from "../form/hours-load";
import scheduleFetch from "../../services/schedule-fetch";
import scheduleShow from "./show";

export default async function scheduleLoad(){
    const selectedDate = document.querySelector('#date') as HTMLInputElement;
    const date : string = selectedDate.value;

    const dailySchedules = await scheduleFetch({ date });
    scheduleShow({ dailySchedules });

    hoursLoad({ date, dailySchedules });
}