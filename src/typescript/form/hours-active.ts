export default function hoursActive(){
    const hours = document.querySelectorAll('.hour-available');

    hours.forEach((available) => {
        available.addEventListener('click', (event : Event) => {
            hours.forEach((header) => {
                header.classList.remove('hour-selected');
            });
            
            (event.currentTarget as HTMLElement)?.classList.add('hour-selected');
        });
    });
}