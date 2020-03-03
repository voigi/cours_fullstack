<?php

require 'init.php';


$repo =$container->get('user:repository');
$store =$repo->getStore();

$user = new Aston\Model\User();
$store->save($user);
$users=$store->findAll();


include 'views/home.phtml';








// $u->setEmail('john.doe@mail.com')
// ->setPassword('0000')
// ->setFirstname('john')
// ->setLastname('doe');

// try{
//     $s->save($u);
// }catch (Exception $e){
//     echo $e->getMessage();
// }

// $u->setId(4);
// $s->remove($u);
