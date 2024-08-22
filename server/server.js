import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb'

const app = express()

const PORT = process.env.PORT || 6000
const DB_URI = process.env.MONGODB_URI

// Middleware
app.use(express.json());
app.use(cors())

// Connect to MongoDB
let db

MongoClient.connect(DB_URI)
  .then(client => {
    db = client.db('portfolio');
    console.log('Connected to MongoDB Database...');
  })
  .catch(error => console.error(error));



app.get('/projects/all', async (req, res) => {
    try {
        const projects = await db.collection('projects').find().toArray();

        if(projects.length !== 0) {
            res.status(200).json(projects);
        } else {
            res.status(404).send('No Projects Exist');
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/projects/:id', async (req, res) => {
    try {
      // Convert the id parameter to ObjectId
      const id = new ObjectId(req.params.id)
      
      const project = await db.collection('projects').findOne({ _id: id });
  
      if (project) {
        res.json(project);
      } else {
        res.status(404).send('Project not found');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))