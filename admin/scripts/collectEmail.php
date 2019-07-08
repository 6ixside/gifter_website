<?php
require_once  "../../vendor/autoload.php";

// connect to mongodb
$client = new MongoDB\Client('mongodb+srv://<user>:<password>@gifter-shopify-dev-itn9j.gcp.mongodb.net/test?retryWrites=true&w=majority');

// echo "Connected to database successfully";

// select a database
$db = $client->website;
$coll = $db->emails;

// echo "Database client selected";

function collect_email(){
   global $coll;
   //EMAIL VALIDATION
    if(!empty($_POST['emailInd'])){
        $emailInd = $_POST['emailInd'];

        $document = array(
            "email" => $emailInd,
            "title" => "individual"
        );
    
        $coll->insertOne($document);
        echo "Document inserted successfully";
    //    header("Location: ../../index.html?mail=error");
    //    exit;
    }elseif(!empty($_POST['emailEnt'])){
        $emailEnt = $_POST['emailEnt'];

        $document = array(
            "email" => $emailEnt,
            "title" => "enterprise"
        );
    
        $coll->insertOne($document);
        echo "Document inserted successfully";
        // exit;
    }else{
        header("Location: ../../index.html?mail=error");
        // exit;
    }

   
}

collect_email();

header("Location: ../../index.html?mail=success");

?>