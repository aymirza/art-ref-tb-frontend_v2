import React from "react";
import {Nav, Navbar, Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

import ListEmplNarushenie from "./components/exmployee/working/list-empl-narushenie";
import CreateEmplNarushenie from "./components/exmployee/working/create-empl-narushenie";
import UchastkaFilter from "./components/exmployee/filter/uchastka-filter";
import EmplNerushenieFilter from "./components/exmployee/filter/empl_narushenie-filter";
import TsexFilter from "./components/exmployee/filter/tsex_filter";
import PravilaFilter from "./components/exmployee/filter/pravila-filter";
import NarushenieFilter from "./components/exmployee/filter/narushenie-filter";
import CreateNarushenie from "./components/exmployee/working/create-narushenie";
import ExmChart from "./components/exmployee/filter/charts"

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"/list-empl-narushenie"}
                                      className="nav-link">
                                    Техника хавфсизлиги
                                </Link>
                            </Navbar.Brand>
                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"/create-empl-narushenie"}
                                          className="nav-link">
                                        Руйхатга олиш
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/list-empl-narushenie"}
                                          className="nav-link">
                                        Руйхат
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/empl-narushenie-filter"}
                                          className="nav-link">
                                        Руйхат фильтр
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/exmcharts"}
                                          className="nav-link">
                                        Диаграмма
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            Меню
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/create-narushenie">Яратиш</Dropdown.Item>
                                            <Dropdown.Item href="/narushenie-filter"> Койда бузарлик</Dropdown.Item>
                                            <Dropdown.Item href="/pravila-filter">Койда</Dropdown.Item>
                                            <Dropdown.Item href="/tsex-filter">Койда бузарлик булган цех</Dropdown.Item>
                                            <Dropdown.Item href="/uchastka-filter">Булимлар</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={"wrapper"}>
                                <Routes>
                                    <Route element={<CreateEmplNarushenie/>} path="/create-empl-narushenie"
                                           component={CreateEmplNarushenie}/>
                                    <Route element={<ListEmplNarushenie/>} path="/list-empl-narushenie"
                                           component={ListEmplNarushenie}/>
                                    <Route element={<UchastkaFilter/>} path="/uchastka-filter"
                                           component={UchastkaFilter}/>
                                    <Route element={<EmplNerushenieFilter/>} path="/empl-narushenie-filter"
                                           component={EmplNerushenieFilter}/>
                                    <Route element={<TsexFilter/>} path="/tsex-filter"
                                           component={TsexFilter}/>
                                    <Route element={<PravilaFilter/>} path="/pravila-filter"
                                           component={PravilaFilter}/>
                                    <Route element={<CreateNarushenie/>} path="/create-narushenie"
                                           component={CreateNarushenie}/>
                                    <Route element={<NarushenieFilter/>} path="/narushenie-filter"
                                           component={NarushenieFilter}/>
                                    <Route element={<ExmChart/>} path="/exmcharts"
                                           component={ExmChart}/>
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
};

export default App;
