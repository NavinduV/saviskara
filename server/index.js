const express = require("express");
const {PrismaClient} = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

require('dotenv').config();


// Middleware
app.use(express.json());

// Routes
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/papers", async (req, res) => {
  try {
    const papers = await prisma.paper.findMany({
      include: { subject: true },
    });
    res.json(papers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await prisma.user.findMany({
      where: { email, password },
    });
    if (users.length > 0) res.json(users[0]);
    else res.status(401).json({ error: "Invalid credentials" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/subjects", async (req, res) => {
  try {
    const subjects = await prisma.subject.findMany();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/subjects", async (req, res) => {
  try {
    const subject = await prisma.subject.create({ data: { name: req.body.name } });
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/lessons", async (req, res) => {
  const { grade, subject } = req.query;
  try {
    const lessons = await prisma.lesson.findMany({
      include: { Subject: true },
      where: grade && subject
        ? { grade: parseInt(grade), subjectId: parseInt(subject) }
        : undefined,
    });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/lessons", async (req, res) => {
  try {
    const lesson = await prisma.lesson.create({
      data: {
        grade: parseInt(req.body.grade),
        name: req.body.lesson_name,
        subjectId: parseInt(req.body.subject_id),
        link: req.body.link,
      },
    });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/lessons/:id", async (req, res) => {
  try {
    const lesson = await prisma.lesson.delete({ where: { id: parseInt(req.params.id) } });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/recordings", async (req, res) => {
  try {
    const recordings = await prisma.recording.findMany({
      include: { lesson: true },
    });
    res.json(recordings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/recordings", async (req, res) => {
  try {
    const recording = await prisma.recording.create({
      data: {
        name: req.body.rec_name,
        lessonId: parseInt(req.body.lesson_id),
        link: req.body.rec_link,
      },
    });
    res.json(recording);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/recordings/:id", async (req, res) => {
  try {
    const recording = await prisma.recording.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(recording);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/papers", async (req, res) => {
  try {
    const paper = await prisma.paper.create({
      data: {
        year: parseInt(req.body.year),
        link: req.body.link,
        subjectId: parseInt(req.body.sub),
      },
    });
    res.json(paper);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
