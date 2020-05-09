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