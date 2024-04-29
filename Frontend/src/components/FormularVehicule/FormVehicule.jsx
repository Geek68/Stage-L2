import './FormVehicule.css'
import { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {ToastContainer,toast} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const FormVehicule = ()=>
{
    /// Recuperer les données 
    const [Pmatr,changePmatr] = useState('')
    const [Marque,changeMarque] = useState('')
    const [Modele,changeModèle] = useState('')
    const [Chauffeur,changeChauffeur] = useState()
    const [Carburant,changeCaburant] = useState('GASOIL')
    const [type,changeType] = useState('4Roues')
    const [idservice,changeIdService] = useState([])
    const [idChauffeur,changeIdChauffeur] = useState([])
    const [Service,changeService] = useState()

    /// Recuperation des id Chauffeur et Services
        useEffect(()=>{
             axios.get('http://localhost:8080/api/services')
             .then(res=>{
                changeIdService(res.data)
                changeService(res.data[0].idservice)
             })
            axios.get('http://localhost:8080/api/chauffeur')
            .then(res=>{
                changeIdChauffeur(res.data)
                changeChauffeur(res.data[0].cin)
            })
        },[])
        console.log(Chauffeur)
    /// Recuperation des id Chauffeur et Services
    const handleType = (e)=>
    {
        changeType(e.target.value)
    }
    const handlePmatr = (e)=>
    {
        changePmatr(e.target.value)
    }
    const handleMarque=(e)=>
    {
        changeMarque(e.target.value)
    }
    const handleModèle=(e)=>
    {
        changeModèle(e.target.value)
    }
    const handleChauffeur=(e)=>
    {
        changeChauffeur(e.target.value)
    }
    const handleCaburant=(e)=>
    {
        changeCaburant(e.target.value)
    }
    const handleService=(e)=>
    {
       changeService(e.target.value)
    }
    /// Envoie des données
     const Initialisation  = ()=>
    {
        changePmatr('')
        changeMarque('')
        changeChauffeur('')
        changeCaburant('GASOIL')
        changeService('')
        changeType('4Roue')
        changeModèle('')
    }
    const Envoie = (e)=>
    {
        e.preventDefault()
        axios.post('http://localhost:8080/api/vehicules/add',{Pmatr,Marque,Modele,Chauffeur,Carburant,Service,type})
        .then((res)=>{
            if(res.data.existe)
            {toast.error("Plaque Matriculaire déjà existée")}
            else if(res.data.vide){toast.error(res.data.vide)}
            else{toast.success("Ajout réussi avec succes")}
        })
        .catch(error=>{alert(error)}) 
        Initialisation()
    }
     /// Envoie des données

    
    return(<>
    <motion.div  className="FormVehiculeRAD"
    initial={{opacity:0}}
    animate={{opacity:1}} 
    transition={{duration:3.5}}
   >
        <motion.form 
        initial ={{x:'70rem'}}
        animate={{ x:0}}
        transition={{delay:0.5,duration:1.5}}
        className="FormVehiculeParent">
            <div className="FormVehiculeTitle">
                <h1>Ajout du véhicule</h1> 
               <div className="FormVehiculeIcon">
                <i className="mdi mdi-plus-circle-multiple-outline"/>
                <i className="mdi mdi-plus-circle-multiple-outline"/>
                <i className="mdi mdi-plus-circle-multiple-outline"/>
                <i className="mdi mdi-plus-circle-multiple-outline"/>
               </div>
            </div>
            <div className="FormVehiculeContenu">
                <i className="mdi mdi-tag-text-outline"/>
                <input type="text" value={Pmatr} onChange={handlePmatr} placeholder="P.Matriculaire" className="formParentInput"/>
            </div>
            <div className="FormVehiculeContenu">
                <i className="mdi mdi-bookmark"/>
                <input type="text" value={Marque} onChange={handleMarque} placeholder="Marque" className="formParentInput"/>
            </div>
            <div className="FormVehiculeContenu">
                <i className="mdi mdi-bookmark"/>
                <input type="text"value={Modele} onChange={handleModèle} placeholder="Modèle" className="formParentInput"/>
            </div>
            <div className="FormVehiculeContenu">
               <select value={Chauffeur} onChange={handleChauffeur} className="formParentInput">
                    {
                        idChauffeur.map((ligne,index)=>
                        <option key={index} value={ligne.cin}>{ligne.cin} ({ligne.nomchauffeur})</option>)
                    }
               </select>
            </div>
             <div className="FormVehiculeContenu">
               <select value={Carburant} onChange={handleCaburant} className="formParentInput">
                    <option value="GASOIL">GASOIL</option>
                    <option value="ESSENCE">ESSENCE</option>
                </select>
            </div>
            <div className="FormVehiculeContenu">
                {/* <i className="mdi mdi-format-size"/> */}
                <select value={type} onChange={handleType} className="formParentInput">
                    <option value="4Roues">4_Roues</option>
                    <option value="2Roues">2_Roues</option>
                </select>
            </div>
            <div className="FormVehiculeContenu">
               <select value={Service} onChange={handleService}  className="formParentInput">
                        {
                            idservice.map((ligne,index)=>
                            <option key={index} value={ligne.idservice}>{ligne.idservice} ({ligne.nomservice})</option>
                            )
                        }
               </select>
            </div>  
            <div className="FormVehiculeBtn">
                <input type="submit" value="AJOUT" className="FormVehiculeAjout" onClick={Envoie}/>
                <Link to="/voiture"><input type="submit" value="ANNULER" className="FormVehiculeAnnuler"/></Link>
            </div>
        </motion.form>
        <ToastContainer/>
    </motion.div>
    </>)
}
export default FormVehicule