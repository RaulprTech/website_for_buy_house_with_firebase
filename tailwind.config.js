module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                //  Color palette project
                primary: '#AFF000',
                secondary: '#2A2A2A',
                tertiary: '#707272',
                disabled: '#B8B9BE',
                alternative: '#F9F5EE',
                clean: '#FFFFFF',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],

}


