document.getElementById('customForm').addEventListener('submit', function(event) {
    let form = this;
    // clear all errors except the current field
    function clearOtherErrors(fields) {
      fields.forEach(f => {
        if (f && f.classList) {
          f.classList.remove('is-invalid');
        }
      });
      // Also clear expertise error and class
      var expertiseChecks = form.querySelectorAll('input[name="expertise"]');
      var expertiseError = document.getElementById('expertiseError');
      expertiseChecks.forEach(chk => chk.classList.remove('is-invalid'));
      if (expertiseError) {
        expertiseError.textContent = '';
        expertiseError.style.display = 'none';
      }
    }

    // Name validation
    let nameInput = form.yourName;
    let nameError = document.getElementById('nameError');
    let allFields = [form.email, form.password, form.repassword, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise];
    if (!nameInput.value.trim()) {
      nameInput.classList.add('is-invalid');
      nameError.textContent = 'Please enter your name ';
      clearOtherErrors(allFields);
      event.preventDefault();
      return;
    } else if (/\d/.test(nameInput.value)) {
      nameInput.classList.add('is-invalid');
      nameError.textContent = 'Name should not contain numbers';
      clearOtherErrors(allFields);
      event.preventDefault();
      return;
    } else if (/[!@#$%^&*().]/.test(nameInput.value)) {
      nameInput.classList.add('is-invalid');
      nameError.textContent = 'Name should not contain special characters';
      clearOtherErrors(allFields);
      event.preventDefault();
      return;
    } else if (nameInput.value.length < 3) {
      nameInput.classList.add('is-invalid');
      nameError.textContent = 'Name must be at least 3 characters long';
      clearOtherErrors(allFields);
      event.preventDefault();
      return;
    } else if (nameInput.value.charAt(0) !== nameInput.value.charAt(0).toUpperCase()) {
      nameInput.classList.add('is-invalid');
      nameError.textContent = 'Name must start with a capital letter';
      clearOtherErrors(allFields);
      event.preventDefault();
      return;
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
      nameError.textContent = '';
    }



      // Email validation
      let emailInput = form.email;
      let emailValue = emailInput.value.trim();
      let emailPattern = /^[^\s@]+@[a-zA-Z]+\.(com|in)$/;
      if (!emailPattern.test(emailValue)) {
        emailInput.classList.add('is-invalid');
        clearOtherErrors([nameInput, form.password, form.repassword, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
      }



      // Password validation
      let passwordInput = form.password;
      let repasswordInput = form.repassword;
      let passwordError = document.getElementById('passwordError');
      let repasswordError = document.getElementById('repasswordError');
      if (!passwordInput.value) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Please enter your password';
        clearOtherErrors([nameInput, emailInput, repasswordInput, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else if (passwordInput.value.length < 6) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must be at least 6 characters long';
        clearOtherErrors([nameInput, emailInput, repasswordInput, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else if (!/[A-Z]/.test(passwordInput.value)) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        clearOtherErrors([nameInput, emailInput, repasswordInput, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else if (!/[a-z]/.test(passwordInput.value)) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        clearOtherErrors([nameInput, emailInput, repasswordInput, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise  ]);
        event.preventDefault();
        return;
      } else if (!/[0-9]/.test(passwordInput.value)) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must contain at least one digit';
        clearOtherErrors([nameInput, emailInput, repasswordInput, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise  ]);
        event.preventDefault();
        return;
      } else if (!/[!@#$*]/.test(passwordInput.value)) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must contain at least one special character';
        clearOtherErrors([nameInput, emailInput, repasswordInput, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise  ]);
        event.preventDefault();
        return;
      } else {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
        passwordError.textContent = '';
      }
      if (!repasswordInput.value || repasswordInput.value !== passwordInput.value) {
        repasswordInput.classList.add('is-invalid');
        repasswordError.textContent = 'Passwords do not match';
        clearOtherErrors([nameInput, emailInput, form.passwordInput, form.gender, form.dob, form.mobile, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else {
        repasswordInput.classList.remove('is-invalid');
        repasswordInput.classList.add('is-valid');
        repasswordError.textContent = '';
      }



      // Gender validation
      let genderChecked = form.querySelector('input[name="gender"]:checked');
      let genderError = document.getElementById('genderError');
      if (!genderChecked) {
        genderError.style.display = 'block';
        clearOtherErrors([nameInput, emailInput, passwordInput, repasswordInput, form.dob, form.mobile, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else {
        genderError.style.display = 'none';
      }




      // DOB validation
      let dobInput = form.dob;
      let date = new Date(dobInput.value);
      let stdate = new Date("2007-01-01");
      let dobError = document.querySelector('#dob + .invalid-feedback');
      if (isNaN(date.getMonth()) || isNaN(date.getDate()) || isNaN(date.getFullYear())) {
        dobInput.classList.add('is-invalid');
        dobError.textContent = 'Please enter a valid date';
        clearOtherErrors([nameInput, emailInput, passwordInput, repasswordInput, form.gender, form.mobile, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else if (date > stdate) {
        dobInput.classList.add('is-invalid');
        dobError.textContent = 'You must be at least 18 years old';
        clearOtherErrors([nameInput, emailInput, passwordInput, repasswordInput, form.gender, form.mobile, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else {
        dobInput.classList.remove('is-invalid');
        dobInput.classList.add('is-valid');
        dobError.textContent = '';
      }



      // Mobile validation
      let mobileInput = form.mobile;
      let mobileError = document.querySelector('#mobile + .invalid-feedback');
      let mobilePattern = /^[0-9]{10}$/;
      let firstDigitPattern = /^[6-9]/;
      if (!mobileInput.value.match(mobilePattern)) {
        mobileInput.classList.add('is-invalid');
        mobileError.textContent = 'Please enter a valid 10 digit mobile number';
        clearOtherErrors([nameInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else if (mobileInput.value.length !== 10) {
        mobileInput.classList.add('is-invalid');
        mobileError.textContent = 'Mobile number must be 10 digits long';
        clearOtherErrors([nameInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else if (!firstDigitPattern.test(mobileInput.value)) {
        mobileInput.classList.add('is-invalid');
        mobileError.textContent = 'invalid input';
        clearOtherErrors([nameInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, form.address, form.city, form.country,form.expertise]);
        event.preventDefault();
        return;
      } else {
        mobileInput.classList.remove('is-invalid');
        mobileInput.classList.add('is-valid');
        mobileError.textContent = '';
      }




    // Address validation
    let addressInput = form.address;
    let addressError = document.getElementById('addressError');
    let addressRelated = [nameInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, mobileInput, form.city, form.country];
    if (!addressInput.value.trim()) {
      addressInput.classList.add('is-invalid');
      if (addressError) addressError.textContent = 'Please enter your address';
      clearOtherErrors(addressRelated);
      event.preventDefault();
      return;
    } else {
      addressInput.classList.remove('is-invalid');
      addressInput.classList.add('is-valid');
      if (addressError) addressError.textContent = '';
    }




    // Country validation
    let countryInput = form.country;
    let countryError = document.getElementById('countryError');
    let countryRelated = [nameInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, mobileInput, addressInput, form.city];
    if (!countryInput.value.trim()) {
      countryInput.classList.add('is-invalid');
      if (countryError) countryError.textContent = 'Please select your country';
      clearOtherErrors(countryRelated);
      event.preventDefault();
      return;
    } else {
      countryInput.classList.remove('is-invalid');
      countryInput.classList.add('is-valid');
      if (countryError) countryError.textContent = '';
    }




    // City validation
    let cityInput = form.city;
    let cityError = document.getElementById('cityError');
    let cityRelated = [nameInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, mobileInput, addressInput, countryInput];
    if (!cityInput.value.trim()) {
      cityInput.classList.add('is-invalid');
      if (cityError) cityError.textContent = 'Please select your city';
      clearOtherErrors(cityRelated);
      event.preventDefault();
      return;
    } else {
      cityInput.classList.remove('is-invalid');
      cityInput.classList.add('is-valid');
      if (cityError) cityError.textContent = '';
    }


    // Expertise validation 
    let expertiseChecks = form.querySelectorAll('input[name="expertise"]');
    let expertiseError = document.getElementById('expertiseError');
    let expertiseRelated = [nameInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, mobileInput, addressInput, countryInput, cityInput];
    let anyExpertiseChecked = false;
    expertiseChecks.forEach(chk => {
      if (chk.checked) anyExpertiseChecked = true;
    });
    if (!anyExpertiseChecked) {
      expertiseChecks.forEach(chk => chk.classList.add('is-invalid'));
      if (expertiseError) {
        expertiseError.textContent = 'Please enter your area of expertise';
        expertiseError.style.display = 'block';
      }
      event.preventDefault();
      return;
    } else {
      expertiseChecks.forEach(chk => {
        chk.classList.remove('is-invalid');
        chk.classList.add('is-valid');
      });
      if (expertiseError) {
        expertiseError.textContent = '';
        expertiseError.style.display = 'none';
      }
    }



    // Final check
    form.classList.add('was-validated');
    if (form.querySelector('.is-invalid')) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
});