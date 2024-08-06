<?php
//connexion à la base de données
try{
  $mybdd = new PDO('mysql:host=localhost;dbname=wimova;charset=utf8', 'root', '');
}
catch(Exception $e){
  die($e->getMessage());
}  


