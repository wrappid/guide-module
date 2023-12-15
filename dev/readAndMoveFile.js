import fs from "fs";
import path from "path";
import FS from "fs-extra";

const DOCS_FILE_EXT = ".docs.js";
const JS_FILE_EXT = ".js";
const PLACEHOLDER = "~COMPONENT_NAME~";
const DOC_FILE_CONTENT = fs.readFileSync("template.txt", "utf8");

function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (let i in files) {
    let name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      if (name == "/Users/kc/Desktop/test/source/hh.js") {
        console.log(name);
      }
      files_.push(name);
    }
  }
  return files_;
}

export function readAndMove(source, destination) {
  let destFiles = getFiles(destination);
  let sourceFiles = getFiles(source);
  sourceFiles.forEach((file) => {
    let sourceFileName = path.basename(file);
    console.log("sourceFileName = " + sourceFileName);

    let sourceFileAbsoluteLocation = path.dirname(file);

    destFiles.forEach((element) => {
      let destFileName = path.basename(element);
      // console.log("destFileName = " + destFileName);

      let existDestFileAbsoluteLocation = path.dirname(element);
      let sourceFileRelativeLocation = path.dirname(
        path.relative(source, file)
      );
      let destinationFileAbsoluteLocation = path.join(
        destination,
        sourceFileRelativeLocation
      );
      //split file name both for source and destination
      let sourceFileNameWithoutExt = sourceFileName.split(".");
      let destFileNameWithoutExt = destFileName.split(".");
      //check  both souce and destination contain same file and ignore .DS_Store file
      if (
        sourceFileNameWithoutExt[0] === destFileNameWithoutExt[0] &&
        (sourceFileName != ".DS_Store" || destFileName != ".DS_Store")
      ) {
        console.log("====================================");
        /**
       * 
      console.log('####################');
      console.log(sourceFileNameWithoutExt[0]);
      console.log(destFileNameWithoutExt[0]);
      console.log('####################');
        //New path to move file
        console.log(
          "sourceFileAbsoluteLocation = " + destinationFileAbsoluteLocation
        );
        //Existing path
        console.log(
          "existDestFileAbsoluteLocation = " + existDestFileAbsoluteLocation
        );
        console.log("====================================");
        */
        //Create new folder if not exist
        if (!fs.existsSync(destinationFileAbsoluteLocation)) {
          fs.mkdirSync(destinationFileAbsoluteLocation, {
            recursive: true,
          });
        }
        //Creating new oldpath and newpath with filename
        let oldpath = existDestFileAbsoluteLocation + "/" + destFileName;
        let newpath = destinationFileAbsoluteLocation + "/" + destFileName;
        console.log("====================================");
        console.log(oldpath);
        console.log(newpath);
        console.log("====================================");
        //Move file oldpath to newpath
        if (oldpath != newpath) {
          FS.move(oldpath, newpath, (err) => {
            if (err) return console.log(err);
            console.log(`File successfully moved!!`);
          });
        }
      }
    });
  });
}
// const source = "/Users/kc/Desktop/test/source";
const source = "/Users/kc/Documents/WRAPPID/git/core/package/components";
const destination = "/Users/kc/Desktop/wrappid/guide-module/app/components/docs";
// const destination = "/Users/kc/Desktop/test/docs";
readAndMove(source, destination);

