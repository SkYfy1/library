interface User {
  id: string;
  fullName: string;
  email: string;
  univesityId: string;
  universityCard: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  isLoanedBook?: boolean;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
}
