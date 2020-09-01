// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// import $ from 'jquery'


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import "bootstrap"
import "bootstrap/dist/css/bootstrap"

import '@fortawesome/fontawesome-free/css/all.css'

import $ from 'jquery'
window.$ = $

import 'select2'
import 'select2/dist/css/select2'

const Swal = require('sweetalert2')
window.Swal = Swal
import 'sweetalert2/dist/sweetalert2.css'

import 'tempusdominus-bootstrap-4'
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css'

       

import "./notice.js"
import "./notice.scss"
import "./currency.js"
import "./btnalert.js"
import "./taglist.js"
import "./datetime.js"


