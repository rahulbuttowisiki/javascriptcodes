function addDetails() {
    
    if (validateFirstName()) {
        if (validateFullName()) {
            postData();
        }
        else {
            
                alert("Please enter last name");
        }
    } else {
        
        alert("Please enter first name");
    }

}


function validateFirstName() {
    const firstName = $('#firstname').val();
    if (firstName === '') {
        return false;
    }
    return true;
}

function validateFullName() {
    const lastName = $('#lastname').val();
    if (lastName === '') {
        return false;
    }
    return true;
}

function postData() {
    const data = {
        firstName: $('#firstname').val(),
        lastName: $('#lastname').val(),
        Email: $('#email').val(),
        Password: $('#password').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://registration-229ba.firebaseio.com/details.json',
        data: JSON.stringify(data),
        success: onPostSuccess
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

