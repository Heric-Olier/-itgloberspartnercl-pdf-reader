import React, { useEffect, useState } from "react";

type Props = {
  pdfUrl: string,
  width: number,
  height: number
}

const PdfReader = ({ pdfUrl, width, height }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="flex flex-col items-center justify-center">
        <object
          data={pdfUrl}
          type="application/pdf"
          width={width}
          height={height}
        >
          <iframe title="PDF"
            src={pdfUrl}
            width={width}
            height={height}
            style={{ border: "none" }}
          >
            <p>This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a></p>
          </iframe>

        </object>
      </div>

    )
  )
}

export default PdfReader;
