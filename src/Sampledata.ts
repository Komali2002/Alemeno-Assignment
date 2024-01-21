const courseModel = [{
  id: 1,
  name: 'Introduction to React Native',
  instructor: 'John Doe',
  description: 'Embark on a transformative journey into the world of mobile app development with the "Introduction to React Native" course, led by seasoned instructor John Doe. This 8-month program is designed for individuals eager to master the fundamentals of React Native and build their own mobile applications. The course covers a range of topics, including setting up your development environment, creating your first mobile app, mastering navigation, state and props management, styling, API integration, Redux for state management, and advanced topics such as animations and performance optimization.',
  enrollmentStatus: 'Open',
  thumbnail: "https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png",
  duration: '8 months',
  schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
  location: 'Online',
  prerequisites: [
      'Basic JavaScript knowledge',
      'Familiarity with React',
      'Understanding of HTML and CSS',
      'Experience with version control systems (e.g., Git)',
      'Laptop with required development tools (detailed specifications will be provided)'
  ],
  syllabus: [
      {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.'
      },
      {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.'
      },
      {
          week: 3,
          topic: 'Navigation in React Native',
          content: 'Understanding and implementing navigation in React Native applications.'
      },
      {
          week: 4,
          topic: 'State and Props',
          content: 'Working with state and props to manage data and components.'
      },
      {
          week: 5,
          topic: 'Styling in React Native',
          content: 'Learn how to style your React Native components and screens.'
      },
  ],
  students: [
      {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
      },
      {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
      },
      // Additional enrolled students...
  ]
}
,{
    id: 2,
    name: 'Advanced JavaScript Concepts',
    instructor: 'Jane Smith',
    description: 'Deepen your understanding of JavaScript with advanced concepts and techniques.',
    enrollmentStatus: 'Open',
    thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjtzi7IjHlC6U9ZlTRH8x8tFI8ZywWolFWw&usqp=CAU",
    duration: '10 months',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript knowledge', 'Experience with asynchronous programming'],
    syllabus: [
      {
        week: 1,
        topic: 'Closures and Scope',
        content: 'Understanding closures, lexical scope, and function scope in JavaScript.',
      },
      {
        week: 2,
        topic: 'Asynchronous JavaScript',
        content: 'Exploring asynchronous programming using Promises and async/await.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 104,
        name: 'Diana Johnson',
        email: 'diana@example.com',
      },
      // Additional enrolled students...
    ],
}
  ,{
    id: 3,
    name: 'Data Science Fundamentals',
    instructor: 'Michael Brown',
    description: 'Explore the basics of data science, statistical analysis, and machine learning.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://www.discoverdatascience.org/wp-content/uploads/2023/01/data-science-education.jpg',
    duration: '12 months',
    schedule: 'Fridays, 6:30 PM - 8:30 PM',
    location: 'Online',
    prerequisites: ['Basic understanding of mathematics', 'Experience with Python'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Science',
        content: 'Overview of data science, role of a data scientist, and tools.',
      },
      {
        week: 2,
        topic: 'Statistical Analysis with Python',
        content: 'Using Python for statistical analysis and visualization.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 106,
        name: 'Frank Miller',
        email: 'frank@example.com',
      },
      // Additional enrolled students...
    ],
  },{
    id: 4,
    name: 'Mobile App Design',
    instructor: 'Sarah Johnson',
    description: 'Learn the principles of mobile app design and create visually appealing interfaces.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://buildfire.com/wp-content/uploads/2017/05/app-designer-tools.jpg',
    duration: '8 months',
    schedule: 'Thursdays, 5:00 PM - 7:00 PM',
    location: 'In-person',
    prerequisites: ['Basic knowledge of UI/UX design'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Mobile App Design',
        content: 'Fundamental concepts of designing user interfaces for mobile apps.',
      },
      {
        week: 2,
        topic: 'Wireframing and Prototyping',
        content: 'Creating wireframes and interactive prototypes for mobile apps.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 107,
        name: 'Gary White',
        email: 'gary@example.com',
      },
      {
        id: 108,
        name: 'Holly Turner',
        email: 'holly@example.com',
      },
      // Additional enrolled students...
    ],
  },{
    id: 5,
    name: 'Python Web Development',
    instructor: 'David Wilson',
    description: 'Build web applications using Python, Flask, and SQLAlchemy.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://img-c.udemycdn.com/course/750x422/822444_a6db.jpg',
    duration: '10 months',
    schedule: 'Tuesdays and Fridays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Flask',
        content: 'Setting up a Flask project and building a simple web application.',
      },
      {
        week: 2,
        topic: 'Database Integration with SQLAlchemy',
        content: 'Connecting a Flask app to a relational database using SQLAlchemy.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 109,
        name: 'Ivy Reed',
        email: 'ivy@example.com',
      },
      {
        id: 110,
        name: 'Jack Turner',
        email: 'jack@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 6,
    name: 'Artificial Intelligence',
    instructor: 'Alexandra Garcia',
    description: 'Explore the fundamentals of artificial intelligence and machine learning.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280',
    duration: '12 months',
    schedule: 'Mondays and Wednesdays, 7:30 PM - 9:30 PM',
    location: 'Online',
    prerequisites: ['Basic knowledge of programming and linear algebra'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to AI and ML',
        content: 'Overview of artificial intelligence and machine learning concepts.',
      },
      {
        week: 2,
        topic: 'Supervised Learning',
        content: 'Understanding and implementing supervised learning algorithms.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 111,
        name: 'Kevin Harris',
        email: 'kevin@example.com',
      },
      {
        id: 112,
        name: 'Lily Martinez',
        email: 'lily@example.com',
      },
      // Additional enrolled students...
    ],
  },{
    id:7,
    name: 'Digital Marketing Strategies',
    instructor: 'Olivia Anderson',
    description: 'Develop effective digital marketing strategies for businesses.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'data:image/jpeg;base64,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',
    duration: '10 months',
    schedule: 'Wednesdays and Fridays, 5:30 PM - 7:30 PM',
    location: 'Online',
    prerequisites: ['Basic understanding of marketing principles'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Understanding the digital marketing landscape and key concepts.',
      },
      {
        week: 2,
        topic: 'Search Engine Optimization (SEO)',
        content: 'Optimizing websites for search engines and improving online visibility.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Brown',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Nathan Davis',
        email: 'nathan@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id:8,
    name: 'Blockchain',
    instructor: 'Daniel Carter',
    description: 'Explore the basics of blockchain technology and its applications.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvvEzst9dvjIpXEeNPHrTl3uCGU9Isv0BRA&usqp=CAU',
    duration: '12 months',
    schedule: 'Mondays and Thursdays, 6:30 PM - 8:30 PM',
    location: 'Online',
    prerequisites: ['Basic understanding of computer science'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Blockchain',
        content: 'Overview of blockchain technology, distributed ledgers, and cryptography.',
      },
      {
        week: 2,
        topic: 'Smart Contracts and Decentralized Applications (DApps)',
        content: 'Building and deploying smart contracts on blockchain networks.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 115,
        name: 'Oliver Evans',
        email: 'oliver@example.com',
      },
      {
        id: 116,
        name: 'Penelope Garcia',
        email: 'penelope@example.com',
      },
      // Additional enrolled students...
    ],
  },{
    id:9,
    name: 'Game Development',
    instructor: 'Lucas Robinson',
    description: 'Learn the basics of game development using the Unity game engine.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2023-01/game-development-courses.jpg',
    duration: '8 months',
    schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic programming knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Unity and Game Development',
        content: 'Overview of Unity, game development concepts, and project setup.',
      },
      {
        week: 2,
        topic: 'Creating Your First Game',
        content: 'Building a simple game project and understanding game mechanics.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 117,
        name: 'Quinn Foster',
        email: 'quinn@example.com',
      },
      {
        id: 118,
        name: 'Rachel Turner',
        email: 'rachel@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 10,
    name: 'Creative Writing',
    instructor: 'Sophie Baker',
    description: 'Explore the art of creative writing and develop your storytelling skills.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://sc0.blr1.cdn.digitaloceanspaces.com/article/132300-tkxrgizyoe-1575632949.jpg',
    duration: '6 months',
    schedule: 'Wednesdays, 6:30 PM - 8:30 PM',
    location: 'In-person',
    prerequisites: ['Passion for writing and storytelling'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Creative Writing',
        content: 'Understanding the elements of storytelling and developing your writing voice.',
      },
      {
        week: 2,
        topic: 'Character Development and Plot Structure',
        content: 'Creating compelling characters and structuring engaging plots.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 119,
        name: 'Samuel Baker',
        email: 'samuel@example.com',
      },
      {
        id: 120,
        name: 'Tiffany Moore',
        email: 'tiffany@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 11,
    name: 'Web Development',
    instructor: 'Sophie Johnson',
    description: 'Build modern web applications using the React.js library.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
    duration: '8 months',
    schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic knowledge of HTML, CSS, and JavaScript'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React.js',
        content: 'Getting started with React.js, components, and JSX.',
      },
      {
        week: 2,
        topic: 'State Management with Redux',
        content: 'Managing state in React applications using Redux.',
      },
      // Additional months and topics...
    ],
    students: [
      {
        id: 125,
        name: 'Yasmine Carter',
        email: 'yasmine@example.com',
      },
      {
        id: 126,
        name: 'Zack Turner',
        email: 'zack@example.com',
      },
      // Additional enrolled students...
    ],
  },{
    id: 12,
    name: 'Cybersecurity app',
    instructor: 'Ava Robinson',
    description: 'Learn the fundamentals of cybersecurity and ethical hacking techniques.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg',
    duration: '10 months',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic knowledge of computer networks and security concepts'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Cybersecurity',
        content: 'Overview of cybersecurity, threats, and defense strategies.',
      },
      {
        week: 2,
        topic: 'Ethical Hacking Techniques',
        content: 'Hands-on experience with ethical hacking tools and methodologies.',
      },
      {
        week: 3,
        topic: 'Ethical Hacking Techniques',
        content: 'Hands-on experience with ethical hacking tools and methodologies.',
      }
      // Additional months and topics...
    ],
    students: [
      {
        id: 133,
        name: 'Jackson Adams',
        email: 'jackson@example.com',
      },
      {
        id: 134,
        name: 'Emma Turner',
        email: 'emma@example.com',
      },
      // Additional enrolled students...
    ],
  }
   
  ]

export default courseModel;