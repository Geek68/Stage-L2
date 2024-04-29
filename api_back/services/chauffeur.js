let connection = require('../config/db')


class Chauffeur{

    static getChauffeur(cb){
        let query = "SELECT * FROM chauffeur"
        connection.query(query,(err,results)=>{
            if(err) throw(err)
            cb(results)
        })
    }

    static getIndividualChauffeur(cin,cb){
        let query = "SELECT v.matricule, v.marque, v.model, v.type, v.statut, v.carburant, s.nomservice, s.responsable FROM vehicules AS v JOIN chauffeur AS c ON v.cinchauffeur = c.cin JOIN services AS s ON v.idservice = s.idservice WHERE c.cin = ?"
        connection.query(query,[cin],(err,results)=>{
            if(err) throw(err)
            cb(results)
        })
    }

    static addChauffeur(data,cb){
        if(data.taille!=12){
            cb({less:"La CIN doit être de 12 chiffres!"})
        }else{
         let query = "INSERT INTO chauffeur SET cin = ? , nomchauffeur = ?, numtel = ?, adresse = ?"
        connection.query(query,[data.cin,data.NomChauff,data.Tel,data.Adresse],(err,results)=>{
            if(err) cb(err)
            cb(results)
        })   
        }
        
    }

    static searchChauffeur(sData,cb){
        let query = `SELECT * FROM chauffeur WHERE cin LIKE '%${sData}%' OR nomchauffeur LIKE '%${sData}%' OR adresse LIKE '%${sData}%'`
        connection.query(query,(err,results)=>{
            if(err) throw err
            cb(results)
        })
    }

    static updateChauffeur(data,cb){
        console.log(data)
       let query = "UPDATE chauffeur SET cin = ? , nomchauffeur = ?, numtel = ?, adresse = ? WHERE cin = ?"
       connection.query(query,[data.cin,data.NomChauff,data.Tel,data.Adresse,data.id],(err,result)=>{
           if(err) cb(err)
           cb(result)
       })
    }

    static deleteChauffeur(id,cb){
       let query = "DELETE from chauffeur WHERE cin = ?"
       connection.query(query,[id],(err,result)=>{
           if(err) cb(err)
           cb(result)
       })
    }
}

module.exports = Chauffeur