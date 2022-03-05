// Задача 2. Вывод информации о дате

function getDayInfo(date) {
    let arrDays = [
        'Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
    ];

    let arrMonths = [
        'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
    ];

    let selectDay = date.substring(0, 2);
    let selectMonth = date.substring(3, 5);
    let selectYear = date.substring(6, 10);

    let newDate = selectMonth + '.' + selectDay + '.' + selectYear;

    let selectDate = new Date(newDate);

    let year = selectDate.getFullYear();
    let month = selectDate.getMonth();
    let day = selectDate.getDate();
    let dayWeek = selectDate.getDay();
    let week = Math.ceil(day / 7);

    console.log(`${arrDays[dayWeek]}, ${week} неделя ${arrMonths[month]} ${year} года`);
}

let result = '11.03.2022';
getDayInfo(result);