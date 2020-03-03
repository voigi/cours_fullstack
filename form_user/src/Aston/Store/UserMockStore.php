<?php
namespace Aston\Store;
use Aston\Model\User;
class UserMockStore implements UserStoreInterface
{
    private $data = [];
    public function save(User $user): UserStoreInterface
    {
        $user->setId(uniqid());
        $this->data[$user->getId()] = $user;
        return $this;
    }
    public function find($id): ?User
    {
        return $this->data[$id] ?? null;
    }
    public function findByEmail(string $email): ?User
    {
        foreach ($this->data as $user) {
            if ($user->getEmail() === $email) {
                return $user;
            }
        }
        return null;
    }
    public function findAll(): array
    {
        return $this->data;
    }
    public function remove(User $user): UserStoreInterface
    {
        unset($this->data[$user->getId()]);
        return $this;
    }
}