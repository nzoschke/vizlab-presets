const fork = require("child_process").fork;
const fs = require("fs");
const path = require("path");

const root = path.resolve("Presets");

const dirs = [];
function ls(directory) {
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const dir = path.join(directory, file);
    if (fs.statSync(dir).isDirectory()) {
      if (file == ".git") return;
      dirs.push(dir);
      ls(dir);
    }
  });
}

function convertDir(dir) {
  const out = dir;
  console.log(`convertDir '${dir}' -> '${out}'`);
  process.chdir('../milkdrop-preset-converter-node');
  return new Promise((resolve, reject) => {
    const cp = fork("src/convertDirectory.js", [dir, out, 10]);
    cp.on("error", reject).on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
}

ls(root);
async function convert() {
  for (var i = 0; i < dirs.length; i++) {
    await convertDir(dirs[i]);
  }
}
convert();
