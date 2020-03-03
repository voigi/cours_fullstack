<?php

namespace Aston\Store;

use Aston\Model\User;
use Exception;
use PDO;

class MySQLUserStore implements UserStoreInterface
{
    private $db;

    public function __construct(PDO $db)
    {
        $this->setDb($db);
    }

    public function getDb(): PDO
    {
        return $this->db;
    }

    public function setDb(PDO $db): MySQLUserStore
    {
        $this->db = $db;
        return $this;
    }

    public function save(User $user): UserStoreInterface
    {
        $sql='INSERT INTO `user`VALUES (
            NULL,:email,:password,:first_name,:last_name,:created_at,:updated_at)';

        $mapper= new UserMapper();

        $stmt =$this->getDb()->prepare($sql);
        if ($stmt->execute($mapper->toArray($user)) === false)
        {
            throw new Exception ('Query does not executed');
        }
        $user->setId($this->getDb()->lastInsertId());

        return $this;
;   }

    public function find($id):?User
    {
        $sql='SELECT * FROM `user` WHERE id =?';
        $stmt = $this->getDb()->prepare($sql);

        if ($stmt->execute([$id]) === false)
        {
            throw new Exception ('Query does not executed');
        }

        $mapper = new UserMapper();
        $row = $stmt->fetch();

        if($row === false)
        {
            throw new Exception ('fetch does not executed');
        }

        return $mapper->toObject($row);

    }

    public function findByEmail(string $email): ?User
    {
        $sql='SELECT * FROM `user` WHERE email =?';
        $stmt = $this->getDb()->prepare($sql);

        if ($stmt->execute([$email]) === false)
        {
            throw new Exception ('Query does not executed');
        }

        $mapper = new UserMapper();
        $row = $stmt->fetch();

        if($row === false)
        {
            throw new Exception ('Query does not executed');
        }

        return $mapper->toObject($row);
    }

    public function findAll(): array
    {
        $sql ='SELECT * FROM `user`';
        $stmt = $this->getDb()->prepare($sql);

        if ($stmt->execute() === false)
        {
            throw new Exception ('Query does not executed');
        }

        $data = $stmt->fetchAll();
        $mapper = new UserMapper();
        $user = [];

        foreach ($data as $user)
        {
            $users[] = $mapper->toObject($user);
        }

        return $users;
    }

    public function remove(User $user): UserStoreInterface
    {
        $this->getDb()->beginTransaction();
        try{
            $stmt = $this->getDb()->prepare('DELETE FROM `user`WHERE id=?');
            {
                if ($stmt->execute([$user->getId()])=== false)
                {
                    throw new Exception ('Query does not executed');
                }
            }
    
            $this->getDb()->commit();
        }catch (EXCEPTION $e)
        {
            $this->getDb()->rollBack();
        }

        return $this;
    }

}
