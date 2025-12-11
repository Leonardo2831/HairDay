import scheduleCancel from "../../services/schedule-cancel";
import scheduleLoad from "./load";

const periods = document.querySelectorAll('.period') as NodeListOf<HTMLUListElement>;

periods.forEach(period => {
    period.addEventListener('click', async (event : Event) => {
        if((event.target as HTMLImageElement).classList.contains('cancel-icon')){
            
            const item = (event.target as HTMLImageElement).closest('li');

            if(!item) return;

            const { id } = item.dataset;

            if(id){
                const isConfirm : boolean = confirm('Tem certeza que deseja cancelar este agendamento?');

                if(isConfirm){
                    await scheduleCancel({ id : Number(id) });

                    await scheduleLoad();
                }
            }
        }
    });
});
