import './DeleteServicePoup.css'
import { motion } from "framer-motion"
import MyContext from '../../ListeChausseur/MyContext'
import { useContext } from 'react'
import axios from 'axios'
const DeleteServicePopUp = ({closeSupp})=>
{
    const {donnee} = useContext(MyContext)
    const nom = donnee.nomservice
    const id =  donnee.idservice
    const Suppression= ()=>
    {
        axios.delete(`http://localhost:8080/api/services/${id}`)
        .then(()=>{
            alert('Suppression Reussie')
            location.reload()
        })
        .catch(error=>{alert(error)})
    }
   return( <>
        <motion.div className="deleteServiceParent"
        initial={{x:'100rem'}}
        animate={{x:0}}
        exit={{x:'100rem'}}
        transition={{duration:1,type:'spring',stiffness:100}}>
           <div className="deleteServiceRAD">
            <h2 className="deleteServiceTitle">Ce Service {nom} va être supprimer<br />
            Êtes-vous sûr de votre décision ?</h2>
              <div className="deleteServiceParentBtn">
                    <button className="deleteServiceBoutton" onClick={Suppression}>
                        <i className="mdi mdi-checkbox-multiple-marked-circle-outline"/>
                        <span>OUI</span>
                    </button>
                    <button className="deleteServiceBoutton" onClick={closeSupp}>
                        <i className="mdi mdi-close"/>
                        <span>NON</span>
                    </button>
                </div>
           </div>
        </motion.div>
    </>)
}
export default DeleteServicePopUp