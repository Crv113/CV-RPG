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
  
    $req = $bdd->prepare('UPDATE customer_register SET name = :editName, first_name = :editFirstName, address = :editAddress, postal_code = :editPostalCode, city = :editCity, country = :editCountry, email = :editEmail WHERE id = :editId');
    $req->execute(array(
        'editName' => $_POST['editInputName'],
        'editFirstName' => $_POST['editInputFirstName'],
        'editAddress' => $_POST['editInputAddress'],
        'editPostalCode' => $_POST['editInputPostalCode'],
        'editCity' => $_POST['editInputCity'],
        'editCountry' => $_POST['editInputCountry'],
        'editEmail' => $_POST['editInputEmail'],
        'editId' => $_POST['editId']
    ));
   
    
    header('Location: ../index.php'); 
?>