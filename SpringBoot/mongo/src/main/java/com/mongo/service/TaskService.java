package com.mongo.service;
import com.mongo.model.Task;
import com.mongo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    //CRUD create read update delete

    public Task addTask(Task task){
        task.setTaskId(UUID.randomUUID().toString().split("-")[0]);
        return this.repository.save(task);
    }

    public List<Task> findAllTasks(){
        return this.repository.findAll();
    }

    public Task getByTaskId(String taskId){
        return this.repository.findById(taskId).get();
    }

    public List<Task> getTaskBySeverity(int severity){
        return this.repository.findBySeverity(severity);
    }

    public List<Task> getTaskByAssignee(String assignee){
        return this.repository.getTaskByAssignee(assignee);
    }

    public Task updateTask(Task taskRequest){
        Task existingTask = this.repository.findById(taskRequest.getTaskId()).get();
        existingTask.setDescription(taskRequest.getDescription());
        existingTask.setSeverity(taskRequest.getSeverity());
        existingTask.setAssignee(taskRequest.getAssignee());
        existingTask.setStoryPoint(taskRequest.getStoryPoint());
        return this.repository.save(existingTask);
    }

    public String deleteTask(String taskId){
        this.repository.deleteById(taskId);
        return  taskId + " Task deleted from the dashboard";
    }
}
