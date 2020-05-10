<<<<<<< HEAD
import Information from "./information.js";

window.sendInfo = sendInfo;
window.temizle = temizle;

function temizle() {
  document.getElementById("nameSurname").value = null;
  document.getElementById("mail").value = null;
  document.getElementById("topic").value = null;
  document.getElementById("message").value = null;
}

function sendInfo() {
  let nameSurname = document.getElementById("nameSurname").value;
  let mail = document.getElementById("mail").value;
  let topic = document.getElementById("topic").value;
  let message = document.getElementById("message").value;

  let info = new Information(nameSurname, mail, topic, message);
  Information.informations.push(info);

  sessionStorage.setItem(
    "informations",
    JSON.stringify(Information.informations)
  );

  window.open("iletisim.html", "_blank");
}
=======
function temizle() {
    document.getElementById("form1").value = null;
    document.getElementById("form2").value = null;
    document.getElementById("form3").value = null;
    document.getElementById("form4").value = null;
}
function login_check() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || username == null) {
        alert("Kullanıcı adı boş olamaz.");
        return false;
    }
    else if (password == "" || username==null) {
        alert("Şifre boş olamaz");
        return false;
    }
    else {
        return true
    }
}
>>>>>>> b43115d594b52ef296070e14498bb2e3e1746f8e
