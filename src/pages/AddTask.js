import React, { useState, useEffect } from 'react';
import taskService from '../services/taskService';

const AddTask = ({ onTaskAdded }) => {
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        status: '',
        priority: '',
        dueDate: '',
        assignedUser: { id: '' },
    });

    useEffect(() => {
        // Apply gradient background style
        document.body.style.background = 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)';
        document.body.style.minHeight = '100vh';
        document.body.style.margin = '0';

        return () => {
            // Reset background on unmount
            document.body.style.background = '';
        };
    }, []);

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            await taskService.createTask(newTask);
            setNewTask({ title: '', description: '', status: '', priority: '', dueDate: '', assignedUser: { id: '' } });
            onTaskAdded(); // Notify parent to reload tasks
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const styles = {
        formContainer: {
            width: '90%',
            maxWidth: '500px',
            margin: '50px auto',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        },
        formHeader: {
            textAlign: 'center',
            fontSize: '1.8em',
            color: '#00796b',
            marginBottom: '20px',
        },
        input: {
            width: '90%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1em',
        },
        button: {
            backgroundColor: '#00796b', // Teal for button
            color: '#ffffff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#004d40', // Darker teal on hover
        },
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.formHeader}>Add New Task</h2>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder="Priority"
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="date"
                    placeholder="Due Date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="number"
                    placeholder="Assigned User ID"
                    value={newTask.assignedUser.id}
                    onChange={(e) => setNewTask({ ...newTask, assignedUser: { id: e.target.value } })}
                    style={styles.input}
                    required
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
