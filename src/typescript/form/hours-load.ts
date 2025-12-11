import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import hoursActive from "./hours-active";

export default function hoursLoad({ date }: { date: string }) {
    const opening : { hour: string; available: boolean }[] = 
    openingHours.map((hour) => {
        const [scheduleHour] : string[] = hour.split(':');

        const isHourPast : boolean = dayjs(date).add(Number(scheduleHour), 'hour').isAfter(dayjs());

        return {
            hour,
            available: isHourPast,
        };
    });

    const hours = document.querySelector('#hours') as HTMLUListElement;
    hours.innerHTML = '';

    function hourHeaderAdd(title : string){
        const header = document.createElement('li');

        header.classList.add('hour-period');
        header.textContent = title;

        hours.append(header);
    }

    opening.forEach(({ hour, available }) => {
        const li = document.createElement('li');

        li.classList.add('hour');
        li.classList.add(available ? 'hour-available' : 'hour-unavailable');

        li.textContent = hour;

        if(hour === "09:00"){
            hourHeaderAdd('Manhã');
        } else if (hour === "13:00"){
            hourHeaderAdd('Tarde');
        } else if (hour === "18:00"){
            hourHeaderAdd('Noite');
        }

        hours.appendChild(li);
    });

    hoursActive();
}