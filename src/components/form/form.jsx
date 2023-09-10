import { useState } from "react";
import { v4 as uuid } from "uuid";
import hexToRgba from "hex-to-rgba";
import "./form.css";
import Input from "../input/input";
import Select from "../selectOptions/select";
import Button from "../button/button";

const Form = (props) => {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [pic, setPic] = useState("");
	const [team, setTeam] = useState("");
	const [title, setTitle] = useState("");
	const [color, setColor] = useState("");

	const submitWorker = (event) => {
		event.preventDefault();
		const data = {
			id: uuid(),
			name: name,
			job: job,
			pic: pic,
			team: team,
			like: false
		};
		props.registerWorker(data);
		setName("");
		setJob("");
		setPic("");
		setTeam("");
	};

	const submitTeam = (event) => {
		event.preventDefault();
		const data = {
			id: uuid(),
			title: title,
			bg: hexToRgba(color, 0.6),
			destaque: color,
			workers: [],
		};
		props.registerTeam(data);
		setTitle("");
		setColor("");
	};

	return (
		<section className="form-container">
			<form onSubmit={submitWorker}>
				<h2>Rellena el formulario para crear el colaborador</h2>
				<Input
					title="Nombre"
					placeholder="Ingresar nombre"
					required={true}
					type={"text"}
					value={name}
					setValue={setName}
				/>
				<Input
					title="Puesto"
					placeholder="Ingresar puesto"
					required={true}
					type={"text"}
					value={job}
					setValue={setJob}
				/>
				<Input
					title="Foto"
					placeholder="Ingresar enlace"
					required={true}
					type={"text"}
					value={pic}
					setValue={setPic}
				/>
				<Select value={team} setValue={setTeam} teams={props.teams} />
				<Button innerText="Crear colaborador" />
			</form>
			<form onSubmit={submitTeam}>
				<h2>Rellena el formulario para crear el equipo</h2>
				<Input
					title="Titulo"
					placeholder="Ingresar titulo"
					required={true}
					type={"text"}
					value={title}
					setValue={setTitle}
				/>
				<Input
					title="Color"
					placeholder="Ingresar color en hexadecimal"
					required={true}
					type={"color"}
					value={color}
					setValue={setColor}
				/>
				<Button innerText="Crear equipo" />
			</form>
		</section>
	);
};

export default Form;
