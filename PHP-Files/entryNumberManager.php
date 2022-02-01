<?php

$currentEntryKey = "currentEntryKey";
$currentEntry = -1;

if ( isset( $_GET["link_submit"] ) ) {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    $_SESSION[ "currentEntry" ] = getEntryID();
}


function getEntryID() {
    if (isset($_GET["entryNumber"])) {
        return $_GET["entryNumber"];
    }
    return 0;
    
}