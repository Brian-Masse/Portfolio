<?php 

function returnPathName($entryID, $placementID, $extension) {
    $path = "Image-Uploads/";
    return $path . $entryID . "." . $placementID . "." . $extension;
}

function beginPull() {
    session_start();
    include "dataManager.php";
}

if (isset($_POST[ "submitEntryImage" ])) {
    beginPull();
    uplaodImages($_SESSION["currentEntry"], $_POST["placementIndex"]);
    header( "Location: ../entry.php" );
}

if (isset($_POST["deleteEntryImage"])) {
    beginPull();
    deleteImage($_SESSION["currentEntry"], $_POST["placementIndex"]);
    reorginizePlacement($_SESSION["currentEntry"], $_POST["placementIndex"]);
    header( "Location: ../entry.php" );
}

function uplaodImages($currentEntry, $placementID) {
    $path = "Image-Uploads/";
    $errors = [ ];
    $extensions = ["png"];

    $file_name = $_FILES[ "entryImage" ]["name"];
    $file_tmp = $_FILES[ "entryImage" ]["tmp_name"];
    $file_type = $_FILES[ "entryImage" ]["type"];
    $file_size = $_FILES[ "entryImage" ]["size"];

    $explode = explode('.', $_FILES['entryImage']['name']);
    $end = end($explode);
    $file_ext = strtolower($end);

    $fileLocation = $path . $file_name;
    $newFileLocation = returnPathName( $currentEntry, $placementID, $file_ext );

    if (!in_array( $file_ext, $extensions )) { $errors[] = 'Extension not allowed:' . $file_name . " " . $file_type; }

    if (empty( $errors )) {
        $imageTotal = returnImageCount( $currentEntry );
        if ( $placementID <= $imageTotal) { deleteImage($currentEntry, $placementID); }

        echo("this is the temp file: " . $file_tmp);
        move_uploaded_file($file_tmp, $fileLocation);

        rename( $fileLocation, $newFileLocation );
        addDataToImages( $newFileLocation,  $currentEntry,  $placementID );
    }
    else { print_r( $errors ); }

    unset( $_FILES["entryImage"] );
}

function deleteImage($currentEntry, $placementID) {
    $path = returnPathName( $currentEntry, $placementID, "png" );
    if (!unlink($path)) {
        echo "There was an error deleting the file";
    }
    deleteDataFromImages( $currentEntry, $placementID );
}

function reorginizePlacement($currentEntry, $placementID) {
    $imageTotal = returnImageCount( $currentEntry );

    echo "current" . $placementID;
    echo $imageTotal;

    for ( $i = $placementID; $i < $imageTotal + 1; $i ++) {
        $path = returnPathName( $currentEntry, $i + 1, "png" );
        $newPath = returnPathName( $currentEntry, $i, "png" );
        rename( $path, $newPath );
        changeDataInImages($newPath, "location", $i + 1, $currentEntry);
        changeDataInImages($i, "placementID", $i + 1, $currentEntry);
    }

}
