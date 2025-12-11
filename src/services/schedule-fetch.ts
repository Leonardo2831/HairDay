import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export default async function scheduleFetch({ date } : { date: string}) {
    try {
        const response : Response = await fetch(`${apiConfig.baseUrl}/schedules`);
        const data = await response.json();

        const dailySchedules = data.filter((schedule : { when: string }) => 
            dayjs(date).format('YYYY-MM-DD') === dayjs(schedule.when).format('YYYY-MM-DD')
        );

        return dailySchedules;
    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar os agendamentos do dia selecionado. Tente novamente mais tarde.");
    }
}