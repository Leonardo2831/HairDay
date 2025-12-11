import { apiConfig } from "./api-config";

export default async function scheduleCancel({ id } : { id : string }){
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: 'DELETE',
        });

        if(!response.ok) throw new Error('Falha ao cancelar agendamento');

        alert("Agendamento cancelado com sucesso!");
    } catch (error) {
        console.log(error);
        alert('Não foi possível cancelar o agendamento.');
    }
}