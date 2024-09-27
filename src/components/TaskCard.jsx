import '../styles/App.css';
import profilePic from '../images/profile.webp';
import phoneIcon from '../images/phone.webp';
import mailIcon from '../images/mail.webp';
import locationIcon from '../images/location.png';

const TaskCard = () => {
  return (
    <div className="card-container">
      <div className="profile-section">
        <img className="profile-image" src={profilePic} alt="Sheldon Cooper" />
        <h2 className="name">Sheldon Cooper</h2>
        <p className="info">Data de Nascimento: 26 de fevereiro de 1980</p>
        <p className="info">Setor: Física Teórica</p>
        <p className="info">Cargo: Físico Teórico</p>
      </div>

      <div className="icon-section">
        <img className="icon" src={phoneIcon} alt="Phone" />
        <img className="icon" src={mailIcon} alt="Email" />
        <img className="icon" src={locationIcon} alt="Location" />
      </div>

      <div className="task-section">
        <table>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Tarefas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input className="checkbox" type="checkbox" /> Tarefa 1</td>
              <td>Estudar Teoria das Cordas</td>
            </tr>
            <tr>
              <td><input className="checkbox" type="checkbox" /> Tarefa 2</td>
              <td>Preparar aula sobre física quântica</td>
            </tr>
            <tr>
              <td><input className="checkbox" type="checkbox" /> Tarefa 3</td>
              <td>Resolver equações de física teórica</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskCard;