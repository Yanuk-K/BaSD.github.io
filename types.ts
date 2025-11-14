
export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

export interface Event {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  location: string;
}
