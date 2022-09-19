import React from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "../components/ButtonLogin";
import Tips from "./Tips";

function Login() {
    return (
        <div>
            <div className="container px-4 px-lg-5 my-5  text-dark">
                <div id="about" class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8">
                            <h2>About</h2>
                            <br />
                            <h4>
                                Con el objetivo de afianzar los temas vistos y
                                de aprender nuevas herramietas a libre elección;
                                este proyecto fue realizado en el cursado del
                                5to. bimestre para la materia Frontend 3 a cargo
                                del profesor Gabriel Morgi de la carrera Cerfied
                                Tech Developer en Digital House.
                            </h4>
                            <br />
                            <p></p>
                            <br />
                            <button class="btn btn-dark ">Get in Touch</button>
                        </div>
                        <div class="col-sm-4">
                            <span class="glyphicon glyphicon-signal logo"></span>
                        </div>
                    </div>
                </div>

                <div class="container-fluid bg-grey">
                    <div class="row">
                        <div class="col-sm-4">
                            <span class="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div class="col-sm-8">
                            <h2>Our Values</h2>
                            <br />
                            <h4>
                                <strong>Comentarios:</strong>lorem ipsum dolor
                                sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </h4>
                            <br />
                            <p>
                                <strong>Más comentarios:</strong>Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <Tips />
            </div>
        </div>
    );
}

export default Login;