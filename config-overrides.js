
const path = require('path')
const fs = require('fs')

const cMapsDir = path.join(
  path.dirname(require.resolve('pdfjs-dist/package.json')),
  'cmaps'
)
const copyDir = (from, to) => {
  // Ensure target directory exists
  fs.mkdirSync(to, { recursive: true })

  const files = fs.readdirSync(from)
  files.forEach(file => {
    fs.copyFileSync(path.join(from, file), path.join(to, file))
  })
}
copyDir(cMapsDir, 'public/cmaps/')
const {
  override,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
  addBabelPlugins,
  addWebpackPlugin,
} = require('customize-cra')
const WorkerPlugin = require('worker-plugin')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      'text-color': '#333333', // TEXT_MAIN
      'text-color-secondary': '#AAAAAA', // TEXT_SUB
      'border-color-base': '#E0E0E0',
      'label-required-color': '#CA0101',
      'font-family':
        "'Noto Sans JP', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    },
  }),
  addWebpackAlias({
    '~': path.resolve(__dirname, './src'),
  }),
  addBabelPlugins('babel-plugin-jsx-remove-data-test-id'),

  addWebpackPlugin(
    new WorkerPlugin({
      filename: 'static/js/[name].[contenthash:8].js',
    })
  )
)
