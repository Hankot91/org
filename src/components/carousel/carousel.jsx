import "./carousel.css";
import Card from "../card/card";

const Carousel = (props) => {
	const {id, title, bg, bgMain, workers, changeColorCard, deleteCard, like } = props;
	
	return (
		<>
			{workers.length > 0 ? (
				<section
					className="carousel-container"
					style={{ background: bg }}
				>
					<input
						type="color"
						value={bgMain}
						onChange={(e) =>{changeColorCard(e.target.value, id)}}
					/>
					<h3 style={{ borderBottom: `4px solid ${bgMain}` }}>
						{title}
					</h3>
					<div className="carousel-content">
						{workers.map((worker, index) => (
							<Card
								id={worker.id}	
								job={worker.job}
								name={worker.name}
								pic={worker.pic}
								like={worker.like}
								key={index}
								teamId={id}
								bgHeader={bgMain}
								likeCard={like}
								deleteCard={deleteCard}
							/>
						))}
					</div>
				</section>
			) : (
				<></>
			)}
		</>
	);
};

export default Carousel;
