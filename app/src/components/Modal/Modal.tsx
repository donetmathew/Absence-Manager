import React from 'react';
import { absencesType } from '../../model/absences.model';
import "./Modal.scss"

interface props {
    closeModal: React.Dispatch<React.SetStateAction<Boolean>>,
    row: absencesType | null
};

export const Modal: React.FC<props> = ({ closeModal, row }) => {
    console.log(row);

    return (
        <div className='modal'>
            <div className='modal__content'>
                <h2 className='modal__heading'>
                    Absent member details
                </h2>
                <div className='modal__body flex'>
                    <div className="modal__body--left mr-30">
                        <img className="modal__body__profile" src={row?.profile} alt="" />
                    </div>
                    <div className="modal__body--right">
                        <div className="flex justify-content-space-between">
                            <div className="modal__body__member-name mr-20 flex-basis-50">
                                <h4 className="modal__body__member-name--label">Name</h4>
                                <p className="modal__body__member-name--value">{row?.name}</p>
                            </div>
                            <div className="modal__body__member-note  flex-basis-50">
                                <h4 className="modal__body__member-note--label">Member Note</h4>
                                <p className="modal__body__member-note--value">{row?.memberNote || `-`}</p>
                            </div>

                        </div>
                        <div className="flex justify-content-space-between">
                            <div className="modal__body__member-status mr-20  flex-basis-50">
                                <h4 className="modal__body__member-status--label">Status</h4>
                                <p className="modal__body__member-status--value">{row?.status}</p>
                            </div>
                            <div className="modal__body__admitter-note flex-basis-50">
                                <h4 className="modal__body__admitter-note">Admitter Note</h4>
                                <p className="modal__body__admitter-note--value">{row?.admitterNote || `-`}</p>
                            </div>
                        </div>

                        <div className="modal__body__member-type flex-basis-50">
                            <h4 className="modal__body__member-type--label">Type</h4>
                            <p className="modal__body__member-type--value">{row?.type}</p>
                        </div>
                    </div>
                </div>
                <div className='modal__footer'>
                    <button onClick={() => { closeModal(false) }}>Close</button>
                </div>
            </div>
        </div>
    )
}
