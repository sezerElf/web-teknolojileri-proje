var info = JSON.parse(sessionStorage.getItem("informations"));

document.getElementById("nameSurname").innerText = info[0].nameSurname;
document.getElementById("mail").innerText = info[0].mail;
document.getElementById("topic").innerText = info[0].topic;
document.getElementById("message").innerText = info[0].message;
