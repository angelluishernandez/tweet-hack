require("../config/db.config");

const User = require("../models/user.model");
const Tweet = require("../models/tweet.model");
const Comment = require("../models/comment.model");
const faker = require("faker");

User.deleteMany({})
  .then(() => Tweet.deleteMany({}))
  .then(() => Comment.deleteMany({}))

  .then(() => {
    for (let i = 0; i < 100; i++) {
      const user = new User({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: "123123123",
        avatar: faker.image.avatar(),
        bio: faker.lorem.paragraph(),
        validated: true
      });

      console.log(user.username)
      user.save()
      .then(user => {
        for (let j = 0; j < 100; j++) {
          const tweet = new Tweet({
            body: faker.lorem.paragraph(),
            image: faker.random.image(),
            user: user.id,
            createdAt: faker.date.past()
          });

           tweet.save().then((tweet) => {
            for (let h = 0; h < 10; h++) {
              const comment = new Comment({
                body: faker.lorem.paragraph(),
                tweet: tweet.id,
                user: tweet.user,
                createdAt: faker.date.past()
              });
              comment.save()
                .then()
                .catch(error => console.log(error))
            }
          })
          .catch(error => console.log(error));
        }
      })
      .catch(error => console.log(error));
    }
  }).catch(error => console.log(error));
