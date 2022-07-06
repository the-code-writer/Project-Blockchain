var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const dayjs = require(“dayjs”);
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');