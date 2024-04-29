
import { Routes,Route } from "react-router-dom"
import { useState } from "react"
import MyContext from './components/ListeChausseur/MyContext'
import Menu from "./components/Menu/Menu"
import Header from "./components/HeaderVoiture/header"
import Voiture from "./components/Voitures/voiture"
import Stats from "./components/Statistique/stats"
import ApVoit from "./components/Apropos/ApVoit"
import Boutton from "./components/Boutton/boutton"
import TableVoit from "./components/Table/tableVoit"
import ApChauffeur from "./components/Apropos/ApChauffeur"
import ApService from "./components/Apropos/ApService"
import ApEtat from "./components/Apropos/ApEtat"
import FormVehicule from "./components/FormularVehicule/FormVehicule"
import MenuPrinc from "./components/MenuPrinc/MenuPrinc"
import FormChauf from "./components/FormChauffeur/FormChauffeur"
import FormService from "./components/FormService/FormService"
import MenuChauff from "./components/ListeChausseur/MenuChauff/MenuChauff"
import HeaderChauff from "./components/ListeChausseur/HeaderChauff/HeaderChauf"
import Chauffeur from "./components/ListeChausseur/Chauffeur"
import TableChauf from "./components/ListeChausseur/TableChauf/TableChauff"
import ModifChauff from "./components/ListeChausseur/PopUpModifChauff/PopupModifChauf"
import Service from "./components/ListeService/Service"
import ModifVehicule from "./components/PopUp/PopUpModif.jsx"
import Contextko from "./components/Context"
import FctContex from "./components/FctContext"
import SearchVoit from "./components/SearcVoit"
import Connection from "./components/Connection/FormConnection"
import OriginePopUp from "./components/Reparation/PopUpOrigne/OriginPopUp"
import TableRepare from "./components/ContenuRepare/TableReparation/TableRepare"
import FormReparation from "./components/ContenuRepare/FormReparation/FormRepartion"
import ContenuRepare from "./components/ContenuRepare/ContenuRepare"
import MenuReparation from "./components/ContenuRepare/ContenuReparationMenu/ReparationMenu"
function App() {
const [donnee,setDonnee] = useState([])
const [variable,setVariable] = useState()
const [stats,setStats] = useState()
const [displayed,setDisplayed] = useState([])
  return (
    <>
      <MyContext.Provider value={{donnee,setDonnee}}>
        <Contextko.Provider value={{variable,setVariable}}>
          <FctContex.Provider value={{stats,setStats}}>
            <SearchVoit.Provider value={{displayed,setDisplayed}}>
              <Routes>
              <Route path ="/menu"  element={<Menu/>}/>
              <Route path ="/header" element={<Header/>}/>
              <Route path="/voiture" element={<Voiture/>}/>
              <Route path="/stats"  element={<Stats/>}/>
              <Route path="/apVoit" element={<ApVoit/>}/>
              <Route path="/button" element={<Boutton/>}/>
              <Route path="/tableVoit"element={<TableVoit/>}/>
              <Route path="/apChauffeur" element={<ApChauffeur/>}/>
              <Route path="/apService" element={<ApService/>}/>
              <Route path="/apEtat" element={<ApEtat/>}/>
              <Route path="/formVehicule" element={<FormVehicule/>}/>
              <Route path="/" element={<MenuPrinc/>}/>
              <Route path="/formChauff" element={<FormChauf/>}/>
              <Route path="/formService" element={<FormService/>}/>
              <Route path="/MenuChauff" element={<MenuChauff/>}/>
              <Route path="/HedearChauff" element={<HeaderChauff/>}/>
              <Route path="/chauffeur" element={<Chauffeur/>}/>
              <Route path="/modifChauff" element={<ModifChauff/>}/>
              <Route path = "/tableChauff" element={<TableChauf setDonnee={setDonnee}/>}/>
              <Route path ="/service"  element={<Service/>}/>
              <Route path="/modifvoit" element={<ModifVehicule/>}/>
              <Route path="/OriginePopUp" element={<OriginePopUp/>}/>
              <Route path="/formReparation" element={<FormReparation/>}/>
              <Route path="/tableRepare" element={<TableRepare/>}/>
              <Route path="/menuReparation" element={<MenuReparation/>}/>
              <Route path="/contenuRepare" element={<ContenuRepare/>}/>
              <Route path="/connection" element={<Connection/>}/>
          </Routes>
            </SearchVoit.Provider>
          </FctContex.Provider>
        </Contextko.Provider>
    </MyContext.Provider>
    </>
  )
}

export default App
