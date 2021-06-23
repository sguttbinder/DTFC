import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { delete_project, set_selected_project, sele } from '../../store/project';


const DeleteProjectButton = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [projectId, setProjectId] = useState('');

  // const removeProject = async (e) => {
  //   e.preventDefault();
  //   const data = await dispatch(delete_project(selected_project));
  //   if (data.errors) {
  //     setErrors(data.errors);
  //   }
  // };

  // const selected_project = useSelector((state) => {
  //   if (state.project.selected_project) {
  //     return state.project.selected_project;
  //   } else {
  //     // TODO get first item in list
  //     return 1;
  //   }
  // });

  const updateProjectId = (e) => {
    setProjectId(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  
const handleDelete = (props) => {
  console.log(props)
  // dispatch(delete_project(selected_project));
  // console.log('Are we here?');
  // window.location.reload();
};
  return (
  // NOTE Delete Button
    <div>
      <button
        onClick={() => handleDelete(props)}
      >
        Delete Project
      </button>
    </div>
  )



  //   <form onSubmit={removeProject}>
  //     <div>
  //       {errors.map((error) => (
  //         <div>{error}</div>
  //       ))}
  //     </div>
  //     <div>
  //       <input
  //         // name="title"
  //         // type="text"
  //         // placeholder="Name of your project"
  //         value={projectId}
  //         onChange={updateProjectId}
  //         // onChange={updateProject}
  //       />
  //       {/* <input
  //         name="completed"
  //         type="hidden"
  //         checked={completed}
  //         onChange={setCompleted}
  //       /> */}
  //     </div>
  //     {/* <button className="NavButton" type="submit">
  //       Add Project +
  //     </button> */}
  //     <button className="NavButton" type="submit">
  //       Delete Project
  //     </button>
  //   </form>
  // );
};

export default DeleteProjectButton;
