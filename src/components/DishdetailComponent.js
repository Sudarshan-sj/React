import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{
	constructor(props){
		super(props);
        console.log(this.props.dish);
		this.state = {
        
        };

	}
	renderDish(dish){
    	if(dish!=null){
          return(
            <div>
          	  <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
    	    </div>
    	  )
    	}
    	else{
    		return(
               <div></div>
    		)
    	}
    }
	renderComments(comment){
    	if(comment!=null){
          return(
            <div>
          	   <p>{comment.comment}</p>
          	   <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>

    	    </div>
    	  )
    	}
    	else{
    		return(
               <div></div>
    		)
    	}
    }
	render(){
	  if(this.props.dish == null){
	  	return(<div></div>)
	  }
	  const comment = this.props.dish.comments.map((comment) =>{
			return(
              <div>
                {this.renderComments(comment)}
              </div>
			);
		});
	  return(
	    <div className="container">
	    <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comment}
          </ul>
        </div>
        </div>
        </div>
	  );
      
	}
   

}

export default DishDetail;