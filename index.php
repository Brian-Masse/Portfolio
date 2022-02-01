<?php
    include_once "PHP-files/connection.php";
    include_once "PHP-files/dataManager.php";
    include_once "PHP-files/entryCreator.php";
    
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Brian Masse's Porfoliossss</title>

        <link rel="stylesheet" href="CSS-files/Universals.css">
        <link rel="stylesheet" href="Packages/CSS/prism.css">

        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="JS-files/Universals.js" defer></script>
        <!-- <script type="text/javascript" src="JS files/EntryManager.js"></script> -->
        <script type="text/javascript" src="JS-files/EntryCreater.js"></script>

        <!-- <script src="Packages/JS/prism.js" defer></script> -->
        
        <link rel="shortcut icon" type="image/png" href="Images/favicon.png" />
        <link rel="apple-touch-icon"" type="image/png" href="Images/temp.png" />

    </head>

    <body bgcolor="rgb(37, 150, 190)"> 

        <div class="entryCount empty"><?php echo returnEntryCount(); ?></div>

        <h1 class="glow"> _BRIAN MASSE PRESENTS:</h1>
        <h3 class="glow"> $CSC630: DATA VISUALIZATION</h3>

        <ui></ui>

        <form method="GET">
            <button type="submit" name="createNewEntry" value="createNewEntry" class="clickableText"> CREATE </button>
        </form>

    </body>

</html>

