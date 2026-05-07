import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, idx) => (
            <li key={idx}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => handleEdit(e, idx)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => handleDelete(e, idx)}
                />
              </span>
            </li>
          ))}
    </ul>
  );
}


Tarefas.propTypes = {
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
