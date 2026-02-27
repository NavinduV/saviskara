"use server";
import { Prisma, PrismaClient } from "@prisma/client";
import { writeFile } from 'fs/promises'
import { join } from 'path'

const prisma = new PrismaClient();


export async function GetUsers() {
  // const prisma = new PrismaClient();
  const user = await prisma.user.findMany();
  return user;
}

export async function GetPapers() {
  // const prisma = new PrismaClient();
  const papers = await prisma.paper.findMany({
    include: {
      subject: true,
    },
  });
  return papers;
}

export const SignUpUser = async () => {
  // const prisma = await new PrismaClient();
  let user = prisma.user.create({ data: {} });
};

export const SignInUser = async (email, pass) => {
  // const prisma = await new PrismaClient();
  let user = await prisma.user.findMany({
    where: { email: "admin@admin.com", AND: [{ password: "admin" }] },
  });
  if (user.length > 0) {
    return user[0];
  } else {
    return null;
  }
};

export const GetSubjects = async () => {
  // const prisma = new PrismaClient();
  let subjects = await prisma.subject.findMany();
  return subjects;
};

export const AddSubject = async (sub) => {
  // const prisma = new PrismaClient();
  let subject = await prisma.subject.create({
    data: {
      name: sub,
    },
  });
  return subject;
};

export const UpdateSubject = async (subjectId, updatedData) => {
  try {
    // Update subject by ID with new data
    const updatedSubject = await prisma.subject.update({
      where: { id: parseInt(subjectId) },
      data: updatedData,
    });
    return updatedSubject;
  } catch (error) {
    console.error("Error updating subject:", error);
    throw error;
  }
};


export const DeleteSubject = async (sub) => {
  // const prisma = new PrismaClient();
  const subject = await prisma.subject.delete({
    where: { id: data.id }
  })
}

export const GetLessons = async (data) => {
  // const prisma = new PrismaClient();
  console.log(data);
  if (data) {
    let subject = await prisma.subject.findFirst({where:{name:data[1]}})
    console.log(subject);
    console.log(data);
    let lessons = prisma.lesson.findMany({
      include: { Subject: true },
      where: { grade: parseInt(data[0]), subjectId: subject.id}
    });
    return lessons;

  }
  else {
    let lessons = prisma.lesson.findMany({
      include: { Subject: true },
    });
    return lessons;

  }
};

export const GetLesson = async (sub) => {
  // const prisma = new PrismaClient();
  let lessons = prisma.lesson.findMany({
    include: { Subject: true },
    where: { subjectId: sub },
  });
  return lessons;
};

export const AddLesson = async (data) => {
  console.log(data);
  // const prisma = new PrismaClient();
  let lesson = await prisma.lesson.create({
    data: {
      grade: parseInt(data.grade),
      name: data.lesson_name,
      subjectId: parseInt(data.subject_id),
      link: data.link
    },
  });
  return lesson;
};


export const UpdateLesson = async (lessonId, updatedData) => {
  try {
    // Update lesson by ID with new data
    const updatedLesson = await prisma.lesson.update({
      where: { id: parseInt(lessonId) },
      data: updatedData,
    });
    return updatedLesson;
  } catch (error) {
    console.error("Error updating lesson:", error);
    throw error;
  }
};


export const GetRecordings = async () => {
  let recordings = await prisma.recording.findMany({
    include: { lesson: true }
  })
  return recordings
}

export const AddRecording = async (data) => {
  console.log(data);
  let rec = await prisma.recording.create({
    data: {
      name: data.rec_name,
      lessonId: parseInt(data.subject_id),
      link: data.rec_link
    }
  })
}

export const DeleteRecording = async (data) => {
  const rec = await prisma.recording.delete({
    where: { id: data.id }
  })
  return rec
}

export const DeleteLesson = async (data) => {
  const rec = await prisma.lesson.delete({
    where: { id: data.id }
  })
  return rec
}

// export const AddPaper = async (paper) => {
//   "use server"
//   const file = JSON.parse(paper)
//   console.log(file);
//   const bytes = await file.arrayBuffer()
//   const buffer = Buffer.from(bytes)

//   const path = join('/', 'tmp', file.name)
//   await writeFile(path, buffer)
//   console.log(`open ${path} to see the uploaded file`)
//   // return path

// }

export const AddPaper = async (paper) => {
  console.log(paper);
  const prisma = new PrismaClient();
  let papers = await prisma.paper.create({
    data: {
      year: parseInt(paper.year),
      link: paper.link,
      subjectId: parseInt(paper.sub)
    }
  })
  return papers
}