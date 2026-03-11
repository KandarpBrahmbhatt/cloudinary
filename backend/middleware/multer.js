import multer from 'multer'

// aane storage banayu kahe 6e


let storage = multer.diskStorage({
    // destination file ne kya store karvanu 6e aena mate and cb=> callback function
    destination: (req, file, cb) => {
        cb(null, "./public")  // callback ma 2 vastu aavae 1 null,2 => jema image store karvanu ae destination lakhavanu 6e.
    },

    // file ne kaya name thi store karvanu 6e ae lakhiyu 6e.
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

// multer ek storege banavase and file ne disk storage ma store karai dese. 

const upload = multer({ storage })

export default upload