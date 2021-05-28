import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function About(props) {

    const about = props.authors.authors.map((y) => {
        return (
            <div className="col-12" key={y.id}>
              <RenderAuthor x ={y}/>
            </div>
        );
    })

function RenderAuthor({x}) {
    return (
        <div className="row">               
            <div className="col-2">
                <Media width="100%" className="mt-4" object src={baseUrl + x.image} alt={x.name} />
            </div>
            <div className="col-10">
                <Media body className="mt-4">  
                    <Media heading>{x.name}</Media>
                    <p>{x.designation}</p>
                    <p>{x.abbr}</p>
                    <p>{x.content}</p>
                </Media>
            </div>  
        </div> 
    );
};
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>I sxcs  skcms cks ckmsc skc scs lcs cls clsc slc slc scls clsc lsc slc slc slcs cls clsc slc slc slcs cslc slc slc scls clskc slkc slck scls cslkmc slc scslkmcs lc sclms.</p>
                    <p>Omjxl lsx lsx l lc lmyxc  <em>lcm lcs clc slc sdl</em>, OIn ss cls cc c sdč,cd cd cd,c d,c dcd cd cdc dc dcd cdmc dlmc dlcmd cld cldmc dlmc dlcmd ldc ldc dlc dlc dlcdc dlamsm alms lad sk skncd dknf dfcsd fk k ks cdks dskdc sk sk sks kjs sk sks sk sk sxkns xskn sknx snkx snx sx.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2021</dd>
                                <dt className="col-6">LMclsc lsc slc s</dt>
                                <dd className="col-6">PKxkmsxkl,s Inc.</dd>
                                <dt className="col-6">POmjx ax alx alx</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">23</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">KIOnxoksx sx sxs x xsj ks xksx sxs xksx xsksx 
                                js xjskjx sx sxks xskx skx sxk sxksx kx sxks xskx sxskx s.</p>
                                <footer className="blockquote-footer">IOnhk sk sck,
                                <cite title="Source Title">OIjx axkms xkmjx skxjs xks xsk</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Authors</h2>
                </div>
                <div className="col-12">
                    {about}
                </div>
            </div>
        </div>
    );
}

export default About;