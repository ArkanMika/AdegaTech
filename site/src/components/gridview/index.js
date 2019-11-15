import React, { Component } from 'react'
import './style.css'
import { FaEdit } from 'react-icons/fa'
import {MdDeleteForever} from 'react-icons/md'
import { Link } from "react-router-dom";

export default class GridView extends Component {

  state = {
    columns: [],
    items: [],
    toolbar: false,
    edit: false,
    select: false,
    delete: false,
    changeStatus: false,
    showStatus: false,
    tooggle: false,
    tooggleAll: false

  }

  componentWillMount(){
    this.setState({
      columns:  (!!this.props.columns) ? this.props.columns : [],
      items:    (!!this.props.items && !!this.props.columns) ? this.props.items : [],
      edit:     (!!this.props.edit) ? this.props.edit : false ,
      select:   (!!this.props.delete || !!this.props.status) ? true : false,
      delete:   (!!this.props.delete) ? this.props.delete : false,
      status:   (!!this.props.status) ? this.props.status : false,
      toolbar:  (!!this.props.edit || !!this.props.select || !!this.props.delete || !!this.props.changeStatus) ? true : false,
      tooggle: this.props.items.map((item, index) => {
        return {checked: false}
      })
    })
  }

  editItem = id =>{

  }

  HandlleTooggleAll = () =>{
    let {tooggle, tooggleAll} = this.state

    tooggleAll = !tooggleAll

    tooggle = tooggle.map((elem, index) => {return {checked: tooggleAll}})

    this.setState({tooggle:tooggle, tooggleAll:tooggleAll})

  }

  HandlleTooggleIndex = (index) =>{
    const {tooggle} = this.state
    tooggle[index].checked = !tooggle[index].checked

    this.setState({tooggle})

    alert(this.state.tooggle[index].checked)
  }

  render() {
    return (
      <div className="container">
          <table>
            <thead>
              <tr>
                {this.state.toolbar &&
                  <th>
                  {this.state.select && <input defaultChecked={this.state.tooggleAll} onChange={() => this.HandlleTooggleAll()} type="checkbox"/>}
                  {this.state.delete && <button><MdDeleteForever/></button>}
                  </th>
                }
                {this.state.status && (<th></th>)}
                {this.state.columns.map(column => ((column !== 'Id') && <th key={column}>{column}</th>))}
              </tr>
            </thead>
            <tbody>
              {
                this.state.items.map((item, index) =>

                    <tr key={index}>
                      {this.state.toolbar && //actions
                        <td>
                          {this.state.select && <input type="checkbox" defaultChecked={this.state.tooggle[index].checked} onChange={() => this.HandlleTooggleIndex(index)}/>}
                          {this.state.edit && <Link to={`/users/${item.Id}`}><button><FaEdit/></button></Link>}
                          {this.state.delete && <button><MdDeleteForever/></button>}
                        </td>
                      }
                      {this.state.status && //status
                        <td>
                        <button></button>
                        </td>
                      }
                      {//items
                        Object.keys(item).map(key => ((key !== 'Id') && <td key={item[key]}>{item[key]}</td>))}
                    </tr>)
              }
            </tbody>
          </table>
      </div >
    )
  }
}
