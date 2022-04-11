enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Powerup1 = SpriteKind.create()
    export const Enemy1 = SpriteKind.create()
    export const enemyshotq = SpriteKind.create()
    export const PlayerShot = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const SheildKind = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const BossShot = SpriteKind.create()
    export const HeartHealth = SpriteKind.create()
    export const thumb = SpriteKind.create()
    export const Duck = SpriteKind.create()
    export const Astroid = SpriteKind.create()
    export const thumnb2 = SpriteKind.create()
    export const boss2 = SpriteKind.create()
    export const rocket = SpriteKind.create()
    export const Boss3 = SpriteKind.create()
    export const thumb3 = SpriteKind.create()
    export const FinalBOSS = SpriteKind.create()
    export const Thumb4 = SpriteKind.create()
}
namespace StatusBarKind {
    export const boss2Health = StatusBarKind.create()
    export const boss3health = StatusBarKind.create()
    export const Boss4health = StatusBarKind.create()
}
/**
 * FinalBoss
 */
/**
 * Boss2
 */
/**
 * Boss 1
 */
/**
 * Player Hit
 */
/**
 * Enemies
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.rocket, function (sprite, otherSprite) {
    RocketPowerup = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Powerup1)
    otherSprite.destroy()
    RocketPowerup.lifespan = 5000
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Herohealth.value += -3
    otherSprite.destroy()
    scene.cameraShake(3, 200)
})
function Boss2 (mySprite: Sprite) {
    Bossman2 = sprites.create(assets.image`boss22`, SpriteKind.boss2)
    bossthumb2 = sprites.create(img`
        ........................................................................11111111111111
        ........................................................................177777777ffff1
        ........................................................................177777ffffccc1
        ........................................................................1ffffff4ccccc1
        11111111111111111111111111111111111111111111111111111111111111111111111114ccccc4ccccc1
        11111111111111111111111111111111111111111111111111111111111111111111111114ccccc4ccccc1
        1111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffff1
        11111111111111111111111111111111111111111111111111111111111111111111111114444444449441
        11111111111111111111111111111111111111111111111111111111111111111111111114444444449441
        1111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffff1
        ........................................................................1fff4444449441
        ........................................................................177f4444449441
        ........................................................................177f9999999441
        ........................................................................11111111111111
        `, SpriteKind.thumnb2)
    bossthumb2.setPosition(116, 7)
    Bossman2.setVelocity(5, 60)
    Bossman2.setPosition(76, 0)
    Bossman2.setBounceOnWall(true)
    BossmanHealth = statusbars.create(70, 4, StatusBarKind.boss2Health)
    BossmanHealth.setColor(10, 13)
    BossmanHealth.setOffsetPadding(29, 5)
    BossmanHealth.positionDirection(CollisionDirection.Top)
    BossmanHealth.value = 2000
}
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.FinalBOSS, function (sprite, otherSprite) {
    BossmanHealth.value += -0.1
    sprite.destroy()
    otherSprite.startEffect(effects.spray, 50)
})
statusbars.onZero(StatusBarKind.boss2Health, function (status) {
    Bossman2.destroy()
    bossthumb2.destroy()
    BossmanHealth.destroy()
    Planet.destroy()
    Planet2.destroy()
    if (true) {
        game.splash("STAGE 3")
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
            ffffffffffffffffffffffffccccbc......................c...................................................................ccccccccccbccccccffcccffffccccfcccffffff
            ffffffffffffffffffffffffccccbcc.........................................................................................ccbcfcccccbccfccfccccbfccfcccfffffffffff
            fffffffffffffffffffffffffccbbcc.........................................................................................cbbcfcccbbfccfccfffccbcccccfffffffffffff
            fffffffffffffffffffffffffcbccbc.........................................................................................cbccfccbbcfccfcccfccbccccfffffffffffffff
            fffffffffffffffffffffffffccfcccc........................................................................................bccccfcbccfccfcccfccbccfffffffffffffffff
            ffffffffffffffffffffffffbcbfcccc......................................................................................bbbfcccfcbcfcfcfccffbbcfffffffffffffffffff
            ffffffffffffffffffffffffbcbcccbcc....................................................................................cccccfccfbcffcfcfccfcffffffffffffffffffffff
            fffffffffffffffffffffffffbbcccbbcc.................................................................................ccccccccfcbbfcfcfcfcfffffffffffffffffffffffff
            fffffffffffffffffffffffffbbccccbbc...............................................................................ccbcccccccfcfbbcfcfcfffffffffffffffffffffffffff
            ffffffffffffffffffffffffffbcccccbc.............................................................................cccbbcbccccffffbcfcccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffbbccccbc............................................................................cccbbcbbcfffbcbbcffccfffffffffffffffffffffffffffff
            fffffffffffffffffffffffffccbbccccc..........................................................................cccccbcbccbfccbbcffcfcffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffbccccccc.........................................................................ccbccccbccbcbbbbfffcfcffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffbccbccccc.......................................................................ccbcccccbcfbbcbccfcffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbfbccbccccc.......................................................................ccbccccccfcccccccfccfffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbfbccccccccc......................................................................cbbcccfccfcccccccfcffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffccbfbcccccbccc......................................................................cbccccfccfccccbcfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffbfcbbcccccbcccc.....................................................................cbcccfcbcfccccbcfffcfffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcbfcbcffccccbbc......................................................................cbbccfcbccfcccbcffccfffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffccccfbccccbc......................................................................ccbccfcbcccfccbffccfcffffffffffffffffffffffffffffffff
            fffffffffffffffffffffbffcccccfcbcccb.......................................................................ccbbcfcbcccfcffffccfcffffffffffffffffffffffffffffffff
            fffffffffffffffffffffbfcfccbcfbbcccc.......................................................................cccbccfbcccbffccfccfcffffffffffffffffffffffffffffffff
            ffffffffffffffffffffcbfcfccbccbccccc.......................................................................cccbccfccccbfcffffffcffffffffffffffffffffffffffffffff
            ffffffffffffffffffffccbfcccbccfccccc........................................................................ccccccfccccbcccfccffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffcfbffccbccfccccc.........................................................................cccccbbcfcbcbccffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffccffbfcfbccfcccc..........................................................................ccccccbfcfcbcbccffffffffffffffffffffffffffffffffff
            fffffffffffffffffffcfcfcbccfbccfccbc...........................................................................bccccbfccfbcbccffffffffffffffffffffffffffffffffff
            ffffffffffffffffffccfcfcbcccbccfcbb............................................................................cbccccbcccbbbcccfffffffffffffffffffffffffffffffff
            ffffffffffffffffffccffccbfccbccccbc.............................................................................bbbccfbcccbffffffffbffffffffffffffffffffffffffff
            ffffffffffffffffffcfffcccbcccfcbcbc..............................................................................cbcfccccbbbffffcffbffffffffffffffffffffffffffff
            ffffffffffffffffffffcbfcfbccfcccbbc..............................................................................ccbfccccbfbffffcfcbffffffffffffffffffffffffffff
            fffffffffffffffffffccbcffbcffccbbbcc..............................................................................cbccccccfbffffccfbffffffffffffffffffffffffffff
            fffffffffffffffffffcccbcffbfcbbccbbc...............................................................................bbcccccfffccfcffbffffffffffffffffffffffffffff
            ffffffffffffffffffffccbcffcfccccccbc...............................................................................cccbcccbffcccfffbffffffffffffffffffffffffffff
            ffffffffffffffffffffccbcffcfccfccccbc..............................................................................bccbcccbffcccbfffccffffffffffffffffffffffffff
            ffffffffffffffffffffccfbfffcbcfcccccc..............................................................................bbbbcccbffcccbfffccffffffffffffffffffffffffff
            fffffffffffffffffffcffccbffcbcfcccccc..............................................................................cbcfcccbffcbbffffcccfffffffffffffffffffffffff
            fffffffffffffffffffccfcccbfcbfffccccc..............................................................................cbbfcccbfccbcffffccccffffffffffffffffffffffff
            ffffffffffffffffffffcfcccbffcbffccbccc.............................................................................ccbfccffcfbccffffcfccffffffffffffffffffffffff
            ffffffffffffffffffffcfcccfcfcbbfccbccc..............................................................................bcfccfccfbccffcfcfffffffffffffffffffffffffff
            ffffffffffffffffffffffcffccfcccffcbcbb..............................................................................bcfccfccfcccfbffcfffffffffffffffffffffffffff
            ffffffffffffffffffffffcccccfccccfcbccbc.............................................................................bbfccbcbcfccbbfcffffffffffffffffffffffffffff
            fffffffffffffffffffffffccccfccccfcbccbc..............................................................................bfccbbbcfcfbbfccfffffffffffffffffffffffffff
            fffffffffffffffffffffffcbcffccbcfcccccbbb............................................................................bbcccbccfcfcbfcffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbfcffbcfcccccbcb.............................................................................bcccfcccffcbffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcccfffbfcccccbccb.............................................................................bbccffccffcbfcffffffffffffffffffffffffffff
            fffffffffffffffffffffffffccffbcffccccccb..............................................................................fccccfcccffbcfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcffbccfccccccbc.............................................................................fccccbfccbfbcfffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffcfcbccfcccccbc.............................................................................fccbbbfccbfbcfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffbfcfcccccbc.............................................................................cfccccfcbcfccfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcfccbfccfbbcbccc............................................................................cfcccccffccfcfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcfccfbbcfcbccccc............................................................................bccccccffccfcfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcfffccccfcbccccc............................................................................bccbcccfffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcffcccccbbccccbc...........................................................................cbcbcfccfffcfcfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcffcccccbcccccbc..........................................................................cbccbcfccffffccfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffccfccccfffcccbbc..........................................................................cbcbccfcffbcccccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffccfbccffcfcccccc.........................................................................ccccbccfbffbcccccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcccbccffffcccccc.........................................................................bcccbcbbbfcbcccccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcccfbcffffcccccc........................................................................bbccccbbfcfcbcccccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffccffbbffcfcccccc........................................................................bccccbbbbcfcbbccccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcffcfbbccfcccccc........................................................................bcbccfffbcfccbbcffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcfbcfcbccfccbbc........................................................................cbcbcffccbccfcccffcffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffbcfbcccfcbbcc........................................................................cbcbcfcccbccffffcbcffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcbfcbbcccfcccc........................................................................cbbcbcfcccfcccfcbbccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffbbfffccccfcccc........................................................................cbccbcfccbfccfffbcccffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcbcfcfccccfccc.........................................................................cbcbbcfccbfccfcbccccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccccfccfbcfcccc.........................................................................cbcbbfccbbcccfcbccccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcccffffbffbcc...........................................................................cbccbfccbfcccffcfcccffffffffffffffffffffffffffff
            ffffffffffffffffffffffcccfffbbbbcbbc............................................................................cbbbcfccbbccccbccfccffffffffffffffffffffffffffff
            ffffffffffffffffffffffcffcccccfbbbcc............................................................................ccbbcfccbbccccbfcfccffffffffffffffffffffffffffff
            fffffffffffffffffffffcffccccccfbccc..............................................................................cbbccccbbfccccbffcfffffffffffffffffffffffffffff
            fffffffffffffffffffffcfcbbcccfbcc................................................................................cccccccbbfcccfbffcfffffffffffffffffffffffffffff
            fffffffffffffffffffffcffcbccfcc...................................................................................cccccbcbfcccfcccffffffffffffffffffffffffffffff
            fffffffffffffffffffccffffbccc.....................................................................................cbcccbccbfcfccccffffffffffffffffffffffffffffff
            fffffffffffffffffffcccffccccc......................................................................................bccccccbfcfccccbfffffffffffffffffffffffffffff
            fffffffffffffffffffcbcffcccc.......................................................................................bbccccccfcfccccbfffffffffffffffffffffffffffff
            fffffffffffffffffffcbccfccc.........................................................................................cbbcccccbfccccbfffffffffffffffffffffffffffff
            fffffffffffffffffffbcfbffcc..........................................................................................cbbccccbffccbbfffffffffffffffffffffffffffff
            fffffffffffffffffffcbbbfccc...........................................................................................ccccccbffccbfcffffffffffffffffffffffffffff
            fffffffffffffffffccffffcccc............................................................................................bcbccbcfccffcffffffffffffffffffffffffffff
            fffffffffffffffffccffbfccbc............................................................................................bbcbcbbcfffcccfffffffffffffffffffffffffff
            fffffffffffffffffccffbcccbc.............................................................................................bbbbcccffcccfcffffffffffffffffffffffffff
            ffffffffffffffffccfffbcccbc...............................................................................................ccccccfcccfcbfffffffffffffffffffffffff
            ffffffffffffffffcccfcbccccb................................................................................................bcccbfcccfcbfffffffffffffffffffffffff
            ffffffffffffffffcccfcbfcccbc...............................................................................................cbccbbffcfcbcffffffffffffffffffffffff
            ffffffffffffffffbccfcbcfbcbbcc.............................................................................................cbcccbbfcfccbffffffffffffffffffffffff
            ffffffffffffffffbccfffcffbfcccc.............................................................................................bcccccfcfccbffffffffffffffffffffffff
            ffffffffffffffffbccfcccccbfccccc............................................................................................bcccbfcfcffbffffffffffffffffffffffff
            ffffffffffffffffbfffbbcccbcfccbbc...........................................................................................bccbcfcfccfbfcffffffffffffffffffffff
            ffffffffffffffffbccffbfccbccfcccbc..........................................................................................bcbbcfcbccfbfcffffffffffffffffffffff
            ffffffffffffffffbccccfffccbcfcccbbc.........................................................................................ccbccfbbccfcfcffffffffffffffffffffff
            fffffffffffffffffbfccfccfcbcfccccbb.........................................................................................bcbccbbfccfcfcffffffffffffffffffffff
            fffffffffffffffffccfcfccfcccfccccccc........................................................................................bcbcccfffccffccfffffffffffffffffffff
            ffffffffffffffffffccffccfcccbcfccccc........................................................................................bcbcccfbfccffccfffffffffffffffffffff
            ffffffffffffffffffccfcccfccfcbcfccccc.......................................................................................cbbccfbbfccffccfffffffffffffffffffff
            ffffffffffffffffffcccfccfcffcbcfcccccc......................................................................................cbccffccfccffccfffffffffffffffffffff
            fffffffffffffffffffccffcbffccbcfccccbc......................................................................................bbccfcccfccfcccfffffffffffffffffffff
            fffffffffffffffffffcccfbbbccccffccccbc.....................................................................................bbfcfcccfccffccffffffffffffffffffffff
            ffffffffffffffffffffccfbcfccccfccfcccbc...................................................................................bbfcfbcccfccfcccffffffffffffffffffffff
            fffffffffffffffffffffcfbffcccfbccfccccb..................................................................................bbfccbbcccfcfcccfffffffffffffffffffffff
            ffffffffffffffffffffffccbffcccbccfccccbc................................................................................bbcfcfbccccffcccffffffffffffffffffffffff
            fffffffffffffffffffffffcbffcccfcccfccccb...............................................................................bbcfccbcccfffcccfffffffffffffffffffffffff
            ffffffffffffffffffffffffcbfcccfcccbcccbc..............................................................................bbcccccfcccfbfccffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbcfffbfccbcccbcc............................................................................cccccbcfcccffbfbfffffffffffffffffffffffffff
            fffffffffffffffffffffffffbcfffcfccbccfbcc............................................................................ccccbccfccffcbbbfffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbcfcfcccfbcfbbcc...........................................................................ccbccbbcfccfcbbfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbffccccfbbfcccccc.........................................................................ccbbcccbcfcfbbfffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcccffcccfccccccccc........................................................................cccccfccbcfcffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccccffbfcfcccccbbc........................................................................cbccfcfbccffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfcfcbfccfccccbcb........................................................................bcccccfbcfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfcfcbcccfccccccb......................................................................cbbcccffbcfcffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfcfcbccbfccccccb......................................................................bbccccfccfccffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccffccbccbfcccccbc.....................................................................cbfcccffccfcccfffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccffcfbccbfbccccbc....................................................................ccbfccfccffcccffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcfbfcfcbcbfbccbbcc....................................................................cccfcbfbfffffcffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfbffcbcbfcbccbc....................................................................cccfccbfbcfcfccffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcffbffcbbcfcbccbc....................................................................bccfbcbbccfcfcfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffccbbffbccfcbcbcc...................................................................cbccccfbbccfffcfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcccbffcccfbccbcc...................................................................bbccccfcbccfffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffccccfffccfcccbc....................................................................bcccccfcccffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffccccccfcfccccbc....................................................................bcccccfccfcfcfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcccfcfccfcccccb.....................................................................bccccfbcfccfcfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcccfcffcccccccb.....................................................................bbcccfbcfccfcfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfccbfccccccbc.....................................................................cbccccbcfccfcfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffccfcfccbcfcccccb......................................................................cbbcccbcfcccffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffccfffccbcfccccb.......................................................................ccccccbcffccfcffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffccffcffcbfcccbc........................................................................cccccbbffcccfffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffcffccfcbfccbcc........................................................................ccccfccfcfccfffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcfcccfcccbc.........................................................................ccccfccfcfccfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffbcfcccfbccbc..........................................................................bcccfcfcfccfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffbcffccfbcbc...........................................................................bbccfcfccfcfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffbcffcfbbbcc............................................................................bbccffccbffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffbcffcccbbc..............................................................................bccfcfcbfcffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffbcffccbbbc..............................................................................bbcccfcbfcffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffbfcffccbbc................................................................................bbccfccbfffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffbfcfcfcbbc.................................................................................bcccfcbfffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffcfcbc..................................................................................cbccfcfbffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffcfccc..................................................................................cbbcccffcfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffbfcc....................................................................................cbcccffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcbffcc....................................................................................ccccfcffccfffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcffccc....................................................................................ccccfcffccfffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcfcccc.....................................................................................ccbfcffcccffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffccccc.....................................................................................ccbfccfbbcffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffccccb.....................................................................................cccbccfcbccfffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcccccb.....................................................................................ccbcccfcccfffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcfcffbb.....................................................................................ccbcccfccccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbfcffcbb....................................................................................ccbfccffcccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbfcfccbb.....................................................................................bbcfccfccccfffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbfcfccbcb....................................................................................ccbfcccfcccfffffffffffffffffffffffffffffff
            fffffffffffffffffffffffcccbfcccccb....................................................................................ccbcfccfcccfffffffffffffffffffffffffffffff
            fffffffffffffffffffffffccfcfccccccc...................................................................................ccbcfccfcccfffffffffffffffffffffffffffffff
            ffffffffffffffffffffffccffccfccbccc...................................................................................bcbcfccfbbccffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcffcccfccbcfc...................................................................................bcccbfcfccbfffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcfccfcfbcbfccc..................................................................................bcccbfffccbfccffffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfcfbcbfccc..................................................................................bcccbfffccbfccffffffffffffffffffffffffffff
            fffffffffffffffffffffffccffcfbccfccc..................................................................................bcccbcfffcbfcccfffffffffffffffffffffffffff
            fffffffffffffffffffffffcbfccfcbcfccc..................................................................................bccffbcfffffcccfffffffffffffffffffffffffff
            fffffffffffffffffffffffcbfccfbbfcccc..................................................................................cccffbccfffcccccffffffffffffffffffffffffff
            ffffffffffffffffffffffffbfcfcbcfcccc..................................................................................cbcffbcccffcccccffffffffffffffffffffffffff
            fffffffffffffffffffffffffbbccccfcbcc.................................................................................cbbccffcccffccccfffffffffffffffffffffffffff
            fffffffffffffffffffffffffffccccfcbcc................................................................................cbbcccfbfccfffcccfcfffffffffffffffffffffffff
            fffffffffffffffffffffffffffcccfccbcc................................................................................cbccccfbcfcffcfcfccfffffffffffffffffffffffff
            ffffffffffffffffffffffffffccccfcbbc................................................................................ccbcccffbcffcfbfffccfffffffffffffffffffffffff
            ffffffffffffffffffffffffffcccffcbcc................................................................................ccccbffcbcffccbfcccffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfcfccbcc................................................................................ccbbfbfccbcccfcbfccfffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfccccbcc................................................................................cbbcfbfccbccfccbfccfffffffffffffffffffffffffff
            ffffffffffffffffffffffffccfccccccc................................................................................cbccbccccbfffccbfccfffffffffffffffffffffffffff
            fffffffffffffffffffffffffcfbbccccc...............................................................................cbbccffccccffcccbcccfffffffffffffffffffffffffff
            fffffffffffffffffffffffffffbccccc................................................................................cbcccfccffffccccbccffffffffffffffffffffffffffff
            fffffffffffffffffffffffccfbbcbccc...............................................................................ccbcccfffcccfcccbfccffffffffffffffffffffffffffff
            fffffffffffffffffffffffcffcccbccc...............................................................................ccbccfffcccfbcccbfccffffffffffffffffffffffffffff
            fffffffffffffffffffffffffccccbcc................................................................................cccccccfccbfbccbbccfffffffffffffffffffffffffffff
            fffffffffffffffffffffffbfccccbc.................................................................................ccccccfbccfcbccfccffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcbcccccbf.................................................................................cbbcccfbccbcfccfccffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcfbccccbf.................................................................................ccbcccbbccbcfccfcfffffffffffffffffffffffffffffff
            fffffffffffffffffffffcfcbcbccf..................................................................................ccbccfbbccbcfccfcfffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffbfbccb...................................................................................cbbcfbbccccfcccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffbfbccb...................................................................................cccccbfccccfcccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffbfbccb....................................................................................cccccfffcfcccfffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcbbccb....................................................................................cccccfcffffcccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcfcbcccc.....................................................................................ccccfcccffffcffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcfcbcccc.....................................................................................ccbcccccfcfccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcfcfcccc......................................................................................ccbccccfcfccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcfcccc.......................................................................................cbbcccfcfccffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffcfcfcfc........................................................................................cbbccfcfccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcbfcfffc.........................................................................................cbccfffccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcbffcfcc..........................................................................................cccbffccffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcbcfbfcc..........................................................................................cccfbcfcffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffccffcbcc..........................................................................................cccfcbffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffccfccbcc..........................................................................................cccfcbffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffccffccbcc..........................................................................................cbcfcbffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffccffccbcc..........................................................................................cbcfbccfffffffffffffffffffffffffffffffff
            fffffffffffffffffffffccffccbcc..........................................................................................cbcfcccfffffffffffffffffffffffffffffffff
            fffffffffffffffffffffccfccccbc..........................................................................................cbbfcccfcfffffffffffffffffffffffffffffff
            fffffffffffffffffffffcffccccbc..........................................................................................bcbfcccfccffffffffffffffffffffffffffffff
            fffffffffffffffffffffcfcfcccbc..........................................................................................cbbcfccfccffffffffffffffffffffffffffffff
            fffffffffffffffffffccffcfcccbc..........................................................................................cbccfccfcccfffffffffffffffffffffffffffff
            fffffffffffffffffffccffcfcccbc..........................................................................................ccbccfcfcccfffffffffffffffffffffffffffff
            fffffffffffffffffffcfffcffccbc..........................................................................................ccbccffcccccffffffffffffffffffffffffffff
            fffffffffffffffffffffccccfcccc..........................................................................................cccbccffccccffffffffffffffffffffffffffff
            `)
        scroller.scrollBackgroundWithSpeed(0, 20, scroller.BackgroundLayer.Layer1)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
            bbbbbbbbbbbbbbbbbbbb3cccbbbc..................................................................................................cbbcbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333ccccc..................................................................................................cbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbbbbbb33ccccc..................................................................................................cbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbcbbbb333cccc.................................................................................................ccbbbcc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbccccbbbbbbbbb................................................................................................ccbbccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbbcccbbbbbbbbb................................................................................................ccccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33ccbcccbbbbbbbbb................................................................................................bcccc33bbbbbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbccc3333ccccbbbbbbbbb................................................................................................bccc333bbbcbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbb33cbbbbbbbbbbbb...............................................................................................bbbbbbbbbcccbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbb333bb...............................................................................................bbbbbbbbbccbbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbb...............................................................................................bbbbbbbbbccbcc3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbb..............................................................................................bbbbbbbbbccc333cccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbb.............................................................................................bbbbbbbbbbbbc33bcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbbb............................................................................................bbbb33bbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbbb............................................................................................bbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbbb............................................................................................bbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbb3cccbbbb3333bbb............................................................................................bbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbb3ccccbbb3333bbb............................................................................................bbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bccccbbb3333bbb.............................................................................................bbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bbbbcccbbbbbbbb.............................................................................................bbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbbbbbbbb..............................................................................................b333bbbbcc3bbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbbbbbbb...............................................................................................b333bbbccc3bbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbbbbbb.................................................................................................333bbbcccb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbbbbbb.................................................................................................bbbbcccbbb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cccccbbbbbbb..................................................................................................bbbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3ccccbbbbbbb...................................................................................................bbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3cccbbbbbbbb...................................................................................................bbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................................................bbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................................................bbbbbcccc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................................................bbbbbccc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................................................bbbbbbcc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb333ccccb..................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb33cccccb..................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb33cccccb..................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333cccccc..................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcbbbcc..................................................................................................cc333bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbbbcc..................................................................................................ccc33bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbbbcc..................................................................................................ccc33bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbbbcc..................................................................................................ccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3ccbbbbcc..................................................................................................bbcbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3cccbbbccc................................................................................................cbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333ccccccc................................................................................................cbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbbbbbb33cccccbb...............................................................................................ccbbbcc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbcbbbb333ccccbb...............................................................................................ccbbccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbccccbbbbbbbbbb..............................................................................................cccccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbbcccbbbbbbbbbbb.............................................................................................bbcccc33bbbbbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33ccbcccbbbbbbbbbbb.............................................................................................bbccc333bbbcbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbccc3333ccccbbbbbbbbbbb.............................................................................................bbbbbbbbbcccbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbb33cbbbbbbbbbbbbbb.............................................................................................bbbbbbbbbccbbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbb333bbbb.............................................................................................bbbbbbbbbccbcc3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbbb.............................................................................................bbbbbbbbbccc333cccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbbb..............................................................................................bbbbbbbbbbc33bcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbbb..............................................................................................bb33bbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbbb..............................................................................................bbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbbb...............................................................................................bbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbbb................................................................................................bbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbb3cccbbbb3333bb................................................................................................bbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbb3ccccbbb3333bb.................................................................................................bbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bccccbbb3333b..................................................................................................bbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bbbbcccbbbbbb..................................................................................................33bbbbcc3bbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbbbbbb..................................................................................................33bbbccc3bbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbbbbbb..................................................................................................33bbbcccb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbbbbbb..................................................................................................bbbcccbbb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbbbbbb..................................................................................................bbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cccccbbbbbbbb..................................................................................................bbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3ccccbbbbbbbb..................................................................................................bbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3cccbbbbbbbbb..................................................................................................bbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................................bbbbbbcccc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................................bbbbbbccc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................bbbbbbbbcc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb333ccccbb..............................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb33cccccbb..............................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333cccccccb.............................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcccccccb.............................................................................................bbccc333bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbccccccc..............................................................................................bbcccc33bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbccccccc.............................................................................................bcccccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcbbbccc.............................................................................................bccccccbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcbbbccc..............................................................................................ccccccbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbbbccc..............................................................................................ccccccbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbbbccc..............................................................................................cccbbcbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3ccbbbbccc..............................................................................................cccbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3cccbbbccc..............................................................................................cccbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333ccccccc..............................................................................................cccbbbcc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbbbbbb33cccccbb..............................................................................................cccbbccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbcbbbb333ccccb...............................................................................................cccccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbccccbbbbbbbbb................................................................................................bcccc33bbbbbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbbcccbbbbbbbbb................................................................................................bccc333bbbcbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33ccbcccbbbbbbbbb................................................................................................bbbbbbbbcccbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbccc3333ccccbbbbbbbb..................................................................................................bbbbbbbccbbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbb33cbbbbbbbbbbb..................................................................................................bbbbbbbccbcc3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbb333b..................................................................................................bbbbbbbccc333cccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbb............................................................3......................................bbbbbbbbbc33bcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbb...................................................................................................b33bbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbb....................................................................................................bbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbb.....................................................................................................bbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbb3cccbbbb33.....................................................................................................bbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbb3ccccbbb3......................................................................................................bbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bccccbbb3......................................................................................................33bbbbcc3bbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bbbbcccbb......................................................................................................33bbbccc3bbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbb......................................................................................................33bbbcccb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbb......................................................................................................bbbcccbbb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbb......................................................................................................bbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbb......................................................................................................bbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cccccbbbbb.....................................................................................................bbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3ccccbbbbbb...................................................................................................bbbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3cccbbbbbbb...................................................................................................bbbbbbcccc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................................................................bbbbbbccc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................................................................bbbbbbbcc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb333ccccb.................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb33cccccb.................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333ccccccc.................................................................................................cc333bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbccccccc.................................................................................................ccc33bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbccccccc.................................................................................................ccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbccccccc..................................................................................................ccbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcccccc...................................................................................................ccbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcbbbcc....................................................................................................cbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbbbc.....................................................................................................cbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbbbc.....................................................................................................bbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3ccbbbbc.....................................................................................................bbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3cccbbbc.....................................................................................................bcc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333cccc......................................................................................................ccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbbbbbb33cccc......................................................................................................c333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbcbbbb333ccc.....................................................................................................cc33bbbbbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbccccbbbbbb......................................................................................................c333bbbcbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbbcccbbbbbb.....................................................................................................bbbbbbcccbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33ccbcccbbbbb......................................................................................................bbbbbbccbbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbccc3333ccccbbbbb......................................................................................................bbbbbbccbcc3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbb33cbbbbbbbb......................................................................................................bbbbbbccc333cccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbb3......................................................................................................bbbbbbbbc33bcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbb.....................................................................................................33bbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbb....................................................................................................bbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbb.................................................................................................bbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbb...............................................................................................bbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbb3cccbbbb3333bb..............................................................................................bbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbb3ccccbbb3333bb.............................................................................................bbb333bbbbcc3bbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bccccbbb3333bbb............................................................................................bbb333bbbccc3bbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bbbbcccbbbbbbbb............................................................................................bbb333bbbcccb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbbbbbbbb............................................................................................bbbbbbbcccbbb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbbbbbbbb............................................................................................bbbbbbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbbbbbbbb............................................................................................bbbbbbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbbbbbbbb............................................................................................bbbbbbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cccccbbbbbbbbb..............................................................................................bbbbbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3ccccbbbbbbbbb..............................................................................................bbbbbbbbcccc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3cccbbbbbbbbb...............................................................................................bbbbbbbbccc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................bbbbbbbbcc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb333ccccb.................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb33cccccb.................................................................................................ccc333bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333ccccccc................................................................................................cccc33bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcccccc..................................................................................................ccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcccccc..................................................................................................cccbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcccccc..................................................................................................cccbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbccccc...................................................................................................cccbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbcbbb....................................................................................................bbcbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbbb....................................................................................................bbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3bbbbb.....................................................................................................bbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3ccbbb.....................................................................................................bbbcc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb3cccbb.....................................................................................................bbccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333ccc.....................................................................................................ccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbbbbbb33ccc.....................................................................................................ccc33bbbbbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbbcbbbb333cc.....................................................................................................cc333bbbcbbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbccccbbbbbb.....................................................................................................bbbbbbcccbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33bbbcccbbbbbbb....................................................................................................bbbbbbccbbb3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbb33ccbcccbbbbbbbb...................................................................................................bbbbbbccbcc3bbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbccc3333ccccbbbbbbbb....................................................................................................bbbbbccc333cccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbb33cbbbbbbbbbbbb...................................................................................................bbbbbbbc33bcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbb333bb...................................................................................................3bbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbbbbbbbbbbbbbbb...................................................................................................bbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcccbbbb3cccbbbb3333b...................................................................................................3bbbbcc3bbbcccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbbbb3ccccbbb3333b...................................................................................................3bbbccc3bbbbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bccccbbb3333b...................................................................................................3bbbcccb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33bbbbcccbbbbbb..................................................................................................bbbcccbbb33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbbbbbbb.................................................................................................bbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbcbbbb33cbbbcccbbbbbbb.................................................................................................bbbcccbbc33bbbcbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbbbbbbb................................................................................................bbbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cbbbcccbbbbbbb................................................................................................bbbbcccbbc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbb33cccccbbbbbbbb................................................................................................bbbbbbbcccc33bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3ccccbbbbbbbb................................................................................................bbbbbbbccc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3cccbbbbbbbb.................................................................................................bbbbbbbbcc3bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbb....3.............................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbb....3.............................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbb....b.............................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb333ccc....b.............................................................................................bccc333bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbb33cccc....b.............................................................................................bcccc33bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb333ccccc...b.............................................................................................ccccc333bbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        scroller.scrollBackgroundWithSpeed(0, 40, scroller.BackgroundLayer.Layer2)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer3, img`
            dbbbbbbbddd3ddddddddbbdd3..............................................................................................................d3bdddddddd33d3bbbb3ddddd
            dbbbbbbbddd3ddddddddbb33...............................................................................................................d3bbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddb3................................................................................................................3dbbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddddd................................................................................................................3dbbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddddd................................................................................................................3dbbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddddd................................................................................................................3dbbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddddd.................................................................................................................3bbddddddd3ddbbbbbbddddd
            dbbbbbb3ddd3ddddddd33dd..................................................................................................................bdddddddd3ddbbbbbbddddd
            dbbbbbbddd3dddddddb333d...................................................................................................................dddddddd3ddbbbbbbddddd
            d33bbbbddd3dddddd3bbd3d...................................................................................................................dddddddd3ddbbbbbbddddd
            dddbbb3d333ddddddbbbbd3...................................................................................................................dddddddd3ddbbbbbbddddd
            dddbbbdd33dddddddbbbbd33..................................................................................................................dddddddd3ddbbbbbbddddd
            ddd3b3d333ddddd33bbbbd3...................................................................................................................33dddddd3dd3bbbbbddddd
            dddd3333ddddddd33bbbbd3...................................................................................................................33bdddddd3ddbbbbbddddd
            ddddddddddddddd33bbbbd3...................................................................................................................dbb3ddddd3ddbbbb3ddddd
            ddddddddddddddd33bbbbd3...................................................................................................................bbbbddddd33d3bbbdddddd
            ddddddddddddddd33bbbbd3..................................................................................................................dbbbbdddddd3ddbbbdddddd
            ddddddddddddddd33bbbbd3..................................................................................................................dbbbb3ddddd33d3b3dddddd
            dddddddddddddddddbbb3d3..................................................................................................................dbbbb3dddddd3333ddddddd
            dddddddddddddddddbbbd3..................................................................................................................3dbbbb3ddddddddddddddddd
            ddddddddddddddddd3bb3...................................................................................................................3dbbbb3ddddddddddddddddd
            ddddddddddddddddd3bb3...................................................................................................................3dbbbb3ddddddddddddddddd
            ddddddddddddddddddb3.....................................................................................................................dbbbb3ddddddddddddddddd
            ddddddddddddddddddd......................................................................................................................d3bbbdddddddddddddddddd
            ddddddddddddddddddd......................................................................................................................3dbbbdddddddddddddddddd
            ddddddddddddddddddd.......................................................................................................................3bb3dddddddddddddddddd
            dddddddddddddd3dddd........................................................................................................................3bddddddddddddddddddd
            ddddddddddddd33dddd.........................................................................................................................dddddddddddddddddddd
            ddddddddddddd3333dd..........................................................................................................................ddddddddddddddddddd
            ddddddddddddd3333dd...........................................................................................................................dddddddddddddddddd
            ddddd333ddddd3333dd...........................................................................................................................d3dddddddddddddddd
            dddd33d333ddd3333ddd..........................................................................................................................d33ddddddddddddddd
            ddddb3dd33ddd3333ddd..........................................................................................................................333ddddddddddddddd
            ddd3bb3d333dd3333dddd.........................................................................................................................333ddddddddddddddd
            dddbbbbddd3dd33ddddddd........................................................................................................................333dddd333dddddddd
            d33bbbbddd3ddd3ddddddd.......................................................................................................................d333ddd33d33ddddddd
            d33bbbb3dd33dddddddddb......................................................................................................................dd333ddd3dd3bddddddd
            dbbbbbbbddd3ddddddddbb3....................................................................................................................ddd333dd33d3bb3dddddd
            dbbbbbbbddd3ddddddddbbd..................................................................................................................dddddd33dd3ddbbbbdddddd
            dbbbbbbbddd3ddddddddbbd..................................................................................................................dddddd3ddd3ddbbbb3ddddd
            dbbbbbbbddd3ddddddddbbd..................................................................................................................bdddddddd33d3bbbb3ddddd
            dbbbbbbbddd3ddddddddbbd..................................................................................................................bbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbb..................................................................................................................dbbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddd..................................................................................................................3dbbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddd..................................................................................................................3dbbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddd....................................................................................................................dbbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddd.....................................................................................................................bbddddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddd......................................................................................................................dddddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddd......................................................................................................................dddddddd3ddbbbbbbddddd
            dbbbbbb3ddd3ddddddd3......................................................................................................................dddddddd3ddbbbbbbddddd
            dbbbbbbddd3dddddddb33.....................................................................................................................dddddddd3ddbbbbbbddddd
            d33bbbbddd3dddddd3bbd.....................................................................................................................dddddddd3ddbbbbbbddddd
            dddbbb3d333ddddddbbbbd...................................................................................................................d33dddddd3dd3bbbbbddddd
            dddbbbdd33dddddddbbbbd...................................................................................................................333bdddddd3ddbbbbbddddd
            ddd3b3d333ddddd33bbbbd3..................................................................................................................3dbb3ddddd3ddbbbb3ddddd
            dddd3333ddddddd33bbbbd3..................................................................................................................dbbbbddddd33d3bbbdddddd
            ddddddddddddddd33bbbbd3..................................................................................................................dbbbbdddddd3ddbbbdddddd
            ddddddddddddddd33bbbbd3..................................................................................................................dbbbb3ddddd33d3b3dddddd
            ddddddddddddddd33bbbbd3..................................................................................................................dbbbb3dddddd3333ddddddd
            ddddddddddddddd33bbbbd3..................................................................................................................dbbbb3ddddddddddddddddd
            dddddddddddddddddbbb3d3..................................................................................................................dbbbb3ddddddddddddddddd
            dddddddddddddddddbbbd33..................................................................................................................dbbbb3ddddddddddddddddd
            ddddddddddddddddd3bb33...................................................................................................................dbbbb3ddddddddddddddddd
            ddddddddddddddddddb33.....................................................................................................................3bbbdddddddddddddddddd
            ddddddddddddddddddd33......................................................................................................................bbbdddddddddddddddddd
            ddddddddddddddddddddd......................................................................................................................bb3dddddddddddddddddd
            dddddddddddddddddddd........................................................................................................................bddddddddddddddddddd
            dddddddddddddd3ddddd........................................................................................................................dddddddddddddddddddd
            ddddddddddddd33ddddd.........................................................................................................................ddddddddddddddddddd
            ddddddddddddd3333ddd..........................................................................................................................dddddddddddddddddd
            ddddddddddddd3333ddd..........................................................................................................................d3dddddddddddddddd
            ddddd333ddddd3333ddd..........................................................................................................................d33ddddddddddddddd
            dddd33d333ddd3333ddd..........................................................................................................................333ddddddddddddddd
            dddd33d333ddd3333ddd..........................................................................................................................333ddddddddddddddd
            ddddb3dd33ddd3333dddd.........................................................................................................................333dddd333dddddddd
            ddd3bb3d333dd3333dddd.........................................................................................................................333ddd33d33ddddddd
            dddbbbbddd3dd33dddddd........................................................................................................................d333ddd3dd3bddddddd
            d33bbbbddd3ddd3dddddd........................................................................................................................d333dd33d3bb3dddddd
            d33bbbb3dd33ddddddddd.........................................................................................................................d33dd3ddbbbbdddddd
            dbbbbbbbddd3ddddddddbb3.......................................................................................................................d3ddd3ddbbbb3ddddd
            dbbbbbbbddd3ddddddddbbd.......................................................................................................................dddd33d3bbbb3ddddd
            dbbbbbbbddd3ddddddddbbdd......................................................................................................................dddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbbdd......................................................................................................................dddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbbdd......................................................................................................................dddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbb333.....................................................................................................................dddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddb33d.....................................................................................................................dddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddddddd.....................................................................................................................dddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddddd......................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddd.......................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddd.......................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbb3ddd3ddddddd33d.......................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbddd3dddddddb333.......................................................................................................................ddddd3ddbbbbbbddddd
            d33bbbbddd3dddddd3bbd3......................................................................................................................dddddd3dd3bbbbbddddd
            dddbbb3d333ddddddbbbbd......................................................................................................................bdddddd3ddbbbbbddddd
            dddbbbdd33dddddddbbbbd3.....................................................................................................................b3ddddd3ddbbbb3ddddd
            ddd3b3d333ddddd33bbbbd33....................................................................................................................bbddddd33d3bbbdddddd
            dddd3333ddddddd33bbbbd33....................................................................................................................bbdddddd3ddbbbdddddd
            ddddddddddddddd33bbbbd33....................................................................................................................bb3ddddd33d3b3dddddd
            ddddddddddddddd33bbbbd33...................................................................................................................bbb3dddddd3333ddddddd
            ddddddddddddddd33bbbbd3....................................................................................................................bbb3ddddddddddddddddd
            ddddddddddddddd33bbbbd3....................................................................................................................bbb3ddddddddddddddddd
            ddddddddddddddd33bbbbd3....................................................................................................................bbb3ddddddddddddddddd
            dddddddddddddddddbbb3d3....................................................................................................................bbb3ddddddddddddddddd
            dddddddddddddddddbbbd3.....................................................................................................................bbbdddddddddddddddddd
            ddddddddddddddddd3bb33.....................................................................................................................bbbdddddddddddddddddd
            ddddddddddddddddddb33......................................................................................................................bb3dddddddddddddddddd
            ddddddddddddddddddd33......................................................................................................................3bddddddddddddddddddd
            dddddddddddddddddddd........................................................................................................................dddddddddddddddddddd
            dddddddddddddddddddd........................................................................................................................dddddddddddddddddddd
            dddddddddddddd3dddd.........................................................................................................................dddddddddddddddddddd
            ddddddddddddd33dddd.........................................................................................................................ddd3dddddddddddddddd
            ddddddddddddd3333d..........................................................................................................................ddd33ddddddddddddddd
            ddddddddddddd3333d..........................................................................................................................dd333ddddddddddddddd
            ddddd333ddddd3333d..........................................................................................................................dd333ddddddddddddddd
            dddd33d333ddd3333d..........................................................................................................................dd333dddd333dddddddd
            ddddb3dd33ddd3333d.........................................................................................................................ddd333ddd33d33ddddddd
            ddd3bb3d333dd3333d.........................................................................................................................ddd333ddd3dd3bddddddd
            dddbbbbddd3dd33ddd.........................................................................................................................ddd333dd33d3bb3dddddd
            d33bbbbddd3ddd3ddd........................................................................................................................ddddd33dd3ddbbbbdddddd
            d33bbbb3dd33ddddddddd.....................................................................................................................ddddd3ddd3ddbbbb3ddddd
            dbbbbbbbddd3ddddddddbb....................................................................................................................dddddddd33d3bbbb3ddddd
            dbbbbbbbddd3ddddddddbbd...................................................................................................................bddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbbd...................................................................................................................bddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbbd....................................................................................................................ddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbbd....................................................................................................................ddddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbbdd....................................................................................................................dddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbb3.....................................................................................................................dddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddb3.....................................................................................................................dddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddddd......................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddd........................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddd.........................................................................................................................dddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddd.........................................................................................................................dddd3ddbbbbbbddddd
            dbbbbbb3ddd3ddddddd33.........................................................................................................................dddd3dd3bbbbbddddd
            dbbbbbbddd3dddddddb33.........................................................................................................................ddddd3ddbbbbbddddd
            d33bbbbddd3dddddd3bbd3........................................................................................................................ddddd3ddbbbb3ddddd
            dddbbb3d333ddddddbbbbd3........................................................................................................................dddd33d3bbbdddddd
            dddbbbdd33dddddddbbbbd33........................................................................................................................dddd3ddbbbdddddd
            ddd3b3d333ddddd33bbbbd33..........................................................................................................................dd33d3b3dddddd
            dddd3333ddddddd33bbbbd33..........................................................................................................................ddd3333ddddddd
            ddddddddddddddd33bbbbd33..........................................................................................................................dddddddddddddd
            ddddddddddddddd33bbbbd33..........................................................................................................................dddddddddddddd
            ddddddddddddddd33bbbbd3...........................................................................................................................dddddddddddddd
            ddddddddddddddd33bbbbd............................................................................................................................dddddddddddddd
            dddddddddddddddddbbb3d............................................................................................................................dddddddddddddd
            dddddddddddddddddbbbd3............................................................................................................................dddddddddddddd
            ddddddddddddddddd3bb33...........................................................................................................................ddddddddddddddd
            ddddddddddddddddddb33...........................................................................................................................dddddddddddddddd
            ddddddddddddddddddd3............................................................................................................................dddddddddddddddd
            dddddddddddddddddddd........................................................................................................................dddddddddddddddddddd
            dddddddddddddddddddd........................................................................................................................dddddddddddddddddddd
            dddddddddddddd3ddd.........................................................................................................................dddd3dddddddddddddddd
            dddddddddddddd3dd.........................................................................................................................ddddd33ddddddddddddddd
            ddddddddddddd33dd.........................................................................................................................dddd333ddddddddddddddd
            ddddddddddddd3333.........................................................................................................................dddd333ddddddddddddddd
            ddddddddddddd3333.........................................................................................................................dddd333dddd333dddddddd
            ddddd333ddddd3333..........................................................................................................................ddd333ddd33d33ddddddd
            dddd33d333ddd3333...........................................................................................................................dd333ddd3dd3bddddddd
            ddddb3dd33ddd3333...........................................................................................................................ddd3ddd3ddbbbb3ddddd
            d33bbbbddd3ddd3dd............................................................................................................................ddddd33d3bbbb3ddddd
            d33bbbb3dd33dddddd...........................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddd..........................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddd.........................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddb........................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddb........................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbb.......................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3ddddddddbb.......................................................................................................................ddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddb......................................................................................................................dddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddd......................................................................................................................dddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddd......................................................................................................................dddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddd......................................................................................................................dddddd3ddbbbbbbddddd
            dbbbbbbbddd3dddddddddd.....................................................................................................................3dddddd3dd3bbbbbddddd
            dbbbbbb3ddd3ddddddd33d....................................................................................................................33bdddddd3ddbbbbbddddd
            dbbbbbbddd3dddddddb333...................................................................................................................3dbb3ddddd3ddbbbb3ddddd
            d33bbbbddd3dddddd3bbd3...................................................................................................................dbbbbddddd33d3bbbdddddd
            dddbbb3d333ddddddbbbbd...................................................................................................................dbbbbdddddd3ddbbbdddddd
            dddbbbdd33dddddddbbbbd...................................................................................................................dbbbb3ddddd33d3b3dddddd
            ddd3b3d333ddddd33bbbbd...................................................................................................................dbbbb3dddddd3333ddddddd
            ddd3b3d333ddddd33bbbbd...................................................................................................................dbbbb3ddddddddddddddddd
            dddd3333ddddddd33bbbbd..................................................................................................................3dbbbb3ddddddddddddddddd
            ddddddddddddddd33bbbbd..................................................................................................................3dbbbb3ddddddddddddddddd
            ddddddddddddddd33bbbb....................................................................................................................dbbbb3ddddddddddddddddd
            ddddddddddddddd33bbbb....................................................................................................................d3bbbdddddddddddddddddd
            ddddddddddddddd33bbbb.....................................................................................................................dbbbdddddddddddddddddd
            dddddddddddddddddbbb3......................................................................................................................bb3dddddddddddddddddd
            dddddddddddddddddbbbd......................................................................................................................3bddddddddddddddddddd
            ddddddddddddddddd3bb3......................................................................................................................3dddddddddddddddddddd
            ddddddddddddddddddb3.......................................................................................................................ddddddddddddddddddddd
            ddddddddddddddddddd3.......................................................................................................................ddddddddddddddddddddd
            dddddddddddddddddddd.......................................................................................................................dddd3dddddddddddddddd
            dddddddddddddddddddd.......................................................................................................................dddd33ddddddddddddddd
            dddddddddddddd3ddddd.......................................................................................................................ddd333ddddddddddddddd
            ddddddddddddd33ddddd.......................................................................................................................ddd333ddddddddddddddd
            ddddddddddddd3333ddddd.....................................................................................................................ddd333dddd333dddddddd
            ddddddddddddd3333ddddd.....................................................................................................................ddd333ddd33d33ddddddd
            ddddd333ddddd3333dddddd....................................................................................................................ddd333ddd3dd3bddddddd
            dddd33d333ddd3333dddddd....................................................................................................................ddd333dd33d3bb3dddddd
            ddddb3dd33ddd3333dddddd...................................................................................................................ddddd33dd3ddbbbbdddddd
            ddd3bb3d333dd3333ddddddd..................................................................................................................ddddd3ddd3ddbbbb3ddddd
            dddbbbbddd3dd33ddddddddd..................................................................................................................dddddddd33d3bbbb3ddddd
            d33bbbbddd3ddd3ddddddddd..................................................................................................................bddddddd3ddbbbbbbddddd
            `)
        scroller.scrollBackgroundWithSpeed(0, 60, scroller.BackgroundLayer.Layer3)
        timer.after(2000, function () {
            Boss4(bossman3)
        })
    }
})
statusbars.onZero(StatusBarKind.Boss4health, function (status) {
    game.over(true)
})
/**
 * Hero
 */
