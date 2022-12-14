import React, { useCallback, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js;`;

// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
import { useRouter } from "next/router";
// import pdfmap from "../pdfmap1.json";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

// function highlightPattern(text, pattern) {
//   return text.replace(
//     pattern.find((e) => e == text),
//     (value) => `<mark>${value}</mark>`
//   );

//   const splitText = text.split(pattern);
//   if (splitText.length <= 1) {
//     return text;
//   }

//   const matches = text.match(pattern);

//   return splitText.reduce(
//     (arr, element, index) =>
//       matches[index]
//         ? [...arr, element, <mark>{matches[index]}</mark>]
//         : [...arr, element],
//     []
//   );
// }

function searchTextInSentence(textArray, sentence) {
  const str = textArray.join("-----");
  const str2 = sentence.split(" ").join("-----");
  console.log(textArray.filter((str) => str !== " "));
}
function replaceArray(find, replace) {
  var replaceString = this;
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i].str, "g");
    console.log(regex);
    replaceString = replaceString.replace(regex, replace[i]);
  }

  return replaceString;
}

function PdfView({ paragraphs }) {
  const [file, setFile] = useState("/pdfs/visifit.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [searchText, setSearchText] = useState("");

  // function onFileChange(event) {
  //   setFile(event.target.files[0]);
  // }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const router = useRouter();

  // useEffect(() => {
  //   const { page, para } = router.query;
  //   if (!para) {
  //     console.log(page);
  //     if (page) {
  //       setPageNumber(Number(page));
  //     }
  //   } else {
  //     setTimeout(() => {
  //       // searchTextInSentence(textArray, 'We perform')
  //     }, 1000);
  //     pdfmap.map((item) => {
  //       if (Number(item.id) == para) {
  //         setPageNumber(Number(item.page));
  //         console.log(item.paragraphs);
  //         setSearchText(item.paragraphs.split(" "));
  //       }
  //     });
  //   }
  // }, [router.query.page, router.query.para]);

  // useEffect(() => {
  //   if (paragraphs) {
  //     pdfmap.map((item) => {
  //       if (Number(item.id) == paragraphs.paragraphs[0]) {
  //         setPageNumber(Number(item.page));
  //         console.log(item.paragraphs);
  //         setSearchText(item.paragraphs.split(" "));
  //       }
  //     });
  //   } else {
  //     setPageNumber(1);
  //   }
  // }, [paragraphs]);

  const textRenderer = useCallback(
    (textItem) => {
      return highlightPattern(textItem.str, searchText);
    },
    [searchText]
  );

  const clicked = (index) => {
    pdfmap.map((item) => {
      if (Number(item.id) == paragraphs.paragraphs[index]) {
        setPageNumber(Number(item.page));
        setSearchText(item.paragraphs.split(" "));
      }
    });
  };

  return (
    <div className="pdfview">
      {/* <div className="pdfview__container">
        <div className="pdfview__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className=""
          >
            <Page
              className="w-full text-center"
              pageNumber={pageNumber}
              customTextRenderer={textRenderer}
            />
          </Document>
          <div className="flex flex-col text-white ml-12 text-sm">
            {(() => {
              if (paragraphs) {
                if (paragraphs.sections) {
                  let sections = paragraphs.sections.replace(/'/g, '"'); //replacing all ' with "
                  let scores = paragraphs.scores;
                  sections = JSON.parse(sections);

                  let buttons = [];
                  for (let i = 0; i < sections.length; i++) {
                    let para = "";
                    pdfmap.map((item) => {
                      if (Number(item.id) == paragraphs.paragraphs[i]) {
                        para = item.paragraphs.split(" ").slice(0, 7).join(" ");
                      }
                    });

                    buttons.push(
                      <div className="flex items-center mb-3">
                        <button
                          onClick={() => clicked(i)}
                          type="button"
                          className={`${
                            scores[i] < 0.7 ? "bg-yellow-500" : "bg-rose-800"
                          } text-white w-44 py-4 rounded-lg text-center font-bold mr-3`}
                        >
                          {sections[i]}
                        </button>
                        <span>{para}...</span>
                      </div>
                    );
                  }

                  return buttons;
                }
              }
            })()}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PdfView;
