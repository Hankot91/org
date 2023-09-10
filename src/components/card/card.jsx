import "./card.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Card = (props) => {
	const handleDeleteClick = () => {
		props.deleteCard(props.id, props.teamId);
	};

	return (
		<div className="card-container">
			<AiFillCloseCircle
				onClick={handleDeleteClick}
				className="close-icon"
			/>
			<header
				className="card-header"
				style={{ background: props.bgHeader }}
			>
				<figure className="card-figure">
					<img src={props.pic} alt={props.name} />
				</figure>
			</header>
			<main>
				<article className="card-article">
					<h4>{props.name}</h4>
					<h5>{props.job}</h5>
					{props.like ? (<AiFillHeart className="like-true" onClick={() =>{props.likeCard(props.id, props.teamId)}}/>): (<AiOutlineHeart className="like-false" onClick={() =>{props.likeCard(props.id, props.teamId)}}/>)}
				</article>
			</main>
		</div>
	);
};

export default Card;
