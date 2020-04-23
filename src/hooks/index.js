import {useState, useEffect} from 'react'
import {firebase} from "../firebase";
import {collatedTasksExist} from "../helpers";
import moment from "moment";


export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);
    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', 'dsdsda');
        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? unsubscribe=unsubscribe.where('projectID', '==', selectedProject)
            : selectedProject === 'Today'
        ? (unsubscribe = unsubscribe.where('date','==', moment().format('DD/MM/YYYY')))
                : selectedProject === 'Inbox' || selectedProject===0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
                    : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                    ...task.data()
            }));
                setTasks(
                    selectedProject === 'NEXT_7'
                    ? newTasks.filter(
                        task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true
                        )
                        : newTasks.filter(task => task.archived !==true)
                );
                setArchivedTasks(newTasks.filter(task => task.archived === true));
            })
        // noinspection JSValidateTypes
        return () => unsubscribe();
    }, [selectedProject]);
    return {tasks, archivedTasks};
};

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('projects').where('userId', '==', 'dsdsda')

    }, []);
}