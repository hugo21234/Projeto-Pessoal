import React, { Component } from "react";
import './Main.css';
import Form from './Form/Index';
import Tarefas from './Tarefas/Index';
export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1
  }

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (Array.isArray(tarefas)) {
      this.setState({ tarefas });
    }
  }

  componentDidUpdate(prevProps, prevState) {
   const { tarefas } = this.state;
   if (tarefas === prevState.tarefas) return;
   localStorage.setItem('tarefas', JSON.stringify(tarefas));
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

        <Form
        handleSubmit={this.HandleSubmit}
        handleChange={this.HandleInputChange}
        novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
