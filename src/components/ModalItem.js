import React, { Component } from 'react';
import moment from 'moment';

class ModalItem extends Component {   
    render() {
        const {title, item, date, description, handleCloseModal, modal} = this.props
        const styles = modal ? {display: "block"} : {display: "none"}
        return (
            <div className="modal fade show" id="modalitem" tabIndex="-1" style={styles} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" ref={e => this.el = e}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="title">{title}</h5>
                            <button className="button" className="close" data-dismiss="modal" onClick={handleCloseModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {description}
                        </div>
                        <div className="modal-body">
                            {item}
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