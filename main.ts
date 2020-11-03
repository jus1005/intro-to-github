let Monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(Monkey)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999955555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999955555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999911111111199999999999999999999999999999999999999999995555599999999995555555555555
    9999999999999999999999111119999999999999999999999111111111999999999999999999999911111111199999999999999999999999999999999999999999995555599999999999555555555555
    9999999999999111111111111119999999999999999911111111111111111199999999999999111111111111111119999999999999999999999999999999999999995555599999999999555555555555
    9999999999999111111111111119999999999999999911111111111111111199999999999999111111111111111119999999999999999999999999999999999999999999999999999999555555555555
    9999999999999111111111111119999999999999999911111111111111111199999999999999111111111111111119999999999999999999999999999999995555599999999555559999999995555555
    9999999999999111111111111119999999999999999911111111111111111199999999999999111111111111111119999999999999999999999999999999995555599999999555559999999995555555
    9999999999111111111111111111999999999999999911111111111111111199999999999999111111111111111119999999999999999999999999999999995555599999999555559999999995555555
    9999999999111111111111111111999999999999999999911111111111119999999999999999999911111111199999999999999999999999999999999999995555599999999555559999999995555555
    9999999999111111111111111111999999999999999999911111111111119999999999999999999911111111199999999999999999999999999999999999995555599999999555559999999999999555
    9999999999111111111111111111999999999999999999911111111111119999999999999999999911111111199999999999999999999999999999999999999999999999999999999999555559999555
    9999999999111111111111111111999999999999999999911111119111119999999999999999999911111111199999999999999999999999999999999999999999999955555999999999555559999555
    9999999999999111111111119999999999999999999999999111119111119999999999999999999911111999999999999999999999999999999999999999999999999955555999999999555559999555
    9999999999999111119111119999999999999999999999999111119111119999999999999999999999999999999999999999999999999999999999999999999999999955555999999999555559999999
    9999999999999111119111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999999555559999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999999999999555559
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999555559
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999555559
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999555559
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999555559
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999
    9999999999999999999999999999799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999
    9999999999999999999999999997799999979999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999
    9999999999999999999999999997779999979999999999997999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999
    9999999999999999999999999977777999977999999999977799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999777777799977999999999977799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999797777999777999999999777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999977777999777799999999777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999777777799977999999999977779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999977779779977799999997777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999777777999777999999999777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999997797777799777799999997777797799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999977777777777799999977777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999777777777777777777799777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999799999999997777777777777777777779977777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999997999999999999999999
    9999999999997779999999999977777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999997999977999999999999999999
    9999999999997799999999997777777777777777777777777799999999999999999999999999999999997999999999999999999999999999999999999999999999999997799977999999999999999999
    9999999999977799999999977777777777777777777777777779999999999999999999999999999999997799999999999999999999999999999999999999999999999997799777999999999999999999
    9999999999777779999997777777777777777777777777777777999999999999999999999999999999997799999999999999999999999999999999999999999999799977779777779999999999999999
    9999999999977799999777777777777777777777777777777777799999999999999999999999999999977779999999999999999999999999999999999999999997779977779977999999999999999999
    9999999999997779997777777777777777777777777777777777779999999999999999999999999999977779999799999999999999999999999999999999999997779997799777777999999999999999
    9999999999777799777777777777777777777777777777777777777999999999999999999999779999997799999799999999999999999999999999999999999977779777777777999999999799999999
    9999999999977777777777777777777777777777777777777777777799999999999999999997779999777777999779999999999999999999999999999999999999777977779997799999999799999999
    9999999999997777777777777777777777777777777777777777777779999999999999999977779999977779999779999999999999999999999999999999999997779977777997999999997777999999
    9999999999997777777777777777777777777777777777777777777777999999999999999999777999977777997779999999999999799999999999999999999777777777777797999999999799999999
    9999999999977777777777777777777777777777777777777777777777999999999999999977777797777777797777999999999997799999999999999999999977777777777777777999977779999999
    9999999999777777777777777777777777777777777777777777777777799999999999999777777977777777779779999999999997779999999999999799999777779977777777777779997779999999
    9999999977777777777777777777777777777777777777777777777777779999999999999997777779977779999777999999999977777999999999999799997777777777777777777777997777799999
    9999999777777777777777777777777777777777777777777777777777777999999999999977777799777777997779999999999777777799999999999779999977777777777777777777777777999999
    9999997777777777777777777777777777777777777777777777777777777799999999999777777777777777777777779999999797777999999999999779999777777777777777777777777779999999
    9999977777777777777777777777777777777777777777777777777777777779999999999999777777777777777777777779999977777999999999997779999777777777777777777777777779999999
    9997777777777777777777777777777777777777777777777777777777777777999999999997777777777777777777777777799777777799999999999799997777777777777777777777777777999999
    9977777777777777777777777777777777777777777777777777777777777777799999999777777777777777777777777777777977779799999999997777997777777777777777777777777777779999
    9777777777777777777777777777777777777777777777777777777777777777777999997777777777777777777777777777777777777999999999999779977777777777777777777777777777777799
    7777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777777799999999977777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999997777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999977777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
Monkey.say("GitHub is Awesome")
Monkey.setFlag(SpriteFlag.StayInScreen, true)
