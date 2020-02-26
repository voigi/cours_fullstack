<?php

require 'lib/csv.php';
require 'lib/validators.php';

define('CONTACTS_PATH','contact.csv');

$contacts= loadContacts(CONTACTS_PATH);

$prenom=isset($_POST['firstname']) ? $_POST['firstname'] : '' ;
$lastname=$_POST['lastname']?? '';
$email=$_POST['email']?? '';
$phone=$_POST['phone']?? '';
$errors=[];
if(isset($_GET['action']) && isset($_GET['id'])){
    if($_GET['action'] == 'remove'){
        $id=(int)$_GET['id'];
        unset($contacts[$id]);
        if (saveFile(CONTACTS_PATH, $contacts)) {
            header('Location: index.php');
        }else{
           $errors[] ='Impossible de sauvegarder le contact';
         
         }    
    }
}



    


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

        $contacts[] =[
            'firstname' => $prenom,
            'lastname'=> $lastname,
            'email' => $email,
            'phone'=> $phone
        ];

        saveFile(CONTACTS_PATH,$contacts);
        
    }   
} 






include 'views/page.phtml';



    
   


