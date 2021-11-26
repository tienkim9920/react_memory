import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './style.css'

function Intro(props) {

    const navigate = useNavigate();

    const [link, setLink] = useState([
        { id: '1', text: "Dễ", ref: '/easy' },
        { id: '2', text: "Bình Thường", ref: '/normal' },
        { id: '3', text: "Khó", ref: '/hard' },
        { id: '4', text: "Rất Khó", ref: '/difficult' },
        { id: '5', text: "Siêu Khó", ref: '/terrible' },
    ])

    const [active, setActive] = useState({
        id: null,
        text: null,
        ref: null
    })

    const handlerActive = (item) => {
        setActive(item)
    }

    const handlerDirect = () => {
        navigate(active.ref)
    }

    return (
        <div className="layout-intro">
            <h1 className="mt-5 ps-3 pe-3">Tìm Mảnh Ghép Giống Nhau</h1>

            <div className="mt-5">
                <h4>Vui lòng chọn cấp độ chơi</h4>
            </div>
            <div className="group-level">
                <div>
                    {link.map((e) => (
                        <div className={active.id === e.id ? 'level active' : 'level'} key={e.id} onClick={() => handlerActive(e)}>
                            {e.text}
                            {
                                active.id === e.id && (<i className="fa fa-hand-o-left icon-hand">&nbsp;</i>)
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-3 pb-3">
                {
                    active.id && (
                        <div className="d-flex justify-content-end">
                            <div className="btn-play" onClick={handlerDirect}>Chơi Thôi</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Intro;