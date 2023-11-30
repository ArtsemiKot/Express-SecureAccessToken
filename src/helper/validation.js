function isValidUserBody(req, res, next) {
    const { name, surname, email, pwd } = req.body;

    if (!name) throw new Error('Имя отсутствует');
    if (!surname) throw new Error('Фамилия отсутствует');
    if (!email) throw new Error('Почта отсутствует');
    if (!pwd) throw new Error('Пароль отсутствует');
    if (!isNaN(name)) throw new Error('Имя должно быть строка');
    if (!isNaN(surname)) throw new Error('Фамилия должна быть строка');
    if (pwd.length < 8) throw new Error('Пароль должен быть больше 8-ми символов');
    if (!/^[\w\W]+@+[a-z]+\.+[a-z]{2,4}$/gm.test(email)) throw new Error('Неверный ввод почты');


    next();
}

module.exports = { isValidUserBody };