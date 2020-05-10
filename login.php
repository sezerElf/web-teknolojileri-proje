<?php

ob_start();
session_start();
$username = $_POST["username"];
$password = $_POST["password"];

<<<<<<< HEAD
$okulno_mail = "g181210080@ogr.sakarya.edu.tr" ;// or. g181210059@ogr.sakarya.edu.tr
=======
$okulno_mail = "g181210080" ;
>>>>>>> b43115d594b52ef296070e14498bb2e3e1746f8e
if(!empty($username) and !empty($password)){

    if($username==$okulno_mail and $password=="123")  {
        $_SESSION["login"] = "true";
        $_SESSION["user"] = $username;
        $_SESSION["pass"] = $password;
        echo "Hoşgeldin  &ensp;  >   &ensp;  ";echo  $username;
        header("Refresh: 2; url=index.html");
    }
    else{
        $_SESSION["login"] = "false";
        echo "Kullancı Adı veya Şifre Yanlış.<br>";
        echo "Giriş sayfasına yönlendiriliyorsunuz.";
        header("Refresh: 2; url=login.html");
    }
}else{
echo "Beklenmedik Hata! <br> Kullanıcı adı veya Parola boş olabilir";
}

 
ob_end_flush();
?>