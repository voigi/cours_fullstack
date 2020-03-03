<?php
$container = new Aston\Service\Container();

$container->set('db',function()
{
   return new PDO(
        'mysql:host=localhost;dbname=test;port=3306;charset=utf8',
        'root',
        ''
    );
});

$container->set('user:store',function($c)
{
     $pdo = $c->get('db');
     return new  Aston\Store\MySQLUserStore($pdo);
    //return new Aston\Store\UserMockStore();
});

$container->set('user:repository',function($c)
{
    
    $repository = new Aston\Repository\UserRepository();
    $repository->setStore($c->get('user:store'));
    return $repository; 
});