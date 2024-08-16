// Функция для получения настроек инстанса
async function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`, {
        method: 'GET'
    });

    const data = await response.json();
    document.getElementById('apiResponse').value = JSON.stringify(data, null, 2);
}

// Функция для получения состояния инстанса
async function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`, {
        method: 'GET'
    });

    const data = await response.json();
    document.getElementById('apiResponse').value = JSON.stringify(data, null, 2);
}

// Функция для отправки сообщения
async function sendMessage() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const chatId = document.getElementById('chatId').value + '@c.us';
    const message = document.getElementById('message').value;

    const body = {
        chatId: chatId,
        message: message
    };

    const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    document.getElementById('apiResponse').value = JSON.stringify(data, null, 2);
}

// Функция для отправки файла по URL
async function sendFileByUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const chatId = document.getElementById('chatIdFile').value + '@c.us';
    const fileUrl = document.getElementById('fileUrl').value;

    const body = {
        chatId: chatId,
        urlFile: fileUrl,
        fileName: fileUrl.split('/').pop(),
        caption: "Вот файл"
    };

    const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    document.getElementById('apiResponse').value = JSON.stringify(data, null, 2);
}
