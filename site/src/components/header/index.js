import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const href = '#'
const manage = true

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <nav>
                    <ul>
                        <li><Link className="current" to='/home'>Página Inicial</Link></li>
                        <li><Link to={href}>Vinhos</Link></li>
                        <li><Link to={href}>Promoções</Link></li>
                        <li><Link to={href}>Contatos</Link></li>
                        {
                            manage &&
                            <li><Link to='/dashboard'>Gerenciar</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}