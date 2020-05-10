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

    $req = $bdd->prepare('DELETE FROM customer_register WHERE id = :id AND deleted = 1');
    $req->execute(array('id' => $_GET['id']));

    header('Location: ../archives.php'); 
?>