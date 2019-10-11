import React, { Component } from 'react';
import moment from 'moment';

class ModalItem extends Component {   
    render() {
        const {item, date, description, handleCloseModal} = this.props
        return (
            <div className="modal fade" id="modalitem" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" ref={e => this.el = e}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="title">{item}</h5>
                            <button className="button" className="close" data-dismiss="modal" onClick={handleCloseModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {description}
                        </div>
                        <div className="modal-footer">
                            <p>
                                {moment(date).format('D MMMM YYYY - hh:mm')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalItem;