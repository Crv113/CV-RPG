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
    <link rel="stylesheet" href="css/index.css">
    <title>Registre Clients</title>
</head>

<body>
    <div class="container-fluid">
        <h2>Archives des clients retirés du registre</h2>
        <div class="row justify-content-center">
            <div class="col-10" id="archivesBox">
                <div class="row text-center">
                    <div class="col-2">
                        <a href="index.php" class="btn btn-dark"> Retour </a>
                    </div>
                    <div class="col-8">
                        <h3 class="text-danger">La suppression des archives sera irréversible</h3>
                    </div>
                    <div class="col-2">
                        <a href="scripts/perm_deleteall.php" id="deleteAllBtn" class="btn btn-danger"> Tout supprimer </a>
                    </div>
                </div>
                
                <?php
                    $req = $bdd->prepare('SELECT name, first_name, address, postal_code, city, country, email, id FROM customer_register WHERE deleted = 1');
                    $req->execute();
                    while ($donnees = $req->fetch())
                    {
                ?>


                <div class="row justify-content-center resultBox">

                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6">Nom: <?php echo $donnees['name']; ?></div>
                            <div class="col-md-4">Prénom: <?php echo $donnees['first_name']; ?> </div>
                            <div class="col-md-2 text-right">
                                <a href="scripts/restaure.php?id=<?php echo $donnees['id'];?>" id="restaureBtn" class="btn btn-secondary restaureBtn"> Restaurer </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">Adresse: <?php echo $donnees['address']; ?> </div>
                            <div class="col-md-4">Code Postal: <?php echo $donnees['postal_code']; ?> </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">ville: <?php echo $donnees['city'];  ?></div>
                            <div class="col-md-4">Pays: <?php echo $donnees['country']; ?></div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">Email: <?php echo $donnees['email']; ?></div>
                            <div class="col-md-2 text-right">
                                <a href="scripts/perm_delete.php?id=<?php echo $donnees['id']?>" class="btn btn-danger deleteBtn"> Supprimer </a>
                            </div>
                        </div>
                    </div>
                </div>

                <?php
        }
    ?>
            </div>
        </div>
                
    </div>
</body>

</html>
