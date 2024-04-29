import MenuService from "./MenuService/MenuService"
import HeaderService from "./HeaderService/HeaderService"
import TableService from "./TableService/TableService"
import './Service.css'
import ServiceApVoit from "./AproposService/AppCarsService"
import ServiceBoutton from "./ServiceBoutton/ServiceBtn"
import ApService from "./AproposService/AppChauffService"
import DeleteServicePopUp from "./DeleteServicePoup/DeleteServicePoup"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import ModifService from "./ModifServicePopup/ModifService"
const Service = ()=>
{
    const  [showDelete,changeDelete] = useState(false)
    const  [showModif,changeModif] = useState('')
    const HandleShowdelete= ()=>
    {
        changeDelete(true)
    }
    const CloseDelete = ()=>
    {
        changeDelete(false)
    }
    const HandleShowModif = ()=>
    {
          changeModif(true)
    }
      const CloseModif = ()=>
    {
        changeModif(false)
    }
    return(<>
     <div className="ServiceBody">
        <HeaderService/>
        <h1 className="ServiceTitle">
            <div className="ServicePointingRight">
                <i className="mdi mdi-hand-pointing-right"/>
                <i className="mdi mdi-hand-pointing-right"/>    
            </div>
            <span>Les Services Utilisateurs</span>
            <div className="ServicePointingLeft">
                <i className="mdi mdi-hand-pointing-left"/>
                <i className="mdi mdi-hand-pointing-left"/>
            </div>
        </h1>
         <MenuService/>
       <div className="ServiceContenu">
            <div className="ServiceDiv1">
               <TableService/>
            </div>
            <div>
            <ServiceApVoit/>
            <ServiceBoutton supp={HandleShowdelete} modif={HandleShowModif}/>
            </div>
            <div>
                <ApService/>
            </div>
       </div>
        <div>
            <AnimatePresence>
                {
                    showDelete == true && (<DeleteServicePopUp closeSupp={CloseDelete}/>)
                }
                {
                    showModif == true && (<ModifService />)
                }
            </AnimatePresence>
        </div>
     </div>
    </>)
}
export default Service