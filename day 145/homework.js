db.createCollection("posts")

db.posts.insertOne({
  title: "First Post",
  author: "Tornike",
  tags: ["mongodb", "database", "backend"],
  likes: 10,
  comments: [
    { user: "Ana", text: "Great post!", likes: 2 },
    { user: "Gio", text: "Very helpful", likes: 1 }
  ]
})

db.posts.insertMany([
  {
    title: "Second Post",
    author: "Nika",
    tags: ["nodejs", "backend"],
    likes: 5
  },
  {
    title: "Third Post",
    author: "Tornike",
    tags: ["frontend", "react"],
    likes: 20
  }
])

db.posts.find()

db.posts.find().pretty()

db.posts.find({ author: "Tornike" })

db.posts.findOne({ title: "Second Post" })

db.posts.find(
  { author: "Tornike" },
  { title: 1, likes: 1, _id: 0 }
)

db.posts.find({ likes: { $gt: 10 } })

db.posts.find({ likes: { $lte: 10 } })

db.posts.find({ author: { $in: ["Tornike", "Nika"] } })

db.posts.find({ tags: "backend" })

db.posts.find({ tags: { $all: ["mongodb", "backend"] } })

db.posts.find({ tags: { $size: 2 } })

db.posts.find({ "comments.user": "tornike" })

db.posts.find({
  comments: {
    $elemMatch: { user: "Ana", likes: { $gte: 2 } }
  }
})

db.posts.find().limit(2)

db.posts.find().sort({ likes: -1 })

db.posts.countDocuments({ author: "Tornike" })
