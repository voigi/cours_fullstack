<?php

namespace Aston\Service;

class Container 
{
    private $services=[];

    public function set(string $name,callable $service)
    {
        $this->services[$name] = $service;
    }
    public function get(string $name)
    {
        $service = $this->services[$name] ?? null;

        if($service === null)
        {
            return null;
        }
        return $service($this);
    }
}
