import fs from 'fs';
import jsonServer from 'json-server';
import path from 'path';
import { getStorage, ref } from 'firebase/storage';

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
   await new Promise((res) => {
      setTimeout(res, 800);
   });
   next();
});

server.get('/courses/get_courses/programming', (req, res) => {
   try {
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

      res.json(db.course[0]);
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: e.message });
   }
});

server.get('/courses/get_courses/web_design', (req, res) => {
   try {
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

      res.json(db.course[1]);
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: e.message });
   }
});

server.get('/courses/get_courses/secure_information', (req, res) => {
   try {
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

      res.json(db.course[2]);
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: e.message });
   }
});

server.get('/courses/get_courses/3d_modeling', (req, res) => {
   try {
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

      res.json(db.course[3]);
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: e.message });
   }
});

// eslint-disable-next-line consistent-return
server.post('/courses/upload__resource/', (req, res) => {
   try {
      const {
         title, file, creator, resourceName,
      } = req.body;

      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

      const storage = getStorage();
      const mountainsRef = ref(storage, 'mountains.jpg');
      const mountainImagesRef = ref(storage, 'images/mountains.jpg');

      console.log(resourceName);
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Course not found' });
   }
});

server.post('/user/login', (req, res) => {
   try {
      const {
         phone,
      } = req.body;
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
      db.users.map((user) => {
         if (user.phone == phone) {
            res.json({ statusLogin: true });
         } else {
            res.json({ message: 'Пользователя с таким номером телефон не существует' });
         }
      });
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Course not found' });
   }
});

server.post('/user/signup', (req, res) => {
   try {
      const {
         title, file, creator, resourceName,
      } = req.body;
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
      const data = {
         title, file, creator,
      };
      // eslint-disable-next-line array-callback-return
      console.log(resourceName);
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Course not found' });
   }
});

server.use(router);

// запуск сервера
server.listen(4000, () => {
   console.log('server is running on 4000 port');
});
