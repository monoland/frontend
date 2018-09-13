let mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.js('resources/scripts/main.js', 'public/monoland/script')
   .stylus('resources/stylus/main.styl', 'public/monoland/style');

mix.extract(['axios', 'lodash', 'vue', 'vuetify', 'vue-router']);

// mix.sourceMaps(!mix.inProduction());