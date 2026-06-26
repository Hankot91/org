import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import hexToRgba from "hex-to-rgba";
import "./main.css";
import Form from "../form/form";
import MiOrg from "../miorg/miorg";
import Carousel from "../carousel/carousel";

const initialTeams = [
	{
		id: uuid(),
		title: "Programación",
		bg: "#D9F7E9",
		destaque: "#57C278",
		workers: [],
	},
	{
		id: uuid(),
		title: "Front End",
		bg: "#E8F8FF",
		destaque: "#82CFFA",
		workers: [
			{
				id: uuid(),
				name: "Camilo Vanegas",
				job: "Frontend development",
				pic: "https://github.com/Hankot91.png",
				team: "Front End",
				like: true,
			},
		],
	},
	{
		id: uuid(),
		title: "Data Science",
		bg: "#F0F8E2",
		destaque: "#A6D157",
		workers: [
			{
				id: uuid(),
				name: "Christian Vivaldi",
				job: "Head e instructor",
				pic: `https://ui-avatars.com/api/?name=Christian+Vivaldi&background=A6D157&color=fff&size=200`,
				team: "Data Science",
				like: false,
			},
		],
	},
	{
		id: uuid(),
		title: "Devops",
		bg: "#FDE7E8",
		destaque: "#E06B69",
		workers: [
			{
				id: uuid(),
				name: "Jose Palacios",
				job: "Dev. FullStack",
				pic: `https://ui-avatars.com/api/?name=Jose+Palacios&background=E06B69&color=fff&size=200`,
				team: "Devops",
				like: false,
			},
			{
				id: uuid(),
				name: "Marie Quesada",
				job: "Instructora Devops",
				pic: `https://ui-avatars.com/api/?name=Marie+Quesada&background=E06B69&color=fff&size=200`,
				team: "Devops",
				like: false,
			},
		],
	},
	{
		id: uuid(),
		title: "UX y Diseño",
		bg: "#FAE9F5",
		destaque: "#DB6EBF",
		workers: [],
	},
	{
		id: uuid(),
		title: "Móvil",
		bg: "#FFF5D9",
		destaque: "#FFBA05",
		workers: [],
	},
	{
		id: uuid(),
		title: "Innovación y  Gestión",
		bg: "#FFEEDF",
		destaque: "#FF8A29",
		workers: [],
	},
];

const Main = () => {
	const [showForm, setShow] = useState(false);
	const toggleShow = () => setShow(!showForm);
	const [getTeams, setTeams] = useState(() => {
		const saved = localStorage.getItem("teams");
		return saved ? JSON.parse(saved) : initialTeams;
	});
	const [formData, setFormData] = useState({});

	const getDataWorker = (data) => {
		setFormData(data);
	};

	const getDataTeam = (data) => {
		setTeams([...getTeams, data]);
	};

	const like = (id, teamId) => {
		const teamIndex = getTeams.findIndex((team) => team.id === teamId);

		if (teamIndex !== -1) {
			const updatedTeams = [...getTeams];
			updatedTeams[teamIndex].workers = updatedTeams[
				teamIndex
			].workers.map((worker) => {
				if (worker.id === id) {
					worker.like = !worker.like;
				}
				return worker;
			});
			setTeams(updatedTeams);
		} else {
			return;
		}
	};

	const changeColorCard = (color, id) => {
		setTeams((prevTeams) => {
			return prevTeams.map((team) => {
				if (team.id === id) {
					return {
						...team,
						destaque: color,
						bg: hexToRgba(color, 0.6),
					};
				} else {
					return team;
				}
			});
		});
	};

	const deleteCard = (id, teamId) => {
		const teamIndex = getTeams.findIndex((team) => team.id === teamId);

		if (teamIndex !== -1) {
			const updatedTeams = [...getTeams];
			updatedTeams[teamIndex].workers = updatedTeams[
				teamIndex
			].workers.filter((worker) => worker.id !== id);
			setTeams(updatedTeams);
		} else {
			return;
		}
	};

	useEffect(() => {
		localStorage.setItem("teams", JSON.stringify(getTeams));
	}, [getTeams]);

	useEffect(() => {
		if (formData.team) {
			setTeams((prevTeams) => {
				return prevTeams.map((team) => {
					if (team.title === formData.team) {
						return {
							...team,
							workers: [...team.workers, formData],
						};
					} else {
						return team;
					}
				});
			});
		}
	}, [formData, setTeams]);

	return (
		<main>
			{showForm ? (
				<Form
					registerWorker={getDataWorker}
					registerTeam={getDataTeam}
					teams={getTeams.map((team) => team.title)}
				/>
			) : (
				<></>
			)}
			<MiOrg toggleShow={toggleShow} />
			{getTeams.map((team, index) => {
				return (
					<Carousel
						id={team.id}
						title={team.title}
						key={index}
						bg={team.bg}
						bgMain={team.destaque}
						workers={team.workers}
						changeColorCard={changeColorCard}
						deleteCard={deleteCard}
						like={like}
					/>
				);
			})}
		</main>
	);
};

export default Main;
