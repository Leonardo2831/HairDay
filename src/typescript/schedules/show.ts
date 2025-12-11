import dayjs from "dayjs";

const periodMorning = document.querySelector('#period-morning') as HTMLDivElement;
const periodAfternoon = document.querySelector('#period-afternoon') as HTMLDivElement;
const periodEvening = document.querySelector('#period-night') as HTMLDivElement;

export default function scheduleShow({ dailySchedules }: { dailySchedules: { id: string; name: string; when: string; }[] }) {
    
    try {
        periodMorning.innerHTML = '';
        periodAfternoon.innerHTML = '';
        periodEvening.innerHTML = '';

        dailySchedules.forEach((schedule) => {
            const li = document.createElement('li');
            const time = document.createElement('strong');
            const name = document.createElement('span');

            li.setAttribute('data-id', schedule.id);

            time.textContent = dayjs(schedule.when).format('HH:mm');
            name.textContent = schedule.name;

            const cancelIcon = document.createElement('img');
            cancelIcon.classList.add('cancel-icon');
            cancelIcon.setAttribute('src', './src/assets/cancel.svg');
            cancelIcon.setAttribute('alt', 'Cancelar');

            li.append(time, name, cancelIcon);

            const hour = dayjs(schedule.when).hour();
            
            if(hour < 12) {
                periodMorning.appendChild(li);
            } else if(hour < 18) {
                periodAfternoon.appendChild(li);
            } else {
                periodEvening.appendChild(li);
            }
        });

    } catch (error) {
        console.log(error);
        alert("Não foi possível exibir os agendamentos do dia selecionado. Tente novamente mais tarde.");
    }
}