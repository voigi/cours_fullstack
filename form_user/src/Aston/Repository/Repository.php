<?php
namespace Aston\Repository;

use PDO;

abstract class Repository
{
     private $db;

     public function getDb():PDO
     {
          return $this->db;
     }

     public function setDb(PDO $db):Repository
     {
          $this->db = $db;
          return $this;
     }
}