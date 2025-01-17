import React , { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}){
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
	function RenderComments({comments}){
    	if(comments!=null){
          return(
            <div>
          	   <p>{comments.comment}</p>
          	   <p>-- {comments.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comments.date)))}</p>

    	    </div>
    	  )
    	}
    	else{
    		return(
               <div></div>
    		)
    	}
    }
	const DishDetail = (props)=>{
	  if(props.dish == null){
	  	return(<div></div>)
	  }
	  const comment = props.comments.map((comment) =>{
			return(
              <div>
                <RenderComments comments={comment}/>
              </div>
			);
		});
	  return(
	    <div className="container">
      <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
             <hr />
          </div>
      </div>
	    <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish}/>
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

export default DishDetail;