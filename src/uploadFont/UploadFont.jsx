import React, { useState } from "react";
import { FaBeer, FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";
// import "./css/font.css";

const UploadFont = () => {
    const [uploadedFonts, setUploadedFonts] = useState([]); 

    // Function to handle file selection
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file && file.name.endsWith(".ttf")) {
        // Handle the selected TTF file here
        setUploadedFonts([...uploadedFonts, file]); // Add the uploaded font to the state
      } else {
        console.error("Invalid file format. Please select a TTF file.");
      }
    };
  
    // Function to handle drag and drop
    const handleDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (file && file.name.endsWith(".ttf")) {
        // Handle the dropped TTF file here
        setUploadedFonts([...uploadedFonts, file]); // Add the dropped font to the state
      } else {
        console.error("Invalid file format. Please drop a TTF file.");
      }
    };
  
    // Prevent default behavior for drag and drop
    const preventDefault = (event) => {
      event.preventDefault();
    };

    return (
        <div>
            <div className=" my-20 mx-60 flex flex-col  justify-center">
      <h1 className="text-3xl mb-4">Upload Here</h1>
      <div
        className="border-dashed border-2 border-gray-300 rounded-lg px-60 py-20 text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={preventDefault}
      >
        <label htmlFor="fontUploader" className="cursor-pointer">
          <p className="text-gray-400"> <FaCloudUploadAlt className="text-4xl text-center" /> <br /> <span className="font-bold">Click to upload</span> or drag and drop <br /> <span>Only TTF File Allowed</span></p> 
          <input
            type="file"
            accept=".ttf"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="fontUploader"
          />
        </label>
      </div>

      {/* Display uploaded fonts with previews in a table */}
      <table className="mt-4">
        <thead>
          <tr>
            <th>Font Preview</th>
            <th>Font Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {uploadedFonts.map((font, index) => (
            <tr key={index}>
              <td>
                {/* Add a div to display font preview */}
                <div
                  className="font-preview"
                  style={{
                    fontFamily: "CustomFont",
                    fontSize: "24px", // You can adjust the font size as needed
                  }}
                >
                  Font Preview
                </div>
              </td>
              <td>{font.name}</td>
              <td>
                {/* Add actions for each font, e.g., delete */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    const updatedFonts = [...uploadedFonts];
                    updatedFonts.splice(index, 1);
                    setUploadedFonts(updatedFonts);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default UploadFont;