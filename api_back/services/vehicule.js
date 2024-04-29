let connection = require('../config/db')


class Vehicule{

    static getVehicules(cb){ 
        let query = "SELECT * FROM vehicules"
        connection.query(query,(err,results)=>{
            if(err) throw(err)
            let query2="SELECT statut, COUNT(*) AS nbr_etat FROM vehicules GROUP BY statut "
            connection.query(query2,(err2,results2)=>{
            if(err2) throw(err2)
            cb(results,results2)
            })
            // cb(results)
        })
    }


    static getVehiculesToRepare(cb){ 
        let stat="A Reparer"
        let query = "SELECT * FROM vehicules WHERE statut=?"
        connection.query(query,[stat],(err,results)=>{
            if(err) throw(err)   
            cb(results)
        })
    }

    static searchVehicules(matr,cb){
        let query = `SELECT * FROM vehicules WHERE matricule LIKE '%${matr}%'`
        connection.query(query,(err,results)=>{
            if(err) throw err
            cb(results)
        })
    }

    static getIndividualVehicule(matricule,cb){
        let query = "SELECT v.matricule, v.marque, v.model, v.type, v.statut, v.carburant, c.nomchauffeur, c.numtel, c.adresse, s.nomservice,s.responsable FROM vehicules AS v JOIN services AS s ON v.idservice = s.idservice JOIN chauffeur AS c ON v.cinchauffeur = c.cin WHERE v.matricule = ?"
        connection.query(query,[matricule],(err,results)=>{
            if(err) throw(err)
            cb(results)
        })
    }

    static addVehicule(data,cb){
        let query1 = "SELECT * FROM vehicules WHERE matricule = ?"
        let etat ="Bon etat"
        if(data.Pmatr.trim()==="" || data.Marque.trim()==="" || data.Modele.trim()===""){
            cb({vide:"Matricule, Marque, Modele ne doivent pas être vide!!"})
        }else{
            connection.query(query1,[data.Pmatr],(err1,results1)=>{
                if(err1) throw(err1)
                if(results1[0]){
                    cb({existe:true})
                }else{
                   let query = "INSERT INTO vehicules SET matricule = ? , cinchauffeur = ?, idservice = ?, carburant = ?, statut = ?, type = ?, marque = ?, model = ?"
                   connection.query(query,[data.Pmatr,data.Chauffeur,data.Service,data.Carburant,etat,data.type,data.Marque,data.Modele],(err,results)=>{
                   if(err) cb(err)
                   cb(results)
                   })
                }
            })
        }
        
    }

    static updateVehicule(data,cb){
        let query1 = "SELECT * FROM vehicules WHERE matricule = ?"
        if(data.Pmatr.trim()==="" || data.Marque.trim()==="" || data.Modele.trim()===""){
            cb({vide:"Verifier les champs suivant car ils ne doivent pas être vide: Matricule, Marque, Modele!!"})
        }else{
            connection.query(query1,[data.Pmatr],(err1,results1)=>{
                
                if(err1) throw(err1)
                if(results1[0] && (results1[0].matricule!=data.matricule)){
                     cb({existe:true})
                }else{ 
                let query = "UPDATE vehicules SET matricule = ? , cinchauffeur = ?, idservice = ?, carburant = ?, statut = ?, type = ?, marque = ?, model = ? WHERE matricule = ?"
                connection.query(query,[data.Pmatr,data.Chauffeur,data.Service,data.Carburant,data.Etat,data.type,data.Marque,data.Modele,data.matricule],(err,result)=>{
                    if(err) throw err
                    cb(result)
                })

            }
        })
    }
       
    }

    static deleteVehicule(data,cb){

        let query = "DELETE from vehicules WHERE matricule = ?"
       connection.query(query,[id],(err,result)=>{
           if(err) cb(err)
           cb(result)
       })

       }

    static addToRepare(data,cb){
        let query = "SELECT * FROM reparation"

        if(data.niveau === "ME" && data.jirama==="MAHAJANGA"){
            let stat = "Bon Etat"
            let query3 = "UPDATE vehicules SET statut = ? WHERE matricule = ?"
            connection.query(query3,[stat,data.Pmatriculaire],(err,result)=>{
                if(err) cb(err)
                cb(result)
            })
        }
        connection.query(query,(err,results)=>{
          let id = "Repar01"
          let niveau=data.niveau!=undefined? data.niveau : "MA"
          console.log(niveau)
          if(err) throw err     
          if(results[0]){
            let max = parseInt(results[0].idrepar.slice(5));
            for(let i=0;i<results.length;i++){
                if(parseInt(results[i].idrepar.slice(5))>max){
                    id='Repar'+results[i].idrepar.slice(5)
                    max=parseInt(results[i].idrepar.slice(5))
                }
            }
            
            if((max+1)<10){
                id = 'Repar0'+(max+1) 
             }else{
                id = 'Repar'+(max+1) 
             }
           }
           let query1 = "INSERT INTO reparation SET idrepar = ?, plaque = ?, niveau = ?, centre = ?, dommage = ?, materiel = ?, demande = ?, facture = ?, prix = ?, date = ?"
        //    this.updateJiramaMahajanga(data.jirama,data.Pmatriculaire)
            if(data.jirama==="MAHAJANGA"){
                    let stat = "En reparation"
                    let query3 = "UPDATE vehicules SET statut = ? WHERE matricule = ?"
                    connection.query(query3,[stat,data.Pmatriculaire],(err,result)=>{
                        if(err) cb(err)
                        console.log(result)                    
                    })
                }
           connection.query(query1,[id,data.Pmatriculaire,niveau,data.jirama,data.Dommage,data.Materiel,data.NumDemande,data.NumFacture,data.Prix,data.date],(err1,results1)=>{
             if(err1) throw err1
             cb("Succeed")
           })        
        })    
    }

    static getReparation(cb){        
     let query = "SELECT v.plaque,v.niveau,v.centre,v.dommage,v.materiel,v.demande,v.facture,v.prix,v.date FROM reparation v JOIN ( SELECT plaque, MAX(date) AS datemax FROM reparation GROUP BY plaque) maxdate ON v.plaque = maxdate.plaque AND v.date=maxdate.datemax ORDER BY date DESC"
     connection.query(query,(err,results)=>{
        if(err) throw(err)   
        cb(results)
    })
}

}

module.exports = Vehicule