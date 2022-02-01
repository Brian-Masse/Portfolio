<?php
    session_start();
    include_once "PHP-files/connection.php";
    include "PHP-files/dataManager.php";
    include "PHP-files/entryNumberManager.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS-files/Universals.css">
    <link rel="stylesheet" href="CSS-files/EntryFormatting.css">


    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="Packages/JS/jquery.fittext.js"></script>
    <script type="text/javascript"src="JS-files/EntryManager.js"></script>
</head>

<body bgcolor="rgb(37, 150, 190)">           

<!--     
    <form action="PHP files/uploader.php" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="placementIndex" value="1">
        <input type="file" name="entryImage">
        <button type="submit" name="submitEntryImage" value="submitEntryImage">CHANGE CURRENT IMAGE</button>
    </form>

    <form action="PHP files/uploader.php" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="placementIndex" value="1">
        <button type="submit" name="deleteEntryImage" value="deleteEntryImage">DELETE CURRENT IMAGE</button>
    </form>
 -->

    <p contentEditable="true" class="entryID empty"> <?php echo $_SESSION[ "currentEntry" ] ?> </p>
    <p class="imageCount empty">  <?php echo returnImageCount($_SESSION[ "currentEntry" ]) ?> </p>    


    <div class = "glow date" contentEditable="true"> <?php retrieveData( "date", $_SESSION[ "currentEntry" ] ); ?> </div>

    <div class="title-container">
        <h1 class = "glow title title-top" contentEditable="true"><?php retrieveData( "title", $_SESSION[ "currentEntry" ] ); ?></h1>
        <div class="title-bottom-parent">
            <h1 class = "glow title title-bottom title2" contentEditable="true"><?php retrieveData( "title2",$_SESSION[ "currentEntry" ] ); ?></h1>
            <p class = "description" contentEditable="true"><?php retrieveData( "description", $_SESSION[ "currentEntry" ] ); ?></p>
        </div>
    </div>


    <div class="naviagation">
        <a href = "index.php" class="clickableText navigationText">back</a>
        <form action="PHP files/uploader.php" method="POST" onclick="updatePlacementIndex()" enctype="multipart/form-data" class="form inline">
            <input type="hidden" name="placementIndex" class="placementIndexInput" value="1">
            <input type="file" id="file" name="entryImage" class="empty">
            <label for="file" class=" navigationText clickableText ">Browse</label>
            <button type="submit" name="submitEntryImage" value="submitEntryImage" class="clickableText">SUBMIT</button>
        </form>
        <form onclick="updateSaveButton()" class="inline">
            
            <input type="hidden" name="description" value="" class="descriptionInput">
            <input type="hidden" name="title" value="" class="titleInput">
            <input type="hidden" name="title2" value="" class="title2Input">
            <input type="hidden" name="date" value="" class="dateInput">

            <input type="hidden" name="data1" value="" class="data1Input">
            <input type="hidden" name="data2" value="" class="data2Input">
            <input type="hidden" name="data3" value="" class="data3Input">
            <input type="hidden" name="data4" value="" class="data4Input">
            
            <button type="submit" name="saveChanges" value="submit" class="clickableText navigationText" >save</button>
        </form>
    </div>
    
    
    <div class="no-wrap-flex-container">
        <div class="fullGallery-container">
            <!-- <div class="gallery-container">
                <div class="clickFlip-content">
                    <div class="hover3D-content">
                        <div class="clickFlip-content-front hoverGlow-content gallery rounded shadowed">
                        </div>
                        <div class="clickFlip-content-back rounded">back</div>
                    </div>
                </div>
            </div>     -->
        </div>



        <div class="data-container">

            <div class="data-flex-container data-front">
                <div class="hoverBox-container">
                    <div class = "hoverBox-content"> 
                        <div class = "hoverBox-face hoverBox-side-left"> </div>
                        <div class = "hoverBox-face hoverBox-side-right"> </div>
                        <div class = "hoverBox-face hoverBox-top data1" contentEditable="true"><?php retrieveData( "data1", $_SESSION[ "currentEntry" ] ); ?> </div>
                    </div>
                </div>

                <div class="hoverBox-container">
                    <div class = "hoverBox-content"> 
                        <div class = "hoverBox-face hoverBox-side-left"> </div>
                        <div class = "hoverBox-face hoverBox-side-right"> </div>
                        <div class = "hoverBox-face hoverBox-top data2" contentEditable="true"><?php retrieveData( "data2",$_SESSION[ "currentEntry" ] ); ?> </div>
                    </div>
                </div>
            </div>

            <div class="data-flex-container data-back">
                <div class="hoverBox-container">
                    <div class = "hoverBox-content"> 
                        <div class = "hoverBox-face hoverBox-side-left"> </div>
                        <div class = "hoverBox-face hoverBox-side-right"> </div>
                        <div class = "hoverBox-face hoverBox-top data3" contentEditable="true"><?php retrieveData( "data3", $_SESSION[ "currentEntry" ] ); ?> </div>
                    </div>
                </div>

                <div class="hoverBox-container">
                    <div class = "hoverBox-content"> 
                        <div class = "hoverBox-face hoverBox-side-left"> </div>
                        <div class = "hoverBox-face hoverBox-side-right"> </div>
                        <div class = "hoverBox-face hoverBox-top data4" contentEditable="true"><?php retrieveData( "data4", $_SESSION[ "currentEntry" ] ); ?> </div>
                    </div>
                </div>               
            </div>
        </div>

    </div>


<!-- 
    <div class = header-flex-container>
        <div class = "flex-content clickFlip-content">  
            <div class = "hover3D-content">  
                <div class=" hover-content clickFlip-content-front hoverGlow-content"> penis</div>
                <div class = "clickFlip-content-back"> yum!</div>
            </div>
        </div>
        <div class = "flex-content"> 
            <div class = "hover3D-content">
                <div class="hover-content hoverGlow-content"> eat my dick off</div>
            </div>
        </div>
    </div> -->

    
    <!-- <div class = "hoverBox-content"> 
        <div class = "hoverBox-face hoverBox-side-left"> </div>
        <div class = "hoverBox-face hoverBox-side-right"> </div>
        <div class = "hoverBox-face hoverBox-top"> dick </div>
    </div> -->

    <script type="text/javascript" src="JS-files/Universals.js"></script>
    <script type="text/javascript" src="JS-files/EntryScript.js"></script>

    <script>
        if ( window.history.replaceState ) {
          window.history.replaceState( null, null, window.location.href );
        }
    </script>

</body>
</html>