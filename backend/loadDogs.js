const mongoose = require('mongoose');

// Connection URI
const uri = "mongodb://localhost:27017/dogs";// Replace 'mydatabase' with the actual name of your database

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Continue with your code for inserting dogs
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });


const Dog = require('./models/dog.js'); // Assuming the schema is defined in a separate file

// Create an array of dog objects
const dogs = [
  {
    dogId: 1,
    name: 'Max',
    breed: 'Labrador Retriever',
    age: 3,
    characteristic: 'Friendly',
    price: 500,
    isAvailable: true,
    isSold: false,
    description: 'A playful and energetic dog.',
  },
  {
    dogId: 2,
    name: 'Bella',
    breed: 'Golden Retriever',
    age: 2,
    characteristic: 'Loyal',
    price: 600,
    isAvailable: true,
    isSold: false,
    description: 'A loving and intelligent dog.',
  },
  {
    dogId: 3,
    name: 'Charlie',
    breed: 'Poodle',
    age: 4,
    characteristic: 'Smart',
    price: 450,
    isAvailable: true,
    isSold: false,
    description: 'A stylish and agile dog.',
  },
  {
    dogId: 4,
    name: 'Rocky',
    breed: 'German Shepherd',
    age: 5,
    characteristic: 'Protective',
    price: 550,
    isAvailable: true,
    isSold: false,
    description: 'A brave and loyal dog.',
  },
  {
    dogId: 5,
    name: 'Cooper',
    breed: 'Beagle',
    age: 2,
    characteristic: 'Curious',
    price: 400,
    isAvailable: true,
    isSold: false,
    description: 'A friendly and energetic dog.',
  },
  {
    dogId: 6,
    name: 'Luna',
    breed: 'Siberian Husky',
    age: 1,
    characteristic: 'Playful',
    price: 700,
    isAvailable: true,
    isSold: false,
    description: 'A beautiful and active dog.',
  },
  {
    dogId: 7,
    name: 'Rocky',
    breed: 'Boxer',
    age: 3,
    characteristic: 'Confident',
    price: 550,
    isAvailable: true,
    isSold: false,
    description: 'A strong and loyal dog.',
  },
  {
    dogId: 8,
    name: 'Molly',
    breed: 'Cocker Spaniel',
    age: 4,
    characteristic: 'Gentle',
    price: 450,
    isAvailable: true,
    isSold: false,
    description: 'A sweet and affectionate dog.',
  },
  {
    dogId: 9,
    name: 'Leo',
    breed: 'Rottweiler',
    age: 2,
    characteristic: 'Protective',
    price: 600,
    isAvailable: true,
    isSold: false,
    description: 'A strong and fearless dog.',
  },
  {
    dogId: 10,
    name: 'Buddy',
    breed: 'Bulldog',
    age: 3,
    characteristic: 'Laid-back',
    price: 500,
    isAvailable: true,
    isSold: false,
    description: 'A friendly and easygoing dog.',
  },
  {
    dogId: 11,
    name: 'Daisy',
    breed: 'Labrador Retriever',
    age: 2,
    characteristic: 'Energetic',
    price: 600,
    isAvailable: true,
    isSold: false,
    description: 'A playful and active dog.',
  },
  {
    dogId: 12,
    name: 'Bailey',
    breed: 'Golden Retriever',
    age: 4,
    characteristic: 'Gentle',
    price: 550,
    isAvailable: true,
    isSold: false,
    description: 'A sweet and loving dog.',
  },
  {
    dogId: 13,
    name: 'Milo',
    breed: 'Dachshund',
    age: 1,
    characteristic: 'Curious',
    price: 400,
    isAvailable: true,
    isSold: false,
    description: 'A small and lively dog.',
  },
  {
    dogId: 14,
    name: 'Sophie',
    breed: 'Shih Tzu',
    age: 2,
    characteristic: 'Affectionate',
    price: 450,
    isAvailable: true,
    isSold: false,
    description: 'A cute and cuddly dog.',
  },
  {
    dogId: 15,
    name: 'Rocky',
    breed: 'German Shepherd',
    age: 5,
    characteristic: 'Loyal',
    price: 700,
    isAvailable: true,
    isSold: false,
    description: 'A strong and protective dog.',
  },
  {
    dogId: 16,
    name: 'Luna',
    breed: 'Siberian Husky',
    age: 3,
    characteristic: 'Playful',
    price: 650,
    isAvailable: true,
    isSold: false,
    description: 'A beautiful and energetic dog.',
  },
  {
    dogId: 17,
    name: 'Max',
    breed: 'Rottweiler',
    age: 4,
    characteristic: 'Fearless',
    price: 750,
    isAvailable: true,
    isSold: false,
    description: 'A powerful and confident dog.',
  },
  {
    dogId: 18,
    name: 'Coco',
    breed: 'Poodle',
    age: 2,
    characteristic: 'Intelligent',
    price: 550,
    isAvailable: true,
    isSold: false,
    description: 'A smart and graceful dog.',
  },
  {
    dogId: 19,
    name: 'Oscar',
    breed: 'French Bulldog',
    age: 1,
    characteristic: 'Adaptable',
    price: 600,
    isAvailable: true,
    isSold: false,
    description: 'A small and friendly dog.',
  },
  {
    dogId: 20,
    name: 'Rosie',
    breed: 'Cavalier King Charles Spaniel',
    age: 2,
    characteristic: 'Gentle',
    price: 550,
    isAvailable: true,
    isSold: false,
    description: 'A sweet and affectionate dog.',
  },
];

// Insert the dogs into the MongoDB collection
Dog.create(dogs)
  .then(() => {
    console.log('Dogs inserted successfully');
  })
  .catch((error) => {
    console.error('Failed to insert dogs:', error.message);
  });
