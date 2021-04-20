function SendMail ()
{
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const topic = document.getElementById("topic").value;
    const msg = document.getElementById("message").value;

    if (name.toString() === "" && mail.toString() === "" && msg.toString() === "")
        alert("Некоторые из этих данных не указаны: имя, почта, сообщение");
    else
        alert("Уважаемый " + name + "! Ваше сообщение успешно отправлено и наши специалисты свяжутся с Вами.");
}