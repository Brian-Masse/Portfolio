<?php

session_start();
include_once "dataManager.php";

if (isset(  $_GET["createNewEntry"]) ) {
    
    createNewEntry();

    unset( $_GET["createNewEntry"] );
}