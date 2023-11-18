import webpack from 'webpack';

const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
};

const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
    ],
};

export function buildLoaders(): webpack.RuleSetRule[] {
    return [typescriptLoader, cssLoaders];
}
