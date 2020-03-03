<?php

namespace Aston\Repository;

use Aston\Store\UserStoreInterface;
use Aston\Model\User;

class  UserRepository extends Repository

{
    private $store;

    public function setStore(UserStoreInterface $store):UserRepository
    {
        $this->store = $store;
        return $this;
    }
    public function getStore():UserStoreInterface
    {
        
        return $this->store;
    }
    public function findByFirstname(string $name):?User
    {
        return null ;
    }
}