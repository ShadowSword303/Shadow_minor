import React from 'react'
import './upload.css'
import Cert from './cert';
import $ from "jquery";



<helmet>

  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" ></link>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" ></link>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

</helmet>
const Upload = () => {
  // function readURL(input) {
  //   if (input.files && input.files[0]) {

  //     var reader = new FileReader();

  //     reader.onload = function (e) {
  //       $('.image-upload-wrap').hide();

  //       $('.file-upload-image').attr('src', e.target.result);
  //       $('.file-upload-content').show();

  //       $('.image-title').html(input.files[0].name);
  //     };

  //     reader.readAsDataURL(input.files[0]);

  //   } else {
  //     removeUpload();
  //   }
  // }

  // function removeUpload() {
  //   $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  //   $('.file-upload-content').hide();
  //   $('.image-upload-wrap').show();
  // }
  // $('.image-upload-wrap').bind('dragover', function () {
  //   $('.image-upload-wrap').addClass('image-dropping');
  // });
  // $('.image-upload-wrap').bind('dragleave', function () {
  //   $('.image-upload-wrap').removeClass('image-dropping');
  // });

  return (

    <div class="signup-form">
      <form >
        <h2>Upload</h2>
        <p class="hint-text">Please fill the details of the certificate.</p>
        <div class="form-group">
          <input type="Cid" class="form-control" name="Cid" placeholder="Certificate Id" required="required" />
        </div>
        <div class="form-group">
          <input type="CName" class="form-control" name="Cname" placeholder="Certificate Name" required="required" />
        </div>

        <div class="form-group" >
          <select class="form-control selection"   >
            <option selected>Please select the type of certificate's course</option>
            <option value="1">MOOC</option>
            <option value="2">Swayam</option>
            <option value="3">Coursera</option>
          </select>
        </div>

        <div class="file-upload">
          <button class="file-upload-btn" type="button" onClick={$('.file-upload-input').trigger('click')}>Add Image</button>

          <div class="image-upload-wrap">
            <input class="file-upload-input" type='file'  accept="image/*" />
            <div class="drag-text">
              <h3>Drag and drop a file or select add Image</h3>
            </div>
          </div>
          <div class="file-upload-content">
            <img class="file-upload-image" src="#" alt="your image" />
            <div class="image-title-wrap">
              <button type="button"  class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-check-label">
            <input type="checkbox" required="required" /> I have checked all the details.
          </label>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block">Upload Certificate</button>
        </div>
      </form>

    </div>

  );
};
export default Upload;