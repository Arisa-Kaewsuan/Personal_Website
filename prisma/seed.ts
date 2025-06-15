// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // สร้าง Admin User
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  console.log('👤 Created admin:', admin.email)

  // สร้าง Tags
  const reactTag = await prisma.tag.upsert({
    where: { slug: 'react' },
    update: {},
    create: {
      name: 'React',
      slug: 'react',
      color: '#61DAFB',
    },
  })

  const nextjsTag = await prisma.tag.upsert({
    where: { slug: 'nextjs' },
    update: {},
    create: {
      name: 'Next.js',
      slug: 'nextjs',
      color: '#000000',
    },
  })

  const typescriptTag = await prisma.tag.upsert({
    where: { slug: 'typescript' },
    update: {},
    create: {
      name: 'TypeScript',
      slug: 'typescript',
      color: '#3178C6',
    },
  })

  console.log('🏷️ Created tags')

  // สร้าง Sample Post
  const post = await prisma.post.upsert({
    where: { slug: 'welcome-to-my-blog' },
    update: {},
    create: {
      title: 'Welcome to My Blog',
      slug: 'welcome-to-my-blog',
      excerpt: 'This is my first blog post on my new portfolio website.',
      content: `# Welcome to My Blog

This is my first blog post! 🎉

## About This Site

I built this portfolio using:
- Next.js 14 with App Router
- TypeScript for type safety
- Prisma with PostgreSQL
- Tailwind CSS + Shadcn/ui
- Real-time chat features

## What's Coming Next

I'll be writing about:
- Web development tips
- Project tutorials
- Tech insights

Stay tuned for more content! 🚀`,
      published: true,
      publishedAt: new Date(),
      authorId: admin.id,
      metaTitle: 'Welcome to My Blog - Portfolio Website',
      metaDescription: 'My first blog post about building a modern portfolio website with Next.js, TypeScript, and Prisma.',
      tags: {
        connect: [
          { id: reactTag.id },
          { id: nextjsTag.id },
          { id: typescriptTag.id },
        ],
      },
    },
  })

  console.log('📝 Created post:', post.title)

  // สร้าง Sample Project
  const project = await prisma.project.upsert({
    where: { slug: 'portfolio-website' },
    update: {},
    create: {
      title: 'Portfolio Website',
      slug: 'portfolio-website',
      description: 'A modern portfolio website with blog and chat features built with Next.js',
      content: `# Portfolio Website

A full-stack portfolio website with modern features.

## Features

- 📝 **Blog CMS** - Write and manage blog posts
- 🚀 **Project Showcase** - Display portfolio projects  
- 💬 **Interactive Chat** - AI-powered chatbot
- 📱 **LINE Integration** - Push notifications
- 🎨 **Modern Design** - Responsive and accessible
- 🔍 **SEO Optimized** - Meta tags and structured data

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **UI**: Shadcn/ui components
- **Auth**: NextAuth.js
- **Chat**: Real-time messaging
- **Notifications**: LINE Messaging API

## Live Demo

Check out the live website and explore all the features!`,
      published: true,
      featured: true,
      authorId: admin.id,
      demoUrl: 'https://your-portfolio.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      tags: {
        connect: [
          { id: reactTag.id },
          { id: nextjsTag.id },
          { id: typescriptTag.id },
        ],
      },
    },
  })

  console.log('🚀 Created project:', project.title)

  // สร้าง Sample Comment
  const comment = await prisma.comment.create({
    data: {
      content: 'Great post! Looking forward to reading more about your development journey.',
      postId: post.id,
      authorId: admin.id,
    },
  })

  console.log('💬 Created comment')

  // สร้าง Sample Chat Message
  const chatMessage = await prisma.chatMessage.create({
    data: {
      content: 'Hello! Welcome to my portfolio. How can I help you today?',
      isBot: true,
      type: 'TEXT',
    },
  })

  console.log('🤖 Created chat message')

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })