<?php
    include '../../config.php';

   try {
        // connecting to MySQL
        $bdd = new PDO('mysql:host='.$dbHost.';dbname='.$dbName.';port='.$dbPort.';charset=utf8', $dbLogin, $dbPwd, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
    catch(Exception $e) {
         // In case of error, show the message
          die('Erreur : '.$e->getMessage());
       }



    $req = $bdd->prepare('INSERT INTO customer_register (name, first_name, address, postal_code, city, country, email) VALUES(?, ?, ?, ?, ?, ?, ?)');
    $req->execute(array($_POST['newInputName'], $_POST['newInputFirstName'], $_POST['newInputAddress'], $_POST['newInputPostalCode'], $_POST['newInputCity'], $_POST['newInputCountry'], $_POST['newInputEmail']));
    
    header('Location: ../index.php'); 
?>