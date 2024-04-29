import Menu from "../Menu/Menu"
import Header from "../HeaderVoiture/header"
import Stats from "../Statistique/stats"
import ApVoit from "../Apropos/ApVoit"
import './voiture.css'
import Boutton from "../Boutton/boutton"
import TableVoit from "../Table/tableVoit"
import ApChauffeur from "../Apropos/ApChauffeur"
import ApEtat from "../Apropos/ApEtat"
import ApService from "../Apropos/ApService"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import ModifVehicule from "../PopUp/PopUpModif"
import OriginePopUp from "../Reparation/PopUpOrigne/OriginPopUp"
// import { motion } from "framer-motion"
const Voiture = ()=>
{

  const [ModifVoit,changeModif] = useState(false)
  const [PopUpRepare,setPopUpRepare] = useState(false)
  const ModificationVoit = ()=>
  {
    changeModif(true)
  }
  const CloseModif = ()=>
  {
    changeModif(false)
  }
  const ChangePopUpRepare = ()=>
 {
   setPopUpRepare(true)
 }
 const ClosePopUp = ()=>
 {
  setPopUpRepare(false)
  }
    return(<>
        <div className="VoitureBody">
             <Menu/>
            <Header/>
            <Stats/>
            <div className="VoitureContenu">
              <TableVoit/>
              <div className="VoitureDiv2">
                <ApVoit/>
                <Boutton modifvoit={ModificationVoit} repare={ChangePopUpRepare}/>
              </div>
            </div>
            <div className="VoitureDiv3">
                  <div>
                      <ApService/>
                  </div>
                  <div>
                    <ApChauffeur/>
                  </div>
                  <div>
                    <ApEtat/>
                  </div>
              </div>
           <AnimatePresence>
            {
              ModifVoit==true && (<ModifVehicule closeModifVoit={CloseModif}/>)
            }
            {
              PopUpRepare == true &&(<OriginePopUp Fermeture={ClosePopUp}/>)
            }
           </AnimatePresence>
        </div>
    </>)
}
export default Voiture