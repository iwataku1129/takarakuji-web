import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import animation from "./images/animation.gif";
import CircularProgress from '@material-ui/core/CircularProgress'

const Page = () => {
    // 変数定義
    let title = localStorage.getItem('takaratitle')
    if (!title) {
        title = "抽選会"
    }
    document.title = `${title}`
    const [ViewSts, setViewSts] = useState("Loading")
    const [TakaraName, setTakaraName] = useState(null)
    const [TakaraList, setTakaraList] = useState(
        [
            { disabled: false, name: "[サンプル]景品①" },
            { disabled: false, name: "[サンプル]景品②" },
        ]
    )
    const { width, height } = useWindowSize()
    const [Timeoutid, setTimeoutid] = useState(null)

    // 初回処理
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('takaralist'));
        if (data) {
            setTakaraList(data)
        }
        setViewSts("Main")
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
        setTimeout(reloadSelect2Page, 3 * 1000);
    }
    const clickReload = () => {
        //window.location.reload(1);
        reloadMainPage()
    }
    const clickRandommode = () => {
        let checkResult = TakaraList    // 抽選実施有無の管理
        let endCheckflg = false
        while (true) {
            // 結果登録用配列作成
            const randomno = Math.floor(Math.random() * TakaraList.length);
            if (TakaraList[randomno].disabled === false && TakaraList[randomno].name) {
                clickTakaraNo(randomno)
                break;
            } else {
                checkResult[randomno].disabled = true
            }
            for (let i = 0; i < checkResult.length; i++) {
                if (checkResult[i].disabled === false) {
                    break;
                } else if (i === checkResult.length - 1) {
                    alert("抽選可能な番号がありません")
                    endCheckflg = true  // whileから抜ける為のflg
                    break;
                }
            }
            if (endCheckflg === true){
                break;  // whileから抜ける
            }
        }
    }

    // ページ遷移関数
    const reloadSelect2Page = async () => {
        setViewSts("selected2")
        let id = setTimeout(reloadMainPage, 60 * 1000)
        setTimeoutid(id)
    }
    const reloadMainPage = async () => {
        clearTimeout(Timeoutid)
        setTakaraName(null)
        setViewSts("Main")
    }

    // ページレイアウト
    if (ViewSts === "Loading") {
        return (
            <div className="App">
                <header className="Main-header">
                    <h4>Now Loading...</h4>
                    <CircularProgress color="secondary" />
                </header>
            </div>
        )
    } else if (ViewSts === "selected1") {
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
                <h2><span role="img" aria-label="cracker">　　　🎉 🎉抽 選 結 果🎉 🎉　　　</span></h2>
                <h3>　　　{TakaraName}　　　</h3>
                <Button variant="button" className="text-muted " onClick={clickReload}>メインページへ</Button>

            </header>
        )
    } else if (ViewSts === "Main") {
        return (
            <div className="App">
                <header className="App-header">
                    <Container fluid className="center">
                        <h2 className="mt-2"><span>{title}</span></h2>
                        <div className="mb-2">
                            < Button variant="primary" size="lg" onClick={() => clickRandommode()}>神様にまかせるボタン</Button>
                        </div>
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