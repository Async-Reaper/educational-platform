const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

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

server.get('/courses/get-courses', (req, res) => {
   try {
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

      res.json(db.courses);
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: e.message });
   }
});

// eslint-disable-next-line consistent-return
server.get('/courses/get_course/', (req, res) => {
   try {
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
      res.json(db.course[0]);
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Course not found' });
   }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
// server.use((req, res, next) => {
//    if (!req.headers.authorization) {
//       return res.status(403).json({ message: 'AUTH ERROR' });
//    }
//
//    next();
// });

server.use(router);

// запуск сервера
server.listen(8000, () => {
   console.log('server is running on 8000 port');
});
