<?php 
    include '../config.php';
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

    <?php if(!isset($_POST['password'])){ //First loading of the admin panel page?>
    <div class="login">
        <div class="header-group">
            <div class="header">Panel</div>
            <div class="header">Admin</div>
        </div>
        <form action="index.php" method="post">
            <input type="password" class="form-control password" name="password" placeholder="password" required>
            <button type="submit" class="btn btn-dark">Connect</button>
        </form>
    </div>

    <?php
        } else if(isset($_POST['password']) && $_POST['password'] != $panelPwd) { //if the password is false, show the same page but with an error message
    ?>


    <div class="login">
        <div class="header-group">
            <div class="header">Panel</div>
            <div class="header">Admin</div>
        </div>
        <form action="index.php" method="post">
            <input type="password" class="form-control password" name="password" placeholder="password" required>
            <button type="submit" class="btn btn-dark">Connect</button>
        </form>
    </div>

    <h3>ACCES REFUSE</h3>

    <?php
} else if(isset($_POST['password']) && $_POST['password'] == $panelPwd) {  //if the password is true, show the mailbox
        ?>

    <div class="container-fluid">
        <h2>Boite de réception</h2>
    </div>
    <div class="container">

        <div class="row justify-content-center result-box">
            <div class="col-12">
                <div class="row result-title">
                    <div class="col-2">Nom </div>
                    <div class="col-3">Email</div>
                    <div class="col-3">Objet</div>
                    <div class="col-2">Provenance</div>
                    <div class="col-2">Date</div>
                </div>

                <!-- result php -->
                <?php
    
                    try {
                        // connecting to MySQL
                        $bdd = new PDO('mysql:host='.$dbHost.';dbname='.$dbName.';port='.$dbPort.';charset=utf8', $dbLogin, $dbPwd, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
                    }
                    catch(Exception $e) {
                         // In case of error, show the message
                          die('Erreur : '.$e->getMessage());
                    }

                    $req = $bdd->prepare('SELECT name, email, subject, origin, date, id FROM mail ORDER BY id DESC');
                    $req->execute();

                        while ($donnees = $req->fetch())
                        { 
                ?>
                <!-- code html -->
                <a href="read.php?id=<?php echo $donnees['id'];?>">
                    <div class="row result-line">
                        <div class="col-2"> <?php echo $donnees['name']; ?> </div>
                        <div class="col-3"> <?php echo $donnees['email']; ?></div>
                        <div class="col-3"> <?php echo $donnees['subject']; ?></div>
                        <div class="col-2"> <?php echo $donnees['origin']; ?></div>
                        <div class="col-2"> <?php echo $donnees['date']; ?></div>
                    </div>
                </a>

                <?php
                        }
                        $req->closeCursor();
                ?>

            </div>
        </div>


    </div>

    <?php
        }
    ?>
</body>

</html>
