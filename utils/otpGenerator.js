exports.generateOTP = () => {
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10); // generate a random digit between 0 and 9
    }
    return otp;
  };