<?php 

function retrieveData($name, $entryID) {
    include "connection.php";

    $sql = "SELECT * FROM entry WHERE id=" . $entryID . ";" ;
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if ($resultCheck > 0) {            
        while( $row = mysqli_fetch_assoc($result) ) {
            echo $row[ $name ];
        }
    }
}

function setData($name, $value) {
    include "connection.php";

    $sql = "UPDATE entry SET " . $name . "='" . $value . "' WHERE id=" . $_SESSION["currentEntry"];
    $result = mysqli_query($conn, $sql);
}

function createNewEntry() {
    include "connection.php";

    $sql = 'insert into entry( title, title2, description, date, data1, data2, data3, data4) values ( "Welcom to this", "New Entry", "this is a new description for this entry", "DATE", "data spot 1", "data spot 2", "data spot 3", "data spot 4");';
    $result = mysqli_query($conn, $sql);
}
    
function returnEntryCount() {
    include "connection.php";

    $sql = "SELECT * FROM entry;" ;
    $result = mysqli_query($conn, $sql);
    $imagesForID = mysqli_fetch_all( $result, MYSQLI_ASSOC );
    return count($imagesForID);
}

function addDataToImages( $pathName, $entryID, $placementID) {
    include "connection.php";

    $sql = " INSERT INTO images ( location, entryID, placementID) VALUES(' " . $pathName . "', '" . $entryID . "', '" . $placementID . "');";
    $result = mysqli_query( $conn, $sql );
}

function changeDataInImages( $newValue, $column,  $placementID, $entryID ) {
    include "connection.php";

    $sql = " UPDATE images SET " . $column ."='" . $newValue . "' WHERE entryID='" . $entryID . "' AND placementID='" . $placementID . "';";
    $result = mysqli_query( $conn, $sql );

    echo $sql;
}

function deleteDataFromImages( $entryID, $placementID) {
    include "connection.php";

    $sql = " DELETE FROM images WHERE entryID='" . $entryID . "' AND placementID='" . $placementID . "';";
    $result = mysqli_query( $conn, $sql );
}

function returnImageCount($entryID) {
    include "connection.php";

    $sql = "SELECT * FROM images WHERE entryID=" . $entryID . ";" ;
    $result = mysqli_query($conn, $sql);
    $imagesForID = mysqli_fetch_all( $result, MYSQLI_ASSOC );
    return count($imagesForID);
}

if (isset( $_GET["saveChanges"] )) {
    
    setDataWithName("description");
    setDataWithName("title");
    setDataWithName("title2");
    setDataWithName("date");

    setDataWithName("data1");
    setDataWithName("data2");
    setDataWithName("data3");
    setDataWithName("data4");

    unset( $_POST["saveChanges"] );

}

function setDataWithName($name) {
    setData( $name, $_GET[$name]);
}

