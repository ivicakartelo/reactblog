const menudetail = this.props.selectedMenu;
            const comment = menudetail.comments.map((x) => {
              
            return (            
            <div className="col-6 mt-5">
            <Card key={x.id}>
            <CardBody>
              <CardTitle>{x.author}</CardTitle>
              <CardText>{x.comment}</CardText>
              <CardText>{x.date}</CardText>
              <CardText>{x.rating}</CardText>
            </CardBody>
          </Card>
                       
            </div>)});