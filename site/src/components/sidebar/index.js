import React, { Component } from 'react'
import "./style.css"
//import Swal from 'sweetalert'
import { Link } from 'react-router-dom' 

export default class Sidebar extends Component {


    render() {

        const page = window.location.pathname
        
        return (
            <div className="menu">
                <nav>
                    <ul>
                        <li className={page === '/' || page === '/dashboard' ? 'active' : ''}><Link to="/dashboard"><p><i className="icons"></i></p><p>Dashboard</p></Link></li>
                        <li className={page === '/settings' ? 'active' : ''}><Link to="/settings"><p><i className="icons"></i></p><p>Configurações</p></Link></li>
                        <li className={page === '/users' ? 'active' : ''}><Link to="/users"><p><i className="icons"></i></p><p>Usuários</p></Link></li>
                        <li className={page === '/reports' ? 'active' : ''}><Link to="/reports"><p><i className="icons"></i></p><p>Relatórios</p></Link></li>
                        <li className={page === '/support' ? 'active' : ''}><Link to="/support"><p><i className="icons"></i></p><p>Atendimento</p></Link></li>
                       
                    </ul>
                </nav>
            </div>
        );
    }
}
