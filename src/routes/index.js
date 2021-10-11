var express = require('express');
var router = express.Router();
const {body} = require('express-validator')
const { main,selec,saludo, destroy} = require('../controllers/mainController')

const validar =[
    body('name').notEmpty().withMessage('Este campo es requerido'),
    body('email')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .isEmail().withMessage('Este campo tiene que se un email valido'),
    body('edad').notEmpty().withMessage('Este campo es requerido'),
    body('colores').notEmpty().withMessage('Este campo es requerido')
    
]

/* GET home page. */
router.get('/', main);
router.post('/',validar,selec);
router.get('/usuario',saludo)
router.get('/destroy',destroy)


module.exports = router;
