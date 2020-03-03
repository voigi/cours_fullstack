<?php 

require 'init.php';

$email=$_POST['email']?? '';
$email=$_POST['password']?? '';
$email=$_POST['firstname']?? '';
$email=$_POST['lastname']?? '';

if($_SERVER ['REQUEST_METHOD'] === 'POST')
{
    $user = new ASTON\Model\User();
    $user->setEmail($email)
    ->setPassword($password)
    ->setFirstname($firsname)
    ->setLastname($lastname);

    $store = $container->get('user:store');

    try
    {
         $store->save($user);
         header('Location: index.php');

    }catch (Exception $e)
    {
        echo $e->getMessage();
    }

}


include 'views/form.user.phtml';