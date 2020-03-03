<?php


namespace Aston\Store;

use Aston\Model\User;

interface UserStoreInterface
{
    public function save(User $user):UserStoreInterface;
    public function find($id):?User;
    public function findByEmail(string $email):?User;
    public function findAll():array;
    public function remove(User $user):UserStoreInterface; 

}