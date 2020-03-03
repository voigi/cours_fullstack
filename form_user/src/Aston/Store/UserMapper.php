<?php

namespace Aston\Store;

use Aston\Model\User;
use Datetime;

class UserMapper
{    
        public function toArray(User $user):array
        {
            $data=[];
                if($user->getId() !=null){
                    $data['id']=$user->getId();
                }

            $data['email'] = $user->getEmail();
            $data['password']=password_hash($user->getPassword(),PASSWORD_BCRYPT);
            $data['first_name']=$user->getFirstname();
            $data['last_name']=$user->getLastname();
            $data['created_at']=$user->getCreatedAt()->format('Y-m-d H:i:s');
            $data['updated_at']=$user->getUpdatedAt()->format('Y-m-d H:i:s'); 

            return $data;
        }
        public function toObject(array $data):User
        {
            $user=new User();

            if(isset($data['id'])){
                $user->setId($data['id']);
            }

            $user->setEmail($data['email']);
            $user->setPassword($data['password']);
            $user->setFirstname($data['first_name']);
            $user->setLastname($data['last_name']);
            $user->setCreatedAt(new Datetime($data['created_at']));
            $user->setUpdatedAt(new Datetime($data['updated_at']));

            return $user;
        }

}

