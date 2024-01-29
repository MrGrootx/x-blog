const datas = [
  {
    id: 1,
    title: "Getting Started with Blogging",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
    author: "John Doe",
    date: "2024-01-25",
    image: "https://i.imgur.com/9B5XdPb.jpeg",
    category: "Blogging",
    featured: true,
  },
  {
    id: 2,
    title: "10 Tips for Effective Writing",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
    author: "Jane Smith",
    date: "2024-01-26",
    image: "https://i.imgur.com/ivd5WxK.jpeg",
    category: "Writing Tips",
    featured: false,
  },
  {
    id: 3,
    title: "The Importance of Regular Exercise",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
      author: "Sophia Taylor",
    date: "2024-01-27",
    image: "https://i.imgur.com/DyPnLwE.jpeg",
    category: "Fitness",
    featured: true,
  },
  {
    id: 4,
    title: "Exploring Nature's Wonders",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
    author: "Sophia Taylor",
    date: "2024-01-28",
    image: "https://i.imgur.com/T8bM8y3.jpeg",
    category: "Travel",
    featured: false,
  },
  {
    id: 5,
    title: "Healthy Recipes for a Balanced Diet",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
    author: "Sophia Taylor",
    date: "2024-01-29",
    image: "https://i.imgur.com/kZfuAdH.jpeg",
    category: "Food",
    featured: true,
  },
  // {
  //   id: 6,
  //   title: "Effective Time Management Strategies",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Sophia Taylor",
  //   date: "2024-01-30",
  //   image: "/src/assets/blog/7.webp",
  //   category: "Productivity",
  //   featured: false,
  // },
  // {
  //   id: 7,
  //   title: "DIY Home Decor Ideas",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Taylor",
  //   date: "2024-01-31",
  //   image: "/src/assets/blog/8.webp",
  //   category: "Home and Living",
  //   featured: true,
  // },
  // {
  //   id: 8,
  //   title: "Mindfulness Meditation for Beginners",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Sophia Taylor",
  //   date: "2024-02-01",
  //   image: "/src/assets/blog/8.jpeg",
  //   category: "Wellness",
  //   featured: true,
  // },
  // {
  //   id: 9,
  //   title: "Tech Gadgets That Improve Productivity",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Daniel Miller",
  //   date: "2024-02-02",
  //   image: "/src/assets/blog/9.jpeg",
  //   category: "Technology",
  //   featured: false,
  // },
  // {
  //   id: 10,
  //   title: "The Art of Storytelling",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Olivia Clark",
  //   date: "2024-02-03",
  //   image: "/src/assets/blog/10.webp",
  //   category: "Creative Writing",
  //   featured: true,
  // },



  // {
  //   id: 11,
  //   title: "Budget-Friendly Travel Destinations",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Benjamin Turner",
  //   date: "2024-02-04",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Travel and Adventure",
  //   featured: false,
  // },
  // {
  //   id: 12,
  //   title: "Gardening Tips for Beginners",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Emma Harris",
  //   date: "2024-02-05",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Home and Living",
  //   featured: true,
  // },
  // {
  //   id: 13,
  //   title: "The Impact of Artificial Intelligence on Society",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Christopher Lee",
  //   date: "2024-02-06",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Technology",
  //   featured: false,
  // },
  // {
  //   id: 14,
  //   title: "Delicious and Easy-to-Make Smoothie Recipes",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Sophie Robinson",
  //   date: "2024-02-07",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Food and Cooking",
  //   featured: true,
  // },
  // {
  //   id: 15,
  //   title: "How to Choose the Right Fitness Program",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "William Turner",
  //   date: "2024",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Food and Cooking",
  //   featured: true,
  // },
  // {
  //   id: 16,
  //   title: "Digital Photography Techniques",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Eva Martinez",
  //   date: "2024-02-16",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Photography",
  //   featured: false,
  // },
  // {
  //   id: 17,
  //   title: "Benefits of Daily Journaling",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Victor Anderson",
  //   date: "2024-02-17",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Self-Improvement",
  //   featured: true,
  // },
  // {
  //   id: 18,
  //   title: "Latest Trends in Mobile App Development",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Isabella Carter",
  //   date: "2024-02-18",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Technology",
  //   featured: true,
  // },
  // {
  //   id: 19,
  //   title: "Easy Home Workouts for Busy Professionals",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Alex Turner",
  //   date: "2024-02-19",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Health and Fitness",
  //   featured: false,
  // },
  // {
  //   id: 20,
  //   title: "Creating Engaging Social Media Content",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Sophie Miller",
  //   date: "2024-02-20",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Marketing",
  //   featured: true,
  // },
  // {
  //   id: 21,
  //   title: "Mind-Blowing Science Facts",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Liam Harris",
  //   date: "2024-02-21",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Science",
  //   featured: false,
  // },
  // {
  //   id: 22,
  //   title: "Quick and Healthy Breakfast Ideas",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Ava Wilson",
  //   date: "2024-02-22",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Food and Cooking",
  //   featured: true,
  // },
  // {
  //   id: 23,
  //   title: "Navigating the World of Cryptocurrencies",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Gabriel Rodriguez",
  //   date: "2024-02-23",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Finance",
  //   featured: true,
  // },
  // {
  //   id: 24,
  //   title: "Home Office Setup Tips for Productivity",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Nora Taylor",
  //   date: "2024-02-24",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Productivity",
  //   featured: false,
  // },
  // {
  //   id: 25,
  //   title: "Exploring Uncharted Territories",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Mason Turner",
  //   date: "2024-02-25",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Travel",
  //   featured: true,
  // },
  // {
  //   id: 26,
  //   title: "The Power of Positive Thinking",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Zoe Evans",
  //   date: "2024-02-26",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Self-Improvement",
  //   featured: true,
  // },
  // {
  //   id: 27,
  //   title: "DIY Home Spa Ideas",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Max Robinson",
  //   date: "2024-02-27",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Self-Care",
  //   featured: false,
  // },
  // {
  //   id: 28,
  //   title: "Building a Personal Brand Online",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Aria Martinez",
  //   date: "2024-02-28",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Marketing",
  //   featured: true,
  // },
  // {
  //   id: 29,
  //   title: "The Future of Virtual Reality",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Ethan Turner",
  //   date: "2024-02-29",
  //   image: "src/assets/blog/blog1.webp",
  //   category: "Technology",
  //   featured: false,
  // },
  // {
  //   id: 30,
  //   title: "Impress Your Guests with Gourmet Cooking",
  //   content:
  //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ...",
  //   author: "Clara Rodriguez",
  //   date: "2024-03-01",
  //   image: "/src/assets/blog/blog1.webp",
  //   category: "Food",
  //   featured: true,
  // },
];

export default datas;
