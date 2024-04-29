import './PopUpModif.css'
import { useState,useContext,useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import MyContext from '../ListeChausseur/MyContext'
import {ToastContainer,toast} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ModifVehicule = ({closeModifVoit})=>
{
    /// Recuperer les données 

    const {donnee} = useContext(MyContext)
    const [Pmatr,changePmatr] = useState(donnee.matricule)
    const [Marque,changeMarque] = useState(donnee.marque)
    const [Modele,changeModèle] = useState(donnee.model)
    const [Chauffeur,changeChauffeur] = useState()
    const [Carburant,changeCaburant] = useState(donnee.carburant)
    const [Etat,changeEtat] = useState(donnee.statut)
   const [idservice,changeIdService] = useState([])
    const [idChauffeur,changeIdChauffeur] = useState([])
    const [Service,changeService] = useState()
    /// Recuperation des id Chauffeur et Services
        useEffect(()=>{
             axios.get('http://localhost:8080/api/services')
             .then(res=>{
                changeIdService(res.data)
                changeService(donnee.idservice)
             })
            axios.get('http://localhost:8080/api/chauffeur')
            .then(res=>{
                changeIdChauffeur(res.data)
                changeChauffeur(donnee.cinchauffeur)
            })
        },[])
    const [type,changeType] = useState(donnee.type)
    const  matricule = donnee.matricule
   
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
    const handleEtat=(e)=>
    {
        changeEtat(e.target.value)
    }
    const handleService=(e)=>
    {
        changeService(e.target.value)
    }
       
    // console.log(donnee)
    /// Envoie des données
     const Initialisation  = ()=>
    {
        changePmatr('')
        changeMarque('')
        changeChauffeur('')
        changeCaburant('')
        changeEtat('')
        changeService('')
        changeType('4Roue')
    }
    const Envoie = (e)=>
    {
        e.preventDefault()
         console.log(Etat)
        axios.put('http://localhost:8080/api/vehicules/add',{Pmatr,Marque,Modele,Chauffeur,Carburant,Etat,Service,type,matricule})
        .then((res)=>{
        
            if(res.data.existe)
            {toast.error("Une autre voiture a déjà cette plaque matriculaire")}
            else if(res.data.vide){toast.error(res.data.vide)}
            else{toast.success("Les données sont bien modifiées"),closeModifVoit(),location.reload()}
        })
        .catch(error=>{alert(error)}) 
        Initialisation()
    }

   
     /// Envoie des données
    return(<>
    <motion.div  className="ModifVehiculeRAD"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}} 
    transition={{duration:2}}
   >
        <form 
        className="ModifVehiculeParent">
           <div className="FormVehiculeTitle">
                <h1>Modification du véhicule</h1> 
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
               <select value={Carburant} onChange={handleCaburant} className="formParentInput">
                    <option value="GASOIL">GASOIL</option>
                    <option value="ESSENCE">ESSENCE</option>
                </select>
            </div>
           <div className="FormVehiculeContenu">
               <select value={Etat} onChange={handleEtat} className="formParentInput">
                    <option value="Bon Etat">Bon Etat</option>
                    <option value="A Reparer">A Reparer</option>
                    <option value="Epave">Epave</option>
                </select>
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
            <div className="FormVoitureModifBtn">
                    <button className="FormVoitureModifBoutton"  onClick={Envoie}>
                        <i className="mdi mdi-checkbox-multiple-marked-circle-outline"/>
                        <span>OUI</span>
                    </button>
                    <button className="FormVoitureModifBoutton" onClick={closeModifVoit}>
                        <i className="mdi mdi-close"/>
                        <span>NON</span>
                    </button>
                </div>
        </form>
       <ToastContainer/>
    </motion.div>
    </>)
}
export default ModifVehicule