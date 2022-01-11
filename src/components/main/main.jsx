import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const Page = () => {
    // 変数定義
const navigate = useNavigate();
    let title = "Home - 抽選会"
    document.title = `${title}`

    // Button Click Action
    const clickMainPage = () => {
        navigate("/main");
    }
    const clickSettingPage = () => {
        navigate("/setting");
    }
    return (
        <div className="App">
            <header className="App-header">
                <Container fluid className="center">
                    <h2 className="mt-2"><span>{title}</span></h2>
                    <div className="text-center">
                        < Button variant="primary" size="lg" onClick={() => clickMainPage()}>抽選Pageへ</Button>
                        < Button variant="primary" size="lg" onClick={() => clickSettingPage()}>設定Pageへ</Button>
                    </div>
                </Container>
            </header >
        </div >
    )
}

export default Page