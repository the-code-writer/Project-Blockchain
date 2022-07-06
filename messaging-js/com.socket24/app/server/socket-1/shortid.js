
const shortid = {

    generate () {
        var strim = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        str_arr = str.split("");
        for(var i=0; i<8; i++){
            strim += str_arr[Math.round(Math.random()*100)]
            if(i==7) {
                console.log("ID:", str_arr, strim);
                return strim;
            }
        }
    }

}

module.exports = shortid;