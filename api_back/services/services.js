let connection = require('../config/db')


class Services{

    static getServices(cb){
        let query = "SELECT * FROM services ORDER BY idservice ASC"
        connection.query(query,(err,results)=>{
            if(err) throw(err)
            cb(results)
        })
    }

    static getService(id,cb){
        let query = "SELECT v.matricule, v.marque, v.model, v.type, v.statut, v.carburant, c.nomchauffeur, c.numtel, c.adresse FROM vehicules AS v JOIN services AS s ON v.idservice = s.idservice JOIN chauffeur AS c ON v.cinchauffeur = c.cin WHERE s.idservice = ?"
        connection.query(query,[id],(err,results)=>{
            if(err) throw(err)
            cb(results)
        })
    }

    static searchServices(nom,cb){
        let query = `SELECT * FROM services WHERE nomservice LIKE '%${nom}%' OR responsable LIKE '%${nom}%'`
        connection.query(query,(err,results)=>{
            if(err) throw(err)
            cb(results)
        })
    }

    static addService(data,cb){
        let query1 = "SELECT * FROM services"
        let idServ = "S01";
        connection.query(query1,(err,results)=>{
            if(err) throw(err)
            let max = 0;
            let query = "INSERT INTO services SET idservice = ? , nomservice = ? , responsable = ?"
            if(results.length === 0 ){
              connection.query(query,[idServ,data.nom,data.responsable],(err,results2)=>{
                if(err) cb(err)
                cb(results2)
                })
            }else{
                for(const result of results){
                 console.log(result.idservice.slice(1))
                 if(parseInt(result.idservice.slice(1))>max){
                    max = parseInt(result.idservice.slice(1))
                 }
                }
                if((max+1)<10){
                   idServ = 'S0'+(max+1) 
                }else{
                   idServ = 'S'+(max+1)  
                }
                
                connection.query(query,[idServ,data.nom,data.responsable],(err,results2)=>{
                if(err) cb(err)
                cb(results2)
                })
            }        
        })     
    }


    static updateService(data,cb){
       let query = "UPDATE services SET nomservice = ? , responsable = ? WHERE idservice = ?"
       connection.query(query,[data.nom,data.responsable,data.idservice],(err,result)=>{
           if(err) cb(err)
           cb(result)
       })
    }

    static deleteService(id,cb){
       let query = "DELETE from services WHERE idservice = ?"
       connection.query(query,[id],(err,result)=>{
           if(err) cb(err)
           cb(result)
       })
    }
}

module.exports = Services