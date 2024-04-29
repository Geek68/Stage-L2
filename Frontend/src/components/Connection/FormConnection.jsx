import './FormConnection.css'
const Connection = ()=>
{
    return(<>
        <div className="ConnectionParent">
            <div className="ConnectionBody">
                <header>
                    <h1 className="ConnectionTitle">CONNECTION</h1>
                </header>
                <form className="ConnectionForm">
                <div className="ConnectionChamp">
                    <i className="mdi mdi-account-convert"/>
                    <input type="text" placeholder="nom_Utilisateur" className="ConnectionInput"/>
                </div>
                  <div className="ConnectionChamp">
                    <i className="mdi mdi-account-convert"/>
                    <input type="text" placeholder="mot_clef" className="ConnectionInput"/>
                </div>
            </form>
            </div>
            
        </div>
    </>)
}
export default Connection