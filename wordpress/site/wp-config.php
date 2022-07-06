<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'enftix_wp' );

/** Database username */
define( 'DB_USER', 'enftix_wp' );

/** Database password */
define( 'DB_PASSWORD', 'p4$$w0rD' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' @XJhu/*A2Y}OAVxrWVb>jW4INh)GOW)PgwqPdR/AR,8ATq`z_NgqU98R9HRJCZ(' );
define( 'SECURE_AUTH_KEY',  'uJ<ll&P$pKlRD*:pd hmQrL@(KT>1kU5X#NxkjH^fPB479${+AgGadnf7B7&VhfB' );
define( 'LOGGED_IN_KEY',    'ZB?ivx-3kz,,S.wdREV~]>pN,k]aTEF&_Wn4^WJe(Y9:iXDa0TKJ&Gcb[YD>_925' );
define( 'NONCE_KEY',        '*CvT$p:{tfv[rd@XEax.U2*zgeO^`Wmq|MPXQ~#xTO,>]9136Mi!l`&Fz4T,> 8S' );
define( 'AUTH_SALT',        '}Pj9MWP>ESmgG#YL(=}>F`^J6I _BH+]{,s/Zoc#qy*[diO^rZu%:RJ/.#$lZ6&9' );
define( 'SECURE_AUTH_SALT', 'L,ve=$}`gHPR`0:_?GV=CHQn~sllp]Y$E4`jM6x]} f3Lj.;#m@4:IxSq$:(arAu' );
define( 'LOGGED_IN_SALT',   'y1|Lt@W_/TFNJAmHW|xTxzQj#qh,S@D&7%_X`u<3aac$@We_+ @HfDA+-^ihhC0s' );
define( 'NONCE_SALT',       'dPe@a5&d>xc vsBDDV?EXQmhJylJ1ot?q1:)]]yA7_z;][;z!4&pTqGnePWTSLV`' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'nft_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
