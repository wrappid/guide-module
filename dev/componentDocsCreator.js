import fs  from "fs";
import path  from "path";

const SOURCE = "/Users/kc/Documents/WRAPPID/git/core/package/components";
const DESTINATION = "/Users/kc/Desktop/wrappid/guide-module/app/components/docs";
// const SOURCE = "/Users/kc/Desktop/test/destination";
// const DESTINATION = "/Users/kc/Desktop/test/docs";

const DOCS_FILE_EXT = ".docs.js";
const JS_FILE_EXT = ".js";
const PLACEHOLDER = "~COMPONENT_NAME~";
const DOC_FILE_CONTENT = fs.readFileSync("template.txt", "utf8");

/**
 * @todo
 * #1
 *  1. Get all the folder from components directory and console.log each of them(recursive)
 *  2.Inside each folder find all the compnent files and console.log each of them (call inside first func)
 *  hint readDirSync readFileSync
 *
 * #2
 *  1. A function componentDocsGenerator(source<Folder Path core Package >, destination<folder Path in guideModule>)
 *  hint writeFileSync mkdirSync
 */

function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (let i in files) {
    let name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

/**
 *
 * @param {*} source
 * @param {*} destination
 * Get the filename (Take only .js files )
 *  create file in destination with rename(.docs.js)
 */
function componentDocsGenerator(source, destination) {
  console.log("source = " + source);
  console.log("destination = " + destination);
  try {
    let files = getFiles(source);
    files.forEach((file) => {
       
      console.log("--------------------------------------------------");
      if (path.extname(file) === JS_FILE_EXT) {
        let sourceFileName = path.basename(file);
        console.log("sourceFileName = " + sourceFileName);

        let sourceFileAbsoluteLocation = path.dirname(file);
        console.log(
          "sourceFileAbsoluteLocation = " + sourceFileAbsoluteLocation
        );

        let sourceFileRelativeLocation = path.dirname(
          path.relative(source, file)
        );
        console.log(
          "sourceFileRelativeLocation = " + sourceFileRelativeLocation
        );

        let destinationFileAbsoluteLocation = path.join(
          destination,
          sourceFileRelativeLocation
        );
        console.log(
          "destinationFileAbsoluteLocation = " + destinationFileAbsoluteLocation
        );

        let destinationFileName = sourceFileName.replace(
          JS_FILE_EXT,
          DOCS_FILE_EXT
        );
        console.log("destinationFileName = " + destinationFileName);

        let destinationFileAbsolutePath = path.join(
          destinationFileAbsoluteLocation,
          destinationFileName
        );
        console.log(
          "destinationFileAbsolutePath = " + destinationFileAbsolutePath
        );

        fs.mkdirSync(destinationFileAbsoluteLocation, {
          recursive: true,
        });

        let fileContent = prepareFileContent(sourceFileName);
        if (!fs.existsSync(destinationFileAbsolutePath)) {
          console.log('====================================');
          console.log(destinationFileAbsolutePath);
          console.log('====================================');
          fs.writeFileSync(destinationFileAbsolutePath, fileContent, {
            recursive: true,
          });
        } else {

          fs.readFile(
            path.join(destinationFileAbsoluteLocation, destinationFileName),
            { encoding: "utf-8" },
            function (err, data) {
              if (!err) {
                let fileNameWithoutExt = sourceFileName.replace(
                  JS_FILE_EXT,
                  ""
                );
                checkImportMatch(fileNameWithoutExt, data);
                checkFunctionNameMatch(fileNameWithoutExt, data);
                checkCoreH4Match(fileNameWithoutExt, data);
                checkComponentPropsMatch(fileNameWithoutExt, data);
                // console.log('received data: ' + data);
              } else {
                console.log(err);
              }
            }
          );
          console.log("Skipping...");
          console.log(destinationFileAbsolutePath + "Already Exists");
        }
      } else {
        console.log(file + " is not a js file.");
      }
    });
    console.log("Script Execution Complete.");
  } catch (err) {
    console.error(err);
  }
}

componentDocsGenerator(SOURCE, DESTINATION);

function prepareFileContent(filename) {
  let fileNameWithoutExt = filename.replace(JS_FILE_EXT, "");
  console.log("fileNameWithoutExt " + fileNameWithoutExt);
  return DOC_FILE_CONTENT.replaceAll(PLACEHOLDER, fileNameWithoutExt);
}

function checkImportMatch(string, fileContent) {
  let splitString = fileContent.split(`"@wrappid/core"`);
  if (splitString[0].includes(string)) {
    return "Import Exist";
  } else {
    fs.appendFile("logFile.txt", "Import Not Exist," + string + DOCS_FILE_EXT+ "\n", (err) => {
      if (err) {
        console.log(err);
      }
      return "Import Not Exist";
    });
  }
}
function checkFunctionNameMatch(string, fileContent) {
  let finalString = "export default function " + string + "Docs() {";
  if (fileContent.includes(finalString)) {
    return "FunctionName Exist";
  } else {
    fs.appendFile("logFile.txt", "FunctionName Not Exist," + string + DOCS_FILE_EXT+ "\n", (err) => {
      if (err) {
        console.log(err);
      }
      return "Import Not Exist";
    });
    return "FunctionName NOT EXIST";
  }
}
function checkCoreH4Match(string, fileContent) {
  let  splitString = fileContent.split('<CoreH4');
  let finalSplit = splitString[1].split("</CoreH4>");
  if (finalSplit[0].includes(string)) {
    return "CoreH4 Exist";
  } else {
    fs.appendFile("logFile.txt", "CoreH4 Not Exist," + string + DOCS_FILE_EXT+ "\n", (err) => {
      if (err) {
        console.log(err);
      }
      return "Import Not Exist";
    });
  }
}
function checkComponentPropsMatch(string, fileContent) {
  let finalString = "{/* <ComponentProps component={" + string + "} /> */}";
  let finalString1 = "<ComponentProps component={"+string+"} />";
  if (fileContent.includes(finalString) || fileContent.includes(finalString1) ) {
    return "ComponentProps Exist";
  } else {
    fs.appendFile("logFile.txt", "ComponentProps Not Exist," + string + DOCS_FILE_EXT+ "\n", (err) => {
      if (err) {
        console.log(err);
      }
      return "Import Not Exist";
    });
  }
}

