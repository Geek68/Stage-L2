import MenuChauff from "./MenuChauff/MenuChauff"
import HeaderChauff from "./HeaderChauff/HeaderChauf"
import TableChauf from "./TableChauf/TableChauff"
import ChauffApVoit from "./ChauffApropos/ChauffApVoit"
import ChauffApEtat from "./ChauffApropos/ChauffApEtat"
import ChauffApService from "./ChauffApropos/ChauffApService"
import ChauffBoutton from "./ChauffeurButton/ChauffBtn"
import ModifChauff from "./PopUpModifChauff/PopupModifChauf"
import DeleteChauffPopUp from "./DeletePopUp/DeleteChauffPopUp"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import './Chauffeur.css'
const Chauffeur =()=>
{
    const [showModif,changeShowModif] = useState(false)
    const [showdelete,changeShowdelete] = useState(false)
    /// Affichage du popup modification
      const HandleShowModif=()=>
    {
        changeShowModif(true)
    }
    const HandleCloseModif = ()=>
    {
        changeShowModif(false)
    }
    const HandleShowDelete = ()=>
    {
        changeShowdelete(true)
    }
    const HandleCloseDelete = ()=>
    {
        changeShowdelete(false)
    }
    /// Affichage du popup modification
    return(<>
        <div className="ChauffeurBody">
            <MenuChauff/>
            <HeaderChauff/>
            <h1 className="ChauffeurTitle">A $avoir sur les chauffeurs</h1>
            <div className="ChauffeurContenu">
                 <div className="ChauffeurDiv1">
                     <TableChauf/>
                </div>
                <div className="ChauffDiv2">
                     <ChauffApVoit/>
                     <ChauffBoutton show={HandleShowModif} showdelete={HandleShowDelete}/>
                </div>
                <div className="ChauffeurDiv3">
                    <div>
                        <ChauffApService/>
                    </div>
                    <div>
                         <ChauffApEtat/>
                    </div>
                </div>
            </div>
          <AnimatePresence>
            {
                showdelete==true && (<DeleteChauffPopUp closedelete={HandleCloseDelete}/>) 
            }
          </AnimatePresence>
          <AnimatePresence>
            {
                
                showModif== true && (<ModifChauff close={HandleCloseModif}/>)

            }
          </AnimatePresence>
        </div>
       
    </>)
}
export default Chauffeur