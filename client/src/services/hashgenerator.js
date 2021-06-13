const CryptoJS = require('crypto-js')

//sha512(key|txnid|amount|productinfo|firstname|email|||||||||||SALT)

exports.hashingvalue = async function (req) {
    try {
        let message = `ays59b|${req.txnid}|${req.amount}|citrine-india|${req.name}|${req.email}|||||||||||x4Y4LOt4`;
        let hashedvalue = CryptoJS.SHA512(message).toString(CryptoJS.enc.Hex);
        console.log(hashedvalue);
        return hashedvalue;
    } catch (error) {
      return error;
    }
}