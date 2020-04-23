import {useState, useEffect} from 'react'
import {firebase} from "../firebase";
import {collatedTasksExist} from "../helpers";
import moment from "moment";


export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);

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
    }, [selectedProject]);
}