function Hero2 (mySprite: Sprite) {
    Hero = sprites.create(img`
        ..........ff..........
        ..........ff..........
        .........fccf.........
        ........fcddcf........
        ........fcaacf........
        ........fcbbcf........
        ...a....fcbbcf....a...
        ...d...fabccbaf...d...
        ...d..fdabccbadf..d...
        ...c.fccabccbaccf.c...
        .ffffaaaabccbaaaaffff.
        fbbdaddbbbaabbbddadbbf
        fbddaaabddddddbaaaddbf
        fbddababddddddbabaddbf
        fbddaaabbddddbbaaaddbf
        fbdcccccbdccdbcccccdbf
        fcccfffffccccfffffcccf
        fccf.....fccf.....fccf
        fff......ffff......fff
        ........425524........
        .........4224.........
        ..........55..........
        `, SpriteKind.Player)
    Hero.setPosition(75, 105)
    controller.moveSprite(Hero, 175, 0)
    characterAnimations.loopFrames(
    Hero,
    assets.animation`myAnim0`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Hero,
    assets.animation`RightBank0`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Hero,
    assets.animation`RightLeft`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    Hero.setStayInScreen(true)
    Herohealth = statusbars.create(50, 4, StatusBarKind.Health)
    Herohealth.value = 1500
    Herohealth.setOffsetPadding(-39, 5)
    Herohealth.positionDirection(CollisionDirection.Top)
}
function FinalBoss (mySprite: Sprite) {
    FinalBossman = sprites.create(assets.image`FinallBoss`, SpriteKind.FinalBOSS)
    Bossthumb4 = sprites.create(img`
        ........................................................................11111111111111
        ........................................................................166666666ffff1
        ........................................................................166666ffff8881
        ........................................................................1ffffffb888881
        1111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbb888881
        1111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbb888881
        1111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffff1
        1111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbb1
        1111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbb1
        1111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffff1
        ........................................................................1fffbbbbbbbbb1
        ........................................................................166fbbbbbbbbb1
        ........................................................................166fbbbbbbbbb1
        ........................................................................11111111111111
        `, SpriteKind.Thumb4)
    animation.runImageAnimation(
    FinalBossman,
    assets.animation`bossanimatipo`,
    400,
    true
    )
    Bossthumb4.setPosition(116, 7)
    FinalBossman.setVelocity(10, 0)
    FinalBossman.setBounceOnWall(true)
    FinalBossman.setPosition(78, 19)
    BossmanHealth = statusbars.create(70, 4, StatusBarKind.Boss4health)
    BossmanHealth.setColor(11, 13)
    BossmanHealth.setOffsetPadding(29, 5)
    BossmanHealth.positionDirection(CollisionDirection.Top)
    BossmanHealth.value = 3000
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss2, function (sprite, otherSprite) {
    Herohealth.value += -2
    scene.cameraShake(3, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FinalBOSS, function (sprite, otherSprite) {
    Herohealth.value += -1
    scene.cameraShake(3, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`PulsarBlast`, Hero, 0, -150)
    projectile.setKind(SpriteKind.PlayerShot)
    if (Powerup1 && Powerup1.lifespan > 0) {
        Projectile2 = sprites.createProjectileFromSprite(img`
            ....................
            ....................
            ............9.......
            ..9........999...9..
            .999...9..99199.999.
            99199.999..919.99199
            .919.99199..1...919.
            ..1...919...1....1..
            ..1....1....4....1..
            ..4....1.........4..
            .......4....4.......
            ..4..............4..
            .......4............
            ............2.......
            ..2..............2..
            .......2............
            `, Hero, 0, -150)
        Projectile2.setKind(SpriteKind.PlayerShot)
    }
    if (RocketPowerup && RocketPowerup.lifespan > 0) {
        projectile3 = sprites.createProjectileFromSprite(assets.image`roket ss`, Hero, 0, -150)
        projectile3.setKind(SpriteKind.PlayerShot)
    }
})
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Enemy1, function (sprite, otherSprite) {
    sprite.destroy()
    animation.runImageAnimation(
    Enemy1,
    assets.animation`Explosion`,
    60,
    false
    )
    pause(300)
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray, 10)
})
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Boss3, function (sprite, otherSprite) {
    BossmanHealth.value += -0.1
    sprite.destroy()
    otherSprite.startEffect(effects.spray, 50)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    animation.runImageAnimation(
    Hero,
    assets.animation`Explosion`,
    200,
    false
    )
    pause(2000)
    game.over(false, effects.dissolve)
})
/**
 * Enemy Hit
 */
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    animation.runImageAnimation(
    Enemy2,
    assets.animation`Explosion`,
    60,
    false
    )
    pause(300)
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray, 10)
})
statusbars.onZero(StatusBarKind.boss3health, function (status) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy1, function (sprite, otherSprite) {
    Herohealth.value += -5
    otherSprite.destroy()
    scene.cameraShake(3, 200)
})
/**
 * Boss3
 */
