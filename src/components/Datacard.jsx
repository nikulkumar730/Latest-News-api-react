import React from 'react'
import defaultimage from '../../public/rohit.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Datacard = ({title,description,src,url,publishedAt}) => {
    
  return (
    <>
    <div className="d-flex m-2 ">
    <Card  style={{ width: '22rem' }}>
<Card.Img className=" mx-auto my-auto" variant="top" src={src?src:defaultimage} />
<Card.Body>
<Card.Title>{title}</Card.Title>
<Card.Text>
{description}
</Card.Text>
<Card.Text>{publishedAt}</Card.Text>
<Button variant="primary"><a className="text-white" href={url} target="_blank" rel="noopener noreferrer">Read more</a></Button>
</Card.Body>
</Card>
</div>
    </>
  )
}

export default Datacard
