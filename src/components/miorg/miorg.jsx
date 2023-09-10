import "./miorg.css"

const MiOrg = (props) =>{
    return <section className="org-container">
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.toggleShow}/>
    </section>
};

export default MiOrg;