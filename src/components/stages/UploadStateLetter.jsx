import React from "react";

const UploadStateLetter = () => {
  return (
    <>
      <div class="container mt-4">
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label for="input1" class="form-label">
                Title
              </label>
              <input type="text" class="form-control" id="input1" />
            </div>
            <div class="mb-3">
              <label for="document">Document</label>
              <select class="form-control" id="document">
                <option value="1">Language</option>
                <option value="2">French</option>
                <option value="3">English</option>
                <option value="4">Espanol</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="input3" class="form-label">
                Edition
              </label>
              <input type="text" class="form-control" id="input3" />
            </div>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <label for="document">Document</label>
              <select class="form-control" id="document">
                <option value="1">version 178[178]</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="input5" class="form-label">
                State letter Date
              </label>
              <input type="date" class="form-control" id="input5" />
            </div>
          </div>
          <div class="mb-3 col-md-4">
            <label for="input6" class="form-label">
              Upload file
            </label>
            <input type="file" class="form-control" id="input6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadStateLetter;
