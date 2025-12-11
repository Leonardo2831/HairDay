import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleNew({ id , name, when }: { id: number; name: string; when: dayjs.Dayjs }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, when }),
        });

        alert("Agendamento realizado com sucesso!");
    } catch (error) {
        alert("Não foi possível realizar o agendamento. Tente novamente mais tarde.");
        console.log(error);
    }
}