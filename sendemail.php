<?php
    include 'config.php';
   try {
         // connecting to MySQL
        $bdd = new PDO('mysql:host='.$dbHost.';dbname='.$dbName.';port='.$dbPort.';charset=utf8', $dbLogin, $dbPwd, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        }
    catch(Exception $e) {
         // In case of error, show the message
          die('Erreur : '.$e->getMessage());
       }

    $req = $bdd->prepare('INSERT INTO mail (name, email, subject, message, origin) VALUES(?, ?, ?, ? ,?)');
    $req->execute(array($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'], "adriencorvisier.fr"));
    
    header('Location: index.html'); 
?>
