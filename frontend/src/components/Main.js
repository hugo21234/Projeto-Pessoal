import React, { Component } from "react";
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1
  }

  HandleSubmit = (event) => {
    event.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (!novaTarefa) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      // adiciona nova tarefa
      novasTarefas.push(novaTarefa);
    } else {
      // edita tarefa existente
      novasTarefas[index] = novaTarefa;
    }

    this.setState({
      tarefas: novasTarefas,
      novaTarefa: '',
      index: -1
    });
  }

  HandleInputChange = (event) => {
    this.setState({ novaTarefa: event.target.value });
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index]
    });
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({ tarefas: novasTarefas });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.HandleSubmit} action="#" className="form">
          <input
            onChange={this.HandleInputChange}
            type="text"
            placeholder="Nova tarefa..."
            value={novaTarefa}
          />

          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, idx) => (
            <li key={idx}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, idx)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, idx)}
                />
              </span>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
