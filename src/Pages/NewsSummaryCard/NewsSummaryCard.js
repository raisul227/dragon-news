import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, rating, author, details, image_url, total_view } = news;
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                            className='me-2' roundedCircle src={author.img}
                            style={{ width: '60px' }}
                        >

                        </Image>
                        <div>
                            <p className='mb-0 me-2'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 250 ? <span>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>More</Link></span> : <span>{details}</span>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="d-flex justify-content-between justify-content-center">
                    <div>
                        <FaStar className='me-2 text-warning'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;