export class News {
  id: number;
  categoryId: number;
  category: string;
  name: string;
  image: string;
  image2: string;
  image3: string;
  information: string;
  likes: number;
  liked: Liked[];
  comments: Comments[];
  cost: number;

  constructor(id: number, categoryId: number, category: string, name: string,
              image: string, image2: string, image3: string, information: string, cost: number) {
    this.id = id;
    this.categoryId = categoryId;
    this.category = category;
    this.name = name;
    this.image = image;
    this.image2 = image2;
    this.image3 = image3;
    this.information = information;
    this.cost = cost
  }
}

export class Liked {
  likedUser: string;
  likeStatus: boolean;

  constructor() {
    this.likedUser = '';
    this.likeStatus = false;
  }
}

export class Comments {
  userName: string;
  userEmail: string;
  commentText: string;
  date: string;

  constructor() {
    this.userName = '';
    this.userEmail = '';
    this.commentText = '';
    this.date = '';
  }
}
