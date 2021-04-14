import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        1568, LKMLk xls xls xlsx<br />
                        POjkmxoksm xoks nx, UNHnkejdjcen<br />
                        OKOK KPOK<br />
                        <i className="fa fa-phone"></i>: +900 5645656 5456456<br />
                        <i className="fa fa-fax"></i>: +900 6546546 654654654<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:zhzth@ztrzhzth.org">zhzth@ztrzhzth.org</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+90012345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:jhghjghj@retgrete.org"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;