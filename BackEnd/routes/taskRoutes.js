import express from 'express'; 
import Task from "../Models/taskmodel.js" 
const router = express.Router();


router.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.put('/tasks/:id', async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status }, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
