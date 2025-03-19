
const uploadSingleFile = async (fileObject) => {
    let uploadPath = __dirname + fileObject.name;


    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath)
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }
    } catch (err) {
        console.log(">>> check error: ", err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}


const uploadMultipleFiles = () => {

}

module.exports = {
    uploadSingleFile, uploadMultipleFiles
}