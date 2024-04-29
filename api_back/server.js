
let express = require('express')
let app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const Vehicule = require('./services/vehicule')
const port = 8080


app
.use(cors({ origin: "*"}))
.use(express.urlencoded(true))
.use(bodyParser.urlencoded({extended: false}))
.use(bodyParser.json())


//routes for 
app.get('/api/chauffeur',(req,res)=>{
    let Chauffeur = require('./services/chauffeur')

    Chauffeur.getChauffeur((chauffeurs)=>{   
        res.send(chauffeurs)   
    })
    
})

app.post("/api/chauffeur/search",(req,res)=>{
    let sData = req.body.sData
    let Chauffeur = require('./services/chauffeur')
    Chauffeur.searchChauffeur(sData,(results)=>{
        res.send(results)
    })
})

app.get('/api/chauffeur/:cin',(req,res)=>{
    let cin = req.params.cin;
    let Chauffeur = require('./services/chauffeur')

    Chauffeur.getIndividualChauffeur(cin,(chauffeur)=>{   
        res.send(chauffeur)
    })
    
})

// app.post('/api/books/search',(req,res)=>{
//     let Employe = require('./services/chauffeur/employe')
//     let nom = req.body.nom

//     Employe.searchEmploye(nom,(results)=>{
//      res.send(results)
//     })
    
// })

app.post('/api/chauffeur/add',(req,res)=>{
    
    const data = req.body
    console.log(data)
    let Chauffeur = require('./services/chauffeur')
    
     Chauffeur.addChauffeur(data,(result)=>{
        res.send(result)
     })
    
})

app.put('/api/chauffeur/add',(req,res)=>{
    const data = req.body
    let Chauffeur = require('./services/chauffeur')
    console.log(data.id)
     Chauffeur.updateChauffeur(data,(result)=>{
        res.send('updated')
        console.log(result)
     })
     
})

app.delete('/api/chauffeur/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)
    let Chauffeur = require('./services/chauffeur')
    
     Chauffeur.deleteChauffeur(id,(result)=>{
        res.send('success')
        console.log(result)
     })
    
})



//routes for services
app.get('/api/services',(req,res)=>{
    let Services = require('./services/services')

    Services.getServices((services)=>{   
        res.send(services)
      
    })
    
})

app.get('/api/service/:id',(req,res)=>{
    let id = req.params.id
    let Services = require('./services/services')

    Services.getService(id,(services)=>{   
        res.send(services)
      
    })
    
})

app.post('/api/services/search',(req,res)=>{
    let Services = require('./services/services')
    let nom = req.body.nom

    Services.searchServices(nom,(results)=>{
     res.send(results)
    })
    
})

app.post('/api/services/add',(req,res)=>{
    const data = req.body
    let Services = require('./services/services')
    
     Services.addService(data,(result)=>{
        res.send('added')
       console.log(result)
     })
    
})

app.put('/api/services/add',(req,res)=>{
    const data = req.body
    let Services = require('./services/services')
    console.log(data.id)
     Services.updateService(data,(result)=>{
        res.send('updated')
        console.log(result)
     })
    
})

app.delete('/api/services/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)
    let Services = require('./services/services')
    
     Services.deleteService(id,(result)=>{
        res.send('success')
        console.log(result)
     })
    
})



//routes for vehicules
app.get('/api/vehicules',(req,res)=>{
    let Vehicule = require('./services/vehicule')

    Vehicule.getVehicules((allVehicules,statV)=>{
        res.send({allVehicules,statV}) 
    })
    
})

app.get('/api/vehicules/torepare',(req,res)=>{
    let Vehicule = require('./services/vehicule')

    Vehicule.getVehiculesToRepare((results)=>{
        res.send(results)
    })
})

app.post("/api/vehicules/search",(req,res)=>{
    let matricule = req.body.matricule
    let Vehicule = require('./services/vehicule')
    Vehicule.searchVehicules(matricule,(results)=>{
        res.send(results)
    })
})

app.get('/api/vehicule/:matricule',(req,res)=>{
    let matricule=req.params.matricule
    let Vehicule = require('./services/vehicule')

    Vehicule.getIndividualVehicule(matricule,(books)=>{   
        res.send(books) 
    })
    
})

app.post('/api/vehicules/add',(req,res)=>{
    let Vehicule = require('./services/vehicule')
    let data = req.body

    Vehicule.addVehicule(data,(results)=>{
     console.log(results)
     res.send(results)
    })
})

app.put('/api/vehicules/add',(req,res)=>{
    const data = req.body
    let Vehicule = require('./services/vehicule')
     Vehicule.updateVehicule(data,(result)=>{        
        res.send(result)  
     })
    
})

app.post('/api/vehicules/add/reparation',(req,res)=>{
    const data = req.body
    let Vehicule = require('./services/vehicule')
    Vehicule.addToRepare(data,(result)=>{
        console.log(result)
        res.send(result)
    })
})
app.get("/api/vehicules/reparation",(req,res)=>{
    let Vehicule = require('./services/vehicule')
    Vehicule.getReparation((result)=>{
        res.send(result)
    })
})



app.listen(port,()=>{
    console.log("Server runing on port : "+ port)
})