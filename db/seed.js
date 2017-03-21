const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
  {name: 'Chloe Hwang', email: 'chloe@example.gov', password: '1234'},
  {name: 'Laura Jeong', email: 'laura@example.gov', password: '1234'},
  {name: 'Aly Khaya', email: 'aly@example.gov', password: '1234'}
], user => db.model('users').create(user))


const seedDreams = () => db.Promise.map([
  {title: 'A bad dream',
  content: 'Pictures that can’t be described\nDance in the brilliance\nFor you will never be outnumbered\nA celestial body enters\nHope will show you\nHorizons of magnificence\nBecome what is',
  isPublic: true,
  dreamType: 'Lucid Dream',
  sleepStartHour: 11,
  sleepStartMinute: 59,
  sleepEndHour: 7,
  sleepEndMinute: 59,
  randomizingFactor: 60,
  user_id: 1},
  {title: 'Carnival of Terror',
  content: 'I dreamt I was at a carnival/fair type of place. I was hanging out with friends, I remember anon and anon 2 being with me. The tip of my left index finger was bothering me, one time I looked down and saw something grey sticking out of it. The grey object began to grow out of my finger, it looked like a piece of pencil led for a mechanical pencil. I remember feeling pain as this was happening. After about an inch of it grew out of my finger it fell off, this was followed by a bunch of yellow tinged puss pouring out the exit hole that the grey object created. Pain was still relevant. After about a minute it stopped. I cleaned up my finger and headed toward a line of people. Following the line I ended up in a dance/concert type of event where I saw anon 3 and anon 4. Two people I never see, one I haven’t seen in years. I left the place after someone tried getting me to dance and I wouldn’t.',
  isPublic: false,
  dreamType: 'Nightmare',
  sleepStartHour: 10,
  sleepStartMinute: 49,
  sleepEndHour: 8,
  sleepEndMinute: 8,
  randomizingFactor: 60,
  user_id: 2},
  {title: 'Good Dream',
  content: 'I just realized that this month is the 2-year anniversary of starting school at Fullstack.  I’ve been programming full-time ever since, and knock on wood, haven’t gotten sick of it yet! The reason I haven’t posted in a while is because I have been using every spare brain-watt on new work projects.  Like most dev shops, we are crazy under-staffed.  The plus-side of this is that I’ve gotten to get my hands into so many new projects.  Earlier this spring, we decided to build nodeJS microservices for some 3rd-party integrations, and I got to build one of them! And when our in-house d3 wrapper needed to be expanded to include a new kind of chart, as well as adapted to some new data, guess who got tapped? Needless to say, my emotions have been all over the place.',
  isPublic: false,
  dreamType: 'Recurring Dream',
  sleepStartHour: 11,
  sleepStartMinute: 39,
  sleepEndHour: 6,
  sleepEndMinute: 7,
  randomizingFactor: 60,
  user_id: 3},
  {title: 'Honeybee Spinner',
  content: 'What I didn’t account for is that the HTML5 ‘drag’ event is intended for drag and drop, so the user’s drag is going to cause a duplicate image to actually appear and move separate from the wheel spin (demo pen).  Not going to work. The math on the rotation wasn’t precise, but it worked for Joe’s very basic use case. Once I figured this out, I searched again with more specific search terms and was able to find this JavaScript Rotate Dial example, which spins the wheel with better precision and browser support than my code (demo pen). Deus ex machina, anyone? I’m glad I didn’t find this at first, though.  By drafting the animation myself, I learned a lot about about JS vs. CSS rotation (CSS rotation was WAY easier), standard HTML5 events, plus I discovered some amazing libraries that I may want to use someday (jQuery knob, I’m looking at you).',
  isPublic: true,
  dreamType: 'Lucid Dream',
  sleepStartHour: 9,
  sleepStartMinute: 56,
  sleepEndHour: 7,
  sleepEndMinute: 18,
  randomizingFactor: 60,
  user_id: 4},
  {title: 'Peach Creature',
  content: "The creature I am seeing has peach colored skin, is bald, and it’s back legs fold inward at the knees. It uses them as sort of a catapult which enables it to launch itself long distances in a single bound. It’s face is demonic looking with small eyes, a wide stretching mouth with big jagged looking teeth. The scenery is a glowing red in the night sky, I am in a village with no lights anywhere to be seen. The creature enters the village.. the next thing I remember is seeing a baby held within the creatures short front legs. The creature then continues going to every house in the village and repeating this till every baby in the village has perished, the creature stained blood red when finished. After this, I remember perceiving the village as if I were laying down on the ground outside, on my back staring into the red night sky. A woman walks into my view.",
  isPublic: false,
  dreamType: 'Nightmare',
  sleepStartHour: 12,
  sleepStartMinute: 1,
  sleepEndHour: 8,
  sleepEndMinute: 31,
  randomizingFactor: 60,
  user_id: 5}
], dream => db.model('dreams').create(dream))







db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedDreams)
  .then(dreams => console.log(`Seeded ${dreams.length} dreams OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
