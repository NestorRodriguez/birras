const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "birras",
    port: 3306,
    multipleStatements: true,
});

db.connect(function(error) {
    if (error)
        console.log(error);
    else
        console.log(`Base de datos conectada!`);
});


app.get('/', function(req, res) {
    console.log('Página de Inicio ');
    res.send("Bienvenidos al servidor <strong> Birras </strong>");
});



//      INICIO   RESERVAS
app.get('/birras/reserva', (req, res) => {
    console.log('Consultar datos de reserva');
    var query = db.query('select * from reserva', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})

app.get('/birras/reserva/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM reserva WHERE id_reserva='${id}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                const [data] = result;
                res.json(data)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})

app.post('/birras/reserva', (req, res) => {
    const dato = {
        id_bares:req.body.id_bares,
        personas:req.body.personas,
        motivo:req.body.motivo,
        ingreso:req.body.ingreso,
        salida:req.body.salida,
        dedicatoria:req.body.dedicatoria,
        festejado:req.body.festejado,
    };
        const sql = `INSERT INTO reserva set id_bares='${dato.id_bares}',
        personas='${dato.personas}',
        motivo='${dato.motivo}',
        ingreso='${dato.ingreso}',
        salida='${dato.salida}',
        dedicatoria='${dato.dedicatoria}',
        festejado='${dato.festejado}'`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

app.put('/birras/reserva:id', (req, res) => {
    const id = req.params.id;

    const dato = {
        id_bares:req.body.id_bares,
        personas:req.body.personas,
        motivo:req.body.motivo,
        ingreso:req.body.ingreso,
        salida:req.body.salida,
        dedicatoria:req.body.dedicatoria,
        festejado:req.body.festejado,
    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE reserva SET ${sets.join(', ')} WHERE id_reserva='${id}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

app.delete('/birras/reserva/:id', (req, res) => {
const id = req.params.id;
const sql = `DELETE FROM reserva WHERE id_reserva = '${id}';`;
const query = db.query(sql, (error, result) => {
    try {
        if (error) {
            throw error;
        } else {
            res.json(result)
        }
    } catch (error) {
        res.json({ error: error.message })
    }

});

})
//      FIN  RESERVAS

                        ///////

//      INICIO   DECORADO
app.get('/birras/decorado', (req, res) => {
    console.log('Consultar datos de decorado');
    var query = db.query('select * from decorado', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})

app.get('/birras/decorado/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM decorado WHERE id_decorado='${id}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                const [data] = result;
                res.json(data)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})

app.post('/birras/decorado', (req, res) => {
    const dato = {
        id_decorado:req.body.id_decorado,
        decorado:req.body.decorado,
        motivo:req.body.id_motivo,
        precio:req.body.precio,
    };
        const sql = `INSERT INTO decorado set id_decorado='${dato.id_decorado}',
        decorado='${dato.decorado}',
        motivo='${dato.motivo}',
        precio='${dato.precio}'`;

    db.query(sql, (error, result) => {  
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

app.put('/birras/decorado:id', (req, res) => {
    const id = req.params.id;

    const dato = {
        decorado:req.body.decorado,
        motivo:req.body.id_motivo,
        precio:req.body.precio,
    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE decorado SET ${sets.join(', ')} WHERE id_decorado='${id}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

app.delete('/birras/decorado/:id', (req, res) => {
const id = req.params.id;
const sql = `DELETE FROM decorado WHERE id_decorado = '${id}';`;
const query = db.query(sql, (error, result) => {
    try {
        if (error) {
            throw error;
        } else {
            res.json(result)
        }
    } catch (error) {
        res.json({ error: error.message })
    }

});

})
//      FIN  DECORADO
                        ///////

//      INICIO   ADICIONALES
app.get('/birras/adicionales', (req, res) => {
    console.log('Consultar datos de adicionales');
    var query = db.query('select * from adicionales', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})

app.get('/birras/adicionales/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM adicionales WHERE id_adicionales='${id}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                const [data] = result;
                res.json(data)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})

app.post('/birras/adicionales', (req, res) => {
    const dato = {
        adicionales:req.body.decorado,
        motivo:req.body.motivo,
        masas:req.body.masas,
        rellenos:req.body.rellenos,
        cobertura:req.body.cobertura,
        porciones:req.body.porciones,
    };
        const sql = `INSERT INTO adicionales set id_adicionales='${dato.id_adicionales}',
        adicionales='${dato.adicionales}',
        motivo='${dato.motivo}',
        masas='${dato.masas}',
        rellenos='${dato.rellenos}',
        cobertura='${dato.cobertura}',
        porciones='${dato.porciones}'`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

app.put('/birras/adicionales:id', (req, res) => {
    const id = req.params.id;

    const dato = {
        adicionales:req.body.decorado,
        motivo:req.body.motivo,
        masas:req.body.masas,
        rellenos:req.body.rellenos,
        cobertura:req.body.cobertura,
        porciones:req.body.porciones,
    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE adicionales SET ${sets.join(', ')} WHERE id_adicionales='${id}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

app.delete('/birras/adicionales/:id', (req, res) => {
const id = req.params.id;
const sql = `DELETE FROM adicionales WHERE id_adicionales = '${id}';`;
const query = db.query(sql, (error, result) => {
    try {
        if (error) {
            throw error;
        } else {
            res.json(result)
        }
    } catch (error) {
        res.json({ error: error.message })
    }

});

});
//      FIN  ADICIONALES
                        ///////

 app.listen(PORT, function(){
     console.log(`Server running at port ${PORT}`);
 });                       