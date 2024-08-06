<?php
    include "dbcon.php";

    try {
        //récupérer les données de la table user et les convertir en json
        $sql= 'SELECT * FROM user'; 
        $requete = $mybdd -> prepare($sql);
        $requete->execute();
        $result = $requete->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
                            
    }catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }


                            
            
                           