<div align="center">
  <h1 align="center">A Library Management Website with Admin Panel</h3>
</div>


## 🤖 Introduction

Built with Next.js, TypeScript, and Postgres, Library Management System platform featuring a public-facing app and an admin interface.


## ⚙️ Tech Stack

- Next.js
- PostgreSQL
- Drizzle ORM
- Upstash
- ImageKit
- TypeScript
- Resend
- Tailwind CSS

## 🔋 Features

### Features of the University Library Management System Project

👉 **Book Detail Pages**: Availability tracking, book summaries, videos, and suggestions for similar books.  

👉 **Profile Page**: Manage accounts, track borrowed books. 

👉 **Workflows**: Automated welcome emails when users sign up, with follow-ups based on inactivity or activity dates.

👉 **Analytics Dashboard**: Statistics, new users, books, borrow requests, and more.  

👉 **All Users Page**: View and manage users, including approving or revoking access.  

👉 **Account Requests Page**: Admin approval for account requests, with email notifications for user verification.  

👉 **All Books Page**: List and manage all library books with advanced search, pagination, and filters. 

👉 **Book Management Forms**: Add new books and edit existing entries.  

👉 **Book Details Page**: Detailed book information for administrators.  

👉 **Borrow Records Page**: Complete borrow history with pagination and search.  

👉 **Role Management**: Change user roles to invite more admins. 

👉 **Database Management**: Postgres with Neon.  

👉 **Real-time Media Processing**: ImageKit for image and video optimization and transformations. 

👉 **Database ORM**: Drizzle ORM for simplified and efficient database interactions.  

👉 **UI/UX**: Built with TailwindCSS, ShadCN, and other cutting-edge tools.  

👉 **Email Handling**: Resend for automated email communications.  

<h1>Screenshots</h1>

## <h1 align="center">Main Page</h1>
![library-lime-one vercel app_(fhd)](https://github.com/user-attachments/assets/05b03997-95af-49ad-a253-a06a17e14e09)

## <h1 align="center">Book Details</h1>
![library-lime-one vercel app_(fhd) (1)](https://github.com/user-attachments/assets/6e037ee0-503f-4363-b750-524bd5fa637a)

## <h1 align="center">Admin Panel Main Page</h1>
![library-lime-one vercel app_admin(fhd)](https://github.com/user-attachments/assets/7c850056-380b-4928-aa33-57f491b304a8)

## <h1 align="center">Borrow Records</h1> 
![library-lime-one vercel app_(fhd) (3)](https://github.com/user-attachments/assets/43751c42-f373-4da6-ba56-58bdbbcd8f84)

## <h1 align="center">Book Edit Form</h1>
![library-lime-one vercel app_(fhd) (5)](https://github.com/user-attachments/assets/0df3085b-c897-40c4-901e-cf6692b88ce7)

## <h1 align="center">SIGN UP</h1>
![library-lime-one vercel app_(fhd) (4)](https://github.com/user-attachments/assets/a48db49a-f29f-4e8d-8fee-5b7c00529749)

## <h1 align="center">Profile Page</h1>
![localhost_3000_my-profile(fhd)](https://github.com/user-attachments/assets/0fd6e8b2-c7a4-4e9a-aad1-6039692b8ba6)

## <h1 align="center">Mobile UI</h1>
![library-lime-one vercel app_(Pixel 7) (4)](https://github.com/user-attachments/assets/f7ab6cf6-391f-498e-a1c6-22f6bae28daa)



## Quick Start


**Cloning the Repository**

```bash
git clone https://github.com/SkYfy1/library.git
cd library
```

**Installation**

Install the project dependencies using npm/pnpm:

```bash
npm/pnpm i
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_IMGKIT_KEY=
IMGKIT_PRIVATE_KEY=
NEXT_PUBLIC_IMGKIT_ENDPOINT=

NEXT_PUBLIC_API_ENDPOINT=
NEXT_PUBLIC_PROD_API_ENDPOINT=

DATABASE_URL=

UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

AUTH_SECRET=

QSTASH_URL=
QSTASH_TOKEN=

RESEND_TOKEN=
```

Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and Resend credentials. 

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