function Boss4 (mySprite: Sprite) {
    bossman3 = sprites.create(assets.image`Boss5`, SpriteKind.Boss3)
    Bossthumb3 = sprites.create(img`
        ........................................................................11111111111111
        ........................................................................166666666ffff1
        ........................................................................166666ffff8881
        ........................................................................1ffffff7888881
        11111111111111111111111111111111111111111111111111111111111111111111111118888887888881
        11111111111111111111111111111111111111111111111111111111111111111111111118888887888881
        1111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffff1
        11111111111111111111111111111111111111111111111111111111111111111111111117777777777771
        11111111111111111111111111111111111111111111111111111111111111111111111117777777777771
        1111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffff1
        ........................................................................1fff7777777771
        ........................................................................166f7777777771
        ........................................................................166f7777777771
        ........................................................................11111111111111
        `, SpriteKind.thumb3)
    Bossthumb3.setPosition(116, 7)
    bossman3.setVelocity(100, 0)
    bossman3.setPosition(76, 0)
    bossman3.setBounceOnWall(true)
    BossmanHealth = statusbars.create(70, 4, StatusBarKind.boss3health)
    BossmanHealth.setColor(7, 13)
    BossmanHealth.setOffsetPadding(29, 5)
    BossmanHealth.positionDirection(CollisionDirection.Top)
    BossmanHealth.value = 2000
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    BossMan.destroy()
    BossThumbnail.destroy()
    BossmanHealth.destroy()
    Planet.destroy()
    Planet2.destroy()
    if (true) {
        game.splash("STAGE 2")
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
            fffffffffffffffff.................................................................................................................................f.............
            fffffffffffffff.................................................................................................................................................
            ffffffffffffff..................................................................................................................................................
            ffffffffffffff..................................................................................................................................................
            ffffffffffffff..................................................................................................................88..............................
            ffffffffffffff................................................................................................................884488..........................ff
            ffffffffffffff...............488..............................................................................................8844f88f.......................fff
            ffffffffffffff..............f488..............................................................................................8844f88ff......................fff
            ffffffffffffff.............ff888..............................................................................................8888f88f88.....................fff
            ffffffffffffff............8ff888..............................................................................................8888f888fff...................ffff
            ffffffffffffff...........88ff88888..........................................................................................88888ff88ffff...................ffff
            fffffffffffffff.........f88ff84488..........................................................................................88448ff88f88f..................fffff
            fffffffffffffff.........f88fff8888..........................................................................................8888fff88f88ff.................fffff
            ffffffffffffffff........888fff4488..........................................................................................8844fff888ffff.................fffff
            ffffffffffffffffff.....f888ffff488..........................................................................................8844fff888fffff...............ffffff
            ffffffffffffffffff.....ffff88ff488..........................................................................................8844ff8ffffffff..............fffffff
            fffffffffffffffffffffffffffffff4888.........................................................................................8844ff8ff8fffff.............ffffffff
            fffffffffffffffffffffffffffffff4888........................................................................................88844ffff8ffffff............fffffffff
            fffffffffffffffffffffffffff8f8f488888......................................................................................88844ffff8ffffff............fffffffff
            fffffffffffffffffffffffffff8f8f888888....................................................................................88888fff8f8fff8fffff........fffffffffff
            fffffffffffffffffffffff8ff88f8f88f488....................................................................................88848ff88f8fff8ffffffffffffffffffffffff
            fffffffffffffffffffffff8ff8f8848f848844..................................................................................8844ffff8f8ffff8fffffffffffffffffffffff
            fffffffffffffffffffffff8ffff8f48f888844................................................................................448844ffff8ffffff8fffffffffffffffffffffff
            fffffffffffffffffffffff8fff8ff48f888844................................................................................448888fffffffffff88ffffffffffffffffffffff
            fffffffffffffffffffffff8fff8ff488848844................................................................................448884fffffff8ffff8ffffffffffffffffffffff
            fffffffffffffffffffffff8fff8ff48f848844................................................................................44888f8ff8fff8fffffffffffffffffffffffffff
            fffffffffffffffffffffff8fff8fff8ff48844................................................................................448f8f8ffffff8fffffffffffffffffffffffffff
            ffffffffffffffffffffffff8ff8fff88f44488................................................................................884f8f8ffffff8fffffffffffffffffffffffffff
            ffffffffffffffffffffffff8ff8f8f88f44488................................................................................88f4f88fff8ff8fffffffffffffffffffffffffff
            fffffffffffffffffffffffffff8f8f8ff848444..............................................................................444f4ffff8f8ff8fffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff88f8ff84f448..............................................................................844f48ffff88ff8fffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f888f8ff88f888..............................................................................888f48ffffff8f8fffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f888f8ff88f888..............................................................................88ff48fff8ff8f8fffffffffffffffffffffffffff
            fffffffffffffffffffffffff8fff848ff88f884..............................................................................48f448ff888fff8fffffffffffffffffffffffffff
            fffffffffffffffffffffffff8ffff88888f8888..............................................................................88f44888888fff8fffffffffffffffffffffffffff
            fffffffffffffffffffffffff8ffff88888f4888..............................................................................88ff488448ffff8fffffffffffffffffffffffffff
            ffffffffffffffffffffffffff8fff8f888f4888..............................................................................88f4488f88ffff8fffffffffffffffffffffffffff
            ffffffffffffffffffffffffff8fff8f888f4888..............................................................................888448ff8fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff8f8f88f88448..............................................................................88844f8f8fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff88f8f88f88888..............................................................................84488f8ff8ff8fffffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f88fff88f4488844............................................................................888884ffff8f8fffffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f88fff48f44888..44.........................................................................4888448ffff8f888fffffffffffffffffffffffffff
            ffffffffffffffffffffff8ff8fffffffff44888..44.......................................................................44.888444ffffff888fffffffffffffffffffffffffff
            ffffffffffffffffffffff8fff888f88fff44888..44.......................................................................44.888f44ff4fff8f8fffffffffffffffffffffffffff
            ffffffffffffffffffffff8fff8fff888f4448884444.......................................................................444888f44ff4f88ffffffffffffffffffffffffffffff
            ffffffffffffffffffffff8fff8fff884f8f888844...........................................................................4888f88444f88ffffffffffffffffffffffffffffff
            ffffffffffffffffffffff8fff8fff884f8f888444..4....................................................................44..4488f88444f88ffffffffffffffffffffffffffffff
            ffffffffffffffffffffff8fff8ff844888f888488..4....................................................................44..8488ff888ff88ffffffffffffffffffffffffffffff
            ffffffffffffffffffffff8ffff8f84f8888844888...........................................................................8844ff888ff88ff8fffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff84f8884488888...........................................................................8888ff888ff88ff8fffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff8ff8884f88888...........................................................................8888ff88fff88ff8fffffffffffffffffffffffffff
            fffffffffffffffffffffffffff8f8ff8484f88888...........................................................................8888ff88fff88ff8fffffffffffffffffffffffffff
            fffffffffffffffffffffffffff8f8ff8484f88888...........................................................................88884f88fff8f8f8fffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f8f8ff8448f88844...........................................................................48488f48fffff888fffffffffffffffffffffffffff
            fffffffffffffffffffffffff8ff88f88f48f88888...........................................................................884888f888ff88fffffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f888f84f88f88888...........................................................................8884488888ff88fffffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f888f84ff8f88888...........................................................................88844888888488fffffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f88ff8f8f8844888...........................................................................888448fff884f8fffffffffffffffffffffffffffff
            fffffffffffffffffffffffff8f8f8f4f4f8888488...........................................................................884484fff884f8fff8fffffffffffffffffffffffff
            fffffffffffffffffffffffff8f8f8f4ff888448.............................................................................848848fff8f48ffff8fffffffffffffffffffffffff
            ffffffffffffffffffffff8ffff8f8f4ff888448..............................................................................84448fff4f88ffffffffffffffffffffffffffffff
            ffffffffffffffffffffff8ffffff8fff4888448..............................................................................84448fff4f88ffffffffffffffffffffffffffffff
            ffffffffffffffffffffff8ffff888fff4888448..............................................................................84488ff8ff44ffffffffffffffffffffffffffffff
            ffffffffffffffffffffff8ffff888fff888888................................................................................8888ff8ff48ffffffffffffffffffffffffffffff
            ffffffffffffffffffffff8ffff8888f4884488................................................................................8844fff8f48ffffff8fffffffffffffffffffffff
            fffffffffffffffffffff8fffff8888f8888888................................................................................88888ff8f44ffffff8fffffffffffffffffffffff
            fffffffffffffffffffff8fff8f8848f88888....................................................................................888ff8f444fffff8fffffffffffffffffffffff
            fffffffffffffffffffff8fff88ff48f44888....................................................................................8884f8ff44f8fff8fffffffffffffffffffffff
            fffffffffffffffffffff8fff88ff4f844488....................................................................................8844f88f44f8fff8fffffffffffffffffffffff
            fffffffffffffffffffff8fff88ff4f844488....................................................................................8844f88f4ff8fff8fffffffffffffffffffffff
            fffffffffffffffffffff8fff88ff444f48........................................................................................844f4f8ff8fff8fffffffffffffffffffffff
            fffffffffffffffffffff8ff888884f4f48........................................................................................844f4f88f8fff8fffffffffffffffffffffff
            ffffffffffffffffffffffff888884f4f88........................................................................................8884ff88f8fff8fffffffffffffffffffffff
            fffffffffffffffffffffffff8f8f4f8f8..........................................................................................884ff88f8ff48fffffffffffffffffffffff
            fffffffffffffffffffffffff8f8fff8f8..........................................................................................888ff88f8fff8fffffffffffffffffffffff
            fffffffffffffffffffffffff8f4fff488..........................................................................................8888f84fffffffffffffffffffffffffffff
            fffffffffffffffffffffff8ff84fff444..........................................................................................8888f848ffffffffffffffffffffffffffff
            fffffffffffffffffffff8f8ff84ff44............................................................................................4488ff48fff8ff8fffffffffffffffffffff
            fffffffffffffffffffff8f8f88f4f44..............................................................................................444f48ff88ff8fffffffffffffffffffff
            ffffffffffffffffffff8fffffff4844..............................................................................................44844fffffff8fffffffffffffffffffff
            ffffffffffffffffffff8fff48844888..............................................................................................888448ffffffffffffffffffffffffffff
            fffffffffffffffffff8fff4f888f888..............................................................................................888848f8fff8ffffffffffffffffffffff
            fffffffffffffffffff88ff4f888f444..............................................................................................44444ff8fff8f8ffffffffffffffffffff
            fffffffffffffff88ff88f44f84f84..................................................................................................44f8ff4ff8fff88fffffffffffffffff
            fffffffffffffffffff88ff8f84f84..................................................................................................44f48f8f88ffffff8fffffffffffffff
            fffffffffffffffff88f8f84448f88..................................................................................................8888ff8f8ff88fff8fffffffffffffff
            fffffffffffffffff8ff8f84448f48..................................................................................................8848888f8ff88fff8fffffffffffffff
            fffffffffffffffff8ff8ff484f88...................................................................................................8848884f8ff88fff8fffffffffffffff
            fffffffffffffffff8ff8ff884f88.....................................................................................................88884ffff8ffff8fffffffffffffff
            ffffffffffffff8ff8ff8ff884f88.....................................................................................................88888ffff8ffffffffffffffffffff
            ffffffffffffff8ff8fff8f448888.....................................................................................................88884fff88ffffffffffffffffffff
            ffffffffffffff8ff8ff88f448844.....................................................................................................48884fff88ffffffffffffffffffff
            fffffffffffff8ff88ff44f888844.....................................................................................................48888fff84f88fffffffffffffffff
            fffffffffffff88f88ff44f8844........................................................................................................4488ff8f4f888ffffffffffffffff
            fffffffffffff8fff8ff4488844........................................................................................................44888f4f48ff8ffffffffffffffff
            fffffffffffff8fff8ff48888............................................................................................................8888ff48ff8ffffffffffffffff
            fffffffffffff8fff8ff88888............................................................................................................8888ff48ff8ffffffffffffffff
            fffffffffff8f8fff8f888888............................................................................................................8888f8f8ff8ffffffffffffffff
            fffffffffff8f8ff84f88844..............................................................................................................4488ff4888ffffffffffffffff
            fffffffffff8ffff44f48888..............................................................................................................88844ff888ffffffffffffffff
            fffffffffff8fff848f48888..............................................................................................................88844ff888ffffffffffffffff
            fffffffffff88f8884f488..................................................................................................................844fff8f88ffffffffffffff
            fffffffffff88f8f8f4888..................................................................................................................888fff8f88ffffffffffffff
            ffffffffff8f8f8f4f4888..................................................................................................................888f4f8fff8fffffffffffff
            ffffffffff8f8ff844f888..................................................................................................................888f4f88ff8fffffffffffff
            ffffffffff8ff8f848f48844..............................................................................................................44844f84ffff8fffffffffffff
            ffffffffff8f8ff84f848844..............................................................................................................44844884ffff8fffffffffffff
            ffffffffff8ffff8f8848844....................................................................................................f.........4484f888ffff8fffffffffffff
            ffffffffff8ffff8f8888844..............................................................................................................4488f888f4ff8fffffffffffff
            ffffffffff8fff44f4888844..............................................................................................................4488f884f4ff8fffffffffffff
            ffffffffff88ff84f48444..................................................................................................................44f8844f888fffffffffffff
            ffffffffff88ff84f84844..................................................................................................................4888844f888fffffffffffff
            fffffffff8ff8f44f848.....................................................................................................................88884488ff88fffffffffff
            fffffffff8ff884f484........................................................................................................................884488ff8ffffffffffff
            fffffffff8ff848ff84........................................................................................................................88ff88ff8ffffffffffff
            fffffffff8ff848ff88..........................................................................................................................ff88ff8ffffffffffff
            fffffffff8ff488ff............................................................................................................................ff88ff8ffffffffffff
            ffffffffffff48fff............................................................................................................................fff8ff8ffffffffffff
            ffffffffff8848f8844........................................................................................................................4488f888fffffffffffff
            ffffffffff888884844........................................................................................................................44888888fffffffffffff
            fffffffffff88f88444........................................................................................................................448f8ffffffffffffffff
            fffffffffff88f88444........................................................................................................................448f8ff88ffffffffffff
            fffffffffff88f8f444........................................................................................................................448f8ff88ffffffffffff
            fffffffffff88f8f4f4........................................................................................................................44888ff8fffffffffffff
            fffffffffff88f8f8f4........................................................................................................................44888ff8fffffffffffff
            fffffffffff88ff88f88.....................................................................................................................8888f84ff8fffffffffffff
            fffffffffff88ff84f48.....................................................................................................................8844f84f8ffffffffffffff
            ffffffffff8f8f884f48.....................................................................................................................8888f84f8ffffffffffffff
            ffffffffffff8ff8ff48.....................................................................................................................888f8f4f8ffffffffffffff
            fffffffffffff8f8f44888..................................................................................................................8888f88ff8ffffffffffffff
            fffffffffffff8f8f44488..................................................................................................................8448f88fff8fffffffffffff
            fffffffffffff8f8f84488..................................................................................................................8448f88fff8fffffffffffff
            ffffffffff8ffff8f84488..................................................................................................................8448f88ffff8ffffffffffff
            fffffffffffffff88f4444..................................................................................................................4448f88ffff8ffffffffffff
            fffffffff8fffff88f8444...............................................................................................................4444448f88ffff8ffffffffffff
            fffffffff8fffff8888444f44............................................................................................................4448888f8f8fff8ffffffffffff
            ffffffffffffff8ff88888f44............................................................................................................4448884f8f8fff8ffffffffffff
            ffffffffffff888ff88888f4444........................................................................................................44444888488f888f8ffffffffffff
            ffffffffffff888ff88888f484444.....................................................................................................44484488448f8888f8ffffffffffff
            ffffffffffffff8ffff844f84..44.....................................................................................................4..48844488f88fff8ffffffffffff
            ffffffffffffff8ff8ff44f444444.....................................................................................................4444444ff88f88ff8fffffffffffff
            fffffffffffffffff8ff88f488844.....................................................................................................4888448ff88f88ff8fffffffffffff
            ffffffffffff88fff84f88f888844.....................................................................................................4888448ff88f88ff8fffffffffffff
            fffffffffffff8ffff4ff8888f844.....................................................................................................4888888ff88f8f8fffffffffffffff
            fffffffffffff8ffff84f8888f8888..................................................................................................888884f88ff88ff8ffffffffffffffff
            fffffffffffff8ffff84f88888f888..................................................................................................888848f888f88ff8ffffffffffffffff
            ffffffffffffffffff84f84884f888..................................................................................................888448f888f88ff8ffffffffffffffff
            fffffffffffffffff8f4f88484f488..................................................................................................888448f888f88ff8ffffffffffffffff
            fffffffffff8fff888f8f88f44f484..................................................................................................88844ff888f8f8f8ffffffffffffffff
            fffffffffff8ff8888ff4f8f444f8488..............................................................................................8888844ff88ff8f8ffffffffffffffffff
            fffffffffff8ff88ff8f8f88f44f8848..............................................................................................8888844ff88ffff8ffffffffffffffffff
            ffffffffffff8f88ff8fff88f44f4848..............................................................................................888884f8f4fffffff8ffffffffffffffff
            ffffffffffff8f88ff8fff88f4484848..............................................................................................88888488f44ff8f88fffffffffffffffff
            ffffffffffff8fffff8f4f4f8f888484..............................................................................................88444444f48ff8ffffffffffffffffffff
            fffffffffffff8f8f8ff88ff4f488484..............................................................................................8844444488ffffff8fffffffffffffffff
            fffffffffffff8f8f88fff8f4f4884884...........................................................................................884444488f88fff88f8fffffffffffffffff
            ffffffffffffff88fff8ff884888844448..........................................................................................8844448f8f88fff88f8fffffffffffffffff
            fffffffffffffff8f88fff888448884488..........................................................................................8844884f4f88fff88f8fffffffffffffffff
            fffffffffffffff88ffffffff448888888..........................................................................................888888ff4f88ffffff8fffffffffffffffff
            ffffffffffffffff8f8fff88888f888888..........................................................................................8888848fff88ffff888fffffffffffffffff
            ffffffffffffffff8f88ff88488f8848888........................................................................................88888848f8888ff88888fffffffffffffffff
            ffffffffffffffff88f8ff88488f8848888........................................................................................8888884888888f88fffffffffffffffffffff
            fffffffffffffffffff8ffff4888f884888........................................................................................88888848888ff8fffffffffffffffffffffff
            fffffffffffffffffff888ff4884f888448........................................................................................84488488888fff888ffffffffffffffffffff
            ffffffffffffffffffff8f88f888f888448........................................................................................844f448f88fff8ff8ffffffffffffffffffff
            fffffffffffffffffff88f88f488f488444........................................................................................8f4f888f88f88ff88ffffffffffffffffffff
            ffffffffffffffffffff8f888f488f4448488....................................................................................888f8f448f888888fffffffffffffffffffffff
            fffffffffffffffffff88f888f488f8884444....................................................................................44f88f488fff88ffff8ffffffffffffffffffff
            fffffffffffffffffff88f88fff44f8884448....................................................................................88f84f888fff88f8ff8ffffffffffffffffffff
            fffffffffffffffffff8fff88ff8884488888....................................................................................8f888f488fff8f8ff8fffffffffffffffffffff
            fffffffffffffffffff8fff88ff8884488888..................................................................................448f888f4888fff88ffffffffffffffffffffffff
            fffffffffffffffffff8ff88ff8888448888844................................................................................448f888f488ffffffffffffffffffffffffffffff
            fffffffffffffffffff8ffffff8888448884844................................................................................448f888f48f8fffffffffffffffffffffffffffff
            fffffffffffffffffff8ff8fff8888448884844................................................................................4488888f4888fffffffffffffffffffffffffffff
            fffffffffffffffffff8ff8fff8888444884844................................................................................8888888fffff88fffffffffffffffffffffffffff
            fffffffffffffffffff8ff8ff88ff8884888488................................................................................888888ff8f88fffffffffffffffffffffffffffff
            ffffffffffffffffffff8f88fff888888488488................................................................................888888fff888fffffffffffffffffffffffffffff
            ffffffffffffffffffffff88fff88f888448488................................................................................888888fffff8fffffffffffffffffffffffffffff
            ffffffffffffffffffffff8fffffff888848488................................................................................88888888fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff888884488................................................................................88888888fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff888884488................................................................................884488888ffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff888ff8884488................................................................................8844888ff888fffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff8ff88844888..............................................................................88844888ffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff888ff88888...............................................................................888888fff888ffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff888ff88888...............................................................................888888ff8888ffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff888ff88844...............................................................................844888ff8888fffffff............fffffffffff
            fffffffffffffffffffffffffffff888fff884.................................................................................4488fff8888ffff................ffffffffff
            fffffffffffffffffffffffffffff888ff844...................................................................................8448ff8888f....................fffffffff
            fffffffffffffffffffffffffffff888ff844....................................................................................448ff88.......................fffffffff
            fffffffffffffffffffffffffffff888ff844.....................................................................................84ff.........................fffffffff
            ffffffffffffffffffffffffffffff88ff488..................................................................................................................fffffffff
            fffffffff.......ffffffffffffff88ff844...................................................................................................................ffffffff
            ffffffff........ffffffffffffff88ff8.....................................................................................................................ffffffff
            ffffff...........fffffffffffff88ff8......................................................................................................................fffffff
            fffff..............fffffffffff88ff........................................................................................................................ffffff
            ffff................ffffffffff88ff........................................................................................................................ffffff
            ff..................ffffffffff88f.........................................................................................................................ffffff
            .............................................................................................................................................................fff
            .............................................................................................................................................................fff
            .............................................................................................................................................................fff
            `)
        scroller.scrollBackgroundWithSpeed(0, 30, scroller.BackgroundLayer.Layer1)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`New Bg2`)
        scroller.scrollBackgroundWithSpeed(0, 75, scroller.BackgroundLayer.Layer2)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer3, assets.image`STAGE 2 bg2`)
        scroller.scrollBackgroundWithSpeed(0, 125, scroller.BackgroundLayer.Layer3)
        timer.after(20000, function () {
            Boss2(Bossman2)
        })
    }
})
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.boss2, function (sprite, otherSprite) {
    BossmanHealth.value += -100
    sprite.destroy()
    otherSprite.startEffect(effects.spray, 50)
})
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Enemy3, function (sprite, otherSprite) {
    sprite.destroy()
    animation.runImageAnimation(
    Enemy33,
    assets.animation`Explosion`,
    60,
    false
    )
    pause(300)
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray, 10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HeartHealth, function (sprite, otherSprite) {
    Herohealth.value += 33
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Boss, function (sprite, otherSprite) {
    BossmanHealth.value += -100
    sprite.destroy()
    otherSprite.startEffect(effects.spray, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    Herohealth.value += -2
    otherSprite.destroy()
    scene.cameraShake(3, 200)
})
sprites.onOverlap(SpriteKind.enemyshotq, SpriteKind.Player, function (sprite, otherSprite) {
    Herohealth.value += -7
    sprite.destroy()
    scene.cameraShake(3, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Powerup1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Powerup1)
    otherSprite.destroy()
    Powerup1.lifespan = 8000
})
function bossman (mySprite: Sprite) {
    BossMan = sprites.create(assets.image`Boss`, SpriteKind.Boss)
    BossThumbnail = sprites.create(img`
        ........................................................................11111111111111
        ........................................................................177777777ffff1
        ........................................................................177777ffff8881
        ........................................................................1ffffffb888881
        1111111111111111111111111111111111111111111111111111111111111111111111111298888b888881
        1111111111111111111111111111111111111111111111111111111111111111111111111298888b888881
        1111111111111111111111111111111111111111111111111111111111111111111111111298888b111bb1
        1111111111111111111111111111111111111111111111111111111111111111111111111298888b111bd1
        11111111111111111111111111111111111111111111111111111111111111111111111112dddddbbbbbd1
        11111111111111111111111111111111111111111111111111111111111111111111111112111111111111
        ........................................................................1fff4cccccccc1
        ........................................................................177f4cccccccc1
        ........................................................................177f4cccccccc1
        ........................................................................11111111111111
        `, SpriteKind.thumb)
    BossThumbnail.setPosition(116, 7)
    characterAnimations.loopFrames(
    BossMan,
    [img`
        ..............................................4.....4...............................................
        .............................................444...444..............................................
        .............................................454...454..............................................
        ......................................ffff...525...525...ffff.......................................
        ......................................fccf...222...222...fccf.......................................
        ......................................fccf..fffff.fffff..fccf.......................................
        ......................................fccff.fcccf.fcccf.ffccf.......................................
        ......................................fccbf.fcccf.fcccf.fbccf.......................................
        ..............2...................fffffccbf.fcccf.fcccf.fbccfffff.....................2.............
        ............4....................ffc1bbccbffccccf.fccccffbccbb1cff..................4...............
        ...........2...4................ffcc1bbccbfcccccf.fcccccfbccbb1ccff................2...4............
        .............4..................f1bc1bbccbccccccf.fccccccbccbb1cb1f..................4..............
        ............444........fffff....f1bc1bbccbccccccfffccccccbccbb1cb1f....fffff........444.............
        ............454........fbccf.ffff1bc1bcccbccccccbbbccccccbcccb1cb1ffff.fccbf........454.............
        ............525.ffff..ffbccf.fbbf1bc1bcccbcccccbbbbbcccccbcccb1cb1fbbf.fccbff..ffff.525.............
        ............222fb11f.ffcbccfff1bc1bc1bcccbbccccbbbbbccccbbcccb1cb1cb1fffccbcff.f11bf222.............
        ...........faaaab11f.f1cbccfcc1bc1bc1bcccbbbbbbbbbbbbbbbbbcccb1cb1cb1ccfccbc1f.f11baaaaf............
        ...........fccccb11cff1cbccfcc1bc1bc1bccbbbb66666666666bbbbccb1cb1cb1ccfccbc1ffc11bccccf............
        ...........fbcccb11c111cbcc1cc1bc1bc1bccbbb6888888888886bbbccb1cb1cb1cc1ccbc111c11bcccbf............
        ...........fb1cbb11c111cbcc1cc1bc1bc1bccbb668888888888866bbccb1cb1cb1cc1ccbc111c11bbc1bf............
        .........fffb1cbb11c111cbcc1cc1bc1bc1bccb68888888888888886bccb1cb1cb1cc1ccbc111c11bbc1bfff..........
        ........ff1cb1cbb11c111cbcc1cc1bc1bc1bccb88888888888888888bccb1cb1cb1cc1ccbc111c11bbc1bc1ff.........
        ....fffffc1cb1cbb11c111cbcc1cc1bc1bc1bcbb88888888888888888bbcb1cb1cb1cc1ccbc111c11bbc1bc1cfffff.....
        ....f111fb1cb1cbb11c111cbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbc111c11bbc1bc1bf111f.....
        ...ff111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111ff....
        ...fb111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb99888811111888899bb3b1cb1cb1c11ccbcb11c11bbc1bc1bc111bf....
        ..ffb111cb1cb1cb111c11bcbcc11c1bc1bf1bcbb99988811111888999bbcb1fb1cb1c11ccbcb11c111bc1bc1bc111bff...
        ..fcb111cb1cbfcb111c11bcbcc11c1bfffffbcbbb199991111199991bbbcbfffffb1c11ccbcb11c111bcfbc1bc111bcf...
        ..fbb111cb1cbfcb111c11bcbc111c1bf...fbccbb111111111111111bbccbf...fb1c111cbcb11c111bcfbc1bc111bbf...
        ..fcb111b111ffcb111c11bcbc111c1bf...fffcbb1111bb111bb1111bbcfff...fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbc111c1bf.....ffbb11ccbbcccbbcc11bbff.....fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbf111c1bf......fff11ccccccccccc11fff......fb1c111fbcb11c111bcff111b111bcf...
        ..f4b111b111ffcb111f11bcbf111c1bf........ffcccccccccccccff........fb1c111fbcb11f111bcff111b111b4f...
        ..ffc111b111ffcb111f1111ff111c1bf.........fcccbbcccbbcccf.........fb1c111ff1111f111bcff111b111cff...
        ...ffb11b111ffcb111f1111ff111c1bf.........ffccbbcccbbccff.........fb1c111ff1111f111bcff111b11bff....
        ....fb111cbfffcb1cffc111ff111c11f..........fcccccccccccf..........f11c111ff111cffc1bcfffbc111bf.....
        ....fb111cbf.fcb1cf.ccccffc11c11f..........ffcccccccccff..........f11c11cffcccc.fc1bcf.fbc111bf.....
        ....fb111cff.fcb1cf.4222f.fccc4ff..........fb.88bbb88.bf..........ff4cccf.f2224.fc1bcf.ffc111bf.....
        ....fb111cf..fcb1cf.fffff.fcccf.........ffffb188bbb881bffff.........fcccf.fffff.fc1bcf..fc111bf.....
        ....fb111cf..f1111f.......f222f.....fffffccfb188bbb881bfccfffff.....f222f.......f1111f..fc111bf.....
        ....fb111cf..fc111f.......fffff.....fcccfccfb188bbb881bfccfcccf.....fffff.......f111cf..fc111bf.....
        ....fb1111f..fccccf.................fcccf11fb188bbb881bf11fcccf.................fccccf..f1111bf.....
        ....f4cccff..f2222f.................fcccf11bb188bbb881bb11fcccf.................f2222f..ffccc4f.....
        ....f2442f...ffffff.................fcccf11b1c88bbb88c1b11fcccf.................ffffff...f2442f.....
        ....ffffff..........................fccc111b1ccccccccc1b111cccf..........................ffffff.....
        ....................................fcccf11bb888888888bb11fcccf.....................................
        ....................................fcccff118888888888811ffcccf.....................................
        ....................................fcccf.bb88888888888bb.fcccf.....................................
        ....................................f442f.ff88888888888ff.f244f.....................................
        ....................................fffff..f66999999966f..fffff.....................................
        ...........................................ff122222221ff............................................
        ............................................f122222221f.............................................
        ............................................fbbbbbbbbbf.............................................
        ............................................fffffffffff.............................................
        ....................................................................................................
        `,img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ......................................ffff...............ffff.......................................
        ......................................fccf...............fccf.......................................
        ......................................fccf..fffff.fffff..fccf.......................................
        ......................................fccff.fcccf.fcccf.ffccf.......................................
        ......................................fccbf.fcccf.fcccf.fbccf.......................................
        ..................................fffffccbf.fcccf.fcccf.fbccfffff...................................
        .................................ffc1bbccbffccccf.fccccffbccbb1cff..................................
        ................................ffcc1bbccbfcccccf.fcccccfbccbb1ccff.................................
        ................................f1bc1bbccbccccccf.fccccccbccbb1cb1f.................................
        .......................fffff....f1bc1bbccbccccccfffccccccbccbb1cb1f....fffff........................
        .......................fbccf.ffff1bc1bcccbccccccbbbccccccbcccb1cb1ffff.fccbf........................
        ................ffff..ffbccf.fbbf1bc1bcccbcccccbbbbbcccccbcccb1cb1fbbf.fccbff..ffff.................
        ................b11f.ffcbccfff1bc1bc1bcccbbccccbbbbbccccbbcccb1cb1cb1fffccbcff.f11bf................
        ...........faaaab11f.f1cbccfcc1bc1bc1bcccbbbbbbbbbbbbbbbbbcccb1cb1cb1ccfccbc1f.f11baaaaf............
        ...........fccccb11cff1cbccfcc1bc1bc1bccbbbb66666666666bbbbccb1cb1cb1ccfccbc1ffc11bccccf............
        ...........fbcccb11c111cbcc1cc1bc1bc1bccbbb6888888888886bbbccb1cb1cb1cc1ccbc111c11bcccbf............
        ...........fb1cbb11c111cbcc1cc1bc1bc1bccbb668888888888866bbccb1cb1cb1cc1ccbc111c11bbc1bf............
        .........fffb1cbb11c111cbcc1cc1bc1bc1bccb68888888888888886bccb1cb1cb1cc1ccbc111c11bbc1bfff..........
        ........ff1cb1cbb11c111cbcc1cc1bc1bc1bccb88888888888888888bccb1cb1cb1cc1ccbc111c11bbc1bc1ff.........
        ....fffffc1cb1cbb11c111cbcc1cc1bc1bc1bcbb88888888888888888bbcb1cb1cb1cc1ccbc111c11bbc1bc1cfffff.....
        ....f111fb1cb1cbb11c111cbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbc111c11bbc1bc1bf111f.....
        ...ff111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111ff....
        ...fb111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb99888811111888899bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111bf....
        ..ffb111cb1cb1cb111c11bcbcc11c1bc1bf1bcbb99988811111888999bbcb1fb1cb1c11ccbcb11c111bc1bc1bc111bff...
        ..fcb111cb1cbfcb111c11bcbcc11c1bfffffbcbbb199991111199991bbbcbfffffb1c11ccbcb11c111bcfbc1bc111bcf...
        ..fbb111cb1cbfcb111c11bcbc111c1bf...fbccbb111111111111111bbccbf...fb1c111cbcb11c111bcfbc1bc111bbf...
        ..fcb111b111ffcb111c11bcbc111c1bf...fffcbb1111bb111bb1111bbcfff...fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbc111c1bf.....ffbb11ccbbcccbbcc11bbff.....fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbf111c1bf......fff11ccccccccccc11fff......fb1c111fbcb11c111bcff111b111bcf...
        ..f4b111b111ffcb111f11bcbf111c1bf........ffcccccccccccccff........fb1c111fbcb11f111bcff111b111b4f...
        ..ffc111b111ffcb111f1111ff111c1bf.........fcccbbcccbbcccf.........fb1c111ff1111f111bcff111b111cff...
        ...ffb11b111ffcb111f1111ff111c1bf.........ffccbbcccbbccff.........fb1c111ff1111f111bcff111b11bff....
        ....fb111cbfffcb1cffc111ff111c11f..........fcccccccccccf..........f11c111ff111cffc1bcfffbc111bf.....
        ....fb111cbf.fcb1cf.ccccffc11c11f..........ffcccccccccff..........f11c11cffcccc.fc1bcf.fbc111bf.....
        ....fb111cff.fcb1cf.4222f.fccc4ff..........fb.88bbb88.bf..........ff4cccf.f2224.fc1bcf.ffc111bf.....
        ....fb111cf..fcb1cf.fffff.fcccf.........ffffb188bbb881bffff.........fcccf.fffff.fc1bcf..fc111bf.....
        ....fb111cf..f1111f.......f222f.....fffffccfb188bbb881bfccfffff.....f222f.......f1111f..fc111bf.....
        ....fb111cf..fc111f.......fffff.....fcccfccfb188bbb881bfccfcccf.....fffff.......f111cf..fc111bf.....
        ....fb1111f..fccccf.................fcccf11fb188bbb881bf11fcccf.................fccccf..f1111bf.....
        ....f4cccff..f2222f.................fcccf11bb188bbb881bb11fcccf.................f2222f..ffccc4f.....
        ....f2442f...ffffff.................fcccf11b1c88bbb88c1b11fcccf.................ffffff...f2442f.....
        ....ffffff..........................fccc111b1ccccccccc1b111cccf..........................ffffff.....
        ....................................fcccf11bb888888888bb11fcccf.....................................
        ....................................fcccff118888888888811ffcccf.....................................
        ....................................fcccf.bb88888888888bb.fcccf.....................................
        ....................................f442f.ff88888888888ff.f244f.....................................
        ....................................fffff..f66999999966f..fffff.....................................
        ...........................................ff144444441ff............................................
        ............................................f144444441f.............................................
        ............................................fbbbbbbbbbf.............................................
        ............................................fffffffffff.............................................
        ....................................................................................................
        `],
    50,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    BossMan,
    [img`
        ...........................................4..4...4.4...4...........................................
        .............................................444.2.444.2............................................
        ...........................................2.454...454..............................................
        ......................................ffff...525...525...ffff.......................................
        ......................................fccf...222...222...fccf.......................................
        ......................................fccf..fffff.fffff..fccf.......................................
        ......................................fccff.fcccf.fcccf.ffccf.......................................
        ......................................fccbf.fcccf.fcccf.fbccf.......................................
        ...............2..................fffffccbf.fcccf.fcccf.fbccfffff...................4.2.............
        .............4...................ffc1bbccbffccccf.fccccffbccbb1cff..................................
        ...........2....................ffcc1bbccbfcccccf.fcccccfbccbb1ccff...............2....4............
        .............4..................f1bc1bbccbccccccf.fccccccbccbb1cb1f..................4..............
        ............444........fffff....f1bc1bbccbccccccfffccccccbccbb1cb1f....fffff........444.............
        ............454........fbccf.ffff1bc1bcccbccccccbbbccccccbcccb1cb1ffff.fccbf........454.............
        ............525.ffff..ffbccf.fbbf1bc1bcccbcccccbbbbbcccccbcccb1cb1fbbf.fccbff..ffff.525.............
        ............222fb11f.ffcbccfff1bc1bc1bcccbbccccbbbbbccccbbcccb1cb1cb1fffccbcff.f11bf222.............
        ...........faaaab11f.f1cbccfcc1bc1bc1bcccbbbbbbbbbbbbbbbbbcccb1cb1cb1ccfccbc1f.f11baaaaf............
        ...........fccccb11cff1cbccfcc1bc1bc1bccbbbb66666666666bbbbccb1cb1cb1ccfccbc1ffc11bccccf............
        ...........fbcccb11c111cbcc1cc1bc1bc1bccbbb6888888888886bbbccb1cb1cb1cc1ccbc111c11bcccbf............
        ...........fb1cbb11c111cbcc1cc1bc1bc1bccbb668888888888866bbccb1cb1cb1cc1ccbc111c11bbc1bf............
        .........fffb1cbb11c111cbcc1cc1bc1bc1bccb68888888888888886bccb1cb1cb1cc1ccbc111c11bbc1bfff..........
        ........ff1cb1cbb11c111cbcc1cc1bc1bc1bccb88888888888888888bccb1cb1cb1cc1ccbc111c11bbc1bc1ff.........
        ....fffffc1cb1cbb11c111cbcc1cc1bc1bc1bcbb88888888888888888bbcb1cb1cb1cc1ccbc111c11bbc1bc1cfffff.....
        ....f111fb1cb1cbb11c111cbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbc111c11bbc1bc1bf111f.....
        ...ff111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111ff....
        ...fb111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb99888811111888899bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111bf....
        ..ffb111cb1cb1cb111c11bcbcc11c1bc1bf1bcbb99988811111888999bbcb1fb1cb1c11ccbcb11c111bc1bc1bc111bff...
        ..fcb111cb1cbfcb111c11bcbcc11c1bfffffbcbbb199991111199991bbbcbfffffb1c11ccbcb11c111bcfbc1bc111bcf...
        ..fbb111cb1cbfcb111c11bcbc111c1bf...fbccbb111111111111111bbccbf...fb1c111cbcb11c111bcfbc1bc111bbf...
        ..fcb111b111ffcb111c11bcbc111c1bf...fffcbb1111bb111bb1111bbcfff...fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbc111c1bf.....ffbb11ccbbcccbbcc11bbff.....fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbf111c1bf......fff11ccccccccccc11fff......fb1c111fbcb11c111bcff111b111bcf...
        ..f4b111b111ffcb111f11bcbf111c1bf........ffcccccccccccccff........fb1c111fbcb11f111bcff111b111b4f...
        ..ffc111b111ffcb111f1111ff111c1bf.........fcccbbcccbbcccf.........fb1c111ff1111f111bcff111b111cff...
        ...ffb11b111ffcb111f1111ff111c1bf.........ffccbbcccbbccff.........fb1c111ff1111f111bcff111b11bff....
        ....fb111cbfffcb1cffc111ff111c11f..........fcccccccccccf..........f11c111ff111cffc1bcfffbc111bf.....
        ....fb111cbf.fcb1cf.ccccffc11c11f..........ffcccccccccff..........f11c11cffcccc.fc1bcf.fbc111bf.....
        ....fb111cff.fcb1cf.4222f.fccc4ff..........fb.88bbb88.bf..........ff4cccf.f2224.fc1bcf.ffc111bf.....
        ....fb111cf..fcb1cf.fffff.fcccf.........ffffb188bbb881bffff.........fcccf.fffff.fc1bcf..fc111bf.....
        ....fb111cf..f1111f.......f222f.....fffffccfb188bbb881bfccfffff.....f222f.......f1111f..fc111bf.....
        ....fb111cf..fc111f.......fffff.....fcccfccfb188bbb881bfccfcccf.....fffff.......f111cf..fc111bf.....
        ....fb1111f..fccccf.................fcccf11fb188bbb881bf11fcccf.................fccccf..f1111bf.....
        ....f4cccff..f2222f.................fcccf11bb188bbb881bb11fcccf.................f2222f..ffccc4f.....
        ....f2442f...ffffff.................fcccf11b1c88bbb88c1b11fcccf.................ffffff...f2442f.....
        ....ffffff..........................fccc111b1ccccccccc1b111cccf..........................ffffff.....
        ....................................fcccf11bb888888888bb11fcccf.....................................
        ....................................fcccff118888888888811ffcccf.....................................
        ....................................fcccf.bb88888888888bb.fcccf.....................................
        ....................................f442f.ff88888888888ff.f244f.....................................
        ....................................fffff..f66999999966f..fffff.....................................
        ...........................................ff122222221ff............................................
        ............................................f122222221f.............................................
        ............................................fbbbbbbbbbf.............................................
        ............................................fffffffffff.............................................
        ....................................................................................................
        `,img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ......................................ffff...............ffff.......................................
        ......................................fccf...............fccf.......................................
        ......................................fccf..fffff.fffff..fccf.......................................
        ......................................fccff.fcccf.fcccf.ffccf.......................................
        ......................................fccbf.fcccf.fcccf.fbccf.......................................
        ..................................fffffccbf.fcccf.fcccf.fbccfffff...................................
        .................................ffc1bbccbffccccf.fccccffbccbb1cff..................................
        ................................ffcc1bbccbfcccccf.fcccccfbccbb1ccff.................................
        ................................f1bc1bbccbccccccf.fccccccbccbb1cb1f.................................
        .......................fffff....f1bc1bbccbccccccfffccccccbccbb1cb1f....fffff........................
        .......................fbccf.ffff1bc1bcccbccccccbbbccccccbcccb1cb1ffff.fccbf........................
        ................ffff..ffbccf.fbbf1bc1bcccbcccccbbbbbcccccbcccb1cb1fbbf.fccbff..ffff.................
        ................b11f.ffcbccfff1bc1bc1bcccbbccccbbbbbccccbbcccb1cb1cb1fffccbcff.f11bf................
        ...........faaaab11f.f1cbccfcc1bc1bc1bcccbbbbbbbbbbbbbbbbbcccb1cb1cb1ccfccbc1f.f11baaaaf............
        ...........fccccb11cff1cbccfcc1bc1bc1bccbbbb66666666666bbbbccb1cb1cb1ccfccbc1ffc11bccccf............
        ...........fbcccb11c111cbcc1cc1bc1bc1bccbbb6888888888886bbbccb1cb1cb1cc1ccbc111c11bcccbf............
        ...........fb1cbb11c111cbcc1cc1bc1bc1bccbb668888888888866bbccb1cb1cb1cc1ccbc111c11bbc1bf............
        .........fffb1cbb11c111cbcc1cc1bc1bc1bccb68888888888888886bccb1cb1cb1cc1ccbc111c11bbc1bfff..........
        ........ff1cb1cbb11c111cbcc1cc1bc1bc1bccb88888888888888888bccb1cb1cb1cc1ccbc111c11bbc1bc1ff.........
        ....fffffc1cb1cbb11c111cbcc1cc1bc1bc1bcbb88888888888888888bbcb1cb1cb1cc1ccbc111c11bbc1bc1cfffff.....
        ....f111fb1cb1cbb11c111cbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbc111c11bbc1bc1bf111f.....
        ...ff111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111ff....
        ...fb111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb99888811111888899bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111bf....
        ..ffb111cb1cb1cb111c11bcbcc11c1bc1bf1bcbb99988811111888999bbcb1fb1cb1c11ccbcb11c111bc1bc1bc111bff...
        ..fcb111cb1cbfcb111c11bcbcc11c1bfffffbcbbb199991111199991bbbcbfffffb1c11ccbcb11c111bcfbc1bc111bcf...
        ..fbb111cb1cbfcb111c11bcbc111c1bf...fbccbb111111111111111bbccbf...fb1c111cbcb11c111bcfbc1bc111bbf...
        ..fcb111b111ffcb111c11bcbc111c1bf...fffcbb1111bb111bb1111bbcfff...fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbc111c1bf.....ffbb11ccbbcccbbcc11bbff.....fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbf111c1bf......fff11ccccccccccc11fff......fb1c111fbcb11c111bcff111b111bcf...
        ..f4b111b111ffcb111f11bcbf111c1bf........ffcccccccccccccff........fb1c111fbcb11f111bcff111b111b4f...
        ..ffc111b111ffcb111f1111ff111c1bf.........fcccbbcccbbcccf.........fb1c111ff1111f111bcff111b111cff...
        ...ffb11b111ffcb111f1111ff111c1bf.........ffccbbcccbbccff.........fb1c111ff1111f111bcff111b11bff....
        ....fb111cbfffcb1cffc111ff111c11f..........fcccccccccccf..........f11c111ff111cffc1bcfffbc111bf.....
        ....fb111cbf.fcb1cf.ccccffc11c11f..........ffcccccccccff..........f11c11cffcccc.fc1bcf.fbc111bf.....
        ....fb111cff.fcb1cf.4222f.fccc4ff..........fb.88bbb88.bf..........ff4cccf.f2224.fc1bcf.ffc111bf.....
        ....fb111cf..fcb1cf.fffff.fcccf.........ffffb188bbb881bffff.........fcccf.fffff.fc1bcf..fc111bf.....
        ....fb111cf..f1111f.......f222f.....fffffccfb188bbb881bfccfffff.....f222f.......f1111f..fc111bf.....
        ....fb111cf..fc111f.......fffff.....fcccfccfb188bbb881bfccfcccf.....fffff.......f111cf..fc111bf.....
        ....fb1111f..fccccf.................fcccf11fb188bbb881bf11fcccf.................fccccf..f1111bf.....
        ....f4cccff..f2222f.................fcccf11bb188bbb881bb11fcccf.................f2222f..ffccc4f.....
        ....f2442f...ffffff.................fcccf11b1c88bbb88c1b11fcccf.................ffffff...f2442f.....
        ....ffffff..........................fccc111b1ccccccccc1b111cccf..........................ffffff.....
        ....................................fcccf11bb888888888bb11fcccf.....................................
        ....................................fcccff118888888888811ffcccf.....................................
        ....................................fcccf.bb88888888888bb.fcccf.....................................
        ....................................f442f.ff88888888888ff.f244f.....................................
        ....................................fffff..f66999999966f..fffff.....................................
        ...........................................ff144444441ff............................................
        ............................................f144444441f.............................................
        ............................................fbbbbbbbbbf.............................................
        ............................................fffffffffff.............................................
        ....................................................................................................
        `],
    50,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    BossMan.setVelocity(25, 0)
    BossMan.setPosition(randint(0, scene.screenWidth()), 0)
    BossMan.setBounceOnWall(true)
    BossmanHealth = statusbars.create(70, 4, StatusBarKind.EnemyHealth)
    BossmanHealth.setColor(10, 13)
    BossmanHealth.setOffsetPadding(29, 5)
    BossmanHealth.positionDirection(CollisionDirection.Top)
    BossmanHealth.value = 900
}
let Rapid_fire3: Sprite = null
let BossShot3Lazer: Sprite = null
let Boss3_laser: Sprite = null
let bosshot6: Sprite = null
let EnemyShot: Sprite = null
let BossShot2: Sprite = null
let HealthUp: Sprite = null
let MachinePowerUp: Sprite = null
let Enemy33: Sprite = null
let BossThumbnail: Sprite = null
let BossMan: Sprite = null
let Bossthumb3: Sprite = null
let Enemy2: Sprite = null
let Enemy1: Sprite = null
let projectile3: Sprite = null
let Projectile2: Sprite = null
let Powerup1: Sprite = null
let projectile: Sprite = null
let Bossthumb4: Sprite = null
let bossman3: Sprite = null
let BossmanHealth: StatusBarSprite = null
let bossthumb2: Sprite = null
let Bossman2: Sprite = null
let Herohealth: StatusBarSprite = null
let RocketPowerup: Sprite = null
let FinalBossman: Sprite = null
let Hero: Sprite = null
let Planet: Sprite = null
let Planet2: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffff22ff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffff22ffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffff2fffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffff2ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffff2ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffff2ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff22fffffff222222ffffffffffffff2fffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff2fffffff2ffff22222fffffffffff2fffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffff222ffff2fffff2ffffff222ff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2fffffff22ff2fff2ffff22fffff22ff2ff22ff22ffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff2ffffffffff222fffff22ffffffff2ffff2ffff22ffffffff2f22fffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff22ffffffff22f2ffff22ffffffffff2ff22fff22fffffffff222fffff2ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff22ffffff22ff2ffff2ffffff22fff2f22fff22ffffff22f2222fffff2fffff222ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222ff222fff2ffff2fffff222fff222fff222fffff22222ff22ffff2ffff22f2ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff2222ffff22ffff22fff22ff2222222222f22fff22f22ffff22ffff2ff22ff2ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444444444ff444444444444444444ff444444444444444444ff444444444444444444ff244444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444444444ff444444444444444444ff444444444444444444ff444444444444444444ff244444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444444444ff444444444444444444ff444444444444444444ff444444444444444444f2444444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444444444ff444444444444444444ff444444444444444444ff44444444444444444422444444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444444444ff444444444444444444ff444444444444444444ff4444444444444444442f444444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffffffff44444ff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffffffff44444ff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffffffff44444ff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffffffff44444ff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffffffff44444ff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffffffff44444ff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffffffff44444ff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444ffffffff44444ffffffff44444ff444444444444444444ff44444fffffffffffffff444444444444fffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444ffffffff44444ffffffff44444ff444444444444444444ff44444fffffffffffffff444444444444fffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444ffffffff44444ffffffff44444ff444444444444444444ff44444fffffffffffffff444444444444fffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444ffffffff44444ffffffff44444ff444444444444444444ff44444fffffffffffffff444444444444fffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff444444444444ffffffff44444ffffffff44444ff444444444444444444ff44444fffffffffffffff444444444444fffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444f44444444ffffff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ff4444444ffffff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ff44444444fffff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444fff44444444ffff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffff4444444ffff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff44444ffffffff44444ff44444ffff44444444fff44444fffffffffffffff44444ffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff444444444444444444ff44444fffff44444444ff444444444444444444ff444444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff444444444444444444ff44444ffffff4444444ff444444444444444444ff444444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff444444444444444444ff44444ffffff4444444ff444444444444444444ff444444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff444444444444444444ff44444fffffff444444ff444444444444444444ff444444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2fff44444fffffffffffffff444444444444444444ff44444ffffffff44444ff444444444444444444ff444444444444444444fff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.setDialogTextColor(2)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
game.showLongText("                         Start", DialogLayout.Bottom)
effects.starField.startScreenEffect()
Planet2 = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................................................................fff..........................................................................
    ..................................................................................ffcfccc.......................................................................
    .................................................................................ffcfffffcc.....................................................................
    .................................................................................ffcffccfcc.....................................................................
    ..................................................................................ffcccffccc....................................................................
    ..................................................................................ffcfcffccc....................................................................
    ..................................................................................ffffccfccc....................................................................
    .................................................................................ffcfcfccfcc....................................................................
    ..................................................................................fffcffffcc....................................................................
    .................................................................................ffcccfcccc.....................................................................
    ................................................................................fffffcfcccc.....................................................................
    ................................................................................fcffffffcc......................................................................
    ..............................................cccc..............................ffcffc..........................................................................
    ...........................................cccfccfc..............................ffffc..........................................................................
    ...........................................fcffffcc.............................................................................................................
    ...........................................fccfcccc.............................................................................................................
    ...........................................ffffffcc.............................................................................................................
    ............................................cfffcff.............................................................................................................
    .............................................fccccf.............................................................................................................
    .............................................fffccc.............................................................................................................
    .............................................cfffcc.............................................................................................................
    ..............................................fff...............................................................................................................
    ..............................................ccc...............................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................................................cc................................................................
    .............................................................................................fccc...............................................................
    .............................................................................................fffccc.............................................................
    .............................................................................................fffcfcc............................................................
    ............................................................................................ffcffffcc...........................................................
    ...........................................................................................fffffffccc...........................................................
    ...........................................................................................ffffcfccfc...........................................................
    ..........................................................................................fffffffffc............................................................
    ..........................................................................................ffccfcffcc............................................................
    ..........................................................................................ffcfcfcffc............................................................
    ..........................................................................................fcfffffcfc............................................................
    ...........................................................................................ccfffcccc............................................................
    ...........................................................................................fffccc...............................................................
    ............................................................................................fff.................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................ff................................................................................................................
    ............................................ffffccc.............................................................................................................
    ...........................................fffffffccc...........................................................................................................
    ...........................................f.fcfffffc...........................................................................................................
    ...........................................fffcffcfcffcc........................................................................................................
    ............................................ffcfcccfcfcc........................................................................................................
    ...........................................fffffffffcccfc.......................................................................................................
    ...........................................ffffcffcfffffc.......................................................................................................
    ...........................................fffffcffcccc.........................................................................................................
    ...........................................fcffcfcf.............................................................................................................
    ...........................................ffffffff.............................................................................................................
    ............................................fffcffc.............................................................................................................
    .............................................ffff...............................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................................................................................................cc..................................................
    ...........................................................................................................cfccfc...............................................
    ..........................................................................................................cfffcccc..............................................
    .........................................................................................................fffffffccc.............................................
    .........................................................................................................ffffffcfcc.............................................
    .........................................................................................................ffffccfffccc...........................................
    .........................................................................................................fffffffccffc...........................................
    .........................................................................................................fffffcccfffc...........................................
    ..........................................................................................................fffffffcfcc...........................................
    ...........................................................................................................ffffcfffcc...........................................
    ...........................................................................................................fffcfcfcfcc..........................................
    ............................................................................................................fffffcccfc..........................................
    ............................................................................................................ffffffffcc..........................................
    ............................................................................................................fffffffffc..........................................
    .............................................................................................................ffffffff...........................................
    ..............................................................................................................fffffff...........................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..........................................................................cfcc..................................................................................
    ..........................................................................fffffc................................................................................
    ..........................................................................fcffcff...............................................................................
    ..........................................................................cfffffcc..............................................................................
    ..........................................................................ffffcccfc.............................................................................
    ..........................................................................ffffffccc.............................................................................
    ..........................................................................ffcffffcc.............................................................................
    ..........................................................................ffcffcfcc.............................................................................
    ...........................................................................fffffcfc.............................................................................
    ...........................................................................fffccfcc.............................................................................
    ...........................................................................cffccfc..............................................................................
    ..............................................................................ff................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................fff.............................................................................................................
    ...............................................fffccfc..........................................................................................................
    ...............................................ffffcccf...........................................fffc.ccc......................................................
    ...............................................ffcfffcc...........................................fcffffccc.....................................................
    ...............................................ffffffff...........................................fcfcfcfccccc..................................................
    ...............................................ffffcfcc..........................................fffccfcccfcccc.................................................
    ................................................ffffffcf.........................................fffffffcfccccc.................................................
    ................................................ffcfcccc........................................ffffffcfccccccc.................................................
    ................................................fffffcfc........................................fffffffffffcccc.................................................
    ................................................fffcffcc.........................................fffcfffffcccc..................................................
    .................................................ffcffc..........................................ffffcfcffccc...................................................
    ..................................................fcf.............................................fffffffffcc...................................................
    ...................................................c..............................................fffcffffffcc..................................................
    ..................................................................................................cfffffccfffc..................................................
    ....................................................................................................fffffccfff..................................................
    .....................................................................................................ffffffff...................................................
    .......................................................................................................fcccc....................................................
    .......................................................................................................fffcc....................................................
    ........................................................................................................ffff....................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .........................................................................................c......................................................................
    ...................................................................................cc...cc......................................................................
    ..................................................................................cfcffcccf.....................................................................
    ..................................................................................ffccffccf.....................................................................
    ..................................................................................cfffcfccfc....................................................................
    ..................................................................................ffcffcfcff....................................................................
    ..................................................................................ffcffffffccc..................................................................
    ...................................................................................fffffccccc...................................................................
    ...................................................................................ffffcfccc....................................................................
    ....................................................................................ffffcfff....................................................................
    .....................................................................................ffffccf....................................................................
    .....................................................................................fffffcc....................................................................
    .......................................................................................ffffc....................................................................
    ........................................................................................ffff....................................................................
    ..........................................................................................ff....................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................................ccc..........................................................................................................
    ...................................................ccf..........................................................................................................
    .................................................f.cffc..f......................................................................................................
    ................................................ffffccccff......................................................................................................
    ................................................ffffffffccccc...................................................................................................
    ................................................ffffccccccffc...................................................................................................
    .................................................ffffffffcfcc...................................................................................................
    .................................................fffffccffccc...................................................................................................
    .................................................ffffffcccccc...................................................................................................
    ..................................................ffcfffffcc....................................................................................................
    ....................................................fcfcffff....................................................................................................
    .....................................................ffffcff....................................................................................................
    ......................................................cccc......................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .........................................................................................fcccc..................................................................
    ........................................................................................ffcfcc..................................................................
    .....................................................................................f.ffffcfcc.................................................................
    ..................................................................................fffffffffffccc................................................................
    .................................................................................fffcffcfffffffc................................................................
    .................................................................................fcffffcffcfffcc................................................................
    .................................................................................ffffffffcffcfcc................................................................
    .................................................................................fffffffffffccfc................................................................
    ................................................................................ff....fcfffcfccc................................................................
    ......................................................................................ffffffcffc................................................................
    ........................................................................................cfffccc.................................................................
    ........................................................................................ccfffcc.................................................................
    ..........................................................................................cccc..................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Astroid)
Planet = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................................................................cfcfc.....................................................................
    .....................................................................................cffcfccc...................................................................
    .....................................................................................cffcafaacc.................................................................
    .....................................................................................ffcfabbbbcc................................................................
    ....................................................................................ffffffaccbac................................................................
    .....................................................................................ffcfffccbac................................................................
    .....................................................................................ffcfacccbcc................................................................
    ......................................................................................fffaaaaccc................................................................
    ......................................................................................ffffbbaacbcc..............................................................
    ......................................................................................fffafffaacbc..............................................................
    ...................................................................................cfffffafcccaaba..............................................................
    ..................................................................................cfffffaffcccccbc..............................................................
    ..................................................................................cfffcffaaaacabbc..............................................................
    ..................................................................................fffffccffbaacaac..............................................................
    ..................................................................................fffcffccffbbccac..............................................................
    ..................................................................................ffffccfccffffcac..............................................................
    ..................................................................................ffcfffffaaccccac..............................................................
    ..................................................................................ffcffffafaaccaac..............................................................
    ..................................................................................cfffcfccbbaacccc..............................................................
    ...................................................................................ccfffcbbacccc................................................................
    ......................................................................................fffccffcc.................................................................
    .......................................................................................cfffcc...................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............................................................ccccc..............................................................................................
    .............................................................cccbccccc..........................................................................................
    ...........................................................ffccbbbcccc..........................................................................................
    ..........................................................ffcacbcbbbccc.........................................................................................
    ..........................................................ffcaacaaccccc.........................................................................................
    ........................................................ffffcccccfaaabbc........................................................................................
    ........................................................fcfafcccccfaaabc........................................................................................
    ......................................................ffcffaafcccccaaabbcc......................................................................................
    ......................................................fffffcafffbcfaaaabccc.....................................................................................
    ......................................................ffffffffcfbfccaccccccc....................................................................................
    ......................................................ffcfccffffbbccccbccaac....................................................................................
    .......................................................fcffccfaffbbbafcbbcaa....................................................................................
    .......................................................ffffbbfcaaccccaffaacc....................................................................................
    .......................................................fffffffcffaafcaccfbac....................................................................................
    .......................................................fffffcfffccfacacfbacc....................................................................................
    .......................................................fffafffcfcffccacfbccc....................................................................................
    ........................................................ffcbffffffcccffabccb....................................................................................
    .........................................................ffbcfffffccabbbbbcb....................................................................................
    ..........................................................ffffcfffcfcccaaccbb...................................................................................
    ..........................................................fffffffffcaacacccc....................................................................................
    ..........................................................fffffcfffffaaccc......................................................................................
    ...........................................................cfffaaffffffffc......................................................................................
    ............................................................ffffaacffffffc......................................................................................
    ............................................................ffffcaaffcffc.......................................................................................
    ............................................................ffcffffffcfff.......................................................................................
    ............................................................ffffffccffcf........................................................................................
    ............................................................fffffffffff.........................................................................................
    ..............................................................fffffffff.........................................................................................
    ..................................................................fff...........................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..........................................................................aaaa..................................................................................
    ........................................................................fcfaaaaac...............................................................................
    .....................................................................ffcffaaaacaaac.............................................................................
    ....................................................................ffcccffcaaacaac.............................................................................
    ....................................................................fcffcffccaacac..............................................................................
    ....................................................................ffffffffaaccaa..............................................................................
    ....................................................................ffffcaafcfaccca.............................................................................
    .....................................................................fffcccafccaaca.............................................................................
    ....................................................................ffffccfaacacaa..............................................................................
    ....................................................................ffcfcfcfccfccac.............................................................................
    ....................................................................fffffffcaaffaac.............................................................................
    .....................................................................ffffcccccccaacc............................................................................
    .......................................................................fccffffcccccc............................................................................
    .......................................................................fffcfffcccacc............................................................................
    .......................................................................fcfcccccaaac.............................................................................
    .......................................................................ffffccfffaac.............................................................................
    .......................................................................cffffffcffcc.............................................................................
    ........................................................................fffffffccca.............................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .................................................................ffccb..........................................................................................
    ........................................................ffffa....ffccbb.........................................................................................
    ......................................................ffffffccc..cffcaba........................................................................................
    .....................................................ffffffffaccfcfcaaba........................................................................................
    ....................................................fcffafcffacffcffcaab........................................................................................
    ...................................................ffcffffcfffffbccffcab........................................................................................
    ...................................................fffffffcfbffffccaffab........................................................................................
    ....................................................ffffccffffffffccacaaa.......................................................................................
    ....................................................ffffffaffffabfcabcaa........................................................................................
    .....................................................fffccffacacccacbcaa........................................................................................
    ....................................................fffcafffacccacaaccc.........................................................................................
    ....................................................fffffcfffffbbaaaca..........................................................................................
    ...................................................fffcffcaafccabccaba..........................................................................................
    ...................................................fffcfffffffccaaacb...........................................................................................
    ...................................................fffcfaffccaaabaaca...........................................................................................
    ...................................................ffffffcfccccbbccc............................................................................................
    ....................................................ffffffffcffaccca............................................................................................
    .....................................................fffffffffccacca............................................................................................
    ......................................................fffcfcaacbca..............................................................................................
    .......................................................fffcfcabba...............................................................................................
    .........................................................ffffcc.................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................................cccccccc..........................................................................
    ..............................................................................cccccbbaacc.......................................................................
    .............................................................................ccffaccbbcaabb.....................................................................
    .............................................................................cffabbfabcccabb....................................................................
    ............................................................................cfffffaaacacccabc...................................................................
    ............................................................................ffffffaaaccacccbc...................................................................
    ............................................................................fccfcffcaafaccacc...................................................................
    ............................................................................fffcfffacffcbcaccc..................................................................
    ............................................................................fffffffbbfcccbaafcc.................................................................
    ............................................................................ffcfffffcbcccbcfcca.................................................................
    ............................................................................ffffcfacfaaaccffcaa.................................................................
    .............................................................................fffcfaaffaaaccccaa.................................................................
    ..............................................................................ffcfcffcfafffccbac................................................................
    ..............................................................................fffffffcfcaafccbac................................................................
    ...............................................................................ffcffffcccbbfcbbcc...............................................................
    ................................................................................fcffccffccbaccbbc...............................................................
    ................................................................................ffffcaaffcabacfcc...............................................................
    .................................................................................fcfccfafcaaacfcc...............................................................
    .................................................................................fffffffccccabaf................................................................
    ..................................................................................ffffffcccccbfc................................................................
    ...................................................................................fffffcfcccbfc................................................................
    .....................................................................................fcffffcbacc................................................................
    .....................................................................................ffffccfffcc................................................................
    ......................................................................................fffcccaacc................................................................
    ........................................................................................cccccc..................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Astroid)
Planet2.setVelocity(0, 15)
Planet.setVelocity(0, 25)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    ffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
    ffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    ffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbb
    fffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbb
    ffffccffffbffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbb
    ffffccffffcffffffbfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbf
    ffffcccfffbfffffbcffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffffcc
    ffffcccfffbfffffbcffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbfffffffffffcc
    ffffffffffbfffffbffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcbffffffbfffcc
    ffffffcfffbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcbffffffcfffcc
    ffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcfbffffffcfffff
    ffffffffffcffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfbffffffcfffff
    fffffffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcffffffffbfffff
    fffffffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffccbfffffffbfffff
    fffffffffbfffffffcfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbfffffffbfffff
    fffffcfffffffffffcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffbfffff
    fffffffffffffffbbcfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffbbffff
    fffffcffffffffffbffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffcffff
    fffffccffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbbfffffffffff
    fffffcbfffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbffffffffffff
    fffffcbfffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffff
    fffffcbfffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffffbcf
    fffffccbffffffffcfffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffccbffffffffffbcf
    ffffffccffffffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcbffffffffffbbcf
    ffffffccffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffbfcffffffffbccf
    ffffffccbfffffffffffcbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffbccff
    ffffccccbfffffffffffccfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffcffffffffbccff
    ffffbbcccfffffffffffcffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbfffccfffffffbccff
    ffffbbccbfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcbcfffccfffffffbcccc
    ffffcbccbfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbfffffffffbffffccbb
    fffffbcccbffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffbffffccbb
    fffffccbccbffffffffffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffbbcffffcbc
    ffffffbbccbfffffffffffbccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffbcfffffcbf
    ffffffffbcbcffffffffffcbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffbbcfbfffccf
    ffffffffbcbcffffffffffcbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccbfffffffbccfbfffbff
    ffffffccbcbffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccbcffffffbbcccbffffff
    fffffffcccffcffffffffccfbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccbcfffffcbccfcbffffff
    fffffffffbcfbfffffffffcbffffbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbfffffffbcfffbfffcff
    fffffffffbffbffffffffcfbffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbfccfffffbcfcffffffff
    fffffbfcfbffbffffffffcfbfffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfbcfffffffcfbfcffffff
    fffffffbffffbffffffffccbfffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfbfcfffffffcbffbfffff
    fffffffbbccfffffffffcfcffffbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfbfcffffffffbffbfffff
    ffffbbfbcfcfcfffffffcffffffbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbccfffffffcbffffffff
    ffffbbfbffcfbfffffffccffffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfcfffffffffccbffff
    fffffbfcffcbfffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcfffffffcfcfcfffb
    ffffffbffcfbfffffffffcfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccfffffffffcffffff
    ffffffbffcfbfffffffffffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcffffff
    ffffffbcffcbfffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfffff
    ffffffbfffbcffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffffcffbff
    ffffffbffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffffffffffffffcbff
    ffffffffffcffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffbff
    fffffcffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff
    fffffcffffffffffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffffff
    fffffccbffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffffcffffffcf
    ffffcccbfffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfcfffcffffffcf
    ffffcfcbfffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfffffccfffffff
    ffffcffcbffffffffffbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbcffffccffffffc
    ffffccfcbfffffffffbbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbcfffffccfffffc
    ffffccfbbffffffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffffffffc
    ffffccfffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbfffffffffffffc
    ffffcfffffffffffcfcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcfffffffbbfffc
    ffffcfcfffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffbfbfcc
    ffffcffffffffffffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcfcffffffbfbffc
    ffffccfffffffffffcfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffbbccfc
    ffffccfffbfffffffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcfffffffbbcbfc
    fffffcfffbfffffffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfcfffffffbbbbcc
    fffffcfffbffffffffcfcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffbbbccc
    fffffcffffffffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffbbbccf
    ffffcffffffffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffbbcccf
    ffffcffffffffffffffccbfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffbcccf
    ffffccfffbfffffffffccbbbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfbbccffffffffffbccfc
    fffffffffbffffffffcfcbbffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffbccffffffffffbccff
    fffffffffbfffffffffcccbbfffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffbbbccfffffffffbbcfff
    fffffffffbfffffffffffcbbffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffbbcfcffffffffbbcfff
    ffffffffbbfffffffffffccbfffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbbcccfffffffffbfffff
    ffffffffbbbfffffffbffccbfffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbcfffffffffffbbffff
    ffffffffcbbfffffffcbfccbfffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbccfffffffffffbbffff
    fffffffcbbbbffffffcbbbfbfffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffbccffbfffffffbbbffff
    fffffffcbbcbbffffffccbfffffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcfffbccffffffffffbbcffff
    ffffffccbbccbffffffccbffffffcccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffbfbbffffffffbbbfffff
    fffffffccbccbfffffffcffffffffccccfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffffffffbcffffffbbbcffffff
    fffffcfccbcccfffffffcbfffffffcfccfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffcffffffbcffffffbbcfffffff
    fffffffccbbccfffffffcbbffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffffffffffffcfffffbbbcfffffff
    ffffcfffccbcffffffffccbffffffccccfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcfffffffffffbcfffffbbccfffffff
    ffffffcfcbbcfffffffffcbfffffcffcbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffcffffffbbcffffffbcffffcfff
    fffffccfcbbcfffffffcccbfffffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffcffffffbccffffffccffffffff
    fffffccbcbcffffffffffcbfffffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffcfffffbcfffbfffccfffffcff
    fffffccbccfffffffbffccbfffffcffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfcfffffbcccfbfffcccbfffcff
    ffffffbbcfffffffffffccffffffccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffbcfffbffffcccfffcff
    ffffffbcffffffffffffcffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffffbccffbffffcccffffff
    fffffcbcfffffffffffffffcbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccffffffccffffffffccffffff
    fffffcbcfffcfffbfffffcfccbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffcfffffffffccfffff
    fffffcbbccbbfffffffffcffcbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcffffffffffffccfffff
    fffffccbbcfffffffffffcffcbcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfcfffffbbfffccfffff
    fffffccfbcfffffffffffffffbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbcffcffffffffffbffffff
    ffffbccfbcffffffffffffffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbcffcfffffffffffffffff
    ffffbfcfbfffffffffffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbfffffffffbfffffffffff
    ffffbfcfbfffffffffffffffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffffffffffbfffffffffff
    ffffbffbcfffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffffffffffbfbffffffffb
    fffffffbffffffffbffffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcffffffffffbbbffffffffb
    fffffffcfffffffbbfffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfffffffffbfccfcffffffb
    fffffffffffffffbfffffffbbffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffcffffffbfcccffffffff
    fffffffffffcfffbffffffffbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbfccfffffffbbcccffffffff
    ffffffffffccfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffcbffbbfffffffbccfffffffff
    ffffffffffccfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcbffbffffffffbccffffffcff
    fffffffffcfcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffbcffffffcbff
    fffffffffbfcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffbcffffffbcff
    fffffffffbfcfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbfff
    fffffffffffcffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff
    fffffffffbfbffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff
    fffffffffbbbcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcfff
    fffffffffcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcfff
    fffffffffccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfcffffffffffbfcfff
    fffffffffccbbffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffcfcfff
    fffffffffccbbffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffffcfccff
    fffffffffcbfbfffffffffffccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccffffffffffffcfffff
    ffffffffffbcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffffffffffffccffff
    ffffffffffbcbfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccfffffffffffffccffff
    ffffffffffccbffffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccffffffffffffffcccfff
    ffffcffffffcbffffffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffffffffffffffbcffff
    fffffffffffcbfffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfffffffffffffffbfffff
    fffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffbfcffc
    ffffffffcbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffbfcfff
    ffffffcffbfccbfffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffff
    ffffffcffbffcbffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcfffffffffffffffcffff
    ffffffcfffcfccffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccfffffffffffffffffcff
    fffffffcbccccbffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfbffffffffffffffffcff
    fffffffccbcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbffffffffffffffffcff
    fffffffccbbccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffcfff
    ffffffffccbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfff
    ffffffffccbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfff
    fffffffffccbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffff
    fffffffffffbffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffff
    fffffffffffbffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffff
    fffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    ffffffffbbbcbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
    fffffffccfbbbbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    fffffffccfbcbcffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcb
    fffffffcccccbbfffffbcfffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffbbbb
    fffffffccccccbfffffbcfffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffcbcb
    ffffffffffcccbfffffbffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbbcc
    fffffffffccccbfffffbffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffbccc
    ffffffffffccbbffffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffbccc
    ffffffffffccbcffffffbfffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffffffbccc
    ffffffffffccbfffffffbfffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffffffbbcc
    ffffffffffccbfffffffbfffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbffffffcbcc
    fffffffffccbbfffffffcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbcc
    ffffffffcfccffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffbcc
    ffffffffffcfffffffbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffbbc
    ffffffffcccffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffcc
    ffffffffccffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffffffffffc
    ffffffffcbffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffffffffffc
    ffffffffcbffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffff
    ffffffffcbbffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffff
    ffffffffccbffffffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccfffffffffff
    fffffffffccbfffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbffffffffffb
    fffffffffccbbfffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbffffffffffb
    fffffffffccbcbfffffccbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbfffffffffbc
    fffffffccccbcbbffffccbcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcfffffffbbc
    fffffffbbcccfcbbffffcbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffccbffffffffcbc
    fffffffbbccbfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffcbc
    fffffffcbccbffcbbffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffffcc
    ffffffffbcccbffcbfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbc
    ffffffffccbccbfcbbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbc
    fffffffffbbccbfccbffffffffffbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffbcfffcc
    fffffffffffbcbcccbbfffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffbbcffffb
    fffffffffffbcbcfccbcffffffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffbccfffff
    fffffffffccbcbfffcbcffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffbbcccffff
    ffffffffffcccffcfcbcffffcfffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccfcbfff
    ffffffffffffbcfbfcbbfffffffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffcbcfffffff
    ffffffffffffbffbccbbffffcffffbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffcbcfcfffff
    ffffffffbfcfbffbfcbbffffcffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffbbcfbfffff
    ffffffffffbffffbcfbcffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffbbccbfffff
    ffffffffffbbccffffbffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbbcffffffffbbcfbffffc
    fffffffbbfbcfcfccfbffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccfffffffcbfcfffffb
    fffffffbbfbffcfbfffffffccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcccffffffffbffffffbb
    ffffffffbfcffcbfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbccccfffffffbfcffffcb
    fffffffffbffcfbbffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfccfffffffffffffffb
    fffffffffbffcfbbffffffffcfcfcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfcfffffffffffffffc
    fffffffffbcffcbbffffffffffcfffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffffffffffffffcff
    fffffffffbfffbcbfffffffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfcfffffffffffbfcff
    fffffffffbffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcfffffffffffbcffc
    fffffffffffffcccffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffbcbfff
    ffffffffcfffffccfffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccff
    ffffffffcffffffcfffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfff
    ffffffffccbfffccfffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffff
    fffffffcccbfffccffffcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff
    fffffffcfcbffccfffffcbbccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffb
    fffffffcffcbffffffffffbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbfffffccfffb
    fffffffccfcbfffffffffbbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbffffffccffb
    fffffffccfbbbfffffffcfcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbffffffffffbc
    fffffffccfbfbfffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbfffffffffbc
    fffffffcffbfbffffffcfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffbbb
    fffffffcfccbbffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffbfb
    fffffffcfbcbbfffffffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcffffffffbfb
    fffffffccbbbbfffffffcfbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffbbc
    fffffffcccbbbfffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffbbc
    ffffffffccbbbfffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffbbb
    ffffffffcccbbffffffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffbbb
    ffffffffcccbfffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffbbb
    fffffffcfccbffffffffffccbfffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffbbc
    fffffffcfccbffffffffffccbfffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffbc
    fffffffccccbbfffffffffccbffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffcfffffffffffbc
    fffffffffccbbffffffffcfcbffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffcfffffffffffbc
    ffffffffffcfbfffffffffcccfffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffcffffffffffbbc
    fffffffffccbbfffffffffffcfffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffffcffffffffffbbc
    fffffffffccbbfffffffffffcfffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcffffffcffffffffffbfc
    ffffffffffcbbbfffffffbffffffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffffffffbbc
    fffffffffcccbbfffffffcbfffffffcfcfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffbbc
    fffffffffccbbbbffffffcffffffffffcfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffbbbc
    fffffffffccbbcbbbfffffffffffffffcfffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcffffffffffffffffffcc
    fffffffcfccbbccbbffffffffffffffccfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbffffffffffbfffffffffffbc
    ffffffffffccbccbbbffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbffffffffffffffffffffffbc
    ffffffffcfcfffccbbbfffffbfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffffffffffffffffbc
    ffffffffffcfffccbcfffffcbbffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffcc
    fffffffcffffffccccfffffccbffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffffffffffffffffcfffcc
    fffffffffcffffccccffffffcbfffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffbfffffffffcfffcc
    ffffffffccfffffccbffffcccbfffffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcccffffffbcfffffffccfffcf
    ffffffffccbffffcfbffffffcbfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcffffffffbcfffffffccfffcf
    ffffffffccbcfffcfffffffccbffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffccfffffffbcccfffffccfffcf
    fffffffffbbcfffdcbfffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbcffffffffcfffcb
    fffffffffbccfffbcbfffffcffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffcfffcb
    ffffffffcbccfffbbbffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffcdfffcb
    ffffffffcbcffffbbbffffffcfccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffcffffffcbfffcc
    ffffffffcbbffffbbfffffffcffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcffffffffffbfffcc
    ffffffffccbfffbbffffffffcffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfcffffffffbfffcc
    ffffffffccffffdbffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbcffcffffffffbfffcb
    fffffffbccffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbcffcffffffffffffbb
    fffffffbfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffffffffffbf
    fffffffbfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffbf
    fffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffbf
    ffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    ffffffbbfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
    fffffffbbbcbffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    ffffffccfbbbbffffffcfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbf
    ffffffccfbcbcffffffbfcbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffbcbb
    ffffffcccccbbfffffbcfcbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcffffffbbbbf
    ffffffccccccbfffffbcfcbcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbffffffcbcbf
    fffffffffcccbfffffbfccccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbfffffbbccc
    ffffffffccccbfffffbfcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbfffffbcccc
    fffffffffccbbfffffffcbccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbfffffbcccf
    fffffffffccbcffffffbccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbfffffbcccc
    fffffffffccbfffffffbccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffbbccf
    fffffffffccbfffffffbbfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffffcbccf
    ffffffffccbbfffffffcbfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbccf
    fffffffcfccffffffffcbfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbfffffffbccf
    fffffffffcfffffffbbcbfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbbcc
    fffffffcccffffffffbbcfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffccf
    fffffffccffffffffffbcffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffbbfffffffcf
    fffffffcbffffffffffbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffbffffffffcc
    fffffffcbffffffffffbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffc
    fffffffcbbffffffffffbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffffb
    fffffffccbffffffffcfbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffffb
    ffffffffccbfffffffffbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffbb
    ffffffffccbbfffffffcbcffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffffffbc
    ffffffffccbcbfffffccbcffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffffbcc
    ffffffccccbcbbffffccbffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcfffffffbbcc
    ffffffbbcccfcbbffffcbffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffbccffffffcbcc
    ffffffbbccbfccbfffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcbccffffffcbcc
    ffffffcbccbffcbbffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffccc
    fffffffbcccbffcbfffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcc
    fffffffccbccbfcbbffffffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffbffffbcc
    ffffffffbbccbfccbffffffffccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbccc
    ffffffffffbcbcccbbffffffffccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffccbc
    ffffffffffbcbcfccbcfffffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffccbb
    ffffffffccbcbfffcbcfffffffbccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffcbff
    fffffffffcccffcfcbcffffffffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccfffcbff
    fffffffffffbcfbfcbbffffffffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcffffcbcc
    fffffffffffbffbccbbffffcfffcbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcbcffffcccf
    fffffffbfcfbffbfcbbffffcffffbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffbbcffffbfff
    fffffffffbffffbcfbcffffcffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffbbccfffbfff
    fffffffffbbccffffbffffcfcfffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffbbcffffbfcf
    ffffffbbfbcfcfccfbffffcfffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffcbfcfffffbf
    ffffffbbfbffcfbfffffffccffffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffbfffffcbbf
    fffffffbfcffcbfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffbffffffcbf
    ffffffffbffcfbbffffffffcfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccffffffffffffbf
    ffffffffbffcfbbffffffffcfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffcffcf
    ffffffffbcffcbbffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfffffffffffcffb
    ffffffffbfffbcbfffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfffffffffbfcffb
    ffffffffbffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffbbcffcb
    ffffffffffffcccffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffbcbfffb
    fffffffcfffffccfffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffb
    fffffffcffffffcfffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffff
    fffffffccbfffccfffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffccfffff
    ffffffcccbfffccffffcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffcffffff
    ffffffcfcbffccfffffcbbccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffccfffbc
    ffffffcffcbffffffffffbccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffffffccfffbc
    ffffffccfcbfffffffffbbcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffccffbc
    ffffffccfbbbfffffffcfccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffffffffffbcf
    ffffffccfbfbfffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffffbcf
    ffffffcffbfbffffffcfcbccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffbbbf
    ffffffcfccbbffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffcfffffffbfbf
    ffffffcfbcbbfffffffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffcffffffbfbf
    ffffffccbbbbfffffffcfbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffbbcc
    ffffffcccbbbfffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcfffffffbbcb
    fffffffccbbbfffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffbbbb
    fffffffcccbbffffffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbbbc
    fffffffcccbfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbc
    ffffffcfccbffffffffffccfffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbbcc
    ffffffcfccbffffffffffccffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcc
    ffffffccccbbfffffffffccfffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffffffbcc
    ffffffffccbbffffffffcfcfffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffffffffbcc
    fffffffffcfbfffffffffccffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffbfffcfffffffffbbcc
    ffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffcffffffffbbcc
    ffffffffccbbfffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbbcccfffffffffbfcf
    fffffffffcbbbfffffffbffccbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbbcfffffffffffbbcc
    ffffffffcccbbfffffffcbfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbccfffffffffffbbcc
    ffffffffccbbbbffffffcbbbfbfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbccffbfffffffbbbcf
    ffffffffccbbcbbffffffccbfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbccfbcfffffffbbccc
    ffffffcfcfffccbffffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbbbcffffffbbbbcc
    ffffffffffffccbbbfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffbcbbcc
    fffffffcffffcccbbfffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffbccfffffffccbbcc
    ffffffffffffbccbcfffffcbbfffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcbccf
    ffffffcfffffbcccccffffccbfffffffffccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffbffffcbccf
    ffffffffcfffbccccffffffcbffffffffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffbbcfffbbcfffbbccf
    fffffffccfffbcccbffffcccbfffffcfffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffbccffbbccfffbccff
    fffffffccfffcccffffffffcbfffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffbcfffbbccfffbbcfc
    fffffffccfffcccfffffffccbfffffcfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffbcccfbccbfffbbcfc
    ffffffffbffffcdcffffffccffffffcfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffbcfffbcbbfffcbcbc
    ffffffffbffffcbfffffffcffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffbccffbfbffffcccbc
    fffffffcbcfffcbffffffffffcbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffccffffbbfffcccbb
    fffffffcbcfffcbffffffffcfccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffcffffcbfffccccb
    fffffffcbbfffbbffffffffcffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcffffffffbfffccccb
    fffffffccbfffbfffffffffcffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfcfffffbbfffccccb
    fffffffccffffdfffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbcffcfffffffffffffbb
    ffffffbccffffcfffbfffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbcffcfffffffffffffbc
    ffffffbfcffffcfbfbfffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbfffffffffffffdffffc
    ffffffbfcffffcfbbbfffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffffffffffffbdcffffc
    ffffffbffbfffffccfbfffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffffbfcffffc
    fffffffffbffffcccfbffffffcffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffffffffffbbfcffffc
    fffffffffcffffcccbbfffffffffffccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffcfcfffbf
    ffffffffffffffcccbfffffffbffffcffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcfffffffffcccfffbf
    ffffffffccfffffccbffffffffffffcfbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfccffffffffffcccfffcf
    ffffffffbcfffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbbffffffffffccfffff
    ffffffffcbfffffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcc
    fffffffffbcffffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcb
    ffffffffffbffffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffcbc
    fffffffffffffffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbf
    fffffffffcfffffcbfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffbff
    fffffffffcfffffcbfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffff
    fffffffffcfbffffcfffffcfcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcf
    fffffffffcfcffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffbccffffcf
    ffffffffccfccfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfcfffffcccffffcf
    fffffffffffccfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffccffffcf
    ffffffffffcccfffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffbffffcc
    ffffffffffccbfffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfffffffffbbfffff
    fffffffffcccbfffffffffffffffbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffbbfffff
    ffffffffffcbbfffffffffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffbfbffff
    fffffffffffbcfffffffffffffffbcbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffbcbffff
    ffffffcffcfbcfffffffffffffffccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffffbcbffff
    fffffffffcfbbffffffffffffffffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffffffffffbccffff
    fffffffffffbccffffffffffffffcccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffffffbccffff
    ffffffffffcbccfffffffffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffffffbcbbfff
    ffffffffcffbfcfffffffffffffffcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcfffffffffffcccbfff
    ffffffffcffbffcffffffffffffcbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcffffffffffbcccbcff
    ffffffffcfffcfcfffffffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffccfffffffffffccfbffc
    fffffffffcbccccfffbfffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfbffffffffffcffbffc
    fffffffffccbcccfffbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffcfcfffc
    fffffffffccbbccfffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffbffffcccbcf
    ffffffffffccbccfffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffcbccf
    ffffffffffccbccfffccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffffbccf
    fffffffffffccbcfffbcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbffffccff
    ffffffffffffcbcfffbccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccbccfffccff
    ffffffffffffcfffffbccbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcbbccfffcfff
    ffffffffffffbfffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccbcccfffffff
    fffffffcccffcffffffffccfbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfffffcbccfcfffffff
    fffffffffbcfffffbfffffcbfcccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbbffffffcbcffffffccff
    fffffffffbffffffbffffcfbfcbccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbfccffffcbcfcffffcfff
    fffffbfcfbfffffbbffffcfbfcbbcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbffffbcfffffbbcfbffffffff
    fffffffffffffffbcffffccbcccbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbcfbfcffffbbccbffffffff
    fffffffffccffffbffffcfcccccbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbbcfbfcffffbbcfbffffcfbf
    ffffbbffffcffffbffffcffccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccbccffffcbfcbffffbfff
    ffffbbffffcfbfffffffccfccfcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcccccfcffffbfffffffbfff
    fffffbfffffbfffffffffffcfcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbccccffcffffbfccffffbfbb
    ffffffbffffbbffffffffcfffcfbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfccfccfffffffbffffbfbb
    ffffffbffffbbffffffffcfcfcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfcfffffffffffbcffcfbf
    ffffffbcfffbbffffffffffcfffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffcffffffffbbfcffbff
    ffffffbfffffbfffffffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfcfcffffffffbbfcffbff
    ffffffbfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcffffffffffbbcffcbff
    ffffffffffffcffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffbcbfffbff
    fffffcffffffcfffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffbff
    fffffcffffffffffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcccffffff
    fffffccbffffffffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffffccfffffcf
    ffffcccbfffffffffcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffcffffffcf
    ffffcfcbffcffffffcbbccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfffffccfffbccf
    ffffcffcbffffffffffbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbcffffccfffbccc
    ffffccfcbfffffffffbbcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcfffffccffbcfc
    ffffccfbbbfffffffcfccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbffffffffffbcffc
    fffffcfbfbfffffffccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffbcfcc
    fffffffbffffffffcfcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffbbbfcc
    ffffffccbfffffffffccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcccfffffffbfbfcc
    ffffffbcbffffffffcfccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbcfcffffffbfbffc
    fffffcbffffffffffcfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffbbccfc
    fffffccffffffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffbbcbfc
    fffffcfffffffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffffffbbbbcc
    fffffcffffffffffffcfcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffbbbccc
    fffffcffffffffffffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffbbbccf
    fffffffffffffffffffccbbfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffbbcccf
    fffffffffffffffffffccbfffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccf
    fffffcccbbfffffffffccbbbffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffffffffbccfc
    ffffffccbbffffffffcfcbbfffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcffffffffffbccfc
    fffffffcfbfffffffffcccbbfffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffbbcccc
    ffffffccbbfffffffffffcbbfffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcffffffffbbccff
    ffffffccbbfffffffffffccbfffcfcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffbfcfff
    fffffffcbbbfffffffbffccbfffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbfffffffffffffbbccff
    ffffffcccbbfffffffcbfccbfffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffbffffffffffffffbccff
    ffffffccbbbbffffffcbbbfbfffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffbffffbfffffffffbcfff
    ffffffccbbcbfffffffccbfffffffccfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcfffbfffbcfffffffffcccff
    ffffcfccbbccfffffffccbffffffcccfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbfffbcfffffffffbccff
    fffffffccbccffffffffcffffffffccfffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcfffffffffcfffffbbfffbccff
    fffffffccbccfffbffffcbfffffffcffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffccffffffffcfffffbbfffbccfc
    fffffffccbbffffbbfffcbbffffffcffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffcffffffffffffffbbbfffccfff
    ffffffffccbffffcbbffccbffffffcfffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffffcfffffffffffffbbbcfffccfcf
    ffffffffcbffffccbbfffcbfffffcffffccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffccffffffffffffbbcbcfffccfff
    ffffffffcbffffbccbfcccbfffffcffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffccfffffffffffbbccccfffcfffc
    fffffffbcbffffbbcbfffcbfffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffffcffffffffffbbccccfffcfcff
    fffffffbccfffffbfbffccbfffffcffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffcfcffffffffcfbccbccfffcfccf
    fffffffbccfffcbbffffccffffffccffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcffffffffffffbcbbfcfffcbccf
    fffffffcccfffcbcffffcffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcffffffffffbfbffcfffcbccf
    fffffffcccfffbbffffffffcbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccfffffffcffffbbcdfffcbbff
    fffffffcccffffbbfffffcfccbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcbcffffccbff
    fffffffbccfffffffffffcffcbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffccbcf
    fffffffbbcbffffffffffcffcbcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffbbffffcfffcf
    ffffffffbccffffbfffffffffbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfffcf
    ffffffffbccffffbffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcffcffffffffffbcfffcf
    ffffffffbcccfffbffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffccfffcf
    ffffffffbcccffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffffffcccfffcb
    fffffffbccccffffbfffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffcccffffb
    fffffffbcfcccfffbffffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffcccffffb
    fffffffccccccfffbfffffffccffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffffffcccffffb
    ffffffffffcccffffffffffbbffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffcfffffffffccccffffff
    ffffffffcfccffffffffffffbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffcffffffffffccccccffff
    ffffffffffcccfffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffcfffbbfffffffffccccffffff
    ffffffffffcccfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffbffffffffffcfccfcffff
    fffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffccccfcffff
    fffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffbcccccffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfccffff
    fffffffcffffcfffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfbbffff
    fffffffcffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfbfffff
    fffffffcffffffffffffcfcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffcccfffffff
    fffffffcfcffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffccbfbfffff
    ffffffccfcffffffffffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfcffffffccbbbfffff
    fffffffffccfffffffffffccbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffccbbffffff
    ffffffffcccffffffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffbbcffffff
    ffffffffccbffffffffffffcccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfffffffffbbfffffff
    fffffffcccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffffffffffbbfffffff
    ffffffffcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccffffffffffbffffffff
    fffffffffbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccfffffffffffbcfffcfff
    ffffcffcfbccfffffffffffffcccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccffffffffffffcfffffff
    fffffffcfbbcfffffffffffffcfcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcbcfffffffffffffcfffffff
    fffffffffbccffffffffffffcccccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccfffffffffffffccbfcffc
    ffffffffcbccffffffffffffcffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfcfffffffffffffcbbfcfff
    ffffffcffbfcffffffffffffccfcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccccffffffffffffccbfffff
    ffffffcffbfffffffffffffbfcbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffcffffffffffffccbcffff
    ffffffcfffcffffffffffffbffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcfccffffffffffffcfbffcff
    fffffffcbcccfffbfffffffbffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbcfbffffffffffcffbffcff
    fffffffccbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffbffffffffffffcfffcff
    fffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbffffffffffffccbcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scroller.scrollBackgroundWithSpeed(0, 40)
scroller.setBackgroundScrollOffset(-2, 0)
let HeroThumbNail = sprites.create(img`
    11111111111111...................................................
    1ffff666666661...................................................
    1accffff666661...................................................
    1ccccccffff661...................................................
    1ccccccbbbfff1111111111111111111111111111111111111111111111111111
    1bbccccbbbadb1111111111111111111111111111111111111111111111111111
    1bbbbbbbbadbc1111111111111111111111111111111111111111111111111111
    1aaabbbbadccc1111111111111111111111111111111111111111111111111111
    1ddaaffffffff1111111111111111111111111111111111111111111111111111
    1bddf666666661111111111111111111111111111111111111111111111111111
    1bbbf666666661...................................................
    1cfddddccf6661...................................................
    1ffddddccf6661...................................................
    11111111111111...................................................
    `, SpriteKind.thumb)
HeroThumbNail.setPosition(35, 7)
color.setPalette(
color.Arcade
)
Hero2(Hero)
FinalBoss(FinalBossman)
forever(function () {
    timer.after(5000, function () {
        if (Math.percentChance(20)) {
            MachinePowerUp = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 4 4 4 4 4 . . 
                . . . . . . 4 5 5 5 5 5 5 5 4 . 
                . . . . . . 4 5 4 5 5 5 4 5 4 . 
                . . . . . . 4 5 4 4 5 4 4 5 4 . 
                . . . . . . 4 5 4 5 4 5 4 5 4 . 
                . . . . . . 4 5 4 5 5 5 4 5 4 . 
                . . . . . . 4 5 4 5 5 5 4 5 4 . 
                . . . . . . 4 5 5 5 5 5 5 5 4 . 
                . . . . . . . 4 4 4 4 4 4 4 . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            MachinePowerUp.setPosition(randint(0, scene.screenWidth()), 0)
            MachinePowerUp.setVelocity(50, 50)
            MachinePowerUp.setBounceOnWall(true)
        }
        if (Math.percentChance(20)) {
            HealthUp = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 2 2 2 2 2 . . 
                . . . . . . 2 3 3 3 3 3 3 3 2 . 
                . . . . . . 2 3 2 2 3 2 2 3 2 . 
                . . . . . . 2 3 2 2 2 2 2 3 2 . 
                . . . . . . 2 3 2 2 2 2 2 3 2 . 
                . . . . . . 2 3 3 2 2 2 3 3 2 . 
                . . . . . . 2 3 3 3 2 3 3 3 2 . 
                . . . . . . 2 3 3 3 3 3 3 3 2 . 
                . . . . . . . 2 2 2 2 2 2 2 . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.HeartHealth)
            HealthUp.setPosition(randint(0, scene.screenWidth()), 0)
            HealthUp.setVelocity(50, 50)
            HealthUp.setBounceOnWall(true)
        }
        if (Math.percentChance(20)) {
            RocketPowerup = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 7 7 7 7 7 7 7 . . 
                . . . . . . 7 5 5 5 5 5 5 5 7 . 
                . . . . . . 7 5 7 7 7 7 5 5 7 . 
                . . . . . . 7 5 7 5 5 7 5 5 7 . 
                . . . . . . 7 5 7 7 7 7 5 5 7 . 
                . . . . . . 7 5 7 5 7 5 5 5 7 . 
                . . . . . . 7 5 7 5 5 7 5 5 7 . 
                . . . . . . 7 5 5 5 5 5 5 5 7 . 
                . . . . . . . 7 7 7 7 7 7 7 . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.rocket)
            RocketPowerup.setPosition(randint(0, scene.screenWidth()), 0)
            RocketPowerup.setVelocity(50, 50)
            RocketPowerup.setBounceOnWall(true)
        }
    })
    pause(5000)
})
game.onUpdateInterval(4000, function () {
    for (let value of sprites.allOfKind(SpriteKind.FinalBOSS)) {
        if (true) {
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 10, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -10, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 20, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -20, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 50, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -50, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 70, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -70, 50)
        }
        BossShot2.setKind(SpriteKind.enemyshotq)
    }
})
game.onUpdateInterval(2500, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy3)) {
        if (Math.percentChance(60)) {
            EnemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . 2 5 2 . . . . . . . 
                . . . . . . 2 5 2 . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, 100)
            EnemyShot.setKind(SpriteKind.enemyshotq)
        }
    }
})
game.onUpdateInterval(15000, function () {
    for (let value of sprites.allOfKind(SpriteKind.boss2)) {
        if (true) {
            for (let index = 0; index < 4; index++) {
                bosshot6 = sprites.createProjectileFromSprite(assets.image`rocket`, value, randint(-100, 100), 50)
            }
            bosshot6.setKind(SpriteKind.enemyshotq)
        }
    }
})
game.onUpdateInterval(8000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Boss)) {
        if (true) {
            for (let index = 0; index < 5; index++) {
                BossShot2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 . . . . . . . . . 
                    . . . . . 4 . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . 2 . 4 . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 4 4 . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 4 4 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, randint(-80, 0), randint(25, 75))
                characterAnimations.loopFrames(
                BossShot2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . . 4 . . . . . . . . . 
                    . . . . . . . . 2 . . . . . . . 
                    . . . . . . 2 . 4 . . . . . . . 
                    . . . . . . . . 4 4 . . . . . . 
                    . . . . . . . 4 5 4 4 . . . . . 
                    . . . . . . . 4 5 5 4 . . . . . 
                    . . . . . . . 4 4 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 . 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 . . . . . . . . . 
                    . . . . . . . . 2 . . . . . . . 
                    . . . . . . . . 4 . . . . . . . 
                    . . . . . . . . 4 4 . . . . . . 
                    . . . . . . . 4 4 4 5 . . . . . 
                    . . . . . . . . 4 4 5 . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 2 . . . . . . 
                    . . . . . . . . 2 . . . . . . . 
                    . . . . . . 5 . 4 . . . . . . . 
                    . . . . . . . . 4 4 . . . . . . 
                    . . . . . . . 4 4 4 4 . . . . . 
                    . . . . . . . 5 4 4 4 . . . . . 
                    . . . . . . . 5 5 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                75,
                characterAnimations.rule(Predicate.MovingDown)
                )
                BossShot2.setKind(SpriteKind.enemyshotq)
            }
        }
    }
})
game.onUpdateInterval(325, function () {
    for (let value of sprites.allOfKind(SpriteKind.Boss3)) {
        if (true) {
            for (let index = 0; index < 4; index++) {
                Boss3_laser = sprites.createProjectileFromSprite(img`
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . 2 2 . . . 
                    . . . 2 2 . . . 
                    . . . 2 2 . . . 
                    . . . 2 2 . . . 
                    . . . 2 2 . . . 
                    . . . 2 2 . . . 
                    . . . 2 2 . . . 
                    . . . 4 4 . . . 
                    . . . 4 4 . . . 
                    . . . 5 5 . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    `, value, 0, 120)
            }
        }
        Boss3_laser.setKind(SpriteKind.enemyshotq)
    }
})
game.onUpdateInterval(randint(3000, 6000), function () {
    for (let value of sprites.allOfKind(SpriteKind.Boss)) {
        if (true) {
            BossShot3Lazer = sprites.create(img`
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                `, SpriteKind.enemyshotq)
            characterAnimations.loopFrames(
            BossShot3Lazer,
            [img`
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                `,img`
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                `,img`
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                `,img`
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                `,img`
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                `],
            100,
            characterAnimations.rule(Predicate.NotMoving)
            )
            BossShot3Lazer.lifespan = 1000
            BossShot3Lazer.setKind(SpriteKind.enemyshotq)
            BossShot3Lazer.x = value.x
            BossShot3Lazer.top = value.bottom
        }
    }
})
game.onUpdateInterval(10000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Boss)) {
        if (true) {
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 10, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -10, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 20, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -20, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 30, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -30, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 40, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -40, 50)
            BossShot2.setKind(SpriteKind.enemyshotq)
        }
    }
})
game.onUpdateInterval(3500, function () {
    for (let value of sprites.allOfKind(SpriteKind.FinalBOSS)) {
        if (true) {
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 15, 30)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -10, 30)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 25, 40)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -25, 40)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 60, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -60, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 70, 60)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 1 2 . . . . . . 
                . . . . . . 2 1 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -70, 60)
        }
        BossShot2.setKind(SpriteKind.enemyshotq)
    }
})
game.onUpdateInterval(300000, function () {
    timer.after(40000, function () {
        bossman(BossMan)
    })
})
forever(function () {
    timer.after(5000, function () {
        Enemy2 = sprites.create(img`
            ....8..........8....
            ...98..........89...
            ...98...9..9...89...
            ...98...8..8...89...
            ..998...8448...899..
            ..968..898898..869..
            .9968..89cc98..8699.
            .98666.898898.66689.
            .988888948849888889.
            .44444994cc49944444.
            .94888989cc98988649.
            .9488998fccf8998649.
            .4468988ffff8898644.
            .6668...8888...8666.
            .688....9889....886.
            .68.....9889.....86.
            .68.....9889.....86.
            .22......44......22.
            .22..............22.
            ....................
            `, SpriteKind.Enemy)
        Enemy2.setVelocity(0, 40)
        Enemy2.setPosition(randint(0, scene.screenWidth()), 0)
    })
    pause(5000)
})
game.onUpdateInterval(2000, function () {
    for (let value of sprites.allOfKind(SpriteKind.FinalBOSS)) {
        if (true) {
            Rapid_fire3 = sprites.createProjectileFromSprite(img`
                ......................................................................................................................................................
                ....................22222...............................................22222..............................................22222......................
                ...................2222522.............................................2222522............................................2222522.....................
                ...................2222552.............................................2222552............................................2222552.....................
                ...................2242222.............................................2242222............................................2242222.....................
                ...................2444222.............................................2444222............................................2444222.....................
                ...................2224222.............................................2224222............................................2224222.....................
                ....................22222...............................................22222..............................................22222......................
                ......................................................................................................................................................
                ......................................................................................................................................................
                `, value, 0, 75)
        }
        Rapid_fire3.setKind(SpriteKind.enemyshotq)
    }
})
game.onUpdateInterval(2000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy1)) {
        if (Math.percentChance(50)) {
            EnemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 7 5 5 7 . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, 100)
            EnemyShot.setKind(SpriteKind.enemyshotq)
        }
    }
})
game.onUpdateInterval(5000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Boss3)) {
        if (true) {
            Rapid_fire3 = sprites.createProjectileFromSprite(img`
                . 9 9 . . . . . . . . . . 9 9 . 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                . 9 9 . . . . . . . . . . 9 9 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 9 9 . . . . . . . . . . 9 9 . 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                . 9 9 . . . . . . . . . . 9 9 . 
                `, value, 20, 80)
            Rapid_fire3 = sprites.createProjectileFromSprite(img`
                . 9 9 . . . . . . . . . . 9 9 . 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                . 9 9 . . . . . . . . . . 9 9 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 9 9 . . . . . . . . . . 9 9 . 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                . 9 9 . . . . . . . . . . 9 9 . 
                `, value, -20, 80)
            Rapid_fire3 = sprites.createProjectileFromSprite(img`
                . 9 9 . . . . . . . . . . 9 9 . 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                . 9 9 . . . . . . . . . . 9 9 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 9 9 . . . . . . . . . . 9 9 . 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                . 9 9 . . . . . . . . . . 9 9 . 
                `, value, 60, 80)
            Rapid_fire3 = sprites.createProjectileFromSprite(img`
                . 9 9 . . . . . . . . . . 9 9 . 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                . 9 9 . . . . . . . . . . 9 9 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 9 9 . . . . . . . . . . 9 9 . 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                9 1 1 9 . . . . . . . . 9 1 1 9 
                . 9 9 . . . . . . . . . . 9 9 . 
                `, value, -60, 80)
        }
        Rapid_fire3.setKind(SpriteKind.enemyshotq)
    }
})
forever(function () {
    timer.after(6000, function () {
        Enemy1 = sprites.create(img`
            ........55........
            .......5665.......
            ......566665......
            .......5665.......
            ........77........
            ........77........
            77......77......77
            557.....66.....755
            557....7887....755
            5575...6886...5755
            55765.888888.56755
            558666685586666855
            888866585585668888
            77....585585....77
            ......775577......
            .......8888.......
            .......8778.......
            ........55........
            `, SpriteKind.Enemy1)
        Enemy1.setVelocity(0, 50)
        Enemy1.setPosition(randint(0, scene.screenWidth()), 0)
        animation.runMovementAnimation(
        Enemy1,
        animation.animationPresets(animation.bobbing),
        1000,
        false
        )
    })
    pause(6000)
})
/**
 * Powerups
 */
forever(function () {
    if (Planet.top > 80) {
        Planet.bottom = 0
        Planet.setVelocity(0, 25)
    }
    if (Planet2.top > 80) {
        Planet2.bottom = 0
        Planet2.setVelocity(0, 15)
    }
})
forever(function () {
    timer.after(1000, function () {
        Enemy33 = sprites.create(img`
            . . . . 2 . . . . . . 2 . . . . 
            . . . 2 2 . . . . . . 2 2 . . . 
            . 2 2 2 2 . . . . . . 2 2 2 2 . 
            4 5 2 2 . . . . . . . . 2 2 5 4 
            2 4 2 . . . . . . . . . . 2 4 2 
            2 . 4 . 2 . . a a . . 2 . 4 . 2 
            . . 4 2 2 . 2 a a 2 . 2 2 4 . . 
            . . 2 2 2 . 2 a a 2 . 2 2 2 . . 
            . 2 2 2 . . 2 4 4 2 . . 2 2 2 . 
            4 4 2 2 4 4 2 2 2 2 4 4 2 2 4 4 
            2 4 4 4 . a a 4 4 a a . 4 4 4 2 
            2 2 2 4 . a 2 4 4 2 a . 4 2 2 2 
            . 2 2 . . 4 a 4 4 a 4 . . 2 2 . 
            . . . . . . a 5 5 a . . . . . . 
            . . . . . . a 5 5 a . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            `, SpriteKind.Enemy3)
        Enemy33.setVelocity(randint(-20, 20), 60)
        Enemy33.follow(Hero, 80)
        Enemy33.setPosition(randint(0, scene.screenWidth()), 0)
    })
    pause(randint(5000, 6000))
})
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.boss2)) {
        if (true) {
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 4 2 . . . . . . 
                . . . . . . 2 4 1 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, randint(-100, 100), 120)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 4 2 . . . . . . 
                . . . . . . 2 4 1 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, randint(-80, 80), 100)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 4 2 . . . . . . 
                . . . . . . 2 4 1 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, randint(-60, 60), 80)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 4 2 . . . . . . 
                . . . . . . 2 4 1 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, randint(-120, 120), 140)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 4 2 . . . . . . 
                . . . . . . 2 4 1 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, randint(-140, 140), 160)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 4 2 . . . . . . 
                . . . . . . 2 4 1 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, randint(-150, 150), 75)
            BossShot2.setKind(SpriteKind.enemyshotq)
        }
    }
})
/**
 * Enemy Projectile
 */
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.percentChance(75)) {
            EnemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 1 1 9 . . . . . . 
                . . . . . . 9 1 1 6 . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 10, 100)
            EnemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 1 1 9 . . . . . . 
                . . . . . . 9 1 1 6 . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -10, 100)
            EnemyShot.setKind(SpriteKind.enemyshotq)
        }
    }
})
