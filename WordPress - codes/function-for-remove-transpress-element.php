add_action( 'template_redirect', function () {
// TranslatePress: run only on non-default languages
$uri = $_SERVER['REQUEST_URI'];

    // 1) TranslatePress mode (preferred)
    if ( defined('TRP_LANGUAGE') && defined('TRP_DEFAULT_LANGUAGE') ) {
        // Default language -> do nothing
        if ( TRP_LANGUAGE === TRP_DEFAULT_LANGUAGE ) {
            return;
        }
    } else {

        // 2) Fallback mode (if TranslatePress constants are not available)
        // Only run on /fr/
        if (
            strpos( $uri, '/fr/' ) === false) {
            return;
        }
    }

    // Output buffering: remove Divi row marked for hiding
    ob_start( function ( $html ) {
        $pattern = '/<div[^>]*class="[^"]*et_pb_row[^"]*bgdata-tohide[^"]*"[^>]*>.*?<\/div>\s*/si';
        return preg_replace( $pattern, '', $html );
    });

});
/*****
* Removes Divi content blocks marked with .bgdata-tohide from all non-default TranslatePress language versions. Uses TranslatePress language constants to detect the current language and output 
* buffering to strip the targeted Divi row (et_pb_row) from the final HTML, keeping the section design/background intact.
*****/
