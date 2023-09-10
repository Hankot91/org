import "./select.css"

const Select = (props) => { 
    const setValue = (e) => {
        props.setValue(e.target.value)
    }

    return <div className="select-container">
        <label htmlFor="Equipos">Equipos</label>
        <select name="Equipos" id="Equipos" value={props.value} onChange={setValue}>
            <option value="" defaultValue="" disabled hidden >Seleccionar equipo</option>
            {props.teams.map((team, index) => {
                return <option value={team} key={index}>{team}</option>
            })}

        </select>
    </div>
};

export default Select;