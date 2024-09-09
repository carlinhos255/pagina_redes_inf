<?php

    require("sistema.php");

    $sql = "";

    if($_GET["genero"] == "0"){
        $sql = "SELECT * FROM `albumes` ORDER BY RAND() LIMIT 1;";
    }else{
        $genero = $_GET["genero"];
        $sql = "SELECT * FROM `albumes` WHERE genero = $genero ORDER BY RAND() LIMIT 1;";
    }

    $resultado = $conexion->query($sql)->fetch();

    if(!$resultado){
        echo "ERROR";
    }else{
        echo json_encode($resultado);
    }