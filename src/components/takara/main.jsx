import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import animation from "./images/animation.gif";

const Page = () => {
    // 変数定義
    let title = localStorage.getItem('takaratitle')
    if (!title) {
        title = "抽選会"
    }
    document.title = `${title}`
    const [ViewSts, setViewSts] = useState("Main")
    const [TakaraName, setTakaraName] = useState(null)
    const [TakaraList, setTakaraList] = useState(
        [
            { disabled: false, name: "[サンプル]景品①" },
            { disabled: false, name: "[サンプル]景品②" },
        ]
    )
    const { width, height } = useWindowSize()

    // 初回処理
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('takaralist'));
        if (data) {
            setTakaraList(data)
        }
    }, []);

    // Button Click Action
    const clickTakaraNo = async (index) => {
        // 抽選中画面表示
        setViewSts("selected1")

        // フラグ書き換え・localstrage更新
        const copy = TakaraList.concat()
        copy[index].disabled = true
        setTakaraList(copy)
        localStorage.setItem('takaralist', JSON.stringify(copy));

        // 景品取得・表示
        setTakaraName(copy[index].name)
        setTimeout(reloadSelect2Page, 3*1000);
    }
    const clickReload = () => {
        window.location.reload(1);
    }

    // ページ遷移関数
    const reloadSelect2Page = async () => {
        setViewSts("selected2")
        setTimeout(reloadMainPage, 60*1000)
    }
    const reloadMainPage = async () => {
        setTakaraName(null)
        setViewSts("Main")
    }

    // ページレイアウト
    if (ViewSts === "selected1") {
        return (
            <header className="App-header">
                <div className="resizeimage + text-center">
                    <img src={animation} alt="抽選中......" />
                </div>
            </header>
        )
    } else if (ViewSts === "selected2") {
        return (
            <header className="App-header">
                <Confetti
                    width={width}
                    height={height}
                    recycle={true}
                />
                <h2><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎉🎉抽 選 結 果🎉🎉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></h2>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TakaraName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                <Button variant="button" className="text-muted " onClick={clickReload}>前のページへ</Button>

            </header>
        )
    } else if (ViewSts === "Main") {
        return (
            <div className="App">
                <header className="App-header">
                    <Container fluid className="center">
                        <h2 className="mt-2"><span>{title}</span></h2>
                        <div className="text-center">
                            {TakaraList.map(function (value, index, array) {
                                let buttonVariant
                                if (index % 2 === 0) {
                                    buttonVariant = "btn-circle-3d-1"
                                } else {
                                    buttonVariant = "btn-circle-3d-2"
                                }
                                if (value.disabled === false && value.name) {
                                    return (
                                        < button className={buttonVariant} onClick={() => clickTakaraNo(index)}>{('00' + (index + 1)).slice(-3)}</button>
                                    )
                                } else {
                                    return (
                                        < button className="btn-circle-3d-gray" disabled>{('00' + (index + 1)).slice(-3)}</button>
                                    )
                                }
                            })}
                        </div>
                    </Container>
                </header >
            </div >
        )
    }
}

export default Page