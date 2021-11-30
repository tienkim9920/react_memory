import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import image from '../asset/Global.jsx'
import './style.css'

function Normal(props) {
// Thời gian
const [time, setTime] = useState(360)

// chiến thắng
const [win, setWin] = useState(false)

// width thời gian
const [width, setWidth] = useState(Math.round(time / 360 * 100))

const [item, setItem] = useState([
    { id: '1', image: image.amor, key: 'amor', status: false },
    { id: '2', image: image.car, key: 'car', status: false },
    { id: '3', image: image.cherries, key: 'cherries', status: false },
    { id: '4', image: image.defense, key: 'defense', status: false },
    { id: '5', image: image.heart, key: 'heart', status: false },
    { id: '6', image: image.knight, key: 'knight', status: false },
    { id: '7', image: image.shield, key: 'shield', status: false },
    { id: '8', image: image.amor, key: 'amor', status: false },
    { id: '9', image: image.car, key: 'car', status: false },
    { id: '10', image: image.cherries, key: 'cherries', status: false },
    { id: '11', image: image.defense, key: 'defense', status: false },
    { id: '12', image: image.heart, key: 'heart', status: false },
    { id: '13', image: image.knight, key: 'knight', status: false },
    { id: '14', image: image.shield, key: 'shield', status: false },
    { id: '15', image: image.diamond, key: 'diamond', status: false },
    { id: '16', image: image.diamond, key: 'diamond', status: false },
    { id: '17', image: image.motor, key: 'motor', status: false },
    { id: '18', image: image.motor, key: 'motor', status: false },
    { id: '19', image: image.like, key: 'like', status: false },
    { id: '20', image: image.like, key: 'like', status: false },
    { id: '21', image: image.telephone, key: 'telephone', status: false },
    { id: '22', image: image.telephone, key: 'telephone', status: false },
    { id: '23', image: image.planet, key: 'planet', status: false },
    { id: '24', image: image.planet, key: 'planet', status: false },
    { id: '25', image: image.compass, key: 'compass', status: false },
    { id: '26', image: image.compass, key: 'compass', status: false },
    { id: '27', image: image.covid19, key: 'covid19', status: false },
    { id: '28', image: image.covid19, key: 'covid19', status: false },
].sort(() => Math.random() - 0.5))

const [itemA, setItemA] = useState({
    id: null,
    key: null
})

const [itemB, setItemB] = useState({
    id: null,
    key: null
})

const handlerClick = (e, index) => {

    // Nếu ô đó đã được mở thì return
    if (e.status){
        return
    }

    // Nếu lượt sau giống với lượt đầu thì return
    if (itemA.id === e.id){
        return
    }

    // Nếu itemA chưa có thì gán cho itemA sau đó return
    if (!itemA.id){
        setItemA(e)
        return
    }

    // Nếu itemB có rồi thì return
    if (itemB.id){
        return
    }
    
    // Nếu itemB chưa có thì gán
    setItemB(e)

    // Sau đó thực hiện so sánh
    setTimeout(() => {
        combine(e)
    }, 900)
}

function combine(e){
    if (e.key === itemA.key){

        // clone
        const newItem = item

        // Nếu bằng thì bật status là true
        newItem.forEach(element => {
            if (element.id === itemA.id || element.id === e.id){
                element.status = true
            }
        })

        // Kiểm tra tất cả có là true hay không
        const checking = newItem.every(element => {
            return element.status
        })

        if (checking){
            setWin(true)
            return
        }

        setItem(newItem)
    }

    resetItem()

}

function replay(){

    resetItem()

    setTime(240)

    setWin(false)

    setWidth(Math.round(time / 360 * 100))

    const newItem = item

    newItem.forEach(element => {
        element.status = false
    })

    setItem(newItem.sort(() => Math.random() - 0.5))
}

function resetItem(){
    setItemA({
        id: null,
        key: null
    })
    setItemB({
        id: null,
        key: null
    })  
}

useEffect(() => {

    const second = setTimeout(() => {
        if (time === 0) {
            setTime(0)
            return
        }

        const cloneTime = time - 1

        setTime(cloneTime)
        setWidth(Math.round(cloneTime / 360 * 100))

    }, 1000)

    return () => clearTimeout(second)

}, [time])

return (
    <div className="layout-normal">
        <div className="group-time">
            <div className="time-back"></div>
            <div className="time-front" style={{ width: `${width}%` }}></div>
            <div className="d-flex justify-content-center">
                <span className="time-out">{Math.floor(time % 3600 / 60)} phút {Math.floor(time % 3600 % 60)} giây</span>
            </div>
        </div>
        <div className="group-piece-normal">
            {
                item && item.map((e, index) => (
                    <div className="box-item" key={e.id} onClick={() => handlerClick(e)}>
                        <div className={itemA.id === e.id || itemB.id === e.id || e.status ? 'card-item-normal item-back active' : 'card-item-normal item-back'}>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%'}}>
                                <img src={e.image} className="image-item-normal" alt="" />
                            </div>
                        </div>
                        <div className={itemA.id === e.id || itemB.id === e.id || e.status  ? 'card-item-normal item-front active' : 'card-item-normal item-front'}>
                            
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="d-flex jusity-content-start">
            <Link to="/" className="btn-play">Trở lại</Link>
        </div>
        {
            win && (
                <div className="bg-win">
                    <div>
                        <h1>Bạn đã chiến thắng</h1>
                        <div className="d-flex justify-content-center">
                            <div className="btn-replay" onClick={replay}>Chơi lại</div>
                        </div>
                    </div>
                </div>
            )
        }
        {
            time === 0 && (
                <div className="bg-win">
                    <div>
                        <h1>Bạn đã thua</h1>
                        <div className="d-flex justify-content-center">
                            <div className="btn-replay" onClick={replay}>Chơi lại</div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
);
}

export default Normal;