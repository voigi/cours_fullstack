<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitcc9cdb6db0c36d5406df15b34d0c0f92
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Aston\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Aston\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/Aston',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitcc9cdb6db0c36d5406df15b34d0c0f92::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitcc9cdb6db0c36d5406df15b34d0c0f92::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}