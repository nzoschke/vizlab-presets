# Development

Start with the amazing [Jason Fletcher's Cream of the Crop](https://thefulldomeblog.com/2020/02/21/nestdrop-presets-collection-cream-of-the-crop/).

Fix permissions and detox filenames:

```bash
curl -LO https://thefulldomeblog.files.wordpress.com/2022/01/creamofthecrop_20200216.zip
unzip creamofthecrop_20200216.zip
chmod -R 777 .
detox -r .
```

Convert with [Butterchurn Convertor](https://github.com/jberg/milkdrop-preset-converter-node)

```bash
git clone https://github.com/jberg/milkdrop-preset-converter-node
cd milkdrop-preset-converter-node

# install build deps and nvm
brew install cmake nvm
mkdir ~/.nvm
. /opt/homebrew/opt/nvm/nvm.sh

# install or use node 10
nvm install lts/dubnium

# build
# note this doesn't always install properly... not sure why
npm install
npm run build

# run
node src/convert.js
```