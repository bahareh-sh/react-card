import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
// import backgroundimg from '/img/backgroundimg.png';

const Card = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className="card">
			<div className="card-image">
				<div className="card-date">
					<div className="card-date-day">{props.day}</div>
					<div className="card-date-month">{props.month}</div>
					<div className="card-date-year">{props.year}</div>
				</div>

				<div className="card-content">
					<button className="card-content-btn" onClick={()=>{setIsOpen(!isOpen)}} ><FontAwesomeIcon icon={faEllipsisH} /></button>

					<div className="card-content-wrapper">
						<div className="card-content-author">{props.author}</div>
						<h1 className="card-content-title"><a href="#">{props.title}</a></h1>
						<div className="card-content-text" >{props.text}</div>
					</div>

					<div className={`card-notice ${isOpen===true?'notice-open':''} `}>
						<a href='#'> 
							<FontAwesomeIcon icon={faBookmark} />
						</a>
						<a href='#'>
							<span className="card-notice-number">47</span>
							<FontAwesomeIcon icon={faHeart} />
						</a>
						<a href='#'>
							<span className="card-notice-number">8</span>
							<FontAwesomeIcon icon={faComment} />
						</a>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Card