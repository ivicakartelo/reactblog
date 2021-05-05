import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.content}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.menu} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.author} />
                </div>
            </div>
        
    );
}

export default Home;