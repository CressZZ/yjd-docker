const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next)=>{
    res.send('wlecome')

})

app.listen(port, () => {
    console.log(`Server is running as ${port}`)
})
