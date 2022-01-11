import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';

const Page = () => {
    // 変数定義
    const [Title, setTitle] = useState(localStorage.getItem('takaratitle'))
    if (!Title) {
        setTitle("抽選会")
    }
    document.title = `抽選会 - 設定`
    const navigate = useNavigate()
    const [TakaraList, setTakaraList] = useState(
        [
            { disabled: false, name: "[サンプル]景品①" },
            { disabled: false, name: "[サンプル]景品②" },
        ]
    )

    // 初回処理
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('takaralist'));
        if (data) {
            setTakaraList(data)
        }
    }, []);

    // Button Click Action
    const removeTakaralist = () => {
        const result = window.confirm('本当によろしいですか？');
        if (result === true) {
            localStorage.removeItem("takaralist");
            localStorage.removeItem("takaratitle");
            window.location.reload();
        }
    }
    const saveTakaralist = () => {
        localStorage.setItem('takaralist', JSON.stringify(TakaraList));
        localStorage.setItem('takaratitle', Title);
        const result = window.confirm('保存成功! MainPageに遷移しますか？');
        if (result === true) {
            navigate("/");
        }
    }
    const clickAddList = async () => {
        setTakaraList([...TakaraList, { disabled: false, name: null }]);
    }
    const handlechangeName = async (e, index) => {
        const copy = TakaraList.concat()
        copy[index].name = e
        setTakaraList(copy)
    }
    const handlechangeFlg = async (e, index) => {
        const copy = TakaraList.concat()
        copy[index].disabled = e
        setTakaraList(copy)
    }

    // ページレイアウト
    return (
        <div className="App">
            <header clasName="App-header">
                <Container fluid className="center">
                    <h2 className="mt-2"><span>設定</span></h2>
                    < Button variant="primary" size="lg" onClick={() => clickAddList()}>++ 追加 ++</Button>
                    < Button variant="primary" size="lg" onClick={() => saveTakaralist()}>保存</Button>
                    < Button variant="primary" size="lg" onClick={() => removeTakaralist()}>全項目削除</Button>
                    <div className="card">
                        <Form>
                            <Form.Group className="mb-3 + ml-2">
                                <Form.Control
                                    type="text"
                                    placeholder="タイトル"
                                    onChange={e => setTitle(e.target.value)}
                                    value={Title}
                                />
                            </Form.Group>
                            {TakaraList.map(function (value, index, array) {
                                return (
                                    <Row>
                                        <Col sm={1}>{index + 1}</Col>
                                        <Col sm={5}>
                                            <Form.Group className="mb-3 + ml-2">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="景品名"
                                                    onChange={e => handlechangeName(e.target.value, index)}
                                                    value={value.name}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={1}>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check
                                                    type="checkbox"
                                                    label="終了"
                                                    onChange={e => handlechangeFlg(e.target.checked, index)}
                                                    checked={value.disabled}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Form>
                    </div>
                    < Button variant="primary" size="lg" onClick={() => clickAddList()}>++ 追加 ++</Button>
                    < Button variant="primary" size="lg" onClick={() => saveTakaralist()}>保存</Button>
                    < Button variant="primary" size="lg" onClick={() => removeTakaralist()}>全項目削除</Button>
                </Container>
            </header>
        </div >
    )
}

export default Page