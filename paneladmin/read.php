<?php
    include '../config.php';
    try {
        // connecting to MySQL
        $bdd = new PDO('mysql:host='.$dbHost.';dbname='.$dbName.';port='.$dbPort.';charset=utf8', $dbLogin, $dbPwd, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
    catch(Exception $e) {
         // In case of error, show the message
         die('Erreur : '.$e->getMessage());
    }
?>

<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Boite de réception</title>
</head>

<body>

    <div class="container-fluid">
        <h2>Boite de réception</h2>
    </div>

    <?php 
        $req = $bdd->prepare('SELECT name, email, subject, origin, date, message, id FROM mail WHERE id = ?'); //Show the message of the email cliked
        $req->execute(array($_GET['id']));
    
    while ($donnees = $req->fetch())
                        { 
    ?>

    <div class="container">
        <div class="row">
            <div class="col-12 reading-box">
                <div class="mail-header">
                    <div class="row element-title">
                        <div class="col-6">
                            <span class="strong">Nom:</span> <?php echo $donnees['name']; ?>
                        </div>
                        <div class="col-6">
                            <span class="strong">Email:</span> <?php echo $donnees['email']; ?>
                        </div>
                    </div>
                    <div class="row element-title">
                        <div class="col-6">
                            <span class="strong">Provenance:</span> <?php echo $donnees['origin']; ?>
                        </div>
                        <div class="col-6">
                            <span class="strong">Date:</span> <?php echo $donnees['date']; ?>
                        </div>
                    </div>
                </div>
                <div class="row element-title">
                    <div class="col-12">
                        <span class="strong">Objet:</span> <?php echo $donnees['subject']; ?>
                    </div>
                </div>
                <div class="row element-title">
                    <div class="col-12 text-justify">
                        <span class="strong">Message:</span> <span><?php echo nl2br($donnees['message']); ?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <?php
        }
    ?>

</body>

</html>
