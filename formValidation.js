(function(){
    function validate (name, email, phone, address) {
        return function verify() {
            if(name.length > 0) {// check length of name
                console.log("name is valid");
            } else {
                console.log("name is invalid");
                return false;
            }
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  {
                console.log("email is valid");
            } else {
                console.log("email is invalid");
                return false;
            }
            if(phone.match(/^\d{10}$/)) {//check 10 digit
                console.log("phone is valid");
            } else {
                console.log("phone is invalid");
                return false;
            }
            return true;
        } 
    }

    val1 = new validate("rajesh","adfaf","3413413411","");
    val1();
    val2 = new validate("rajesh","adfaf@a.com","34134134","");
    val2();
})()