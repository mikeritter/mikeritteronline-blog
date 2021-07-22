module.exports = function(eleventyConfig){

    eleventyConfig.addFilter("tel", function (tel) {
        return tel.replace('-', '').replace("\(",'').replace("\)",'').replace(" ",'').trim();
    });

    // Prefs
    return{
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}
