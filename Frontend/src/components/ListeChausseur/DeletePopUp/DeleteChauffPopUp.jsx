import "./DeleteChauffPopUp.css"
import { motion } from "framer-motion"
import MyContext from "../MyContext"
import { useContext } from "react"
import axios from "axios"
const DeleteChauffPopUp = ({closedelete})=>
{
    const {donnee} = useContext(MyContext)
    const id = donnee.cin

    const Suppression= ()=>
    {
        axios.delete(`http://localhost:8080/api/chauffeur/${id}`)
        .then(()=>{
            alert('Suppression Reussie')
            closedelete()
            location.reload()
        })
        .catch(error=>{alert(error)})
    }
   return( <>
        <motion.div className="deleteChauffParent"
        initial={{x:'100rem'}}
        animate={{x:0}}
        exit={{x:'100rem'}}
        transition={{duration:1,type:'spring',stiffness:100}}>
           <div className="deleteChauffRAD">
            <h2 className="deleteChauffTitle">Le chauffeur: {donnee.nomchauffeur} va être supprimer<br />
            Êtes-vous sûr de votre décision ?</h2>
              <div className="deleteChauffParentBtn">
                    <button className="deleteChauffBoutton" onClick={Suppression}>
                        <i className="mdi mdi-checkbox-multiple-marked-circle-outline"/>
                        <span>OUI</span>
                    </button>
                    <button className="deleteChauffBoutton" onClick={closedelete}>
                        <i className="mdi mdi-close"/>
                        <span>NON</span>
                    </button>
                </div>
           </div>
        </motion.div>
    </>)
}
export default DeleteChauffPopUp