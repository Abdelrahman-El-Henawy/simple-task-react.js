import React, { Component } from 'react'
export default class Contact extends Component {
  componentDidMount(){

  let nameInput = document.getElementById("nameInput");
  let NameLabel = document.getElementById("NameLabel");

function checkForName(){
        var regex = /[a-z]{1,}/;
        if (regex.test(nameInput.value) === true) {
          NameLabel.style.opacity = "1";
          NameLabel.style.bottom = "40px";
          NameLabel.style.transition = "0.5s all ease-in-out";
        } else if (nameInput.value === "") {
          NameLabel.style.opacity = "0";
          NameLabel.style.bottom = "16px";
          NameLabel.style.transition = "0.5s all ease-in-out";
        } else {
          NameLabel.style.opacity = "0";
          NameLabel.style.bottom = "16px";
          NameLabel.style.transition = "0.5s all ease-in-out";
        };
      };
      nameInput.addEventListener("keyup", function () {
        checkForName()
      });

      let emailInput = document.getElementById("emailInput");
      let emailLabel = document.getElementById("emailLabel");

function checkForEmail() {
          var regex = /[a-z]{1,}/;
      if (regex.test(emailInput.value) === true) {
          emailLabel.style.opacity = "1";
          emailLabel.style.bottom = "40px";
          emailLabel.style.transition = "0.5s all ease-in-out";
          return true;
        } else if (emailInput.value === "") {
          emailLabel.style.opacity = "0";
          emailLabel.style.bottom = "16px";
          emailLabel.style.transition = "0.5s all ease-in-out";
        } else {
          emailLabel.style.opacity = "0";
          emailLabel.style.bottom = "16px";
          emailLabel.style.transition = "0.5s all ease-in-out";
      }
      }

      emailInput.addEventListener("keyup", function () {
        checkForEmail()
      });

      let ageInput = document.getElementById("ageInput")
      let ageLabel = document.getElementById("ageLabel")

      function checkForAge() {
    if (ageInput.value > 1) {
        ageLabel.style.opacity = "1";
        ageLabel.style.bottom = "40px";
        ageLabel.style.transition = "0.5s all ease-in-out";
        return true;
      } else if (emailInput.value === "") {
        ageLabel.style.opacity = "0";
        ageLabel.style.bottom = "16px";
        ageLabel.style.transition = "0.5s all ease-in-out";
      } else {
        ageLabel.style.opacity = "0";
        ageLabel.style.bottom = "16px";
        ageLabel.style.transition = "0.5s all ease-in-out";

    }
    }
    ageInput.addEventListener("keyup", function () {
      checkForAge()
    });

    let passwordInput = document.getElementById("passwordInput")
    let passwordLabel = document.getElementById("passwordLabel")

    function checkForPassword() {
      if (passwordInput.value > 1) {
          passwordLabel.style.opacity = "1";
          passwordLabel.style.bottom = "40px";
          passwordLabel.style.transition = "0.5s all ease-in-out";
          return true;
        } else if (emailInput.value === "") {
          passwordLabel.style.opacity = "0";
          passwordLabel.style.bottom = "16px";
          passwordLabel.style.transition = "0.5s all ease-in-out";
        } else {
          passwordLabel.style.opacity = "0";
          passwordLabel.style.bottom = "16px";
          passwordLabel.style.transition = "0.5s all ease-in-out";
  
      }
      }
      passwordInput.addEventListener("keyup", function () {
        checkForPassword()
      });
}

  render() {
    return <>
    <div className="container contact">
      <div className="row">
        <div className='text position-relative'>
            <p className='textHome1 text-center text-uppercase pt-4'>CONATCT SECTION</p>
            <span className='textHome2 text-center w-100 d-inline-block'> <i className='fa-solid fa-star'></i> </span>
        </div>
      </div>

      <div className="row row2 my-3">
        <div className="col-md-6 m-auto">
          <div className="innerDiv py-3">
            <div className="position-relative my-4 p-2">
              <label className='ms-2 position-absolute' id="NameLabel">userName</label>
              <input type="text" name="userName" className=" input d-inline-block w-100 p-2" placeholder='userName' id="nameInput" />
            </div>
            <div className="p-2 position-relative my-4">
              <label className='ms-2 position-absolute' id="ageLabel">userAge</label>
              <input type="text" name="userAge" className="input d-inline-block w-100 p-2" placeholder='userAge' id="ageInput" />
            </div>
            <div className="p-2 position-relative my-4">
              <label className='ms-2 position-absolute' id="emailLabel">userEmail</label>
              <input type="text" name="emailInput" className=" input d-inline-block w-100 p-2" placeholder='userEmail' id="emailInput" />
            </div>
            <div className="p-2 position-relative my-4">
              <label className='ms-2 position-absolute' id="passwordLabel">userPassword</label>
              <input type="password" name="userPassword" className="input d-inline-block w-100 p-2" placeholder='userPassword' id="passwordInput" />
            </div>
            <div className='p-3'>
              <button className='btn'>send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  }
}