import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";

export default function initSubmitEvent(){
    const form = document.querySelector('form') as HTMLFormElement;
    const selectedDate = document.querySelector('#date') as HTMLInputElement;
    const clientName = document.querySelector('#client') as HTMLInputElement;

    const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

    selectedDate.value = inputToday;
    selectedDate.min = inputToday;

    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        try {
            const name : string = clientName.value;
            
            if(!name) return alert('Informe o nome do cliente');

            const hourSelected = document.querySelector('.hour-selected') as HTMLInputElement;
            
            if(!hourSelected) return alert('Selecione um horário');

            const [hour] : string[] = hourSelected.innerText.split(':');

            const when = dayjs(selectedDate.value).add(Number(hour), 'hour');

            const id : number = new Date().getTime();

            await scheduleNew({ id, name, when });

        } catch(error) {
            alert("Não foi possível realizar o agendamento. ");

            console.log(error);
        }
    });
}