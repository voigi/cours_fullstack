<?php

require 'lib/validators.php';

define('CONTACTS_PATH','contact.csv');

$prenom=isset($_POST['firstname']) ? $_POST['firstname'] : '' ;
$lastname=$_POST['lastname']?? '';
$email=$_POST['email']?? '';
$phone=$_POST['phone']?? '';
$contacts=[];
$errors=[];

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    //echo 'Le formulaire a bien été envoyé';

    //ici on valide les données//
    if(isEmpty($prenom)) {
        $errors[]="Le prenom est requis";
    }
    if(isEmpty($lastname)) {
        $errors[]="Le nom est requis";
    }

    
    if(empty($errors)){
        $prenom = strip_tags($prenom);
        $lastname= strip_tags($lastname);
        $row="$prenom,$lastname,$email,$phone\n";
        file_put_contents(CONTACTS_PATH,$row,FILE_APPEND);
    }   
} 
$handle =fopen(CONTACTS_PATH,'r');

if ($handle !== false){
    while(($data= fgetcsv($handle,1024))!== false){
        //Mapping//
        
        $contacts[] = [
            'firstname'=> $data[0],
            'lastname'=> $data[1],
            'email'=> $data[2],
            'phone'=> $data[3]


        ];
        
    }
}
include 'views/page.phtml';
?>



    
   


